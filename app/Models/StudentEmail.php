<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StudentEmail extends Model
{
    protected $fillable = [
        'user_id',
        'email',
        'name',
        'collected_at',
        'last_access_at',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'collected_at' => 'datetime',
        'last_access_at' => 'datetime',
    ];

    /**
     * Get the user that owns the student email
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
