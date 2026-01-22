import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
    current?: boolean;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
    return (
        <nav aria-label="Breadcrumb" className={`animate-on-scroll ${className}`}>
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
                {/* Home Link */}
                <li>
                    <a
                        href="/"
                        className="flex items-center hover:text-brand-blue transition-colors duration-200 animate-elastic-sophisticated"
                    >
                        <Home className="h-4 w-4 mr-1" />
                        <span className="sr-only">Home</span>
                    </a>
                </li>

                {/* Breadcrumb Items */}
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <ChevronRight className="h-4 w-4 mx-2 text-gray-400 animate-reveal-scale-sophisticated" />

                        {item.current ? (
                            <span className="text-brand-blue font-medium animate-bounce-in-sophisticated">
                                {item.label}
                            </span>
                        ) : item.href ? (
                            <a
                                href={item.href}
                                className="hover:text-brand-blue transition-colors duration-200 animate-elastic-sophisticated"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span className="text-gray-500">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
