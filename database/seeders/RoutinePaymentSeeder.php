<?php

namespace Database\Seeders;

use App\Models\PaymentPlan;
use App\Models\RoutineEntry;
use Illuminate\Database\Seeder;

class RoutinePaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing data
        RoutineEntry::truncate();
        PaymentPlan::truncate();

        // Seed Routine Entries for 2025-2026 Session
        $this->seedRoutines();

        // Seed Payment Plans
        $this->seedPaymentPlans();
    }

    private function seedRoutines(): void
    {
        $routines = [
            // Class-8
            ['class_level' => 'Class-8', 'batch' => 'Batch-1', 'day_1' => '', 'time_1' => '', 'classroom_1' => '', 'day_2' => '', 'time_2' => '', 'classroom_2' => '', 'session_year' => '2025-2026'],

            // Class-9
            ['class_level' => 'Class-9', 'batch' => 'Batch-1', 'day_1' => 'Saturday', 'time_1' => '12:00 to 1:30', 'classroom_1' => 'C-1', 'day_2' => 'Monday', 'time_2' => '7:30 to 9:00', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],
            ['class_level' => 'Class-9', 'batch' => 'Batch-2', 'day_1' => 'Saturday', 'time_1' => '1:30 to 3:00', 'classroom_1' => 'C-1', 'day_2' => 'Thursday', 'time_2' => '3:00 to 4:30', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],
            ['class_level' => 'Class-9', 'batch' => 'Batch-3', 'day_1' => 'Sunday', 'time_1' => '3:00 to 4:30', 'classroom_1' => 'C-1', 'day_2' => 'Tuesday', 'time_2' => '3:00 to 4:30', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],
            ['class_level' => 'Class-9', 'batch' => 'Batch-4', 'day_1' => 'Sunday', 'time_1' => '4:30 to 6:00', 'classroom_1' => 'C-1', 'day_2' => 'Tuesday', 'time_2' => '4:30 to 6:00', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],

            // Class-10
            ['class_level' => 'Class-10', 'batch' => 'Batch-1', 'day_1' => 'Saturday', 'time_1' => '6:00 to 7:30', 'classroom_1' => 'C-1', 'day_2' => 'Thursday', 'time_2' => '6:00 to 7:30', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],
            ['class_level' => 'Class-10', 'batch' => 'Batch-2', 'day_1' => 'Saturday', 'time_1' => '7:30 to 9:00', 'classroom_1' => 'C-1', 'day_2' => 'Thursday', 'time_2' => '7:30 to 9:00', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],
            ['class_level' => 'Class-10', 'batch' => 'Batch-3', 'day_1' => 'Saturday', 'time_1' => '4:30 to 6:00', 'classroom_1' => 'C-1', 'day_2' => 'Thursday', 'time_2' => '4:30 to 6:00', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],
            ['class_level' => 'Class-10', 'batch' => 'Batch-4', 'day_1' => 'Saturday', 'time_1' => '9:00 to 10:30am', 'classroom_1' => 'C-1', 'day_2' => 'Monday', 'time_2' => '3:00 to 4:30', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],
            ['class_level' => 'Class-10', 'batch' => 'Batch-5', 'day_1' => 'Sunday', 'time_1' => '6:00 to 7:30', 'classroom_1' => 'C-1', 'day_2' => 'Tuesday', 'time_2' => '6:00 to 7:30', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],
            ['class_level' => 'Class-10', 'batch' => 'Batch-6', 'day_1' => 'Sunday', 'time_1' => '7:30 to 9:00', 'classroom_1' => 'C-1', 'day_2' => 'Tuesday', 'time_2' => '7:30 to 9:00', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],
            ['class_level' => 'Class-10', 'batch' => 'Batch-7', 'day_1' => 'Saturday', 'time_1' => '10:30am to 12:00 pm', 'classroom_1' => 'C-1', 'day_2' => 'Monday', 'time_2' => '6:00 to 7:30', 'classroom_2' => 'C-2', 'session_year' => '2025-2026'],
        ];

        foreach ($routines as $routine) {
            RoutineEntry::create($routine);
        }
    }

    private function seedPaymentPlans(): void
    {
        $plans = [
            // Class-9 Payment Plans (2025-2026)
            [
                'class_level' => 'Class-9',
                'monthly_fee' => 3500,
                'months' => 12,
                'total_fee' => 46000,
                'full_payment_discount' => 37000,
                'installment_amount' => null,
                'admission_fee' => '1000',
                'books_fee' => '3000',
                'additional_fee' => null,
                'features' => json_encode(['P1 & P2 Books', 'Appendix Book', 'All Monthly Exam', '2 Classes Every Week']),
                'payment_terms' => 'Full Payment (July to June): 37,000/= | Installment: 22,000/= (May/June/July) + 18,000/= (Aug) + 18,000/= (Sep+Oct) + 18,000/= (Nov+Dec) + 18,000/= (Jan+Feb) + 18,000/= (Mar+April) + 7,000/= (May+June) [1,000/= add fee, Book-3,000/=]',
            ],
            // O-Level Payment Plans (July to Dec 2025-2026)
            [
                'class_level' => 'O-Level',
                'monthly_fee' => 3500,
                'months' => 6,
                'total_fee' => 33000,
                'full_payment_discount' => 26000,
                'installment_amount' => null,
                'admission_fee' => '1000',
                'books_fee' => '4000',
                'additional_fee' => '7000',
                'features' => json_encode(['P1 & P2 Books', 'Topical Mock', 'Mock Solve', '2 Classes Every Week']),
                'payment_terms' => 'Full Payment (July to Dec): 26,000/= | Installment: 18,000/= (June/July) + 12,000/= (Aug) + Admission Form',
            ],
        ];

        foreach ($plans as $plan) {
            PaymentPlan::create($plan);
        }
    }
}
