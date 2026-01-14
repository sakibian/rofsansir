import { Calendar, Clock } from 'lucide-react';

interface Routine {
    id: number;
    title: string;
    day_of_week: string;
    start_time: string;
    end_time: string;
    location?: string | null;
    description?: string | null;
}

interface Props {
    routines: Routine[];
}

const RoutineSection = ({ routines }: Props) => {
    if (!routines || routines.length === 0) {
        return null;
    }

    return (
        <section className="border-t border-border bg-background py-12">
            <div className="container-max section-padding">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                            Weekly Class Routine
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Stay aligned with the latest class schedule for O Level Bangla.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {routines.map((routine) => (
                        <div
                            key={routine.id}
                            className="flex flex-col rounded-xl border border-border bg-card p-4 shadow-soft"
                        >
                            <div className="mb-2 flex items-center justify-between">
                                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                    <Calendar className="h-3 w-3" />
                                    {routine.day_of_week}
                                </span>
                                <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    {routine.start_time} – {routine.end_time}
                                </span>
                            </div>
                            <h3 className="text-base font-semibold text-foreground">
                                {routine.title}
                            </h3>
                            {routine.location && (
                                <p className="mt-1 text-xs font-medium text-muted-foreground">
                                    {routine.location}
                                </p>
                            )}
                            {routine.description && (
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {routine.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoutineSection;

