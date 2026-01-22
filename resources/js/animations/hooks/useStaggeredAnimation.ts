import { useRef, useState, useEffect } from 'react';

interface UseStaggeredAnimationOptions {
    threshold?: number;
    triggerOnce?: boolean;
}

interface UseStaggeredAnimationReturn<T extends HTMLElement = HTMLElement> {
    elementRef: React.RefObject<T | null>;
    isIntersecting: boolean;
}

const useStaggeredAnimation = <T extends HTMLElement = HTMLElement>(options: UseStaggeredAnimationOptions = {}): UseStaggeredAnimationReturn<T> => {
    const { threshold = 0.1, triggerOnce = true } = options;
    const elementRef = useRef<T | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsIntersecting(false);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, triggerOnce]);

    return { elementRef, isIntersecting };
};

export default useStaggeredAnimation;
