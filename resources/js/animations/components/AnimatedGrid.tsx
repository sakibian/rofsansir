import React, { ReactNode } from 'react';
import useStaggeredAnimation from '../hooks/useStaggeredAnimation';

interface AnimatedGridProps {
    children: ReactNode;
    className?: string;
    columns?: number;
    gap?: string;
    animationType?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
    delay?: number;
    duration?: string;
    threshold?: number;
    triggerOnce?: boolean;
    staggerChildren?: boolean;
    staggerDelay?: number;
}

const AnimatedGrid: React.FC<AnimatedGridProps> = ({
    children,
    className = '',
    columns = 3,
    gap = '8',
    animationType = 'fade-in-up',
    delay = 0,
    duration = '600ms',
    threshold = 0.1,
    triggerOnce = true,
    staggerDelay = 100,
}) => {
    const { elementRef, isIntersecting } = useStaggeredAnimation({
        threshold,
        triggerOnce,
    }) as { elementRef: React.RefObject<HTMLDivElement | null>; isIntersecting: boolean };

    // Calculate grid columns based on screen size
    const getGridClasses = () => {
        const baseClasses = `grid gap-${gap}`;
        
        if (columns === 1) {
            return `${baseClasses} grid-cols-1`;
        } else if (columns === 2) {
            return `${baseClasses} grid-cols-1 md:grid-cols-2`;
        } else if (columns === 3) {
            return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
        } else if (columns === 4) {
            return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`;
        } else {
            return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
        }
    };

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childDelay = delay + (index * staggerDelay);
            
            return (
                <div
                    key={index}
                    style={{
                        animationDelay: `${childDelay}ms`,
                        animationFillMode: 'forwards',
                    } as React.CSSProperties}
                    className={isIntersecting ? `${animationType} animate-${animationType}` : 'opacity-0'}
                >
                    {child}
                </div>
            );
        });
    };

    return (
        <div
            ref={elementRef}
            className={`${getGridClasses()} ${className}`}
        >
            {renderChildren()}
        </div>
    );
};

export default AnimatedGrid;
