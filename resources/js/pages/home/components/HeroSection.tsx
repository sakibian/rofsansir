import { BookOpen, CheckCircle, Clock, Trophy, Users } from 'lucide-react';
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
        <section className="relative overflow-hidden bg-gradient-to-br from-[#006DD6]/5 to-[#344871]/5 py-20 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E9BA08] px-4 py-2 text-[#344871]">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm font-bold tracking-wide uppercase">
                                Cambridge Certified Educator
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-6xl font-bold text-[#344871] mb-6 leading-tight">
                            Learn O Level
                            <span className="text-[#006DD6]"> Bengali </span>
                            with Rofsan Sir
                        </h1>

                        {/* Description */}
                        <p className="mb-8 max-w-lg text-lg text-gray-600 mx-auto lg:mx-0">
                            Rofsan Sir is a CAIE-trained educator and
                            Cambridge-approved O Level Bengali Examiner with
                            over eight years of experience in English-medium O
                            Level Bengali settings, known for a clear and
                            student-friendly teaching approach.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mb-8 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
                            <button className="bg-[#006DD6] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0054A5] transition-colors shadow-lg">
                                Book Free Consultation
                            </button>
                            <button className="border-2 border-[#006DD6] text-[#006DD6] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#006DD6] hover:text-white transition-colors">
                                Download Routines
                            </button>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#006DD6] rounded-lg flex items-center justify-center">
                                            <stat.icon className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold text-[#344871]">
                                                {stat.value}
                                                <span className="text-[#344871]">
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
                            className="relative mx-auto max-w-md aspect-square transform overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
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
                                    className="h-full bg-gradient-to-r from-[#E9BA08] to-[#006DD6] transition-all duration-50 ease-linear"
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
                                                ? 'scale-125 bg-[#E9BA08]'
                                                : 'bg-white/50 hover:bg-white/70'
                                        }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-6 right-6 rounded-full bg-[#E9BA08] px-4 py-2 text-sm font-bold text-[#344871] shadow-xl">
                            🏆 Top Rated Teacher
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
