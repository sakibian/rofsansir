import React from 'react';

interface AnimatedImageCardProps {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
    className?: string;
    overlay?: boolean;
    hoverEffect?: 'scale' | 'darken' | 'lift';
}

const AnimatedImageCard: React.FC<AnimatedImageCardProps> = ({
    src,
    alt,
    title,
    subtitle,
    className = '',
    overlay = true,
    hoverEffect = 'scale',
}) => {
    const hoverClasses = {
        scale: 'group-hover:scale-105',
        darken: 'group-hover:brightness-75',
        lift: 'group-hover:-translate-y-2',
    };

    return (
        <div className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}>
            {/* Image */}
            <div className={`relative overflow-hidden ${hoverClasses[hoverEffect]}`}>
                <img
                    src={src}
                    alt={alt}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                {overlay && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
                    {title}
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default AnimatedImageCard;
