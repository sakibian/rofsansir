import { useCardHoverAnimation } from '@/animations/hooks/useHoverAnimation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import {
    ArrowRight,
    Award,
    BookOpen,
    CheckCircle,
    GraduationCap,
    Sparkles,
    Star,
    Target,
    Trophy,
    Users,
} from 'lucide-react';

const MentorSection = () => {
    const { elementRef, isIntersecting } = useIntersectionObserver({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { hoverStyles: cardHoverStyles, hoverHandlers: cardHoverHandlers } =
        useCardHoverAnimation();

    return (
        <section
            ref={elementRef}
            id="about"
            className={`relative overflow-hidden px-4 py-20 transition-opacity duration-1000 md:px-8 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="container mx-auto max-w-6xl">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left - Image */}
                    <div className="relative">
                        <div className="hover:shadow-3xl relative overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-300">
                            {/* Badge Overlay */}
                            <div className="absolute top-4 left-4 z-20">
                                <div className="rounded-full bg-brand-navy px-3 py-2 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <Star className="h-4 w-4 fill-current text-white" />
                                        <span className="text-sm font-bold text-white">
                                            Top Educator
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute right-4 bottom-4 z-20">
                                <div className="rounded-full bg-gradient-to-r from-brand-blue to-brand-navy px-4 py-2 text-white shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="h-4 w-4" />
                                        <span className="text-sm font-bold">
                                            8+ Years
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <img
                                src="/teacher/12.jpg"
                                alt="Rofsan Sir teaching"
                                className="h-auto w-full object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-navy/20 blur-xl"></div>
                        <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-brand-navy/30 to-brand-blue/20 blur-lg"></div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        {/* Header Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-medium text-brand-blue">
                            <Sparkles className="h-4 w-4" />
                            Cambridge Certified Professional
                        </div>

                        <h2 className="text-3xl leading-tight font-bold text-brand-navy md:text-4xl">
                            CAIE-Certified Bengali Educator | Examiner |
                            <span className="text-brand-blue">
                                {' '}
                                Published Author
                            </span>
                        </h2>

                        {/* Name Highlight */}
                        <div className="rounded-2xl border border-brand-blue/20 bg-gradient-to-r from-brand-blue/10 to-brand-navy/10 p-6">
                            <p className="mb-2 text-2xl font-bold text-brand-navy">
                                Rofsan Sir
                            </p>
                            <p className="leading-relaxed text-gray-700">
                                Cambridge-approved O Level Bengali Examiner with
                                over eight years of experience teaching
                                English-medium students. Specializes in helping
                                learners who struggle with Bengali build
                                confidence and achieve examination success.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-brand-navy">
                                <CheckCircle className="h-5 w-5 text-brand-navy" />
                                Why Choose Rofsan Sir
                            </h3>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div
                                        className="group rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300"
                                        style={cardHoverStyles}
                                        {...cardHoverHandlers}
                                    >
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-lg bg-brand-blue/10 p-2 transition-colors">
                                                <Award className="h-5 w-5 text-brand-blue" />
                                            </div>
                                            <span className="font-bold text-brand-navy transition-colors">
                                                Cambridge Examiner Insight
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="group rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300"
                                        style={cardHoverStyles}
                                        {...cardHoverHandlers}
                                    >
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-lg bg-brand-navy/10 p-2 transition-colors">
                                                <Users className="h-5 w-5 text-brand-navy" />
                                            </div>
                                            <span className="font-bold text-brand-navy transition-colors">
                                                Student-Friendly Approach
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="group rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300"
                                        style={cardHoverStyles}
                                        {...cardHoverHandlers}
                                    >
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-lg bg-brand-navy/10 p-2 transition-colors">
                                                <Trophy className="h-5 w-5 text-brand-navy" />
                                            </div>
                                            <span className="font-bold text-brand-navy">
                                                Proven Track Record
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div
                                        className="group rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300"
                                        style={cardHoverStyles}
                                        {...cardHoverHandlers}
                                    >
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-lg bg-brand-navy/10 p-2 transition-colors">
                                                <BookOpen className="h-5 w-5 text-brand-navy" />
                                            </div>
                                            <span className="font-bold text-brand-navy transition-colors">
                                                Published Author
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="group rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300"
                                        style={cardHoverStyles}
                                        {...cardHoverHandlers}
                                    >
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-lg bg-brand-blue/10 p-2 transition-colors">
                                                <Target className="h-5 w-5 text-brand-blue" />
                                            </div>
                                            <span className="font-bold text-brand-navy transition-colors">
                                                Comprehensive Preparation
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="/about"
                                className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-brand-blue to-brand-navy px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/30"
                            >
                                Read Full Biography
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorSection;
