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

    return (
        <section
            ref={elementRef}
            id="about"
            className={`relative overflow-hidden py-20 px-4 md:px-8 transition-opacity duration-1000 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="container mx-auto max-w-6xl">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left - Image */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                            {/* Badge Overlay */}
                            <div className="absolute top-4 left-4 z-20">
                                <div className="rounded-full bg-[#E9BA08] px-3 py-2 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <Star className="h-4 w-4 fill-current text-[#344871]" />
                                        <span className="text-sm font-bold text-[#344871]">
                                            Top Educator
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute right-4 bottom-4 z-20">
                                <div className="rounded-full bg-gradient-to-r from-[#006DD6] to-[#344871] px-4 py-2 text-white shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="h-4 w-4" />
                                        <span className="text-sm font-bold">
                                            8+ Years
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <img
                                src="/teacher/Pic.jpg"
                                alt="Rofsan Sir teaching"
                                className="h-auto w-full object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#006DD6]/20 to-[#344871]/20 blur-xl"></div>
                        <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-[#E9BA08]/30 to-[#006DD6]/20 blur-lg"></div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        {/* Header Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#006DD6]/10 px-4 py-2 text-sm font-medium text-[#006DD6]">
                            <Sparkles className="h-4 w-4" />
                            Cambridge Certified Professional
                        </div>

                        <h2 className="text-3xl md:text-4xl leading-tight font-bold text-[#344871]">
                            CAIE-Certified Bengali Educator | Examiner |
                            <span className="text-[#006DD6]"> Published Author</span>
                        </h2>

                        {/* Name Highlight */}
                        <div className="rounded-2xl bg-gradient-to-r from-[#006DD6]/10 to-[#344871]/10 p-6 border border-[#006DD6]/20">
                            <p className="mb-2 text-2xl font-bold text-[#344871]">
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
                            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-[#344871]">
                                <CheckCircle className="h-5 w-5 text-[#E9BA08]" />
                                Why Choose Rofsan Sir
                            </h3>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="group rounded-xl border border-gray-200 bg-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-lg bg-[#006DD6]/10 p-2 group-hover:bg-[#006DD6]/20 transition-colors">
                                                <Award className="h-5 w-5 text-[#006DD6]" />
                                            </div>
                                            <span className="font-bold text-[#344871] group-hover:text-[#006DD6] transition-colors">
                                                Cambridge Examiner Insight
                                            </span>
                                        </div>
                                    </div>

                                    <div className="group rounded-xl border border-gray-200 bg-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-lg bg-[#344871]/10 p-2 group-hover:bg-[#344871]/20 transition-colors">
                                                <Users className="h-5 w-5 text-[#344871]" />
                                            </div>
                                            <span className="font-bold text-[#344871] group-hover:text-[#344871] transition-colors">
                                                Student-Friendly Approach
                                            </span>
                                        </div>
                                    </div>

                                    <div className="group rounded-xl border border-gray-200 bg-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-lg bg-[#E9BA08]/10 p-2 group-hover:bg-[#E9BA08]/20 transition-colors">
                                                <Trophy className="h-5 w-5 text-[#344871]" />
                                            </div>
                                            <span className="font-bold text-[#344871]">
                                                Proven Track Record
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="group rounded-xl border border-gray-200 bg-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-lg bg-[#E9BA08]/10 p-2 group-hover:bg-[#E9BA08]/20 transition-colors">
                                                <BookOpen className="h-5 w-5 text-[#344871]" />
                                            </div>
                                            <span className="font-bold text-[#344871]">
                                                Published Author
                                            </span>
                                        </div>
                                    </div>

                                    <div className="group rounded-xl border border-gray-200 bg-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="rounded-lg bg-[#006DD6]/10 p-2 group-hover:bg-[#006DD6]/20 transition-colors">
                                                <Target className="h-5 w-5 text-[#006DD6]" />
                                            </div>
                                            <span className="font-bold text-[#344871] group-hover:text-[#006DD6] transition-colors">
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
                                className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#006DD6] to-[#344871] px-6 py-3 font-semibold text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
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
