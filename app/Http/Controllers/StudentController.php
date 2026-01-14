<?php

namespace App\Http\Controllers;

use App\Models\StudentEmail;
use App\Services\GoogleDriveService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function showLogin()
    {
        return Inertia::render('auth/student-login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();

            // Check if user is a student
            if (! $user->isStudent()) {
                Auth::logout();

                return back()->withErrors(['general' => 'Access denied. Student account required.']);
            }

            return redirect()->route('student.dashboard');
        }

        return back()->withErrors(['general' => 'Invalid email or password']);
    }

    public function collectEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:student_emails,email',
            'name' => 'nullable|string|max:255',
        ]);

        $user = Auth::user();

        // Check if user is authenticated and is a student
        if (! $user || ! $user->isStudent()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Check if email already collected
        if ($user->hasCollectedEmail()) {
            return response()->json(['error' => 'Email already collected'], 400);
        }

        // Store email collection
        StudentEmail::create([
            'user_id' => $user->id,
            'email' => $request->email,
            'name' => $request->name,
            'collected_at' => now(),
            'last_access_at' => now(),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        return response()->json(['success' => true]);
    }

    public function dashboard()
    {
        $user = Auth::user();

        // Ensure user is authenticated and is a student
        if (! $user || ! $user->isStudent()) {
            return redirect('/student/login');
        }

        // Check if student has authenticated recently (within last 24 hours)
        $hasRecentAccess = \App\Models\AccessLog::where('gmail', $user->studentEmail?->email ?? '')
            ->where('accessed_at', '>=', now()->subDay())
            ->exists();

        // Get Google Drive access status
        $driveData = [
            'id' => 1,
            'name' => 'Google Drive Study Materials',
            'contents' => [], // Will be loaded after OAuth
            'has_access' => $hasRecentAccess,
            'last_authenticated' => $hasRecentAccess ? \App\Models\AccessLog::where('gmail', $user->studentEmail?->email ?? '')
                ->latest('accessed_at')
                ->first()?->accessed_at : null,
        ];

        return Inertia::render('student/dashboard', [
            'driveData' => $driveData,
        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/student/login');
    }

    /**
     * Get all Google Drive contents for authenticated students
     */
    public function getDriveContents(Request $request)
    {
        $user = Auth::user();

        // Ensure user is authenticated and is a student
        if (! $user || ! $user->isStudent()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        try {
            // Check for admin OAuth token
            /** @var array<string, mixed>|null $adminToken */
            $adminToken = Cache::get('admin_google_oauth_token');

            if (! $adminToken) {
                return response()->json([
                    'error' => 'Google Drive not configured. Please contact administrator.',
                    'contents' => [],
                ], 503);
            }

            // Use admin's Google Drive access to get all contents
            $driveService = app(GoogleDriveService::class);
            $driveService->setAccessToken($adminToken);

            $contents = $driveService->getAllDriveContents();

            // Transform to frontend format
            $formattedContents = array_map(function ($item) {
                return [
                    'id' => $item['id'],
                    'name' => $item['name'],
                    'mimeType' => $item['mimeType'],
                    'size' => $item['size'] ?? null,
                    'webViewLink' => $item['webViewLink'] ?? null,
                    'webContentLink' => $item['webContentLink'] ?? null,
                    'thumbnailLink' => $item['thumbnailLink'] ?? null,
                    'modifiedTime' => $item['modifiedTime'],
                    'iconLink' => $item['iconLink'] ?? null,
                    'parents' => $item['parents'],
                    'isFolder' => $item['isFolder'],
                ];
            }, $contents);

            return response()->json([
                'contents' => $formattedContents,
            ]);

        } catch (\Exception $e) {
            Log::error('Failed to load Google Drive contents', [
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'error' => 'Unable to load study materials. Please try again later.',
                'contents' => [],
            ], 500);
        }
    }
}

