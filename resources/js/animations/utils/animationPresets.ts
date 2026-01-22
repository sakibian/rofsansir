// Animation timing functions
export const timing = {
    fast: '200ms ease-out',
    normal: '300ms ease-out',
    slow: '500ms ease-out',
    entrance: '600ms cubic-bezier(0.22, 1, 0.36, 1)',
    exit: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
};

// Common animation values
export const animations = {
    hover: {
        scale: '1.05',
        shadow: '0 10px 25px rgba(0,0,0,0.15)',
        translateY: '-4px',
    },
    entrance: {
        opacity: 0,
        translateY: '20px',
    },
    exit: {
        opacity: 0,
        translateY: '10px',
    },
    float: {
        keyframes: `
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
        `,
        duration: '6s',
        ease: 'ease-in-out',
    },
};

// Color transitions for different brand colors
export const colorTransitions = {
    blue: {
        hover: 'text-brand-blue',
        border: 'border-brand-blue/20',
        bg: 'bg-brand-blue/10',
        shadow: 'hover:shadow-brand-blue/20',
    },
    navy: {
        hover: 'text-brand-navy',
        border: 'border-brand-navy/20',
        bg: 'bg-brand-navy/10',
        shadow: 'hover:shadow-brand-navy/20',
    },
    gold: {
        hover: 'text-brand-navy',
        border: 'border-brand-gold/20',
        bg: 'bg-brand-gold/10',
        shadow: 'hover:shadow-brand-gold/20',
    },
};

// Check for reduced motion preference
export const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Conditional animation application
export const applyAnimation = (element: HTMLElement | null, animation: string) => {
    if (!element || prefersReducedMotion()) return;
    element.style.transition = animation;
};

// Debounce utility for scroll events
export const debounce = <T extends (...args: unknown[]) => void>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout | null = null;
    
    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            func(...args);
        }, wait);
    };
};

// Throttle utility for scroll events
export const throttle = <T extends (...args: unknown[]) => void>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// Intersection Observer options
export const intersectionOptions = {
    threshold: 0.15,
    rootMargin: '0px',
    triggerOnce: true,
};

// Stagger delay calculation
export const getStaggerDelay = (index: number, baseDelay: number = 100) => {
    return `${index * baseDelay}ms`;
};

// CSS-in-JS styles for animations
export const animationStyles = {
    hover: {
        transition: timing.normal,
        transform: 'translateY(0) scale(1)',
        boxShadow: 'none',
    },
    hoverActive: {
        transform: 'translateY(-4px) scale(1.05)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    },
    entrance: {
        opacity: 0,
        transform: 'translateY(20px)',
        transition: timing.entrance,
    },
    entranceActive: {
        opacity: 1,
        transform: 'translateY(0)',
    },
};
