import {
    Award,
    BookOpen,
    Shield,
    Sparkles,
    Target,
    TrendingUp,
} from 'lucide-react';

const WhyRofsanSirSection = () => {
    const keyPoints = [
        {
            title: 'Cambridge Examiner',
            description:
                'Insider knowledge of CAIE marking and assessment objectives',
            icon: Target,
            color: 'text-[#006DD6]',
        },
        {
            title: '8+ Years Experience',
            description:
                'Specialized in English-medium Bengali education at top schools',
            icon: Award,
            color: 'text-[#E9BA08]',
        },
        {
            title: 'Published Author',
            description:
                'Original textbooks designed specifically for struggling students',
            icon: BookOpen,
            color: 'text-[#344871]',
        },
        {
            title: 'Ethical Teaching',
            description: 'Real understanding over shortcuts and exam tricks',
            icon: Shield,
            color: 'text-green-600',
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#006DD6]/10 px-4 py-2 text-sm font-medium text-[#006DD6]">
                        <Sparkles className="h-4 w-4" />
                        Cambridge Certified Educator
                    </div>
                    <h2 className="mb-4 text-3xl md:text-4xl font-bold text-[#344871]">
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
                            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`mb-4 text-4xl ${point.color}`}>
                                <point.icon className="h-12 w-12" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-[#344871] group-hover:text-[#006DD6] transition-colors">
                                {point.title}
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Unique Value Proposition */}
                <div className="mb-16 rounded-2xl bg-gradient-to-r from-[#006DD6]/10 to-[#344871]/10 p-8 md:p-12 border border-[#006DD6]/20">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#006DD6] shadow-sm">
                            <TrendingUp className="h-4 w-4" />
                            Proven Results
                        </div>
                        <h3 className="mb-8 text-2xl md:text-3xl font-bold text-[#344871]">
                            What Makes Rofsan Sir Different?
                        </h3>
                        <div className="grid gap-8 text-center md:grid-cols-3">
                            <div className="space-y-3">
                                <div className="flex justify-center text-4xl text-[#006DD6]">
                                    <Target className="h-10 w-10" />
                                </div>
                                <h4 className="text-lg font-bold text-[#344871]">
                                    He Knows Your Papers
                                </h4>
                                <p className="text-gray-600">
                                    As a Cambridge examiner, he literally marks
                                    your O Level papers. You learn from someone
                                    who knows exactly what gets top grades.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-center text-4xl text-[#E9BA08]">
                                    <Award className="h-10 w-10" />
                                </div>
                                <h4 className="text-lg font-bold text-[#344871]">
                                    Your Learning Journey
                                </h4>
                                <p className="text-gray-600">
                                    He gets your struggle as an English-medium
                                    student. After 8+ years teaching, he knows
                                    exactly how to make Bengali click for you.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-center text-4xl text-[#344871]">
                                    <BookOpen className="h-10 w-10" />
                                </div>
                                <h4 className="text-lg font-bold text-[#344871]">
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
            <div className="bg-gradient-to-r from-[#006DD6] to-[#344871] py-20 px-4 md:px-8 text-center">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm">
                        <Sparkles className="h-5 w-5" />
                        Start Your Success Journey Today
                    </div>

                    <h3 className="mb-8 text-3xl md:text-4xl leading-tight font-bold text-white">
                        Ready to Build Confidence in
                        <br />
                        <span className="text-[#E9BA08]">
                            O Level Bengali?
                        </span>
                    </h3>

                    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/90">
                        A structured learning journey designed for
                        English-medium students, combining clear explanations,
                        regular practice, and exam-focused preparation aligned
                        with CAIE standards.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <button className="bg-[#E9BA08] text-[#344871] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d4a607] transition-colors shadow-lg">
                            Join Now
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#344871] transition-colors">
                            Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyRofsanSirSection;
