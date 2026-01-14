<?php

namespace App\Http\Controllers;

use App\Models\Routine;
use App\Models\RoutineEntry;
use App\Models\PaymentPlan;
use App\Models\StudentDriveFolder;
use App\Models\StudentEmail;
use App\Models\AccessLog;
use App\Models\BlockedGmail;
use App\Models\User;
use App\Services\GoogleDriveService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display the admin dashboard with tab-based interface
     */
    public function dashboard(Request $request): \Inertia\Response|RedirectResponse
    {
        $user = auth()->user();

        // Redirect students to their dashboard
        if ($user && $user->isStudent()) {
            return redirect('/student/dashboard');
        }

        // Ensure user is admin
        if (! $user || ! $user->isAdmin()) {
            abort(403, 'Unauthorized access');
        }

        // Get tab parameter
        $tab = $request->get('tab', 'dashboard');

        // Get data based on tab
        $data = ['tab' => $tab];

        if ($tab === 'dashboard') {
            $data['stats'] = [
                'total_students' => User::where('role', User::ROLE_STUDENT)->count(),
                'total_emails_collected' => StudentEmail::count(),
                'recent_logins' => User::where('role', User::ROLE_STUDENT)
                    ->orderBy('updated_at', 'desc')
                    ->limit(5)
                    ->get(['id', 'email', 'created_at', 'updated_at'])
                    ->map(function ($user) {
                        return [
                            'id' => $user->id,
                            'email' => $user->email,
                            'created_at' => $user->created_at,
                            'updated_at' => $user->updated_at,
                            'student_email' => $user->studentEmail,
                        ];
                    }),
            ];
        } elseif ($tab === 'students') {
            $data['students'] = $this->getStudentsData();
        } elseif ($tab === 'emails') {
            $data['emails'] = $this->getEmailsData();
        } elseif ($tab === 'schedules') {
            $data['schedules'] = $this->getSchedulesData();
        }

        return Inertia::render('dashboard', $data);
    }

    /**
     * Get students data for API
     */
    public function getStudents(): JsonResponse
    {
        $this->authorizeAdmin();

        return response()->json([
            'students' => $this->getStudentsData(),
        ]);
    }

    /**
     * Store a new student
     */
    public function storeStudent(Request $request)
    {
        $this->authorizeAdmin();

        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
        ]);

        // Generate a name from email (before @) or use "Student" as fallback
        $name = explode('@', $request->email)[0];
        $name = ucwords(str_replace(['.', '_', '-'], ' ', $name));

        User::create([
            'name' => $name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => User::ROLE_STUDENT,
            'email_verified_at' => now(),
        ]);

        notify()
            ->success()
            ->title('Student Created')
            ->message('Student account created successfully')
            ->send();

        return redirect()->back();
    }

    /**
     * Update an existing student
     */
    public function updateStudent(Request $request, User $user): JsonResponse
    {
        $this->authorizeAdmin();

        if ($user->role !== User::ROLE_STUDENT) {
            abort(403, 'Can only update student accounts');
        }

        $request->validate([
            'email' => 'required|email|unique:users,email,'.$user->id,
            'password' => 'nullable|min:8',
        ]);

        $updateData = ['email' => $request->email];

        if ($request->filled('password')) {
            $updateData['password'] = Hash::make($request->password);
        }

        $user->update($updateData);

        return response()->json([
            'success' => true,
            'student' => $user,
            'message' => 'Student account updated successfully',
        ]);
    }

    /**
     * Delete a student account
     */
    public function destroyStudent(User $user): JsonResponse
    {
        $this->authorizeAdmin();

        if ($user->role !== User::ROLE_STUDENT) {
            abort(403, 'Can only delete student accounts');
        }

        $user->delete();

        return response()->json([
            'success' => true,
            'message' => 'Student account deleted successfully',
        ]);
    }

    /**
     * Get emails data for API
     */
    public function getEmails(): JsonResponse
    {
        $this->authorizeAdmin();

        return response()->json([
            'emails' => $this->getEmailsData(),
        ]);
    }

    /**
     * Export emails as CSV
     */
    public function exportEmails()
    {
        $this->authorizeAdmin();

        $emails = $this->getEmailsData();
        $csv = "Email,Name,Collected At\n";

        foreach ($emails as $email) {
            $csv .= "\"{$email['email']}\",\"{$email['name']}\",\"{$email['collected_at']}\"\n";
        }

        return response($csv)
            ->header('Content-Type', 'text/csv')
            ->header('Content-Disposition', 'attachment; filename="student_emails.csv"');
    }

    /**
     * Get schedules data for API
     */
    public function getSchedules(): JsonResponse
    {
        $this->authorizeAdmin();

        return response()->json([
            'schedules' => $this->getSchedulesData(),
        ]);
    }

    /**
     * Store a new schedule
     */
    public function storeSchedule(Request $request)
    {
        $this->authorizeAdmin();

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'day' => 'required|string',
            'time' => 'required|string',
        ]);

        // Parse the time (assuming format like "10:00 AM")
        $startTime = date('H:i:s', strtotime($request->time));
        // For now, assume 1 hour duration for end time
        $endTime = date('H:i:s', strtotime($request->time.' +1 hour'));

        Routine::create([
            'title' => $request->title,
            'description' => $request->description,
            'day_of_week' => $request->day,
            'start_time' => $startTime,
            'end_time' => $endTime,
        ]);

        notify()
            ->success()
            ->title('Schedule Created')
            ->message('Schedule created successfully')
            ->send();

        return redirect()->back();
    }

    /**
     * Update an existing schedule
     */
    public function updateSchedule(Request $request, Routine $routine)
    {
        $this->authorizeAdmin();

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'day' => 'required|string',
            'time' => 'required|string',
        ]);

        // Parse the time (assuming format like "10:00 AM")
        $startTime = date('H:i:s', strtotime($request->time));
        // For now, assume 1 hour duration for end time
        $endTime = date('H:i:s', strtotime($request->time.' +1 hour'));

        $routine->update([
            'title' => $request->title,
            'description' => $request->description,
            'day_of_week' => $request->day,
            'start_time' => $startTime,
            'end_time' => $endTime,
        ]);

        notify()
            ->success()
            ->title('Schedule Updated')
            ->message('Schedule updated successfully')
            ->send();

        return redirect()->back();
    }

    /**
     * Delete a schedule
     */
    public function destroySchedule(Routine $routine): JsonResponse
    {
        $this->authorizeAdmin();

        $routine->delete();

        return response()->json([
            'success' => true,
            'message' => 'Schedule deleted successfully',
        ]);
    }

    /**
     * Ensure user is admin
     */
    private function authorizeAdmin(): void
    {
        if (! auth()->user() || ! auth()->user()->isAdmin()) {
            abort(403, 'Unauthorized access');
        }
    }

    /**
     * Get formatted students data
     */
    private function getStudentsData(): array
    {
        return User::where('role', User::ROLE_STUDENT)
            ->orderBy('created_at', 'desc')
            ->get(['id', 'email', 'email_verified_at', 'created_at', 'updated_at'])
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'email' => $user->email,
                    'email_verified_at' => $user->email_verified_at,
                    'created_at' => $user->created_at,
                    'updated_at' => $user->updated_at,
                    'student_email' => $user->studentEmail,
                ];
            })
            ->toArray();
    }

    /**
     * Get formatted emails data
     */
    private function getEmailsData(): array
    {
        return StudentEmail::with('user')
            ->orderBy('collected_at', 'desc')
            ->get()
            ->toArray();
    }

    /**
     * Get formatted schedules data
     */
    private function getSchedulesData(): array
    {
        return Routine::orderBy('created_at', 'desc')
            ->get()
            ->map(function ($routine) {
                return [
                    'id' => $routine->id,
                    'title' => $routine->title,
                    'description' => $routine->description,
                    'day' => $routine->day_of_week,
                    'time' => date('g:i A', strtotime($routine->start_time)), // Convert to 12-hour format
                    'created_at' => $routine->created_at,
                    'updated_at' => $routine->updated_at,
                ];
            })
            ->toArray();
    }

    /**
     * Admin dashboard page
     */
    public function adminDashboard(): \Inertia\Response
    {
        $this->authorizeAdmin();

        $stats = [
            'total_students' => User::where('role', User::ROLE_STUDENT)->count(),
            'total_emails_collected' => StudentEmail::count(),
            'recent_logins' => User::where('role', User::ROLE_STUDENT)
                ->orderBy('updated_at', 'desc')
                ->limit(5)
                ->get(['id', 'email', 'created_at', 'updated_at'])
                ->map(function ($user) {
                    return [
                        'id' => $user->id,
                        'email' => $user->email,
                        'created_at' => $user->created_at,
                        'updated_at' => $user->updated_at,
                        'student_email' => $user->studentEmail,
                    ];
                }),
        ];

        return Inertia::render('admin-dashboard', [
            'stats' => $stats,
        ]);
    }

    /**
     * Admin students page
     */
    public function adminStudents(): \Inertia\Response
    {
        $this->authorizeAdmin();

        return Inertia::render('admin-students', [
            'students' => $this->getStudentsData(),
        ]);
    }

    /**
     * Admin emails page
     */
    public function adminEmails(): \Inertia\Response
    {
        $this->authorizeAdmin();

        return Inertia::render('admin-emails', [
            'emails' => $this->getEmailsData(),
        ]);
    }

    /**
     * Admin schedules page
     */
    public function adminSchedules(): \Inertia\Response
    {
        $this->authorizeAdmin();

        return Inertia::render('admin-schedules', [
            'schedules' => $this->getSchedulesData(),
        ]);
    }

    /**
     * Admin drive folders page
     */
    public function adminDrive(): \Inertia\Response
    {
        $this->authorizeAdmin();

        $isDriveConfigured = Cache::has('admin_google_oauth_token');
        $driveStatus = [
            'isConfigured' => $isDriveConfigured,
            'lastConfigured' => $isDriveConfigured ? Cache::get('admin_google_oauth_token')['created'] ?? null : null,
            'status' => $isDriveConfigured ? 'Connected' : 'Not Connected',
            'message' => $isDriveConfigured
                ? 'Google Drive is configured and ready for student access.'
                : 'Google Drive is not configured. Students cannot access drive contents.',
        ];

        return Inertia::render('admin-drive', [
            'accessLogs' => $this->getAccessLogsData(),
            'blockedGmails' => $this->getBlockedGmailsData(),
            'stats' => $this->getDriveStats(),
            'driveStatus' => $driveStatus,
        ]);
    }

    /**
     * Get Google Drive folders data for API
     */
    public function getDriveFolders(): JsonResponse
    {
        $this->authorizeAdmin();

        return response()->json([
            'folders' => $this->getDriveFoldersData(),
        ]);
    }

    /**
     * Grant folder access to a student
     */
    public function grantDriveAccess(Request $request)
    {
        $this->authorizeAdmin();

        $request->validate([
            'student_email' => 'required|email',
            'drive_folder_id' => 'required|string',
            'folder_name' => 'required|string',
        ]);

        // Find student by email
        $student = User::where('role', User::ROLE_STUDENT)
            ->where('email', $request->student_email)
            ->first();

        if (! $student) {
            return response()->json([
                'success' => false,
                'message' => 'Student not found with this email address',
            ], 404);
        }

        // Check if already has access
        $existing = StudentDriveFolder::where('user_id', $student->id)
            ->where('drive_folder_id', $request->drive_folder_id)
            ->first();

        if ($existing) {
            return response()->json([
                'success' => false,
                'message' => 'Student already has access to this folder',
            ], 400);
        }

        // Share folder via Google Drive API
        $driveService = app(GoogleDriveService::class);
        $shared = $driveService->shareFolder($request->drive_folder_id, $request->student_email);

        if (! $shared) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to share folder via Google Drive',
            ], 500);
        }

        // Create database record
        StudentDriveFolder::create([
            'user_id' => $student->id,
            'drive_folder_id' => $request->drive_folder_id,
            'folder_name' => $request->folder_name,
            'student_email' => $request->student_email,
            'granted_at' => now(),
        ]);

        notify()
            ->success()
            ->title('Access Granted')
            ->message("Folder access granted to {$request->student_email}")
            ->send();

        return response()->json([
            'success' => true,
            'message' => 'Folder access granted successfully',
        ]);
    }

    /**
     * Revoke folder access from a student
     */
    public function revokeDriveAccess(Request $request)
    {
        $this->authorizeAdmin();

        $request->validate([
            'folder_id' => 'required|integer',
        ]);

        $folderAssignment = StudentDriveFolder::find($request->folder_id);

        if (! $folderAssignment) {
            return response()->json([
                'success' => false,
                'message' => 'Folder assignment not found',
            ], 404);
        }

        // Revoke access via Google Drive API
        $driveService = app(GoogleDriveService::class);
        $revoked = $driveService->revokeAccess(
            $folderAssignment->drive_folder_id,
            $folderAssignment->student_email
        );

        // Deactivate the assignment regardless of API result
        $folderAssignment->update(['is_active' => false]);

        notify()
            ->success()
            ->title('Access Revoked')
            ->message("Folder access revoked from {$folderAssignment->student_email}")
            ->send();

        return response()->json([
            'success' => true,
            'message' => 'Folder access revoked successfully',
        ]);
    }

    /**
     * Get students with their collected emails
     */
    private function getStudentsWithEmails(): array
    {
        return StudentEmail::with('user')
            ->orderBy('collected_at', 'desc')
            ->get()
            ->map(function ($studentEmail) {
                return [
                    'id' => $studentEmail->user->id ?? null,
                    'email' => $studentEmail->email,
                    'name' => $studentEmail->name,
                    'collected_at' => $studentEmail->collected_at,
                ];
            })
            ->toArray();
    }

    /**
     * Get formatted drive folders data
     */
    private function getDriveFoldersData(): array
    {
        return StudentDriveFolder::with('user')
            ->orderBy('granted_at', 'desc')
            ->get()
            ->map(function ($folder) {
                return [
                    'id' => $folder->id,
                    'student_email' => $folder->student_email,
                    'student_name' => $folder->user->name ?? 'Unknown',
                    'folder_name' => $folder->folder_name,
                    'drive_folder_id' => $folder->drive_folder_id,
                    'is_active' => $folder->is_active,
                    'granted_at' => $folder->granted_at,
                    'last_accessed_at' => $folder->last_accessed_at,
                ];
            })
            ->toArray();
    }

    /**
     * Get access logs data
     */
    private function getAccessLogsData(): array
    {
        return AccessLog::query()
            ->orderBy('accessed_at', 'desc')
            ->limit(100)
            ->get()
            ->map(function ($log) {
                return [
                    'id' => $log->id,
                    'gmail' => $log->gmail,
                    'folder_name' => $log->folder_name,
                    'folder_id' => $log->folder_id,
                    'accessed_at' => $log->accessed_at,
                    'ip_address' => $log->ip_address,
                ];
            })
            ->toArray();
    }

    /**
     * Get blocked Gmails data
     */
    private function getBlockedGmailsData(): array
    {
        return BlockedGmail::with('blocker')
            ->orderBy('blocked_at', 'desc')
            ->get()
            ->map(function ($blocked) {
                return [
                    'id' => $blocked->id,
                    'gmail' => $blocked->gmail,
                    'blocked_at' => $blocked->blocked_at,
                    'blocked_by' => $blocked->blocker?->name ?? 'System',
                    'reason' => $blocked->reason,
                ];
            })
            ->toArray();
    }

    /**
     * Get drive statistics
     */
    private function getDriveStats(): array
    {
        $accessLogStats = AccessLog::getStats();
        $blockedStats = BlockedGmail::getStats();

        return array_merge($accessLogStats, $blockedStats);
    }

    /**
     * Block a Gmail account
     */
    public function blockGmail(Request $request)
    {
        $this->authorizeAdmin();

        $request->validate([
            'gmail' => 'required|email',
            'reason' => 'nullable|string|max:255',
        ]);

        $gmail = $request->gmail;

        // Check if already blocked
        if (\App\Models\BlockedGmail::isBlocked($gmail)) {
            return response()->json([
                'success' => false,
                'message' => 'This Gmail is already blocked',
            ], 400);
        }

        // Block the Gmail
        \App\Models\BlockedGmail::block($gmail, auth()->user()->id, $request->reason);

        notify()
            ->warning()
            ->title('Gmail Blocked')
            ->message("{$gmail} has been blocked from accessing Drive folders")
            ->send();

        return response()->json([
            'success' => true,
            'message' => 'Gmail blocked successfully',
        ]);
    }

    /**
     * Unblock a Gmail account
     */
    public function unblockGmail(Request $request)
    {
        $this->authorizeAdmin();

        $request->validate([
            'gmail' => 'required|email',
        ]);

        $gmail = $request->gmail;

        // Unblock the Gmail
        $unblocked = \App\Models\BlockedGmail::unblock($gmail);

        if (! $unblocked) {
            return response()->json([
                'success' => false,
                'message' => 'This Gmail is not currently blocked',
            ], 400);
        }

        notify()
            ->success()
            ->title('Gmail Unblocked')
            ->message("{$gmail} has been unblocked")
            ->send();

        return response()->json([
            'success' => true,
            'message' => 'Gmail unblocked successfully',
        ]);
    }

    /**
     * Setup Google Drive for admin - authenticate and store admin OAuth token
     */
    public function setupGoogleDrive(Request $request): RedirectResponse
    {
        $this->authorizeAdmin();

        // Check if admin token is already stored
        $adminToken = Cache::get('admin_google_oauth_token');
        if ($adminToken) {
            notify()
                ->info()
                ->title('Already Configured')
                ->message('Google Drive is already configured for admin access')
                ->send();

            return redirect('/admin/drive?tab=drive');
        }

        // Generate secure state token for admin setup
        $stateToken = \Illuminate\Support\Str::random(32);
        $stateData = [
            'type' => 'admin_setup',
            'admin_id' => auth()->id(),
            'timestamp' => now()->timestamp,
        ];

        // Cache state data for 10 minutes
        \Illuminate\Support\Facades\Cache::put("admin_drive_setup_{$stateToken}", $stateData, 600);

        // Build Google OAuth URL for admin with broader scopes
        $client = new \Google\Client;
        $client->setClientId(config('google.client_id'));
        $client->setClientSecret(config('google.client_secret'));
        $client->setRedirectUri(config('google.redirect_uri'));
        $client->setScopes([
            \Google\Service\Oauth2::USERINFO_EMAIL,
            \Google\Service\Drive::DRIVE_READONLY, // Read access to all files user has access to
        ]);
        $client->setAccessType('offline'); // Get refresh token
        $client->setState($stateToken);
        $client->setPrompt('consent'); // Force consent screen to get refresh token

        $authUrl = $client->createAuthUrl();

        return redirect($authUrl);
    }

    /**
     * Store a new routine entry
     */
    public function storeRoutine(Request $request)
    {
        $this->authorizeAdmin();

        $request->validate([
            'class_level' => 'required|string',
            'batch' => 'required|string',
            'day_1' => 'nullable|string',
            'time_1' => 'nullable|string',
            'classroom_1' => 'nullable|string',
            'day_2' => 'nullable|string',
            'time_2' => 'nullable|string',
            'classroom_2' => 'nullable|string',
            'session_year' => 'required|string',
        ]);

        RoutineEntry::create($request->all());

        notify()
            ->success()
            ->title('Routine Created')
            ->message('Routine entry created successfully')
            ->send();

        return redirect()->back();
    }

    /**
     * Update an existing routine entry
     */
    public function updateRoutine(Request $request, RoutineEntry $routine)
    {
        $this->authorizeAdmin();

        $request->validate([
            'class_level' => 'sometimes|string',
            'batch' => 'sometimes|string',
            'day_1' => 'nullable|string',
            'time_1' => 'nullable|string',
            'classroom_1' => 'nullable|string',
            'day_2' => 'nullable|string',
            'time_2' => 'nullable|string',
            'classroom_2' => 'nullable|string',
            'session_year' => 'sometimes|string',
            'is_active' => 'sometimes|boolean',
        ]);

        $routine->update($request->all());

        notify()
            ->success()
            ->title('Routine Updated')
            ->message('Routine entry updated successfully')
            ->send();

        return redirect()->back();
    }

    /**
     * Delete a routine entry
     */
    public function destroyRoutine(RoutineEntry $routine): JsonResponse
    {
        $this->authorizeAdmin();

        $routine->delete();

        return response()->json([
            'success' => true,
            'message' => 'Routine entry deleted successfully',
        ]);
    }

    /**
     * Store a new payment plan
     */
    public function storePaymentPlan(Request $request)
    {
        $this->authorizeAdmin();

        $request->validate([
            'class_level' => 'required|string',
            'monthly_fee' => 'required|numeric',
            'months' => 'required|integer',
            'total_fee' => 'required|numeric',
            'full_payment_discount' => 'nullable|numeric',
            'installment_amount' => 'nullable|numeric',
            'admission_fee' => 'nullable|string',
            'books_fee' => 'nullable|string',
            'additional_fee' => 'nullable|string',
            'features' => 'nullable|string',
            'payment_terms' => 'nullable|string',
        ]);

        PaymentPlan::create($request->all());

        notify()
            ->success()
            ->title('Payment Plan Created')
            ->message('Payment plan created successfully')
            ->send();

        return redirect()->back();
    }

    /**
     * Update an existing payment plan
     */
    public function updatePaymentPlan(Request $request, PaymentPlan $plan)
    {
        $this->authorizeAdmin();

        $request->validate([
            'class_level' => 'sometimes|string',
            'monthly_fee' => 'sometimes|numeric',
            'months' => 'sometimes|integer',
            'total_fee' => 'sometimes|numeric',
            'full_payment_discount' => 'nullable|numeric',
            'installment_amount' => 'nullable|numeric',
            'admission_fee' => 'nullable|string',
            'books_fee' => 'nullable|string',
            'additional_fee' => 'nullable|string',
            'features' => 'nullable|string',
            'payment_terms' => 'nullable|string',
            'is_active' => 'sometimes|boolean',
        ]);

        $plan->update($request->all());

        notify()
            ->success()
            ->title('Payment Plan Updated')
            ->message('Payment plan updated successfully')
            ->send();

        return redirect()->back();
    }

    /**
     * Delete a payment plan
     */
    public function destroyPaymentPlan(PaymentPlan $plan): JsonResponse
    {
        $this->authorizeAdmin();

        $plan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Payment plan deleted successfully',
        ]);
    }
}
