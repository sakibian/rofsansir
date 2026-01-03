import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Monitor, BookOpen, TestTube } from 'lucide-react';

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
        <section id="courses" className="bg-background py-16 lg:py-24">
            <div className="container-max section-padding">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
                        O Level Bangla Full Course
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Comprehensive preparation for both papers with a Cambridge Examiner, featuring modern teaching methods and proven results.
                    </p>
                </div>

                {/* Course Features Grid */}
                <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courseFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="animate-fade-in flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card shadow-soft"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Available Classes */}
                <div className="mb-12">
                    <h3 className="mb-6 text-center text-2xl font-bold text-foreground">
                        Available for Classes
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {availableClasses.map((cls, index) => (
                            <div
                                key={index}
                                className="animate-fade-in flex flex-col items-center text-center p-4 rounded-lg border border-border bg-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="mb-2 text-2xl font-bold text-primary">
                                    {cls.grade}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {cls.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="mb-6">
                        <p className="text-muted-foreground mb-4">
                            Join thousands of successful students guided by a Cambridge Examiner
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg">Enroll Now</Button>
                            <Button variant="outline" size="lg">
                                <ArrowRight className="h-4 w-4 mr-2" />
                                View Course Details
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
