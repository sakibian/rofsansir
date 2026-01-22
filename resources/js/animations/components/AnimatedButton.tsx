import React from 'react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform';

    const variantStyles = {
        primary: 'bg-brand-blue text-white hover:bg-brand-blue-dark hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/20 focus:ring-brand-blue/50',
        secondary: 'bg-brand-navy text-white hover:bg-brand-navy/90 hover:scale-105 hover:shadow-lg hover:shadow-brand-navy/20 focus:ring-brand-navy/50',
        outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/20 focus:ring-brand-blue/50',
    };

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

// Animated CTA Button with special styling
export const AnimatedCTA: React.FC<Omit<AnimatedButtonProps, 'variant'> & { variant?: 'primary' | 'secondary' }> = ({
    children,
    className = '',
    variant = 'secondary',
    ...props
}) => {
    const variantClasses = {
        primary: 'bg-brand-blue text-white hover:scale-105 hover:shadow-2xl hover:shadow-brand-blue/30',
        secondary: 'bg-gradient-to-r from-brand-blue to-brand-navy text-white hover:scale-105 hover:shadow-2xl hover:shadow-brand-blue/30',
    };

    return (
        <button
            className={`${variantClasses[variant]} font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-blue/30 transform ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default AnimatedButton;
