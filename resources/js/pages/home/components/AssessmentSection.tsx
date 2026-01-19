import {
    Bell,
    CheckCircle,
    Clock,
    FileCheck,
    MessageSquare,
    TrendingUp,
    Users,
} from 'lucide-react';

const examFeatures = [
    {
        title: 'Monthly Evaluation',
    },
    {
        title: 'Quick Pop Assessments',
    },
    {
        title: 'Mid-Term Exam',
    },
    {
        title: 'Final / Yearly Exam',
    },
    {
        title: 'Topic-Wise Mock Test',
    },
    {
        title: 'Complete Mock Exam',
    },
];

const supportFeatures = [
    {
        icon: FileCheck,
        title: 'Detailed Script Checking',
        description: 'Comprehensive review of assessment scripts with detailed feedback',
        bgColor: 'bg-[#006DD6]/10',
        iconColor: 'text-[#006DD6]',
        borderColor: 'border-[#006DD6]/20',
        hoverBg: 'hover:bg-[#006DD6]/20',
        gradient: 'from-[#006DD6]/5 to-transparent',
    },
    {
        icon: MessageSquare,
        title: 'Written Feedback',
        description: 'Clear improvement guidelines and personalized recommendations',
        bgColor: 'bg-[#344871]/10',
        iconColor: 'text-[#344871]',
        borderColor: 'border-[#344871]/20',
        hoverBg: 'hover:bg-[#344871]/20',
        gradient: 'from-[#344871]/5 to-transparent',
    },
    {
        icon: Users,
        title: 'One-to-One Guidance',
        description: 'Personalized mentoring sessions when additional support is needed',
        bgColor: 'bg-[#E9BA08]/10',
        iconColor: 'text-[#344871]',
        borderColor: 'border-[#E9BA08]/20',
        hoverBg: 'hover:bg-[#E9BA08]/20',
        gradient: 'from-[#E9BA08]/5 to-transparent',
    },
    {
        icon: TrendingUp,
        title: 'Progress Tracking',
        description: 'Monitor academic improvement over time with detailed analytics',
        bgColor: 'bg-[#006DD6]/10',
        iconColor: 'text-[#006DD6]',
        borderColor: 'border-[#006DD6]/20',
        hoverBg: 'hover:bg-[#006DD6]/20',
        gradient: 'from-[#006DD6]/5 to-transparent',
    },
    {
        icon: Clock,
        title: 'Exam Time-Management',
        description: 'Practice sessions focused on effective exam timing strategies',
        bgColor: 'bg-[#344871]/10',
        iconColor: 'text-[#344871]',
        borderColor: 'border-[#344871]/20',
        hoverBg: 'hover:bg-[#344871]/20',
        gradient: 'from-[#344871]/5 to-transparent',
    },
    {
        icon: Bell,
        title: 'Parent Updates',
        description: 'Regular meetings and updates to keep parents informed',
        bgColor: 'bg-[#E9BA08]/10',
        iconColor: 'text-[#344871]',
        borderColor: 'border-[#E9BA08]/20',
        hoverBg: 'hover:bg-[#E9BA08]/20',
        gradient: 'from-[#E9BA08]/5 to-transparent',
    },
];

const AssessmentSection = () => {
    return (
        <section
            id="assessment"
            className="py-20 px-4 md:px-8"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-3xl md:text-4xl font-bold text-[#344871]">
                        Assessment & Examinations
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600">
                        Regular assessments and examinations to track progress
                        and ensure exam readiness with comprehensive support
                        system.
                    </p>
                </div>

                {/* Exam Features Grid */}
                <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {examFeatures.map((feature, index) => {
                        const colors = [
                            {
                                border: 'border-t-[#006DD6]',
                                bg: 'bg-[#006DD6]/10',
                            },
                            {
                                border: 'border-t-[#344871]',
                                bg: 'bg-[#344871]/10',
                            },
                            {
                                border: 'border-t-[#E9BA08]',
                                bg: 'bg-[#E9BA08]/10',
                            },
                            {
                                border: 'border-t-[#006DD6]',
                                bg: 'bg-[#006DD6]/10',
                            },
                            {
                                border: 'border-t-[#344871]',
                                bg: 'bg-[#344871]/10',
                            },
                            {
                                border: 'border-t-[#E9BA08]',
                                bg: 'bg-[#E9BA08]/10',
                            },
                        ];
                        const color = colors[index % colors.length];
                        return (
                            <div
                                key={index}
                                className={`group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${color.border} border-t-4`}
                            >
                                <div className={`w-16 h-16 ${color.bg} rounded-lg flex items-center justify-center mb-4`}>
                                    <CheckCircle className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#344871]">
                                    {feature.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Support Section */}
                <div>
                    <h3 className="mb-12 text-center text-3xl font-bold text-[#344871]">
                        Comprehensive Support System
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {supportFeatures.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group rounded-xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Background gradient overlay */}
                                    <div
                                        className={`absolute inset-0 ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl`}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent
                                                className={`h-6 w-6 ${feature.iconColor}`}
                                            />
                                        </div>
                                        <h4 className="mb-2 text-lg font-semibold text-[#344871]">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm leading-relaxed text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssessmentSection;
