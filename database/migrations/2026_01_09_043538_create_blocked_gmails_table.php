<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blocked_gmails', function (Blueprint $table) {
            $table->id();
            $table->string('gmail')->unique()->index();
            $table->timestamp('blocked_at');
            $table->unsignedBigInteger('blocked_by')->nullable();
            $table->string('reason')->nullable();
            $table->timestamps();

            $table->foreign('blocked_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blocked_gmails');
    }
};
