import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const teacherImages = [
    '/teacher/3 - with senior colleuge.jpg',
    '/teacher/4 - at the event - Rofsan sir.jpg',
    '/teacher/5 - with student - Rofsan sir.jpg',
    '/teacher/6 - Rofsan sir at social event speaking.jpg',
    '/teacher/7 - Rofsan sir at social event speaking - main.jpg',
    '/teacher/8 - Rofsan sir at ceramony.jpg',
    '/teacher/10 - graduation complete mode.jpg',
    '/teacher/11 - graduation complete main with dress.jpg',
    '/teacher/12 - from graduation complete ceramony.jpg',
    '/teacher/14 Rofsan sir at Dhaka international marathon ceramony.jpg',
    '/teacher/Pic.jpg',
];

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === teacherImages.length - 1 ? 0 : prevIndex + 1,
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden bg-surface py-16 lg:py-24">
            <div className="container-max section-padding">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="animate-fade-in">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-primary uppercase tracking-wide">
                                Verified CAIE Examiner
                            </span>
                        </div>

                        <h1 className="mb-6 text-4xl leading-tight font-bold text-foreground sm:text-5xl lg:text-6xl">
                            Master O Level <span className="text-primary">Bangla</span> with a CAIE Examiner
                        </h1>

                        <p className="mb-8 max-w-lg text-lg text-muted-foreground">
                            Learn with Rofsan Sir and unlock the world with the Beauty of Bengali
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                                Enrol Now
                            </button>
                            <button className="rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent">
                                View Resources
                            </button>
                        </div>
                    </div>

                    <div
                        className="animate-slide-in-right relative"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                            {teacherImages.map((image, index) => (
                                <img
                                    key={image}
                                    src={image}
                                    alt={`Rofsan Sir - Image ${index + 1}`}
                                    className={`aspect-[4/5] h-auto w-full object-cover transition-opacity duration-1000 ${
                                        index === currentImageIndex
                                            ? 'opacity-100'
                                            : 'absolute inset-0 opacity-0'
                                    }`}
                                />
                            ))}
                            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                                <h3 className="text-xl font-bold text-primary-foreground">
                                    Rofsan Sir
                                </h3>
                                <p className="text-sm text-primary-foreground/80">
                                    CAIE Bengali Examiner
                                </p>
                            </div>

                            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
                                {teacherImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setCurrentImageIndex(index)
                                        }
                                        className={`h-2 w-2 rounded-full transition-colors ${
                                            index === currentImageIndex
                                                ? 'bg-primary-foreground'
                                                : 'bg-primary-foreground/50'
                                        }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
