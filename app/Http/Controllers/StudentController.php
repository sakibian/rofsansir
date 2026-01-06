<?php

namespace App\Http\Controllers;

use App\Models\StudentEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

            // Check if student has collected email
            $hasCollectedEmail = $user->hasCollectedEmail();

            return Inertia::render('student/dashboard', [
                'hasCollectedEmail' => $hasCollectedEmail,
                'showEmailModal' => ! $hasCollectedEmail,
            ]);
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

        $hasCollectedEmail = $user->hasCollectedEmail();

        return Inertia::render('student/dashboard', [
            'hasCollectedEmail' => $hasCollectedEmail,
            'showEmailModal' => ! $hasCollectedEmail,
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/student/login');
    }
}
