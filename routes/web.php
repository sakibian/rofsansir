<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/courses', [HomeController::class, 'courses'])->name('courses');
Route::get('/resources', [HomeController::class, 'resources'])->name('resources');
Route::get('/tips', [HomeController::class, 'tips'])->name('tips');

// Student Portal Routes
Route::prefix('student')->name('student.')->group(function () {
    Route::get('/login', [StudentController::class, 'showLogin'])->name('login');
    Route::post('/login', [StudentController::class, 'login'])->name('authenticate');
    Route::post('/collect-email', [StudentController::class, 'collectEmail'])->name('collectEmail');

    Route::middleware(['auth'])->group(function () {
        Route::get('/dashboard', [StudentController::class, 'dashboard'])->name('dashboard');
        Route::post('/logout', [StudentController::class, 'logout'])->name('logout');
    });
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
    });

    // Admin CRUD routes (web-based, not API)
    Route::middleware(['auth'])->group(function () {
        Route::post('/admin/students', [App\Http\Controllers\AdminController::class, 'storeStudent']);
        Route::put('/admin/students/{user}', [App\Http\Controllers\AdminController::class, 'updateStudent']);
        Route::delete('/admin/students/{user}', [App\Http\Controllers\AdminController::class, 'destroyStudent']);

        Route::post('/admin/schedules', [App\Http\Controllers\AdminController::class, 'storeSchedule']);
        Route::put('/admin/schedules/{routine}', [App\Http\Controllers\AdminController::class, 'updateSchedule']);
        Route::delete('/admin/schedules/{routine}', [App\Http\Controllers\AdminController::class, 'destroySchedule']);
    });
});

require __DIR__.'/settings.php';
