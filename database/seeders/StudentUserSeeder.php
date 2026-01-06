<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class StudentUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::firstOrCreate(
            ['email' => 'student@rofsansir.com'],
            [
                'name' => 'Student',
                'password' => bcrypt('student123'),
                'role' => \App\Models\User::ROLE_STUDENT,
            ]
        );
    }
}
