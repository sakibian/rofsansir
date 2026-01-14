<?php

use App\Http\Controllers\RoutinePaymentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Public API routes for courses page
Route::get('/routines', [RoutinePaymentController::class, 'getRoutines']);
Route::get('/payment-plans', [RoutinePaymentController::class, 'getPaymentPlans']);

// Admin API routes for CRUD operations (protected by auth middleware)
Route::middleware(['auth'])->group(function () {
    // Routine CRUD
    Route::post('/routines', [RoutinePaymentController::class, 'storeRoutine']);
    Route::put('/routines/{routine}', [RoutinePaymentController::class, 'updateRoutine']);
    Route::delete('/routines/{routine}', [RoutinePaymentController::class, 'destroyRoutine']);

    // Payment Plan CRUD
    Route::post('/payment-plans', [RoutinePaymentController::class, 'storePaymentPlan']);
    Route::put('/payment-plans/{plan}', [RoutinePaymentController::class, 'updatePaymentPlan']);
    Route::delete('/payment-plans/{plan}', [RoutinePaymentController::class, 'destroyPaymentPlan']);
});