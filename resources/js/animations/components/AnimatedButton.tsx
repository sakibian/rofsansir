import React from 'react';
import { useButtonHoverAnimation } from '../hooks/useHoverAnimation';
import { timing } from '../utils/animationPresets';

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
    const { hoverStyles, hoverHandlers } = useButtonHoverAnimation();

    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantStyles = {
        primary: 'bg-brand-blue text-white hover:bg-brand-blue-dark focus:ring-brand-blue/50',
        secondary: 'bg-brand-navy text-brand-navy hover:bg-brand-navy/90 focus:ring-brand-navy/50',
        outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white focus:ring-brand-blue/50',
    };

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            style={hoverStyles}
            {...hoverHandlers}
            {...props}
        >
            {children}
        </button>
    );
};

// Animated CTA Button with special styling
export const AnimatedCTA: React.FC<Omit<AnimatedButtonProps, 'variant'>> = ({
    children,
    className = '',
    ...props
}) => {
    const { hoverStyles, hoverHandlers } = useButtonHoverAnimation({
        scale: 1.05,
        translateY: -3,
        shadow: '0 12px 30px rgba(59, 130, 246, 0.3)',
        transition: 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
    });

    return (
        <button
            className={`bg-gradient-to-r from-brand-blue to-brand-navy text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-blue/30 ${className}`}
            style={hoverStyles}
            {...hoverHandlers}
            {...props}
        >
            {children}
        </button>
    );
};

export default AnimatedButton;
