import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedFeatureCardProps {
    icon: React.ReactElement;
    title: string;
    description: string;
    className?: string;
    variant?: 'default' | 'highlighted';
}

const AnimatedFeatureCard: React.FC<AnimatedFeatureCardProps> = ({
    icon,
    title,
    description,
    className = '',
    variant = 'default',
}) => {
    const variantClasses = {
        default: 'border-gray-100 hover:border-brand-blue/50',
        highlighted: 'border-brand-navy bg-gradient-to-br from-brand-navy/5 to-transparent',
    };

    return (
        <div
            className={`
                group relative overflow-hidden rounded-xl border bg-white p-6 shadow-lg transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                ${variantClasses[variant]}
                ${className}
            `}
        >
            {/* Icon Container */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 transition-colors duration-300 group-hover:bg-brand-blue/20">
                {icon}
            </div>

            {/* Content */}
            <h3 className="mb-2 text-xl font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                {description}
            </p>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-blue/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Border highlight on hover */}
            <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-brand-blue/0 via-brand-blue/20 to-brand-blue/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
        </div>
    );
};

export default AnimatedFeatureCard;
