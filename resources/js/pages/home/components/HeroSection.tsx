import { BookOpen, CheckCircle, Clock, Trophy, Users } from 'lucide-react';

const teacherImages = [
    '/teacher/1.jpg',
    '/teacher/2.jpg',
    '/teacher/3.jpg',
    '/teacher/4.jpg',
    '/teacher/5.jpg',
    '/teacher/6.jpg',
    '/teacher/7.jpg',
    '/teacher/8.jpg',
    '/teacher/9.jpg',
    '/teacher/10.jpg',
    '/teacher/11.jpg',
    '/teacher/13.jpg',
    '/teacher/14.jpg',
    '/teacher/15.jpg',
    '/teacher/16.jpg',
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
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue/5 to-brand-navy/5 px-4 py-20 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="translate-y-0 text-center opacity-100 transition-all duration-1000 lg:text-left">
                        {/* Badge */}
                        <div className="mb-6 inline-flex translate-y-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-navy px-4 py-2 text-white opacity-100 transition-all duration-1000">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm font-bold tracking-wide uppercase">
                                Visionary & Educator
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="mb-6 translate-y-0 text-4xl leading-tight font-bold text-brand-navy opacity-100 transition-all duration-1000 md:text-6xl">
                            Learn O Level
                            <span className="text-brand-blue"> Bengali </span>
                            with Rofsan Sir
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mb-8 max-w-lg translate-y-0 text-lg text-gray-600 opacity-100 transition-all duration-1000 lg:mx-0">
                            Rofsan Sir is a CAIE-trained educator and
                            Cambridge-approved O Level Bengali Examiner with
                            over eight years of experience in English-medium O
                            Level Bengali settings, known for a clear and
                            student-friendly teaching approach that simplifies
                            Bengali for learners while guiding hundreds of
                            students each year toward confident and consistent
                            exam performance across the country.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mb-8 flex translate-y-0 flex-col justify-center gap-4 opacity-100 transition-all duration-1000 sm:flex-row lg:justify-start">
                            <button className="btn-magnetic-sophisticated animate-bounce-in-sophisticated stagger-sophisticated-1 rounded-xl bg-gradient-to-r from-brand-blue to-brand-navy px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-2xl hover:shadow-xl hover:shadow-brand-blue/30">
                                Book Free Consultation
                            </button>
                            <button className="btn-liquid-sophisticated animate-bounce-in-sophisticated stagger-sophisticated-2 rounded-xl border-2 border-brand-navy bg-white px-8 py-4 text-lg font-bold text-brand-navy hover:bg-brand-navy hover:text-white hover:shadow-lg">
                                Download Routines
                            </button>
                        </div>

                        {/* Stats Cards */}
                        <div className="mx-auto grid max-w-md translate-y-0 grid-cols-2 gap-4 opacity-100 transition-all duration-1000 lg:mx-0">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="flex items-center rounded-xl border border-gray-100 bg-white p-4 shadow-lg transition-shadow hover:-translate-y-1 hover:shadow-xl"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
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

                    {/* Right Content - Image Gallery */}
                    <div className="relative">
                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                            {teacherImages.map((image, index) => (
                                <div
                                    key={image}
                                    className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <img
                                        src={image}
                                        alt={`Rofsan Sir - Image ${index + 1}`}
                                        className="h-auto w-full rounded-xl object-contain shadow-lg"
                                        style={{
                                            aspectRatio: 'auto',
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <div className="absolute right-4 bottom-4 left-4">
                                            <h4 className="text-lg font-semibold text-white">
                                                Rofsan Sir
                                            </h4>
                                            <p className="text-sm text-white/90">
                                                O Level Bengali Educator
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-6 right-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-navy px-4 py-2 text-sm font-bold text-white shadow-xl">
                            🏆 Teacher Gallery
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
