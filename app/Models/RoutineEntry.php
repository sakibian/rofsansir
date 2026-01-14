<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoutineEntry extends Model
{
    protected $fillable = [
        'class_level',
        'batch',
        'day_1',
        'time_1',
        'classroom_1',
        'day_2',
        'time_2',
        'classroom_2',
        'session_year',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * Scope for active routines
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope by class level
     */
    public function scopeByClass($query, $classLevel)
    {
        return $query->where('class_level', $classLevel);
    }

    /**
     * Scope by session year
     */
    public function scopeBySession($query, $sessionYear)
    {
        return $query->where('session_year', $sessionYear);
    }

    /**
     * Scope by batch
     */
    public function scopeByBatch($query, $batch)
    {
        return $query->where('batch', $batch);
    }

    /**
     * Get formatted schedule
     */
    public function getScheduleAttribute()
    {
        $schedule = [];
        
        if ($this->day_1 && $this->time_1) {
            $schedule[] = [
                'day' => $this->day_1,
                'time' => $this->time_1,
                'classroom' => $this->classroom_1,
            ];
        }
        
        if ($this->day_2 && $this->time_2) {
            $schedule[] = [
                'day' => $this->day_2,
                'time' => $this->time_2,
                'classroom' => $this->classroom_2,
            ];
        }
        
        return $schedule;
    }
}
