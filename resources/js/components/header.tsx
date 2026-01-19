import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Rofsan Sir', href: '/about' },
        { label: 'Courses & Admission', href: '/courses' },
        { label: 'Resources', href: '/resources' },
        { label: 'Examiner Tips', href: '/tips' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-brand-gold/20 bg-white/95 backdrop-blur-md transition-all duration-300 supports-[backdrop-filter]:bg-white/90">
            <div className="container-max section-padding">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src="/logos/logo.png"
                            alt="Rofsan Sir Logo"
                            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="relative rounded px-2 py-1 text-sm font-medium text-brand-navy/70 transition-all duration-300 hover:text-brand-gold focus:text-brand-gold focus:ring-2 focus:ring-brand-gold/20 focus:ring-offset-2 focus:outline-none"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button
                            variant="default"
                            size="sm"
                            asChild
                            className="bg-brand-gold text-white transition-all duration-300 hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25"
                        >
                            <a href="/student/login">Students Portal</a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="rounded-lg p-2 transition-colors duration-300 hover:bg-brand-gold/10 focus:ring-2 focus:ring-brand-gold/20 focus:outline-none md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6 rotate-90 text-brand-navy transition-transform duration-300" />
                        ) : (
                            <Menu className="h-6 w-6 text-brand-navy transition-transform duration-300" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden border-t border-brand-gold/20 bg-white/95 backdrop-blur-md transition-all duration-500 md:hidden ${
                        mobileMenuOpen
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <nav className="flex flex-col gap-4 py-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="rounded px-2 py-1 text-sm font-medium text-brand-navy/70 transition-all duration-300 hover:translate-x-2 hover:text-brand-gold focus:text-brand-gold focus:ring-2 focus:ring-brand-gold/20 focus:ring-offset-2 focus:outline-none"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    transitionDelay: mobileMenuOpen
                                        ? `${index * 50}ms`
                                        : '0ms',
                                    transform: mobileMenuOpen
                                        ? 'translateX(0)'
                                        : 'translateX(-10px)',
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button
                            variant="default"
                            className="mt-2 bg-brand-gold text-white transition-all duration-300 hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25"
                        >
                            Enroll Now
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
