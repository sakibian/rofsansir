<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccessLog extends Model
{
    protected $fillable = [
        'gmail',
        'folder_id',
        'folder_name',
        'accessed_at',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'accessed_at' => 'datetime',
    ];

    /**
     * Scope for filtering by Gmail
     */
    public function scopeByGmail($query, $gmail)
    {
        return $query->where('gmail', $gmail);
    }

    /**
     * Scope for filtering by folder
     */
    public function scopeByFolder($query, $folderId)
    {
        return $query->where('folder_id', $folderId);
    }

    /**
     * Scope for filtering by date range
     */
    public function scopeDateRange($query, $startDate, $endDate)
    {
        return $query->whereBetween('accessed_at', [$startDate, $endDate]);
    }

    /**
     * Scope for recent access logs
     */
    public function scopeRecent($query, $days = 7)
    {
        return $query->where('accessed_at', '>=', now()->subDays($days));
    }

    /**
     * Get access statistics
     */
    public static function getStats()
    {
        return [
            'total_accesses' => self::count(),
            'unique_gmails' => self::distinct('gmail')->count(),
            'recent_accesses' => self::recent()->count(),
            'most_accessed_folder' => self::selectRaw('folder_name, COUNT(*) as count')
                ->groupBy('folder_name')
                ->orderBy('count', 'desc')
                ->first()?->folder_name ?? 'None',
        ];
    }
}
