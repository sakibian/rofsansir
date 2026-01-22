// Simple CSS-based Animation Components
export { default as AnimatedButton, AnimatedCTA } from './components/AnimatedButton';

// Simple CSS Animation Classes (no JavaScript overhead)
export const animationClasses = {
  // Fade animations
  'fade-in': 'opacity-0 animate-fade-in',
  'fade-in-up': 'opacity-0 animate-fade-in-up',
  'fade-in-down': 'opacity-0 animate-fade-in-down',
  'fade-in-left': 'opacity-0 animate-fade-in-left',
  'fade-in-right': 'opacity-0 animate-fade-in-right',

  // Scale animations
  'scale-in': 'opacity-0 animate-scale-in',

  // Hover effects
  'hover-lift': 'transition-all duration-300 hover:-translate-y-2 hover:shadow-xl',
  'hover-scale': 'transition-transform duration-300 hover:scale-105',
  'hover-glow': 'transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/30',

  // Combined effects
  'card-hover': 'hover:shadow-xl hover:-translate-y-2 transition-all duration-300',
  'button-hover': 'hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300',
};

// Utility function to apply staggered delays
export const getStaggerDelay = (index: number, baseDelay: number = 100) => ({
  animationDelay: `${index * baseDelay}ms`,
});

// Performance utilities (simplified)
export { prefersReducedMotion } from './utils/animationPresets';
