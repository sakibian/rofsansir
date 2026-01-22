import React from 'react';

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
    const baseStyles = 'bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300';

    return (
        <div
            className={`${baseStyles} ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-2' : ''} ${className}`}
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
    staggerIndex?: number;
}> = ({ icon: Icon, title, description, className = '', staggerIndex = 1 }) => {
    return (
        <div
            className={`card-sophisticated stagger-sophisticated-${staggerIndex} animate-on-scroll ${className}`}
        >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10 mx-auto group-hover:bg-brand-blue/20 transition-colors duration-500">
                <Icon className="h-8 w-8 text-brand-blue group-hover:scale-110 transition-transform duration-500 animate-elastic-sophisticated" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors duration-500">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
    return (
        <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-1 shadow-lg hover:shadow-2xl transition-all duration-400 ${className}`}>
            <div className="relative overflow-hidden rounded-xl bg-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-400">
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
