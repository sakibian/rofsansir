import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Youtube,
} from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Courses', href: '/courses' },
        { label: 'Resources', href: '/resources' },
        { label: 'Tips', href: '/tips' },
        { label: 'Contact', href: '/contact' },
    ];

    const courses = [
        { label: 'O Level Bengali', href: '/courses/o-level-bengali' },
        { label: 'Paper 1: Composition', href: '/courses/paper-1' },
        { label: 'Paper 2: Language', href: '/courses/paper-2' },
        { label: 'Grammar Mastery', href: '/courses/grammar' },
        { label: 'Vocabulary Building', href: '/courses/vocabulary' },
        { label: 'Exam Preparation', href: '/courses/exam-prep' },
    ];

    const resources = [
        { label: 'Study Materials', href: '/resources/study-materials' },
        { label: 'Practice Tests', href: '/resources/practice-tests' },
        { label: 'Video Tutorials', href: '/resources/video-tutorials' },
        { label: 'Exam Tips', href: '/resources/exam-tips' },
        { label: 'Downloads', href: '/resources/downloads' },
        { label: 'Blog', href: '/resources/blog' },
    ];

    return (
        <>
            {/* Back to Top Button */}
            <button
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    })
                }
                className="fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 font-semibold text-brand-navy shadow-lg transition-all duration-300 hover:bg-brand-navy/90"
            >
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
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
                Back to Top
            </button>

            {/* Main Footer */}
            <footer className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy text-white">
                <div className="container-max section-padding py-16">
                    <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Brand Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                                    <img
                                        src="/logos/footer-logo.png"
                                        alt="Rofsan Sir Logo"
                                        className="h-64 w-64"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3 text-sm text-white/70">
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-4 w-4 text-white/80" />
                                    <span>
                                        Lalmatia, Dhaka-1207, Bangladesh
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-white/80" />
                                    <span>+880 1948-116595</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-white/80" />
                                    <span>rofsankhan@gmail.com</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="https://www.facebook.com/rofsankhan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 hover:bg-brand-navy hover:text-brand-navy"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@rofsankhan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 hover:bg-brand-navy hover:text-brand-navy"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/rofsankhan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 hover:bg-brand-navy hover:text-brand-navy"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/rofsankhan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 hover:bg-brand-navy hover:text-brand-navy"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white">
                                Quick Links
                            </h4>
                            <ul className="space-y-3 text-white/80">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Courses */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white">
                                Courses
                            </h4>
                            <ul className="space-y-3 text-white/80">
                                {courses.map((course) => (
                                    <li key={course.label}>
                                        <a
                                            href={course.href}
                                            className="transition-colors hover:text-white"
                                        >
                                            {course.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white">
                                Resources
                            </h4>
                            <ul className="space-y-3 text-white/80">
                                {resources.map((resource) => (
                                    <li key={resource.label}>
                                        <a
                                            href={resource.href}
                                            className="transition-colors hover:text-white"
                                        >
                                            {resource.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 bg-white/5">
                    <div className="container-max section-padding">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <p className="text-sm text-white/70">
                                © {new Date().getFullYear()} Rofsan Sir. All
                                rights reserved.
                            </p>

                            <div className="flex items-center gap-6 text-sm text-white/70">
                                <a
                                    href="/privacy"
                                    className="transition-colors hover:text-white"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="/terms"
                                    className="transition-colors hover:text-white"
                                >
                                    Terms of Service
                                </a>
                                <a
                                    href="/sitemap"
                                    className="transition-colors hover:text-white"
                                >
                                    Sitemap
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
