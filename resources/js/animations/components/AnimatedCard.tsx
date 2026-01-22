import React from 'react';
import { useCardHoverAnimation } from '../hooks/useHoverAnimation';

interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    onClick?: () => void;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
    children,
    className = '',
    hoverEffect = true,
    onClick,
}) => {
    const { hoverStyles, hoverHandlers } = useCardHoverAnimation();

    const baseStyles = 'bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300';

    return (
        <div
            className={`${baseStyles} ${hoverEffect ? 'hover:shadow-xl' : ''} ${className}`}
            style={hoverEffect ? hoverStyles : undefined}
            {...(hoverEffect ? hoverHandlers : {})}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

// Animated feature card for sections like Courses, Assessment, etc.
export const AnimatedFeatureCard: React.FC<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    className?: string;
}> = ({ icon: Icon, title, description, className = '' }) => {
    const { hoverStyles, hoverHandlers } = useCardHoverAnimation();

    return (
        <div
            className={`group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`}
            style={hoverStyles}
            {...hoverHandlers}
        >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10 mx-auto group-hover:bg-brand-blue/20 transition-colors">
                <Icon className="h-8 w-8 text-brand-blue group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

// Animated image card for books section
export const AnimatedImageCard: React.FC<{
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
    className?: string;
}> = ({ src, alt, title, subtitle, className = '' }) => {
    const { hoverStyles, hoverHandlers } = useCardHoverAnimation({
        scale: 1.05,
        translateY: -4,
        shadow: '0 20px 40px rgba(0,0,0,0.15)',
        transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
    });

    return (
        <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-1 shadow-lg ${className}`}>
            <div className="relative overflow-hidden rounded-xl bg-white" style={hoverStyles} {...hoverHandlers}>
                <div className="aspect-[4/5] overflow-hidden">
                    <img
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {title && (
                    <div className="absolute top-3 right-3 translate-y-2 transform rounded-full bg-brand-navy px-2 py-1 text-xs font-bold text-brand-navy opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {title}
                    </div>
                )}
            </div>

            {(title || subtitle) && (
                <div className="mt-6 px-2 text-center">
                    {title && (
                        <h3 className="mb-3 text-base leading-tight font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                            {title}
                        </h3>
                    )}
                    {subtitle && (
                        <p className="line-clamp-3 text-xs leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AnimatedCard;
