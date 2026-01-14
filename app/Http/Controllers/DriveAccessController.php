<?php

namespace App\Http\Controllers;

use App\Models\AccessLog;
use App\Models\BlockedGmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class DriveAccessController extends Controller
{
    /**
     * Redirect user to Google OAuth for Drive access
     */
    public function accessDrive(Request $request): RedirectResponse
    {
        // Validate that user is authenticated and is a student
        if (! auth()->check() || ! auth()->user()->isStudent()) {
            return redirect('/student/login')->withErrors(['error' => 'Student access required']);
        }

        // Generate secure state token to prevent CSRF
        $stateToken = Str::random(32);
        $stateData = [
            'type' => 'student_drive_access',
            'user_id' => auth()->id(),
            'timestamp' => now()->timestamp,
        ];

        // Cache state data for 10 minutes
        Cache::put("drive_access_state_{$stateToken}", $stateData, 600);

        // Build Google OAuth URL with state parameter
        $client = new \Google\Client;
        $client->setClientId(config('google.client_id'));
        $client->setClientSecret(config('google.client_secret'));
        $client->setRedirectUri(config('google.redirect_uri'));
        $client->setScopes([\Google\Service\Oauth2::USERINFO_EMAIL]);
        $client->setAccessType('offline');
        $client->setState($stateToken);
        $client->setPrompt('select_account');

        $authUrl = $client->createAuthUrl();

        return redirect($authUrl);
    }

    /**
     * Handle OAuth callback from Google
     */
    public function oauthCallback(Request $request): RedirectResponse
    {
        $code = $request->get('code');
        $stateToken = $request->get('state');
        $error = $request->get('error');

        Log::info('OAuth callback received', [
            'has_code' => ! empty($code),
            'has_state' => ! empty($stateToken),
            'error' => $error,
            'all_params' => $request->all(),
        ]);

        // Handle OAuth errors
        if ($error) {
            Log::warning('Drive access OAuth error', ['error' => $error, 'state' => $stateToken]);

            return redirect('/student/dashboard')->withErrors([
                'error' => 'Authentication failed: '.$error,
            ]);
        }

        if (! $code || ! $stateToken) {
            Log::warning('Missing OAuth parameters', [
                'code' => $code,
                'state' => $stateToken,
            ]);

            return redirect('/student/dashboard')->withErrors([
                'error' => 'Invalid authentication request - missing parameters',
            ]);
        }

        // Try to get state data from either cache
        $stateData = Cache::get("drive_access_state_{$stateToken}") ??
                     Cache::get("admin_drive_setup_{$stateToken}");

        if (! $stateData) {
            return redirect('/student/dashboard')->withErrors([
                'error' => 'Session expired. Please try again.',
            ]);
        }

        // Check if this is admin setup or student access
        $isAdminSetup = isset($stateData['type']) && $stateData['type'] === 'admin_setup';

        // Clean up state token
        Cache::forget("drive_access_state_{$stateToken}");
        Cache::forget("admin_drive_setup_{$stateToken}");

        try {
            // Exchange code for access token and get user info
            $client = new \Google\Client;
            $client->setClientId(config('google.client_id'));
            $client->setClientSecret(config('google.client_secret'));
            $client->setRedirectUri(config('google.redirect_uri'));

            $token = $client->fetchAccessTokenWithAuthCode($code);

            if (isset($token['error'])) {
                throw new \Exception('Token exchange failed: '.$token['error']);
            }

            $client->setAccessToken($token);

            // Get user email from OAuth2
            $oauth2 = new \Google\Service\Oauth2($client);
            $userInfo = $oauth2->userinfo->get();
            $gmail = $userInfo->email;

            // Handle differently based on setup type
            if ($isAdminSetup) {
                // This is admin setting up their Google Drive access
                // Store the admin OAuth token for fetching real content
                $this->storeAdminOAuthToken($token);

                Log::info('Admin Google Drive setup completed', [
                    'admin_email' => $gmail,
                    'admin_id' => $stateData['admin_id'],
                ]);

                notify()
                    ->success()
                    ->title('Google Drive Connected')
                    ->message('Admin Google Drive access configured successfully')
                    ->send();

                return redirect('/admin/drive?tab=drive')->with('success', 'Google Drive connected successfully. Students can now access real content.');

            } else {
                // This is student accessing materials
                // Check if Gmail is blocked
                if (BlockedGmail::isBlocked($gmail)) {
                    return redirect('/student/dashboard')->withErrors([
                        'error' => 'Access denied. Your account has been blocked.',
                    ]);
                }

                // Log the access only - don't store student's token
                AccessLog::create([
                    'gmail' => $gmail,
                    'folder_id' => 'all-drive-content', // Since we're showing all content
                    'folder_name' => 'Google Drive Study Materials',
                    'accessed_at' => now(),
                    'ip_address' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                ]);

                Log::info('Drive access logged', [
                    'gmail' => $gmail,
                    'folder_name' => 'Google Drive Study Materials',
                ]);

                // Redirect back to student dashboard to show embedded content
                return redirect('/student/dashboard')->with('success', 'Successfully authenticated. You can now view study materials.');
            }

        } catch (\Exception $e) {
            Log::error('Drive access OAuth callback failed', [
                'error' => $e->getMessage(),
                'state_data' => $stateData,
            ]);

            return redirect('/student/dashboard')->withErrors([
                'error' => 'Authentication failed. Please try again.',
            ]);
        }
    }

    /**
     * Store admin OAuth token for fetching real Google Drive content
     */
    private function storeAdminOAuthToken(array $token): void
    {
        // Store in cache instead of .env file to avoid JSON parsing issues
        \Illuminate\Support\Facades\Cache::put('admin_google_oauth_token', $token, now()->addDays(30));
    }
}
