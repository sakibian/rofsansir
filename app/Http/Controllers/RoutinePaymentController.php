<?php

namespace App\Http\Controllers;

use App\Models\PaymentPlan;
use App\Models\RoutineEntry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RoutinePaymentController extends Controller
{
    /**
     * Get all routines for a session
     */
    public function getRoutines(Request $request): JsonResponse
    {
        $sessionYear = $request->get('session', '2025-2026');
        
        $routines = RoutineEntry::bySession($sessionYear)
            ->active()
            ->orderBy('class_level')
            ->orderBy('batch')
            ->get();

        // Group by class level
        $grouped = $routines->groupBy('class_level')->map(function ($items) {
            return $items->groupBy('batch')->map(function ($batchItems) {
                return $batchItems->first();
            });
        });

        return response()->json([
            'routines' => $routines,
            'grouped' => $grouped,
            'session_year' => $sessionYear,
        ]);
    }

    /**
     * Get all payment plans
     */
    public function getPaymentPlans(Request $request): JsonResponse
    {
        $classLevel = $request->get('class_level');
        
        $query = PaymentPlan::active();
        
        if ($classLevel) {
            $query->byClass($classLevel);
        }
        
        $plans = $query->orderBy('class_level')->get();

        return response()->json([
            'payment_plans' => $plans,
        ]);
    }

    /**
     * Store a new routine entry
     */
    public function storeRoutine(Request $request): JsonResponse
    {
        $validated = $request->validate([
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

        $routine = RoutineEntry::create($validated);

        return response()->json([
            'success' => true,
            'routine' => $routine,
            'message' => 'Routine entry created successfully',
        ]);
    }

    /**
     * Update a routine entry
     */
    public function updateRoutine(Request $request, RoutineEntry $routine): JsonResponse
    {
        $validated = $request->validate([
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

        $routine->update($validated);

        return response()->json([
            'success' => true,
            'routine' => $routine,
            'message' => 'Routine entry updated successfully',
        ]);
    }

    /**
     * Delete a routine entry
     */
    public function destroyRoutine(RoutineEntry $routine): JsonResponse
    {
        $routine->delete();

        return response()->json([
            'success' => true,
            'message' => 'Routine entry deleted successfully',
        ]);
    }

    /**
     * Store a new payment plan
     */
    public function storePaymentPlan(Request $request): JsonResponse
    {
        $validated = $request->validate([
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

        $plan = PaymentPlan::create($validated);

        return response()->json([
            'success' => true,
            'payment_plan' => $plan,
            'message' => 'Payment plan created successfully',
        ]);
    }

    /**
     * Update a payment plan
     */
    public function updatePaymentPlan(Request $request, PaymentPlan $plan): JsonResponse
    {
        $validated = $request->validate([
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

        $plan->update($validated);

        return response()->json([
            'success' => true,
            'payment_plan' => $plan,
            'message' => 'Payment plan updated successfully',
        ]);
    }

    /**
     * Delete a payment plan
     */
    public function destroyPaymentPlan(PaymentPlan $plan): JsonResponse
    {
        $plan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Payment plan deleted successfully',
        ]);
    }
}
