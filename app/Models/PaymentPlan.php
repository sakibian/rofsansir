<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentPlan extends Model
{
    protected $fillable = [
        'class_level',
        'monthly_fee',
        'months',
        'total_fee',
        'full_payment_discount',
        'installment_amount',
        'admission_fee',
        'books_fee',
        'additional_fee',
        'features',
        'payment_terms',
        'is_active',
    ];

    protected $casts = [
        'monthly_fee' => 'decimal:2',
        'total_fee' => 'decimal:2',
        'full_payment_discount' => 'decimal:2',
        'installment_amount' => 'decimal:2',
        'is_active' => 'boolean',
    ];

    /**
     * Scope for active payment plans
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
     * Get features as array
     */
    public function getFeaturesArrayAttribute()
    {
        return $this->features ? json_decode($this->features, true) : [];
    }
}
