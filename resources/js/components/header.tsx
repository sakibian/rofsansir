import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Rofsan Sir', href: '/about' },
        { label: 'Courses & Admission', href: '/courses' },
        { label: 'Resources', href: '/resources' },
        { label: 'Examiner Tips', href: '/tips' },
    ];

    // Get current active link
    const currentPath =
        typeof window !== 'undefined' ? window.location.pathname : '/';

    return (
        <header className="sticky top-0 z-50 w-full border-b border-brand-navy/10 bg-white/95 shadow-sm backdrop-blur-md transition-all duration-300 supports-[backdrop-filter]:bg-white/90">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <a href="/" className="flex items-center gap-3">
                        <div className="relative">
                            <img
                                src="/logos/logo.png"
                                alt="Rofsan Sir Logo"
                                className="h-48 w-48"
                            />
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) => {
                            const isActive = currentPath === link.href;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`group relative overflow-hidden px-6 py-3 text-sm font-medium transition-all duration-300 hover:text-brand-blue focus:text-brand-blue focus:outline-none ${
                                        isActive
                                            ? 'font-semibold text-brand-blue'
                                            : 'text-gray-700'
                                    }`}
                                >
                                    {/* Glossy background effect */}
                                    <div
                                        className={`absolute inset-0 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                                            isActive
                                                ? 'border border-brand-blue/10 bg-white/95 shadow-lg shadow-brand-blue/10'
                                                : 'bg-white/40 opacity-0 group-hover:bg-white/70 group-hover:opacity-100 group-hover:shadow-md'
                                        }`}
                                    ></div>

                                    {/* Glossy shadow overlay */}
                                    <div
                                        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                                            isActive
                                                ? 'shadow-inner shadow-brand-blue/5'
                                                : 'group-hover:shadow-inner group-hover:shadow-gray-100/50'
                                        }`}
                                    ></div>

                                    {/* Text with smooth transition */}
                                    <span className="relative z-10 transition-all duration-300 group-hover:font-medium">
                                        {link.label}
                                    </span>
                                </a>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <a
                            href="/student/login"
                            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-navy px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-brand-blue/90 hover:to-brand-navy/90 focus:ring-2 focus:ring-brand-blue/20 focus:ring-offset-2"
                        >
                            <span>Students Portal</span>
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Menu Button with Enhanced Touch Target */}
                    <button
                        className="touch-manipulation rounded-lg p-3 transition-all duration-300 hover:scale-110 hover:bg-brand-navy/10 focus:ring-2 focus:ring-brand-navy/20 focus:outline-none active:scale-95 lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? (
                            <X className="animate-elastic-sophisticated h-7 w-7 rotate-90 text-brand-navy transition-transform duration-300" />
                        ) : (
                            <Menu className="animate-elastic-sophisticated h-7 w-7 text-brand-navy transition-transform duration-300" />
                        )}
                    </button>
                </div>

                {/* Enhanced Mobile Menu */}
                <div
                    className={`overflow-hidden border-t border-brand-navy/10 bg-white/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
                        mobileMenuOpen
                            ? 'max-h-screen opacity-100'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <nav className="flex flex-col gap-1 px-4 py-6">
                        {navLinks.map((link) => {
                            const isActive = currentPath === link.href;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`relative rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gray-50 hover:text-brand-blue ${
                                        isActive
                                            ? 'bg-blue-50 font-semibold text-brand-blue'
                                            : 'text-gray-700'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                    {/* Clean active indicator for mobile */}
                                    {isActive && (
                                        <div className="absolute top-1/2 left-0 h-8 w-1 -translate-y-1/2 transform rounded-r-full bg-brand-blue"></div>
                                    )}
                                </a>
                            );
                        })}

                        <div className="mt-6 border-t border-brand-navy/10 pt-6">
                            <a
                                href="/student/login"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-navy px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-brand-blue/90 hover:to-brand-navy/90 focus:ring-2 focus:ring-brand-blue/20 focus:ring-offset-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span>Students Portal</span>
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
