import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: string;
    threshold?: number;
    triggerOnce?: boolean;
    staggerChildren?: boolean;
    staggerDelay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className = '',
    delay = 0,
    duration = '600ms',
    threshold = 0.1,
    triggerOnce = true,
    staggerChildren = false,
    staggerDelay = 100,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (triggerOnce && hasTriggered) return;

                    setTimeout(() => {
                        setIsVisible(true);
                        if (triggerOnce) {
                            setHasTriggered(true);
                        }
                    }, delay);

                    if (triggerOnce) {
                        observer.disconnect();
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin: '50px' }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, triggerOnce, delay, hasTriggered]);

    const renderChildren = () => {
        if (!staggerChildren || !Array.isArray(children)) {
            return children;
        }

        return children.map((child, index) => (
            <div
                key={index}
                className={`animate-on-scroll stagger-item stagger-${index + 1} ${isVisible ? 'in-view' : ''}`}
                style={{
                    transitionDelay: `${(index + 1) * staggerDelay}ms`
                }}
            >
                {child}
            </div>
        ));
    };

    return (
        <div
            ref={elementRef}
            className={`animate-on-scroll ${isVisible ? 'in-view' : ''} ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: duration
            }}
        >
            {renderChildren()}
        </div>
    );
};

export default AnimatedSection;
