import { BookOpen, CheckCircle, Clock, Trophy, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatedButton, AnimatedCTA, useScrollAnimation } from '../../../animations';
import AnimatedSection from '../../../animations/components/AnimatedSection';

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

const stats = [
    { icon: Users, label: 'Students', value: '1000', suffix: '+' },
    { icon: Clock, label: 'Experience', value: '8', suffix: '+ Years' },
    { icon: Trophy, label: 'Success Rate', value: '98', suffix: '%' },
    {
        icon: BookOpen,
        label: 'Exams Covered',
        value: 'O Level',
        suffix: ' Bengali',
    },
];

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);

    // Scroll animation for hero content
    const { elementRef: heroRef, isIntersecting: heroVisible } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    // Custom hover animations for buttons (removed unused variables)

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let progressInterval: NodeJS.Timeout;

        if (!isHovered) {
            // Progress bar animation
            progressInterval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        return 0;
                    }
                    return prev + 100 / (5000 / 50); // Update every 50ms
                });
            }, 50);

            // Image transition
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === teacherImages.length - 1 ? 0 : prevIndex + 1,
                );
                setProgress(0);
            }, 5000);
        }

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [isHovered]);

    return (
        <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-brand-blue/5 to-brand-navy/5 px-4 py-20 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className={`text-center lg:text-left transition-all duration-1000 ${
                        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}>
                        {/* Badge */}
                        <div className={`mb-6 inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-2 text-brand-navy transition-all duration-1000 delay-300 ${
                            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}>
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm font-bold tracking-wide uppercase">
                                Cambridge Certified Educator
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className={`mb-6 text-4xl leading-tight font-bold text-brand-navy md:text-6xl transition-all duration-1000 delay-500 ${
                            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}>
                            Learn O Level
                            <span className="text-brand-blue"> Bengali </span>
                            with Rofsan Sir
                        </h1>

                        {/* Description */}
                        <p className={`mx-auto mb-8 max-w-lg text-lg text-gray-600 lg:mx-0 transition-all duration-1000 delay-700 ${
                            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}>
                            Rofsan Sir is a CAIE-trained educator and
                            Cambridge-approved O Level Bengali Examiner with
                            over eight years of experience in English-medium O
                            Level Bengali settings, known for a clear and
                            student-friendly teaching approach.
                        </p>

                        {/* CTA Buttons */}
                        <div className={`mb-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start transition-all duration-1000 delay-900 ${
                            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}>
                            <AnimatedCTA>
                                Book Free Consultation
                            </AnimatedCTA>
                            <AnimatedButton variant="outline" size="lg">
                                Download Routines
                            </AnimatedButton>
                        </div>

                        {/* Stats Cards */}
                        <div className={`mx-auto grid max-w-md grid-cols-2 gap-4 lg:mx-0 transition-all duration-1000 delay-1100 ${
                            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}>
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="flex items-center rounded-xl border border-gray-100 bg-white p-4 shadow-lg transition-shadow hover:-translate-y-1 hover:shadow-xl"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue">
                                            <stat.icon className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold text-brand-navy">
                                                {stat.value}
                                                <span className="text-brand-navy">
                                                    {stat.suffix}
                                                </span>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Image with Floating Elements */}
                    <div className="relative">
                        {/* Main Image Container */}
                        <div
                            className="relative mx-auto aspect-square max-w-md transform overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
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

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Teacher Info */}
                            <div className="absolute right-0 bottom-0 left-0 p-6">
                                <h3 className="mb-1 text-2xl font-bold text-white">
                                    Rofsan Sir
                                </h3>
                                <p className="mb-3 text-white/80">
                                    CAIE Bengali Educator & Examiner
                                </p>
                            </div>

                            {/* Progress Bar */}
                            <div className="absolute top-0 right-0 left-0 h-1 bg-white/20">
                                <div
                                    className="h-full bg-gradient-to-r from-brand-navy to-brand-blue transition-all duration-50 ease-linear"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            {/* Image Navigation Dots */}
                            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
                                {teacherImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCurrentImageIndex(index);
                                            setProgress(0);
                                        }}
                                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex
                                                ? 'scale-125 bg-brand-navy'
                                                : 'bg-white/50 hover:bg-white/70'
                                        }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-6 right-6 rounded-full bg-brand-navy px-4 py-2 text-sm font-bold text-brand-navy shadow-xl">
                            🏆 Top Rated Teacher
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
