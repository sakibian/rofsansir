<?php

namespace App\Http\Controllers;

use App\Models\Routine;
use App\Models\StudentEmail;
use App\Models\User;
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
}
