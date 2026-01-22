/**
 * Accessibility utilities for animations
 */

export interface AccessibilityOptions {
    respectReducedMotion?: boolean;
    respectHighContrast?: boolean;
    announceAnimations?: boolean;
    keyboardNavigation?: boolean;
}

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false;

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check if user prefers high contrast
 */
export const prefersHighContrast = (): boolean => {
    if (typeof window === 'undefined') return false;

    return window.matchMedia('(prefers-contrast: high)').matches;
};

/**
 * Check if user prefers dark mode
 */
export const prefersDarkMode = (): boolean => {
    if (typeof window === 'undefined') return false;

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Announce animation start to screen readers
 */
export const announceAnimation = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
    if (typeof document === 'undefined') return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';

    document.body.appendChild(announcement);
    announcement.textContent = message;

    // Remove after announcement
    setTimeout(() => {
        if (announcement.parentNode) {
            announcement.parentNode.removeChild(announcement);
        }
    }, 1000);
};

/**
 * Make element focusable for keyboard navigation
 */
export const makeFocusable = (element: HTMLElement, focusable: boolean = true): void => {
    if (focusable) {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
    } else {
        element.removeAttribute('tabindex');
        element.removeAttribute('role');
    }
};

/**
 * Handle keyboard navigation for animations
 */
export const handleKeyboardNavigation = (
    event: KeyboardEvent,
    callbacks: {
        onEnter?: () => void;
        onSpace?: () => void;
        onEscape?: () => void;
        onArrowUp?: () => void;
        onArrowDown?: () => void;
        onArrowLeft?: () => void;
        onArrowRight?: () => void;
    }
): void => {
    switch (event.key) {
        case 'Enter':
            if (callbacks.onEnter) {
                event.preventDefault();
                callbacks.onEnter();
            }
            break;
        case ' ':
            if (callbacks.onSpace) {
                event.preventDefault();
                callbacks.onSpace();
            }
            break;
        case 'Escape':
            if (callbacks.onEscape) {
                event.preventDefault();
                callbacks.onEscape();
            }
            break;
        case 'ArrowUp':
            if (callbacks.onArrowUp) {
                event.preventDefault();
                callbacks.onArrowUp();
            }
            break;
        case 'ArrowDown':
            if (callbacks.onArrowDown) {
                event.preventDefault();
                callbacks.onArrowDown();
            }
            break;
        case 'ArrowLeft':
            if (callbacks.onArrowLeft) {
                event.preventDefault();
                callbacks.onArrowLeft();
            }
            break;
        case 'ArrowRight':
            if (callbacks.onArrowRight) {
                event.preventDefault();
                callbacks.onArrowRight();
            }
            break;
    }
};

/**
 * Add accessibility attributes to animated elements
 */
export const addAccessibilityAttributes = (
    element: HTMLElement,
    options: {
        label?: string;
        description?: string;
        role?: string;
        live?: 'off' | 'polite' | 'assertive';
    } = {}
): void => {
    if (options.label) {
        element.setAttribute('aria-label', options.label);
    }

    if (options.description) {
        element.setAttribute('aria-describedby', options.description);
    }

    if (options.role) {
        element.setAttribute('role', options.role);
    }

    if (options.live) {
        element.setAttribute('aria-live', options.live);
    }

    // Add focus management
    element.setAttribute('tabindex', '0');
};

/**
 * Create a focus trap for modal-like animations
 */
export const createFocusTrap = (container: HTMLElement): {
    activate: () => void;
    deactivate: () => void;
} => {
    const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent): void => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        }
    };

    const activate = (): void => {
        document.addEventListener('keydown', handleTabKey);
        firstElement?.focus();
    };

    const deactivate = (): void => {
        document.removeEventListener('keydown', handleTabKey);
    };

    return { activate, deactivate };
};

/**
 * Check if animations should be disabled based on user preferences
 */
export const shouldDisableAnimations = (): boolean => {
    return (
        prefersReducedMotion() ||
        prefersHighContrast() ||
        // Check for low-performance devices
        (typeof navigator !== 'undefined' &&
         typeof navigator.hardwareConcurrency === 'number' &&
         navigator.hardwareConcurrency < 4)
    );
};

/**
 * Get animation duration based on user preferences
 */
export const getAnimationDuration = (baseDuration: number): number => {
    if (shouldDisableAnimations()) {
        return 0;
    }

    // Reduce animation duration for high contrast mode
    if (prefersHighContrast()) {
        return Math.max(baseDuration * 0.5, 100);
    }

    return baseDuration;
};

/**
 * Apply accessibility-friendly animation styles
 */
export const applyAccessibleAnimationStyles = (
    element: HTMLElement,
    animationType: string,
    duration: number = 300
): void => {
    if (shouldDisableAnimations()) {
        // Remove animation styles for accessibility
        element.style.animation = 'none';
        element.style.transition = 'none';
        element.style.opacity = '1';
        element.style.transform = 'none';
        return;
    }

    const accessibleDuration = getAnimationDuration(duration);

    // Apply animation with reduced motion consideration
    element.style.animation = `${animationType} ${accessibleDuration}ms ease-out forwards`;

    // Add focus indicators for keyboard navigation
    element.style.outline = '2px solid transparent';
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid #007acc';
    });

    element.addEventListener('blur', () => {
        element.style.outline = '2px solid transparent';
    });
};

/**
 * Initialize global accessibility features for animations
 */
export const initializeAccessibility = (): void => {
    if (typeof window === 'undefined') return;

    // Listen for changes in accessibility preferences
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handlePreferenceChange = (): void => {
        // Re-evaluate all animations on the page
        const animatedElements = document.querySelectorAll('[data-animated]');

        animatedElements.forEach((element) => {
            const htmlElement = element as HTMLElement;
            applyAccessibleAnimationStyles(
                htmlElement,
                htmlElement.dataset.animationType || 'fade-in',
                parseInt(htmlElement.dataset.animationDuration || '300')
            );
        });
    };

    reducedMotionQuery.addEventListener('change', handlePreferenceChange);
    highContrastQuery.addEventListener('change', handlePreferenceChange);

    // Add global keyboard navigation for animated elements
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            // Close any open animated modals or overlays
            const openAnimations = document.querySelectorAll('[data-animation-state="open"]');
            openAnimations.forEach((element) => {
                const htmlElement = element as HTMLElement;
                htmlElement.style.animation = 'fade-out 200ms ease-out forwards';
                setTimeout(() => {
                    htmlElement.style.display = 'none';
                    htmlElement.setAttribute('data-animation-state', 'closed');
                }, 200);
            });
        }
    });
};
