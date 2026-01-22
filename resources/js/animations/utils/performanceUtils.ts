import { prefersReducedMotion } from './animationPresets';

// Type for performance.memory API
interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface PerformanceWithMemory extends Performance {
  memory?: MemoryInfo;
}

/**
 * Initialize global animation performance optimizations
 */
export const initializeAnimations = () => {
  if (typeof window === 'undefined') return;

  // Check for reduced motion preference
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  // Initialize performance monitoring
  if (!prefersReducedMotion()) {
    setupPerformanceMonitoring();
  }

  // Listen for changes in reduced motion preference
  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      // User enabled reduced motion - disable animations
      disableAnimations();
    } else {
      // User disabled reduced motion - re-enable animations
      enableAnimations();
    }
  });
};

/**
 * Setup performance monitoring for animations
 */
const setupPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;

  // Monitor frame rate
  let lastTime = performance.now();
  let frameCount = 0;
  let fps = 60;

  const measureFPS = (currentTime: number) => {
    frameCount++;
    
    if (currentTime - lastTime >= 1000) {
      fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      frameCount = 0;
      lastTime = currentTime;

      // If FPS drops below 30, consider reducing animation complexity
      if (fps < 30) {
        reduceAnimationComplexity();
      }
    }

    requestAnimationFrame(measureFPS);
  };

  requestAnimationFrame(measureFPS);

  // Monitor memory usage
  if ('memory' in performance) {
    setInterval(() => {
      const memory = (performance as PerformanceWithMemory).memory;
      if (memory && memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // High memory usage detected, reduce animations
        reduceAnimationComplexity();
      }
    }, 5000);
  }
};

/**
 * Reduce animation complexity for better performance
 */
const reduceAnimationComplexity = () => {
  if (typeof document === 'undefined') return;

  // Add CSS class to reduce animation complexity
  document.documentElement.classList.add('reduced-animations');
  
  // Update CSS-in-JS styles to be less complex
  const style = document.createElement('style');
  style.textContent = `
    .reduced-animations * {
      will-change: auto !important;
      transform: none !important;
      transition: none !important;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Disable all animations
 */
const disableAnimations = () => {
  if (typeof document === 'undefined') return;
  
  document.documentElement.classList.add('no-animations');
  
  const style = document.createElement('style');
  style.textContent = `
    .no-animations * {
      animation: none !important;
      transition: none !important;
      transform: none !important;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Re-enable animations
 */
const enableAnimations = () => {
  if (typeof document === 'undefined') return;
  
  document.documentElement.classList.remove('no-animations', 'reduced-animations');
  
  // Remove any performance reduction styles
  const styles = document.querySelectorAll('style');
  styles.forEach(style => {
    if (style.textContent?.includes('reduced-animations') || 
        style.textContent?.includes('no-animations')) {
      style.remove();
    }
  });
};

/**
 * Debounce utility for scroll events
 */
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

/**
 * Throttle utility for scroll events
 */
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

/**
 * Check if element is in viewport with performance optimization
 */
export const isInViewport = (element: HTMLElement, threshold = 0.1): boolean => {
  if (typeof window === 'undefined') return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  const vertInView = rect.top + rect.height * threshold <= windowHeight && rect.top >= -rect.height;
  const horInView = rect.left + rect.width * threshold <= windowWidth && rect.left >= -rect.width;
  
  return vertInView && horInView;
};

/**
 * Lazy load images with intersection observer
 */
export const setupLazyLoading = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Fallback for browsers that don't support IntersectionObserver
    return;
  }

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  // Observe all lazy images
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach((img) => imageObserver.observe(img));
};

/**
 * Cleanup animation resources
 */
export const cleanupAnimations = () => {
  if (typeof window === 'undefined') return;
  
  // Remove event listeners
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.removeEventListener('change', () => {});
  
  // Clean up styles
  enableAnimations();
};
