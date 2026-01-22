import { useCallback, useMemo } from 'react';
import { prefersReducedMotion } from '../utils/animationPresets';

interface HoverAnimationOptions {
    scale?: number;
    shadow?: string;
    translateY?: number;
    transition?: string;
    color?: string;
}

interface HoverAnimationResult {
    hoverStyles: React.CSSProperties;
    hoverHandlers: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
}

export const useButtonHoverAnimation = (
    options: HoverAnimationOptions = {},
): HoverAnimationResult => {
    const {
        scale = 1.05,
        shadow = '0 12px 25px rgba(0, 0, 0, 0.15)',
        translateY = -3,
        transition = 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
    } = options;

    const hoverStyles: React.CSSProperties = useMemo(
        () => ({
            transform: `translateY(${translateY}px) scale(${scale})`,
            boxShadow: shadow,
            transition,
            willChange: 'transform',
        }),
        [translateY, scale, shadow, transition],
    );

    const onMouseEnter = useCallback(() => {
        if (prefersReducedMotion()) return;
        // Additional enter effects can be added here
    }, []);

    const onMouseLeave = useCallback(() => {
        if (prefersReducedMotion()) return;
        // Additional leave effects can be added here
    }, []);

    return {
        hoverStyles: prefersReducedMotion() ? {} : hoverStyles,
        hoverHandlers: {
            onMouseEnter,
            onMouseLeave,
        },
    };
};

export const useCardHoverAnimation = (
    options: HoverAnimationOptions = {},
): HoverAnimationResult => {
    const {
        scale = 1.02,
        shadow = '0 15px 35px rgba(0, 0, 0, 0.12)',
        translateY = -5,
        transition = 'all 350ms cubic-bezier(0.22, 1, 0.36, 1)',
    } = options;

    const hoverStyles: React.CSSProperties = useMemo(
        () => ({
            transform: `translateY(${translateY}px) scale(${scale})`,
            boxShadow: shadow,
            transition,
            willChange: 'transform, box-shadow',
        }),
        [translateY, scale, shadow, transition],
    );

    const onMouseEnter = useCallback(() => {
        if (prefersReducedMotion()) return;
        // Additional card-specific enter effects
    }, []);

    const onMouseLeave = useCallback(() => {
        if (prefersReducedMotion()) return;
        // Additional card-specific leave effects
    }, []);

    return {
        hoverStyles: prefersReducedMotion() ? {} : hoverStyles,
        hoverHandlers: {
            onMouseEnter,
            onMouseLeave,
        },
    };
};

export const useLinkHoverAnimation = (
    options: HoverAnimationOptions = {},
): HoverAnimationResult => {
    const { color = '#B6813E', transition = 'all 200ms ease-out' } = options;

    const hoverStyles: React.CSSProperties = useMemo(
        () => ({
            color,
            transform: 'translateX(4px)',
            transition,
            willChange: 'color, transform',
        }),
        [color, transition],
    );

    const onMouseEnter = useCallback(() => {
        if (prefersReducedMotion()) return;
    }, []);

    const onMouseLeave = useCallback(() => {
        if (prefersReducedMotion()) return;
    }, []);

    return {
        hoverStyles: prefersReducedMotion() ? {} : hoverStyles,
        hoverHandlers: {
            onMouseEnter,
            onMouseLeave,
        },
    };
};

export const useImageHoverAnimation = (
    options: HoverAnimationOptions = {},
): HoverAnimationResult => {
    const { scale = 1.05, transition = 'all 400ms ease-out' } = options;

    const hoverStyles: React.CSSProperties = useMemo(
        () => ({
            transform: `scale(${scale})`,
            filter: 'brightness(1.1)',
            transition,
            willChange: 'transform, filter',
        }),
        [scale, transition],
    );

    const onMouseEnter = useCallback(() => {
        if (prefersReducedMotion()) return;
    }, []);

    const onMouseLeave = useCallback(() => {
        if (prefersReducedMotion()) return;
    }, []);

    return {
        hoverStyles: prefersReducedMotion() ? {} : hoverStyles,
        hoverHandlers: {
            onMouseEnter,
            onMouseLeave,
        },
    };
};
