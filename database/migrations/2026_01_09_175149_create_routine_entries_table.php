<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('routine_entries', function (Blueprint $table) {
            $table->id();
            $table->string('class_level'); // Class-8, Class-9, Class-10
            $table->string('batch'); // Batch-1, Batch-2, etc.
            $table->string('day_1'); // Saturday, Sunday, etc.
            $table->string('time_1'); // 12:00 to 1:30
            $table->string('classroom_1')->nullable(); // C-1, C-2
            $table->string('day_2')->nullable(); // Second class day
            $table->string('time_2')->nullable(); // Second class time
            $table->string('classroom_2')->nullable(); // C-1, C-2
            $table->string('session_year'); // 2025-2026
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('routine_entries');
    }
};
