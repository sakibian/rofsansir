import { BookOpen, CheckCircle, TestTube } from 'lucide-react';

const courseFeatures = [
    {
        icon: BookOpen,
        title: 'Paper 01 – Composition Writing',
        items: ['Letter Writing', 'Report Writing', 'Dialogue Writing', 'Essay Writing'],
        summary: 'Students are guided to organise ideas clearly, maintain appropriate tone, and write accurately within exam requirements.'
    },
    {
        icon: TestTube,
        title: 'Paper 02 – Language & Comprehension',
        items: ['Combination of Words', 'Bengali Idioms and Proverbs', 'Sentence Transformation', 'Cloze Passage', 'Multiple Choice (MCQ) Comprehension', 'Open-Ended Comprehension', 'Vocabulary Development'],
        summary: 'Emphasis is placed on understanding language structure, meaning, and accurate application in examination contexts.'
    },
    {
        icon: CheckCircle,
        title: 'Special Skills Development',
        items: ['Systematic Vocabulary Building', 'Correct Sentence Construction', 'Spelling Accuracy and Error Correction', 'Freehand Writing Practice', 'Exam-Oriented Writing Techniques', 'Answer Structuring for Maximum Marks', 'Time Management in Writing Tasks', 'Clarity and Coherence in Expression'],
        summary: 'These skills are developed gradually to help students feel confident, reduce fear of Bengali, and perform consistently in examinations.'
    },
];

const CoursesSection = () => {
    return (
        <section
            id="courses"
            className="py-20 px-4 md:px-8"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-3xl md:text-4xl font-bold text-[#344871]">
                        O Level Bangla Full Course
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600">
                        Comprehensive preparation for both papers with a
                        Cambridge Examiner, featuring modern teaching methods
                        and proven results.
                    </p>
                </div>

                {/* Course Features Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {courseFeatures.map((feature, index) => {
                        const colors = [
                            { border: 'border-t-[#006DD6]', icon: 'text-[#006DD6]', bgIcon: 'bg-[#006DD6]/10' },
                            { border: 'border-t-[#344871]', icon: 'text-[#344871]', bgIcon: 'bg-[#344871]/10' },
                            { border: 'border-t-[#E9BA08]', icon: 'text-[#344871]', bgIcon: 'bg-[#E9BA08]/10' },
                        ];
                        const color = colors[index];
                        return (
                            <div
                                key={index}
                                className={`group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${color.border} border-t-4`}
                            >
                                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:scale-110 ${color.bgIcon}`}>
                                    <feature.icon className={`h-8 w-8 ${color.icon} transition-transform duration-300`} />
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-[#344871]">
                                    {feature.title}
                                </h3>
                                <ul className="space-y-2 mb-4">
                                    {feature.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckCircle className={`h-4 w-4 text-green-500 mt-0.5 flex-shrink-0`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.summary}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
