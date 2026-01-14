<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/courses', [HomeController::class, 'courses'])->name('courses');
Route::get('/resources', [HomeController::class, 'resources'])->name('resources');
Route::get('/tips', [HomeController::class, 'tips'])->name('tips');

// Hidden admin login route - not linked publicly
Route::get('/admin-login', function () {
    return redirect('/login');
})->name('admin.login');

// Student Portal Routes
Route::prefix('student')->name('student.')->group(function () {
    Route::get('/login', [StudentController::class, 'showLogin'])->name('login');
    Route::post('/login', [StudentController::class, 'login'])->name('authenticate');
    Route::post('/collect-email', [StudentController::class, 'collectEmail'])->name('collectEmail');

    Route::middleware(['auth'])->group(function () {
        Route::get('/dashboard', [StudentController::class, 'dashboard'])->name('dashboard');
        Route::post('/logout', [StudentController::class, 'logout'])->name('logout');
        Route::get('/drive/contents', [StudentController::class, 'getDriveContents'])->name('drive.contents');
    });
});

// Google OAuth Callback Route
Route::get('/google/callback', [App\Http\Controllers\DriveAccessController::class, 'oauthCallback'])->name('google.callback');


// Google Drive Access Routes
Route::middleware(['auth'])->group(function () {
    Route::get('/drive/access', [App\Http\Controllers\DriveAccessController::class, 'accessDrive'])->name('drive.access');
});

Route::middleware(['auth', 'verified'])->group(function () {
    // Unified dashboard - admin functionality through dashboard route
    Route::get('dashboard', [App\Http\Controllers\AdminController::class, 'dashboard'])->name('dashboard');

    // Admin frontend routes
    Route::prefix('admin')->name('admin.')->middleware(['auth'])->group(function () {
        Route::get('/dashboard', [App\Http\Controllers\AdminController::class, 'adminDashboard'])->name('dashboard');
        Route::get('/students', [App\Http\Controllers\AdminController::class, 'adminStudents'])->name('students');
        Route::get('/emails', [App\Http\Controllers\AdminController::class, 'adminEmails'])->name('emails');
        Route::get('/schedules', [App\Http\Controllers\AdminController::class, 'adminSchedules'])->name('schedules');
        Route::get('/drive/setup', [App\Http\Controllers\AdminController::class, 'setupGoogleDrive'])->name('admin.drive.setup');
        Route::get('/drive', [App\Http\Controllers\AdminController::class, 'adminDrive'])->name('drive');
    });

    // Admin CRUD routes (web-based, not API)
    Route::middleware(['auth'])->group(function () {
        Route::post('/admin/students', [App\Http\Controllers\AdminController::class, 'storeStudent']);
        Route::put('/admin/students/{user}', [App\Http\Controllers\AdminController::class, 'updateStudent']);
        Route::delete('/admin/students/{user}', [App\Http\Controllers\AdminController::class, 'destroyStudent']);

        Route::post('/admin/schedules', [App\Http\Controllers\AdminController::class, 'storeSchedule']);
        Route::put('/admin/schedules/{routine}', [App\Http\Controllers\AdminController::class, 'updateSchedule']);
        Route::delete('/admin/schedules/{routine}', [App\Http\Controllers\AdminController::class, 'destroySchedule']);

        // Course Management Routes (Routines and Payment Plans)
        Route::post('/admin/routines', [App\Http\Controllers\AdminController::class, 'storeRoutine']);
        Route::put('/admin/routines/{routine}', [App\Http\Controllers\AdminController::class, 'updateRoutine']);
        Route::delete('/admin/routines/{routine}', [App\Http\Controllers\AdminController::class, 'destroyRoutine']);

        Route::post('/admin/payment-plans', [App\Http\Controllers\AdminController::class, 'storePaymentPlan']);
        Route::put('/admin/payment-plans/{plan}', [App\Http\Controllers\AdminController::class, 'updatePaymentPlan']);
        Route::delete('/admin/payment-plans/{plan}', [App\Http\Controllers\AdminController::class, 'destroyPaymentPlan']);

        // Google Drive management routes
        Route::get('/admin/drive/folders', [App\Http\Controllers\AdminController::class, 'getDriveFolders']);
        Route::post('/admin/drive/grant-access', [App\Http\Controllers\AdminController::class, 'grantDriveAccess']);
        Route::post('/admin/drive/revoke-access', [App\Http\Controllers\AdminController::class, 'revokeDriveAccess']);
        Route::post('/admin/drive/block-gmail', [App\Http\Controllers\AdminController::class, 'blockGmail']);
        Route::post('/admin/drive/unblock-gmail', [App\Http\Controllers\AdminController::class, 'unblockGmail']);
    });
});

require __DIR__ . '/settings.php';

// API-like routes for frontend data fetching
Route::get('/routines', [App\Http\Controllers\RoutinePaymentController::class, 'getRoutines']);
Route::get('/payment-plans', [App\Http\Controllers\RoutinePaymentController::class, 'getPaymentPlans']);
