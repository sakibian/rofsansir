import { ArrowRight } from 'lucide-react';

const MentorSection = () => {
    return (
        <section id="about" className="bg-background py-16 lg:py-24">
            <div className="container-max section-padding">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left - Image */}
                    <div className="animate-slide-in-left">
                        <div className="relative overflow-hidden rounded-2xl shadow-card">
                            <img
                                src="/teacher/Pic.jpg"
                                alt="Rofsan Sir teaching"
                                className="aspect-[4/3] h-auto"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div
                        className="animate-slide-in-right"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                            About Rofsan Sir
                        </h2>

                        <p className="mb-4 text-muted-foreground">
                            Rofsan Khan is a CAIE-certified Cambridge Bengali
                            Examiner and Assessment Specialist with over 5 years
                            of experience as Senior Faculty at Oxford
                            International School (OIS) and Lead Teacher at
                            European Standard School (ESS). He has guided
                            thousands of O Level candidates to achieve strong
                            results through his research-based, modern teaching
                            approach specifically designed for English medium
                            learners.
                        </p>

                        <div className="mb-6">
                            <h3 className="mb-3 text-lg font-semibold text-foreground">
                                Professional Credentials:
                            </h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-primary">•</span>
                                    CAIE Certified & Cambridge-Trained Educator
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-primary">•</span>
                                    Official Cambridge O Level Bengali Examiner
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-primary">•</span>
                                    Assessment Specialist for Cambridge O Level
                                    Bengali
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-primary">•</span>
                                    Former Senior Faculty at Oxford
                                    International School (2019-2024)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-primary">•</span>
                                    Former Lead Teacher, Bengali Department at
                                    European Standard School
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-primary">•</span>
                                    Author of 4 Published O Level Bengali
                                    Guidebooks
                                </li>
                            </ul>
                        </div>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 font-medium text-primary transition-all hover:gap-3"
                        >
                            Read Full Biography
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorSection;
