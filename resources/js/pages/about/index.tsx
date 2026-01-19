import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';
import {
    User,
    Award,
    BookOpen,
    GraduationCap,
    Users,
    Target,
    CheckCircle,
    Star,
    MapPin,
    Phone,
    Mail,
    Lightbulb,
    Trophy,
    Heart
} from 'lucide-react';

type AboutCard = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    items: string[];
    summary: string;
    color: ColorType;
};

const aboutCards: AboutCard[] = [
    {
        icon: User,
        title: 'Meet Rofsan Sir',
        items: [
            'CAIE-Certified Bengali Educator',
            'Cambridge-approved O Level Examiner',
            '8+ years teaching experience',
            'Published author of Bengali guidebooks'
        ],
        summary: 'A dedicated educator specializing in making Bengali accessible for English-medium students, combining Cambridge expertise with modern teaching methods.',
        color: 'blue'
    },
    {
        icon: Award,
        title: 'Professional Experience',
        items: [
            'Senior Faculty at Oxford International School',
            'Lead Teacher at European Standard School',
            'Department leadership and teacher training',
            'Curriculum development and assessment design'
        ],
        summary: 'Extensive leadership experience in prestigious educational institutions, focusing on curriculum excellence and teacher development.',
        color: 'navy'
    },
    {
        icon: GraduationCap,
        title: 'Academic Excellence',
        items: [
            'Honours & Master\'s in Bengali Literature',
            'Cambridge International Education training',
            'Assessment Specialist certification',
            'Continuous professional development'
        ],
        summary: 'Strong academic foundation combined with specialized Cambridge training, ensuring world-class Bengali language instruction.',
        color: 'gold'
    },
    {
        icon: Target,
        title: 'Examiner Insights',
        items: [
            'Direct Cambridge marking experience',
            'Deep understanding of mark schemes',
            'Assessment methodology expertise',
            'Exam preparation strategies'
        ],
        summary: 'Unique dual perspective as both teacher and examiner, providing students with insider knowledge for exam success.',
        color: 'blue'
    },
    {
        icon: Lightbulb,
        title: 'Teaching Philosophy',
        items: [
            'Research-based modern approach',
            'Student-centered learning',
            'Simplified grammar instruction',
            'Anti-rote learning design'
        ],
        summary: 'Innovative pedagogy that makes Bengali accessible without compromising academic rigor, focusing on genuine language proficiency.',
        color: 'navy'
    },
    {
        icon: Trophy,
        title: 'Student Success',
        items: [
            'Consistent high grades (A* and A)',
            'Increased confidence in Bengali',
            'Strong Paper 1 & Paper 2 performance',
            'Genuine language proficiency'
        ],
        summary: 'Proven track record of transforming student confidence and achieving outstanding examination results year after year.',
        color: 'gold'
    },
    {
        icon: BookOpen,
        title: 'Published Author',
        items: [
            'O Level Bengali Basics Plus',
            'O Level Bengali Compositions Plus',
            'O Level Bengali Practice Plus',
            'O Level Bengali Foundation Plus'
        ],
        summary: 'Author of comprehensive guidebooks addressing real classroom challenges, providing practical solutions for English-medium learners.',
        color: 'blue'
    },
    {
        icon: Users,
        title: 'Modern Learning Environment',
        items: [
            'Technology-integrated classrooms',
            'Interactive digital resources',
            'Regular assessments & feedback',
            'Supportive atmosphere'
        ],
        summary: 'Contemporary learning environment with digital tools, multimedia resources, and personalized attention for optimal student success.',
        color: 'navy'
    },
    {
        icon: Heart,
        title: 'Why Choose Rofsan Sir',
        items: [
            'Easy-to-understand teaching',
            'Confidence-building approach',
            'Clear exam preparation',
            'Strong foundational skills'
        ],
        summary: 'Choose clarity, confidence, and excellence in Bengali education. Experience teaching that makes learning enjoyable and successful.',
        color: 'gold'
    }
];

type ColorType = 'blue' | 'navy' | 'gold';

