import { useCardHoverAnimation } from '@/animations/hooks/useHoverAnimation';
import useStaggeredAnimation from '@/animations/hooks/useStaggeredAnimation';
import {
    Award,
    BookOpen,
    Shield,
    Sparkles,
    Target,
    TrendingUp,
} from 'lucide-react';

const WhyRofsanSirSection = () => {
    const { elementRef, isIntersecting } = useStaggeredAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { hoverStyles: cardHoverStyles, hoverHandlers: cardHoverHandlers } =
        useCardHoverAnimation();

    const keyPoints = [
        {
            title: 'Cambridge Examiner',
            description:
                'Insider knowledge of CAIE marking and assessment objectives',
            icon: Target,
            color: 'text-brand-blue',
        },
        {
            title: '8+ Years Experience',
            description:
                'Specialized in English-medium Bengali education at top schools',
            icon: Award,
            color: 'text-brand-navy',
        },
        {
            title: 'Published Author',
            description:
                'Original textbooks designed specifically for struggling students',
            icon: BookOpen,
            color: 'text-brand-navy',
        },
        {
            title: 'Ethical Teaching',
            description: 'Real understanding over shortcuts and exam tricks',
            icon: Shield,
            color: 'text-green-600',
        },
    ];

    return (
        <section
            ref={elementRef}
            className={`px-4 py-20 transition-opacity duration-1000 md:px-8 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div
                className="container mx-auto max-w-6xl"
                aria-label="Why choose Rofsan Sir"
                role="region"
            >
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-medium text-brand-blue">
                        <Sparkles className="h-4 w-4" />
                        Cambridge Certified Educator
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-brand-navy md:text-4xl">
                        Why Rofsan Sir?
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        The Cambridge Examiner who understands English-medium
                        students and their unique challenges.
                    </p>
                </div>

                {/* Key Points Grid */}
                <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {keyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300"
                            style={cardHoverStyles}
                            {...cardHoverHandlers}
                        >
                            <div className={`mb-4 text-4xl ${point.color}`}>
                                <point.icon className="h-12 w-12" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-brand-navy transition-colors group-hover:text-brand-blue">
                                {point.title}
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Unique Value Proposition */}
                <div className="mb-16 rounded-2xl border border-brand-blue/20 bg-gradient-to-r from-brand-blue/10 to-brand-navy/10 p-8 md:p-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-blue shadow-sm">
                            <TrendingUp className="h-4 w-4" />
                            Proven Results
                        </div>
                        <h3 className="mb-8 text-2xl font-bold text-brand-navy md:text-3xl">
                            What Makes Rofsan Sir Different?
                        </h3>
                        <div className="grid gap-8 text-center md:grid-cols-3">
                            <div className="space-y-3">
                                <div className="flex justify-center text-4xl text-brand-blue">
                                    <Target className="h-10 w-10" />
                                </div>
                                <h4 className="text-lg font-bold text-brand-navy">
                                    He Knows Your Papers
                                </h4>
                                <p className="text-gray-600">
                                    As a Cambridge examiner, he literally marks
                                    your O Level papers. You learn from someone
                                    who knows exactly what gets top grades.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-center text-4xl text-brand-navy">
                                    <Award className="h-10 w-10" />
                                </div>
                                <h4 className="text-lg font-bold text-brand-navy">
                                    Your Learning Journey
                                </h4>
                                <p className="text-gray-600">
                                    He gets your struggle as an English-medium
                                    student. After 8+ years teaching, he knows
                                    exactly how to make Bengali click for you.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-center text-4xl text-brand-navy">
                                    <BookOpen className="h-10 w-10" />
                                </div>
                                <h4 className="text-lg font-bold text-brand-navy">
                                    Real Student, Real Books
                                </h4>
                                <p className="text-gray-600">
                                    His books aren't generic textbooks—they're
                                    written for real students like you, tested
                                    in his classroom, proven to work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width CTA */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-navy px-4 py-20 text-center md:px-8">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm">
                        <Sparkles className="h-5 w-5" />
                        Start Your Success Journey Today
                    </div>

                    <h3 className="mb-8 text-3xl leading-tight font-bold text-white md:text-4xl">
                        Ready to Build Confidence in
                        <br />
                        <span className="text-white/90">O Level Bengali?</span>
                    </h3>

                    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/90">
                        A structured learning journey designed for
                        English-medium students, combining clear explanations,
                        regular practice, and exam-focused preparation aligned
                        with CAIE standards.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <button className="rounded-lg bg-gradient-to-r from-brand-blue to-brand-navy px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-xl hover:shadow-brand-blue/30">
                            Join Now
                        </button>
                        <button className="rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-brand-navy hover:shadow-lg">
                            Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyRofsanSirSection;
