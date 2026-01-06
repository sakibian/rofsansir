<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::firstOrCreate(
            ['email' => 'admin@rofsansir.com'],
            [
                'name' => 'Admin',
                'password' => bcrypt('admin123'),
                'role' => \App\Models\User::ROLE_ADMIN,
            ]
        );
    }
}
