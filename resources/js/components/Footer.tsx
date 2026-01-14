import {
    Award,
    BookOpen,
    Facebook,
    Globe,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    TrendingUp,
} from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { label: 'Home', href: '#' },
        { label: 'Courses & Admission', href: '#courses' },
        { label: 'Resources', href: '#resources' },
        { label: 'Students Portal', href: '#portal' },
        { label: 'Contact Us', href: '#contact' },
    ];

    const trustBadges = [
        {
            name: 'Cambridge Assessment International Education',
            logo: '/logos/cambridge-logo.png',
            alt: 'Cambridge Assessment Logo',
        },
        {
            name: 'Edexcel',
            logo: '/logos/edexcellogo.png',
            alt: 'Edexcel Logo',
        },
        {
            name: 'ELITES - Education Excellence Leadership',
            logo: '/logos/ELITES.png',
            alt: 'ELITES Logo',
        },
    ];

    return (
        <>
            {/* Footer CTA Section */}
            <section className="bg-gradient-to-r from-primary to-foreground py-12">
                <div className="container-max section-padding text-center">
                    <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                        Ready to Excel in O Level Bengali?
                    </h2>
                    <p className="mx-auto mb-6 max-w-2xl text-white/90">
                        Join thousands of successful students guided by a
                        Cambridge Examiner
                    </p>
                    <div className="mb-4 flex flex-col justify-center gap-4 sm:flex-row">
                        <button className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-primary hover:text-white">
                            Enroll Now
                        </button>
                        <button className="rounded-lg border-2 border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-primary">
                            View Resources
                        </button>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="border-t border-border bg-background py-8">
                <div className="container-max section-padding">
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {trustBadges.map((badge, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center rounded-lg bg-white p-4 shadow-soft"
                            >
                                <img
                                    src={badge.logo}
                                    alt={badge.alt}
                                    className="h-12 w-auto object-contain opacity-70"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Footer */}
            <footer className="bg-foreground pt-16 pb-8 text-white">
                <div className="container-max section-padding">
                    <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                        {/* Column 1: About Rofsan Sir */}
                        <div className="text-left lg:col-span-1">
                            <div className="mb-4">
                                <img
                                    src="/logos/footer-logo.png"
                                    alt="Rofsan Sir Logo"
                                    className="h-auto w-auto"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-300">
                                আগে চাই মাতৃভাষার শুদ্ধ পাঠ গ্রহণি
                            </p>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h4 className="mb-4 font-bold text-white">
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-300 transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Contact Information */}
                        <div>
                            <h4 className="mb-4 font-bold text-white">
                                Contact Us
                            </h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin className="mt-1 h-4 w-4 text-primary" />
                                    <div className="text-gray-300">
                                        <p className="font-medium">
                                            Main Location:
                                        </p>
                                        <p>
                                            7/7, Block-C, Lalmatia
                                            <br />
                                            Dhaka-1207, Bangladesh
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="mt-1 h-4 w-4 text-primary" />
                                    <div className="text-gray-300">
                                        <p>01711-772662</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="mt-1 h-4 w-4 text-primary" />
                                    <div className="text-gray-300">
                                        <p>rofsankhan@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 4: Office Hours & Social */}
                        <div>
                            <h4 className="mb-4 font-bold text-white">
                                Office Hours
                            </h4>
                            <div className="mb-6 space-y-2 text-sm text-gray-300">
                                <p>
                                    <span className="font-medium">
                                        Saturday - Thursday:
                                    </span>
                                    <br />
                                    9:00 AM - 8:00 PM
                                </p>
                                <p>
                                    <span className="font-medium">Friday:</span>
                                    <br />
                                    Closed
                                </p>
                            </div>

                            <h4 className="mb-4 font-bold text-white">
                                Follow Us
                            </h4>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="text-gray-300 transition-colors hover:text-white"
                                >
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 transition-colors hover:text-white"
                                >
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 transition-colors hover:text-white"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Column 5: Resources & Quick Info */}
                        <div>
                            <h4 className="mb-4 font-bold text-white">
                                Important Info
                            </h4>
                            <div className="mb-6 space-y-3 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4 text-primary" />
                                    <span>Online Classes Available</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4 text-primary" />
                                    <span>Cambridge Certified</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4 text-primary" />
                                    <span>Published Author</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4 text-primary" />
                                    <span>Proven Results</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer Bar */}
                    <div className="border-t border-white/20 pt-8">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <p className="text-sm text-gray-400">
                                © 2026 Rofsan Khan - O Level Bengali. All
                                Rights Reserved.
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm">
                                <a
                                    href="#"
                                    className="text-gray-400 transition-colors hover:text-white"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 transition-colors hover:text-white"
                                >
                                    Terms & Conditions
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 transition-colors hover:text-white"
                                >
                                    Refund Policy
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 transition-colors hover:text-white"
                                >
                                    Sitemap
                                </a>
                                <a
                                    href="/admin-login"
                                    className="text-gray-400 transition-colors hover:text-white"
                                >
                                    Admin
                                </a>
                            </div>
                            <a
                                href="https://sakibian.com"
                                className="text-sm text-gray-400"
                            >
                                Website Developed by sakibian.com
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
