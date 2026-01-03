import { Award, GraduationCap, Users, CheckCircle } from 'lucide-react';

const stats = [
    {
        icon: CheckCircle,
        value: '10+ Years',
        label: '',
        description: 'Experience',
    },
    {
        icon: Award,
        value: 'CAIE Certified',
        label: '',
        description: 'Examiner',
    },
    {
        icon: Users,
        value: '100+ Students',
        label: '',
        description: '/ Year',
    },
    {
        icon: GraduationCap,
        value: 'Cambridge Assessment',
        label: '',
        description: 'Specialist',
    },
];

const StatsSection = () => {
    return (
        <section className="border-y border-border bg-background py-12">
            <div className="container-max section-padding">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="animate-fade-in flex flex-col items-center text-center"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                <stat.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-foreground">
                                {stat.value}
                                {stat.label && (
                                    <span className="ml-1">{stat.label}</span>
                                )}
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
