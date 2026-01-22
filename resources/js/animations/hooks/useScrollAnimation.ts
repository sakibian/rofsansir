import { useEffect, useRef, useState } from 'react';
import { intersectionOptions, prefersReducedMotion } from '../utils/animationPresets';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
    staggerDelay?: number;
    animationClass?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
    const {
        threshold = intersectionOptions.threshold,
        rootMargin = intersectionOptions.rootMargin,
        triggerOnce = intersectionOptions.triggerOnce,
        animationClass = 'animate-fade-in-up',
    } = options;

    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element || prefersReducedMotion()) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isElementIntersecting = entry.isIntersecting;

                if (triggerOnce && hasTriggered) return;

                setIsIntersecting(isElementIntersecting);

                if (isElementIntersecting) {
                    if (triggerOnce) {
                        setHasTriggered(true);
                    }
                    
                    // Add animation class
                    element.classList.add(animationClass);
                    
                    // Remove animation class after animation completes to reset for future triggers
                    if (triggerOnce) {
                        const animationDuration = getComputedStyle(element).transitionDuration;
                        const duration = parseFloat(animationDuration) * 1000;
                        
                        setTimeout(() => {
                            element.classList.remove(animationClass);
                        }, duration);
                    }
                } else if (!triggerOnce) {
                    element.classList.remove(animationClass);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce, hasTriggered, animationClass]);

    return { 
        elementRef, 
        isIntersecting: triggerOnce ? hasTriggered : isIntersecting 
    };
}

// Hook for staggered animations
export function useStaggeredAnimation(items: unknown[], options: UseScrollAnimationOptions = {}) {
    const { elementRef, isIntersecting } = useScrollAnimation(options);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        if (!isIntersecting || prefersReducedMotion()) return;

        itemRefs.current.forEach((item, index) => {
            if (item) {
                const delay = index * (options.staggerDelay || 100);
                setTimeout(() => {
                    item.classList.add('animate-fade-in-up');
                }, delay);
            }
        });
    }, [isIntersecting, items, options.staggerDelay]);

    return { elementRef, itemRefs };
}

// Hook for scroll-triggered parallax effects
export function useParallaxAnimation(speed: number = 0.5) {
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element || prefersReducedMotion()) return;

        const handleScroll = () => {
            if (!element) return;
            
            const scrolled = window.pageYOffset;
            const rate = scrolled * speed;
            
            element.style.transform = `translateY(${rate}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [speed]);

    return elementRef;
}
