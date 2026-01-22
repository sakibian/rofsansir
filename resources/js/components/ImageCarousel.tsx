import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

interface ImageCarouselProps {
    images: {
        src: string;
        alt: string;
        title?: string;
        description?: string;
    }[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showIndicators?: boolean;
    showControls?: boolean;
    className?: string;
    height?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
    images,
    autoPlay = true,
    autoPlayInterval = 5000,
    showIndicators = true,
    showControls = true,
    className = '',
    height = '400px',
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay || isHovered) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            return;
        }

        intervalRef.current = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoPlay, autoPlayInterval, isHovered, currentIndex]);

    // Handle transition end
    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
            }, 500); // Match CSS transition duration
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (containerRef.current && containerRef.current.contains(document.activeElement)) {
                if (e.key === 'ArrowRight') {
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (images.length === 0) {
        return null;
    }

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}
            style={{ height: height }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            tabIndex={0}
        >
            {/* Images */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                            index === currentIndex
                                ? 'opacity-100 scale-100 z-10'
                                : 'opacity-0 scale-95 z-0'
                        }`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        {(image.title || image.description) && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                                <div className="absolute bottom-6 left-6 text-white">
                                    {image.title && (
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                            {image.title}
                                        </h3>
                                    )}
                                    {image.description && (
                                        <p className="text-sm md:text-base text-white/90 max-w-md">
                                            {image.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            {showControls && images.length > 1 && (
                <>
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {/* Progress Bar */}
            {showIndicators && images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`p-1 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-brand-navy w-8'
                                    : 'bg-white/50 w-4 hover:bg-white/70'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <Circle className={`w-2 h-2 ${index === currentIndex ? 'text-brand-navy' : 'text-transparent'}`} />
                        </button>
                    ))}
                </div>
            )}

            {/* Touch Swipe Overlay (for mobile) */}
            <div className="absolute inset-0 md:hidden" />
        </div>
    );
};

export default ImageCarousel;