const colorClasses: Record<ColorType, { border: string; icon: string; bgIcon: string; hover: string }> = {
    blue: {
        border: 'border-t-brand-blue',
        icon: 'text-brand-blue',
        bgIcon: 'bg-brand-blue/10',
        hover: 'hover:shadow-brand-blue/20'
    },
    navy: {
        border: 'border-t-brand-navy',
        icon: 'text-brand-navy',
        bgIcon: 'bg-brand-navy/10',
        hover: 'hover:shadow-brand-navy/20'
    },
    gold: {
        border: 'border-t-brand-gold',
        icon: 'text-brand-navy',
        bgIcon: 'bg-brand-gold/10',
        hover: 'hover:shadow-brand-gold/20'
    }
};

export default function About() {
    return (
        <>
            <Head title="About Rofsan Sir - Cambridge Examiner" />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
                <Header />

                {/* Page Header */}
                <section className="bg-gradient-to-br from-brand-blue/5 via-white to-brand-navy/5 py-20">
                    <div className="container-max section-padding">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent mb-6">
                                Meet Your Bengali Teacher
                            </h1>
                            <p className="text-xl md:text-2xl text-brand-navy max-w-4xl mx-auto font-light">
                                CAIE-Certified Educator | Cambridge Examiner | Published Author
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-brand-navy/80">
                                <span className="flex items-center gap-2">
                                    <Star className="h-4 w-4 text-brand-gold" />
                                    8+ Years Experience
                                </span>
                                <span className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4 text-brand-blue" />
                                    Cambridge Trained
                                </span>
                                <span className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4 text-brand-navy" />
                                    Published Author
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Cards Grid */}
                <section className="py-20 px-4 md:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-6 text-3xl md:text-5xl font-bold text-brand-navy">
                                Discover Rofsan Sir's Journey
                            </h2>
                            <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
                                A comprehensive overview of expertise, experience, and dedication to
                                Bengali language education that has helped thousands of students succeed.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {aboutCards.map((card, index) => {
                                const colorClass = colorClasses[card.color];
                                return (
                                    <div
                                        key={index}
                                        className={`group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${colorClass.border} border-t-4 ${colorClass.hover}`}
                                    >
                                        <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:scale-110 mx-auto ${colorClass.bgIcon}`}>
                                            <card.icon className={`h-8 w-8 ${colorClass.icon} transition-transform duration-300`} />
                                        </div>
                                        <h3 className="mb-4 text-xl font-bold text-brand-navy">
                                            {card.title}
                                        </h3>
                                        <ul className="space-y-2 mb-6 text-left">
                                            {card.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <CheckCircle className={`h-4 w-4 text-green-500 mt-0.5 flex-shrink-0`} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {card.summary}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <section className="py-20 bg-gradient-to-r from-brand-navy/5 to-brand-blue/5">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">Vision & Mission</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                                        <Target className="h-6 w-6 text-brand-blue" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-navy">Vision</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To make Bengali language education accessible, engaging, and successful for English medium students across Bangladesh and beyond, while preserving the beauty and cultural richness of the language.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/10">
                                        <Lightbulb className="h-6 w-6 text-brand-navy" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-navy">Mission</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To provide world-class Bengali language instruction that combines Cambridge assessment expertise with innovative, student-centered teaching methods, enabling students to achieve academic excellence while developing genuine language proficiency and cultural appreciation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Connect Section */}
                <section className="py-20">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">Connect With Rofsan Khan</h2>

                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10">
                                            <Mail className="h-5 w-5 text-brand-blue" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-brand-navy">Email</h3>
                                            <p className="text-gray-600">rofsankhan@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy/10">
                                            <MapPin className="h-5 w-5 text-brand-navy" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-brand-navy">Location</h3>
                                            <p className="text-gray-600">Lalmatia, Dhaka-1207, Bangladesh</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/10">
                                            <Phone className="h-5 w-5 text-brand-navy" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-brand-navy">Phone</h3>
                                            <p className="text-gray-600">+880 1948-116595</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-brand-blue/5 to-brand-navy/5 p-8 rounded-2xl border border-brand-blue/20">
                                    <h3 className="text-xl font-bold text-brand-navy mb-4">Get Started Today</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Ready to excel in O Level Bengali? Join Rofsan Sir's proven program and experience the difference that Cambridge expertise and modern teaching methods can make.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="/courses"
                                            className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-blue to-brand-navy text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                                        >
                                            Explore Courses
                                        </a>
                                        <a
                                            href="/contact"
                                            className="flex-1 inline-flex items-center justify-center gap-3 bg-white text-brand-navy border border-brand-navy px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-brand-navy hover:text-white"
                                        >
                                            Contact Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
