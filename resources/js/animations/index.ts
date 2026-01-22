// Animation Components
export { default as AnimatedButton } from './components/AnimatedButton';
export { default as AnimatedCTA } from './components/AnimatedCTA';
export { default as AnimatedCard } from './components/AnimatedCard';
export { default as AnimatedFeatureCard } from './components/AnimatedFeatureCard';
export { default as AnimatedImageCard } from './components/AnimatedImageCard';
export { default as AnimatedSection } from './components/AnimatedSection';
export { default as AnimatedGrid } from './components/AnimatedGrid';

// Animation Hooks
export { useScrollAnimation, useStaggeredAnimation, useParallaxAnimation } from './hooks/useScrollAnimation';
export { 
    useButtonHoverAnimation, 
    useCardHoverAnimation, 
    useLinkHoverAnimation, 
    useImageHoverAnimation 
} from './hooks/useHoverAnimation';

// Animation Utils
export { prefersReducedMotion, intersectionOptions } from './utils/animationPresets';
export { 
    initializeAnimations, 
    debounce, 
    throttle, 
    isInViewport, 
    setupLazyLoading, 
    cleanupAnimations 
} from './utils/performanceUtils';
