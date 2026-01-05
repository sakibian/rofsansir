<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/courses', [HomeController::class, 'courses'])->name('courses');
Route::get('/resources', [HomeController::class, 'resources'])->name('resources');
Route::get('/tips', [HomeController::class, 'tips'])->name('tips');

// Student Portal Routes
Route::prefix('student')->name('student.')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('auth/student-login');
    })->name('login');
    
    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('dashboard');
        })->name('dashboard');
    });
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
