import React, { ReactNode, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    animationType?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
    delay?: number;
    duration?: string;
    threshold?: number;
    triggerOnce?: boolean;
    staggerChildren?: boolean;
    staggerDelay?: number;
    ref?: React.RefObject<HTMLElement | null>;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className = '',
    animationType = 'fade-in-up',
    delay = 0,
    duration = '600ms',
    threshold = 0.1,
    triggerOnce = true,
    staggerChildren = false,
    staggerDelay = 100,
    ref: externalRef,
}) => {
    const internalRef = useRef<HTMLElement | null>(null);
    const elementRef = externalRef || internalRef;

    const { isIntersecting } = useScrollAnimation({
        threshold,
        triggerOnce,
    });

    const getAnimationClasses = () => {
        const baseClasses = `transition-all duration-${duration.replace('ms', '')} ease-out`;
        const animationClasses = isIntersecting
            ? `${animationType} animate-${animationType}`
            : 'opacity-0';

        return `${baseClasses} ${animationClasses}`;
    };

    const renderChildren = () => {
        if (!staggerChildren) {
            return children;
        }

        // Handle array children for staggering
        if (Array.isArray(children)) {
            return children.map((child, index) => {
                const childDelay = delay + (index * staggerDelay);
                return (
                    <div
                        key={index}
                        style={{
                            animationDelay: `${childDelay}ms`,
                            animationFillMode: 'forwards',
                        }}
                        className={isIntersecting ? `${animationType} animate-${animationType}` : 'opacity-0'}
                    >
                        {child}
                    </div>
                );
            });
        }

        return children;
    };

    const style: React.CSSProperties = {
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
    };

    return (
        <div
            ref={elementRef}
            className={`${getAnimationClasses()} ${className}`}
            style={style}
        >
            {renderChildren()}
        </div>
    );
};

export default AnimatedSection;
