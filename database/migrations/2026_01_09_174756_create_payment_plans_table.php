<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('payment_plans', function (Blueprint $table) {
            $table->id();
            $table->string('class_level'); // Class-8, Class-9, Class-10, O-Level
            $table->decimal('monthly_fee', 10, 2);
            $table->integer('months');
            $table->decimal('total_fee', 10, 2);
            $table->decimal('full_payment_discount', 10, 2)->nullable();
            $table->decimal('installment_amount', 10, 2)->nullable();
            $table->string('admission_fee', 50)->nullable();
            $table->string('books_fee', 50)->nullable();
            $table->string('additional_fee', 50)->nullable();
            $table->text('features')->nullable(); // JSON: books, exams, etc.
            $table->text('payment_terms')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payment_plans');
    }
};
