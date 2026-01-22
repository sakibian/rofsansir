import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AnimatedCTAProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary';
}

const AnimatedCTA: React.FC<AnimatedCTAProps> = ({
    children,
    className = '',
    onClick,
    disabled = false,
    size = 'md',
    variant = 'primary',
}) => {
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const variantClasses = {
        primary: 'bg-brand-blue text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-brand-navy text-white shadow-lg hover:shadow-xl',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                relative overflow-hidden rounded-lg font-bold transition-all duration-300
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
                ${className}
            `}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-blue/20 from-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
        </button>
    );
};

export default AnimatedCTA;
