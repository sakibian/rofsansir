import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* FAB Menu */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                {/* Quick Actions */}
                {isOpen && (
                    <div className="flex flex-col gap-3 mb-2 animate-in slide-in-from-bottom-2 fade-in duration-300">
                        <a
                            href="https://wa.me/8801948116595"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <MessageCircle className="h-5 w-5" />
                            <span className="font-medium">WhatsApp</span>
                        </a>

                        <a
                            href="tel:+8801948116595"
                            className="flex items-center gap-3 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <Phone className="h-5 w-5" />
                            <span className="font-medium">Call Now</span>
                        </a>

                        <a
                            href="/student/login"
                            className="flex items-center gap-3 bg-gradient-to-r from-brand-blue to-brand-navy hover:from-brand-blue/90 hover:to-brand-navy/90 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="font-medium">Students Portal</span>
                        </a>
                    </div>
                )}

                {/* Main FAB Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`btn-magnetic-sophisticated group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-navy text-white shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-blue/30 ${
                        isOpen ? 'rotate-45' : ''
                    }`}
                    aria-label={isOpen ? 'Close menu' : 'Open contact menu'}
                >
                    {/* Pulse Animation */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-navy animate-glow-pulse-sophisticated opacity-30"></div>

                    {/* Icon */}
                    {isOpen ? (
                        <X className="h-6 w-6 transition-transform duration-300" />
                    ) : (
                        <MessageCircle className="h-6 w-6 transition-transform duration-300" />
                    )}

                    {/* Tooltip */}
                    {!isOpen && (
                        <div className="absolute right-full top-1/2 mr-3 -translate-y-1/2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 whitespace-nowrap animate-elastic-sophisticated">
                            Get in Touch
                            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                        </div>
                    )}
                </button>
            </div>
        </>
    );
};

export default FloatingActionButton;
