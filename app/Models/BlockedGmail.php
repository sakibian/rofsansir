<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BlockedGmail extends Model
{
    protected $fillable = [
        'gmail',
        'blocked_at',
        'blocked_by',
        'reason',
    ];

    protected $casts = [
        'blocked_at' => 'datetime',
    ];

    /**
     * Get the user who blocked this Gmail
     */
    public function blocker(): BelongsTo
    {
        return $this->belongsTo(User::class, 'blocked_by');
    }

    /**
     * Scope for active blocks
     */
    public function scopeActive($query)
    {
        return $query;
    }

    /**
     * Check if a Gmail is blocked
     */
    public static function isBlocked(string $gmail): bool
    {
        return self::where('gmail', $gmail)->exists();
    }

    /**
     * Block a Gmail account
     */
    public static function block(string $gmail, ?int $blockedBy = null, ?string $reason = null): self
    {
        return self::create([
            'gmail' => $gmail,
            'blocked_at' => now(),
            'blocked_by' => $blockedBy,
            'reason' => $reason,
        ]);
    }

    /**
     * Unblock a Gmail account
     */
    public static function unblock(string $gmail): bool
    {
        return self::where('gmail', $gmail)->delete() > 0;
    }

    /**
     * Get blocked Gmail statistics
     */
    public static function getStats()
    {
        return [
            'total_blocked' => self::count(),
            'recent_blocks' => self::where('blocked_at', '>=', now()->subDays(7))->count(),
        ];
    }
}
