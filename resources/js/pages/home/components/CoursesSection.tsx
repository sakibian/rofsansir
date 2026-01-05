import { CheckCircle, Monitor, BookOpen, TestTube } from 'lucide-react';

const courseFeatures = [
    {
        icon: CheckCircle,
        title: 'Paper 1: Composition & Comprehension',
        description: 'Essay Writing, Comprehension Passages, Creative Writing, Literature Analysis, Vocabulary Building'
    },
    {
        icon: BookOpen,
        title: 'Paper 2: Language & Grammar',
        description: 'Bengali Grammar, Language Structure, Translation Skills, Sentence Construction, Past Paper Practice'
    },
    {
        icon: Monitor,
        title: 'Online & Offline Batches Available',
        description: 'Flexible learning options for students in Dhaka and abroad'
    },
    {
        icon: TestTube,
        title: 'High-Tech Classroom',
        description: 'Modern learning environment with digital resources and interactive tools'
    },
    {
        icon: BookOpen,
        title: 'Top Resources',
        description: 'Access to exclusive study materials and guidebooks by Cambridge Examiner'
    },
    {
        icon: TestTube,
        title: 'Regular Tests',
        description: '10 Topical Mock Tests following CAIE Pattern for comprehensive assessment'
    }
];

const availableClasses = [
    { grade: 'Class 8', description: 'Beginning O Level journey' },
    { grade: 'Class 9', description: 'Mid-level preparation' },
    { grade: 'Class 10', description: 'Final year intensive' }
];

const CoursesSection = () => {
    return (
        <section id="courses" className="bg-gradient-to-br from-slate-50 via-white to-blue-50/20 py-24">

            <div className="container-max section-padding relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
                        O Level Bangla Full Course
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
                        Comprehensive preparation for both papers with a Cambridge Examiner, featuring modern teaching methods and proven results.
                    </p>
                </div>

                {/* Course Features Grid */}
                <div className="mb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {courseFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="group animate-fade-in flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-card hover:shadow-luxury border border-slate-200/50 hover:border-primary/20 transition-all duration-300 hover:scale-105"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/15 transition-all duration-300 shadow-soft">
                                <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-slate-900">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Available Classes */}
                <div className="mb-20">
                    <h3 className="mb-16 text-center text-3xl font-bold text-slate-900">
                        Available for Classes
                    </h3>
                    <div className="flex flex-wrap justify-center gap-12">
                        {availableClasses.map((cls, index) => (
                            <div
                                key={index}
                                className="group text-center p-6 rounded-2xl bg-white shadow-soft hover:shadow-card border border-slate-200/30 hover:border-primary/20 transition-all duration-300 hover:scale-105"
                            >
                                <div className="mb-4 text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                                    {cls.grade}
                                </div>
                                <p className="text-slate-600 font-medium">
                                    {cls.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of successful students guided by a Cambridge Examiner
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <button className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                            Enrol Now
                        </button>
                        <button className="rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent">
                            View Course Details
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
