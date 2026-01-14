<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StudentDriveFolder extends Model
{
    protected $fillable = [
        'user_id',
        'drive_folder_id',
        'folder_name',
        'student_email',
        'is_active',
        'granted_at',
        'last_accessed_at',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'granted_at' => 'datetime',
        'last_accessed_at' => 'datetime',
    ];

    /**
     * Get the user that owns this folder assignment
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Scope for active folder assignments
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for folders assigned to a specific student
     */
    public function scopeForStudent($query, $email)
    {
        return $query->where('student_email', $email)->active();
    }

    /**
     * Update last accessed timestamp
     */
    public function markAsAccessed(): void
    {
        $this->update(['last_accessed_at' => now()]);
    }
}
