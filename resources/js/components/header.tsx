import { Button } from '@/components/ui/button';
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

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-max section-padding">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-40 w-40 rounded-lg object-cover"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button variant="default" size="sm" asChild>
                            <a href="/student/login">Students Portal</a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="p-2 md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6 text-foreground" />
                        ) : (
                            <Menu className="h-6 w-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="border-t border-border py-4 md:hidden">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button variant="hero" className="mt-2">
                                Enroll Now
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
