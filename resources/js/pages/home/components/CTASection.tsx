import { Calendar, CheckCircle, Users } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="bg-gradient-to-r from-primary to-primary/80 py-16 lg:py-24">
            <div className="container-max section-padding text-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white lg:text-4xl">
                        Admission Going On
                    </h2>

                    {/* Classes Available */}
                    <div className="mb-6 flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                            <Users className="h-4 w-4 text-white" />
                            <span className="font-medium text-white">
                                Class 8 • Class 9 • Class 10
                            </span>
                        </div>
                    </div>

                    {/* Current Batches */}
                    <div className="mx-auto mb-8 grid max-w-2xl gap-4 md:grid-cols-2">
                        <div className="rounded-lg bg-white/10 p-4">
                            <div className="mb-2 flex items-center justify-center gap-2">
                                <CheckCircle className="h-5 w-5 text-white" />
                                <span className="font-semibold text-white">
                                    May-June 2026 Batch
                                </span>
                            </div>
                            <span className="text-lg font-bold text-white">
                                OPEN
                            </span>
                        </div>
                        <div className="rounded-lg bg-white/10 p-4">
                            <div className="mb-2 flex items-center justify-center gap-2">
                                <Calendar className="h-5 w-5 text-white" />
                                <span className="font-semibold text-white">
                                    Crash Course
                                </span>
                            </div>
                            <span className="text-sm text-white">
                                Oct-Nov 2023: Open
                            </span>
                        </div>
                    </div>
                </div>

                {/* Special Programs */}
                <div className="mb-8">
                    <h3 className="mb-4 text-xl font-semibold text-white">
                        Special Programs
                    </h3>
                    <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg bg-white/10 p-3">
                            <span className="text-sm text-white">
                                O Level Bengali Topical Mock
                            </span>
                        </div>
                        <div className="rounded-lg bg-white/10 p-3">
                            <span className="text-sm text-white">
                                10 Topical Mock Tests
                            </span>
                        </div>
                        <div className="rounded-lg bg-white/10 p-3">
                            <span className="text-sm text-white">
                                Full Syllabus Coverage
                            </span>
                        </div>
                        <div className="rounded-lg bg-white/10 p-3">
                            <span className="text-sm text-white">
                                CAIE Pattern
                            </span>
                        </div>
                        <div className="rounded-lg bg-white/10 p-3 md:col-span-2 lg:col-span-1">
                            <span className="text-sm text-white">
                                Starts from 11 Oct 2025
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <button className="rounded-lg bg-white px-8 py-4 font-bold text-primary hover:bg-primary hover:text-white transition-colors">
                        Enroll Now
                    </button>
                    <button className="rounded-lg border border-white bg-transparent px-8 py-4 font-medium text-white hover:border-primary hover:bg-primary hover:text-white transition-colors">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
