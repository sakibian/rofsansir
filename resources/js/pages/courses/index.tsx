import Footer from '@/components/Footer';
import Header from '@/components/header';
import { Head, Link } from '@inertiajs/react';
import {
    Award,
    BookOpen,
    CheckCircle,
    Clock,
    GraduationCap,
    Mail,
    MapPin,
    Monitor,
    Phone,
    Star,
    Target,
    Users,
} from 'lucide-react';

export default function Courses() {
    return (
        <>
            <Head>
                <title>O Level Bengali Courses & Admission | Rofsan Sir</title>
                <meta
                    name="description"
                    content="Comprehensive O Level Bengali courses with Cambridge Examiner guidance. Regular courses, mini courses for Class 8, 9, 10. CAIE-aligned curriculum with expert teaching."
                />
                <meta
                    name="keywords"
                    content="O Level Bengali courses, Cambridge Bengali, admission, Class 8 9 10 courses, Bengali tuition Dhaka, CAIE curriculum"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://rofsansir.com/courses"
                />
                <meta
                    property="og:title"
                    content="O Level Bengali Courses & Admission | Rofsan Sir"
                />
                <meta
                    property="og:description"
                    content="Comprehensive O Level Bengali courses with Cambridge Examiner guidance. Regular and mini courses available."
                />
                <meta
                    property="og:image"
                    content="https://rofsansir.com/logos/logo.png"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Rofsan Sir" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:url"
                    content="https://rofsansir.com/courses"
                />
                <meta
                    name="twitter:title"
                    content="O Level Bengali Courses & Admission | Rofsan Sir"
                />
                <meta
                    name="twitter:description"
                    content="Comprehensive O Level Bengali courses with Cambridge Examiner guidance."
                />
                <meta
                    name="twitter:image"
                    content="https://rofsansir.com/logos/logo.png"
                />
            </Head>

            <div className="min-h-screen bg-white">
                <div className="relative z-10">
                    <Header />

                    {/* Hero Section */}
                    <section
                        className="bg-gradient-to-br from-[#006DD6]/5 to-[#344871]/5 px-4 pt-32 pb-20 md:px-8"
                        aria-label="Courses hero section"
                        role="banner"
                    >
                        <div className="container mx-auto max-w-6xl">
                            <div className="mb-16 text-center">
                                <div className="mb-8 inline-flex items-center rounded-full bg-[#006DD6] px-6 py-3 text-white">
                                    <Star className="mr-2 h-5 w-5" />
                                    <span className="font-medium">
                                        Cambridge Certified Teaching
                                    </span>
                                </div>
                                <h1 className="mb-6 text-4xl font-bold text-[#344871] md:text-6xl">
                                    O Level Bengali
                                    <span className="block text-[#006DD6]">
                                        Courses & Programs
                                    </span>
                                </h1>
                                <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
                                    Master Bengali with expert guidance from a
                                    certified Cambridge Examiner. Structured
                                    learning paths for Class 8, 9, and 10
                                    students.
                                </p>

                                {/* Stats Cards */}
                                <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                                        <div className="mb-2 text-3xl font-bold text-[#006DD6]">
                                            8+
                                        </div>
                                        <div className="text-sm font-medium text-gray-600">
                                            Years Experience
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                                        <div className="mb-2 text-3xl font-bold text-[#006DD6]">
                                            98%
                                        </div>
                                        <div className="text-sm font-medium text-gray-600">
                                            Success Rate
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                                        <div className="mb-2 text-3xl font-bold text-[#006DD6]">
                                            1000+
                                        </div>
                                        <div className="text-sm font-medium text-gray-600">
                                            Students Trained
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                                        <div className="mb-2 text-3xl font-bold text-[#006DD6]">
                                            4.9/5
                                        </div>
                                        <div className="text-sm font-medium text-gray-600">
                                            Student Rating
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Course Programs */}
                    <section className="px-4 py-20 md:px-8">
                        <div className="container mx-auto max-w-6xl">
                            <div className="mb-16 text-center">
                                <h2 className="mb-4 text-3xl font-bold text-[#344871] md:text-4xl">
                                    Our Programs
                                </h2>
                                <p className="mx-auto max-w-2xl text-gray-600">
                                    Choose the perfect program for your learning
                                    journey. Each course is designed for
                                    different skill levels and exam preparation
                                    needs.
                                </p>
                            </div>

                            <div className="mb-20 grid gap-8 md:grid-cols-3">
                                {/* Foundation Program */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                                    <div className="mb-6 text-center">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-light">
                                            <BookOpen className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-[#344871]">
                                            Foundation Batch
                                        </h3>
                                        <p className="font-medium text-[#006DD6]">
                                            Class VIII
                                        </p>
                                    </div>

                                    <div className="mb-6 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm text-gray-700">
                                                Basic sentence structure
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm text-gray-700">
                                                Vocabulary building
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm text-gray-700">
                                                Composition writing basics
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">
                                                1 Year
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">
                                                Small Batch
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        href="/courses/foundation"
                                        className="block w-full rounded-lg bg-brand-blue-light px-6 py-3 text-center font-medium text-white transition-colors hover:bg-brand-blue-dark"
                                    >
                                        Learn More
                                    </Link>
                                </div>

                                {/* Class IX Program */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                                    <div className="mb-6 text-center">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue">
                                            <Target className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-[#344871]">
                                            Regular Program
                                        </h3>
                                        <p className="font-medium text-[#006DD6]">
                                            Class IX
                                        </p>
                                    </div>

                                    <div className="mb-6 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm text-gray-700">
                                                Composition writing skills
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm text-gray-700">
                                                Vocabulary expansion
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm text-gray-700">
                                                CAIE assessment prep
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">
                                                1 Year
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">
                                                Focused Groups
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        href="/courses/class9"
                                        className="block w-full rounded-lg bg-brand-blue px-6 py-3 text-center font-medium text-white transition-colors hover:bg-brand-blue-dark"
                                    >
                                        Learn More
                                    </Link>
                                </div>

                                {/* Class X Program */}
                                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                                    <div className="mb-6 text-center">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-dark">
                                            <Award className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-[#344871]">
                                            Exam Focused
                                        </h3>
                                        <p className="font-medium text-[#006DD6]">
                                            Class X
                                        </p>
                                    </div>

                                    <div className="mb-6 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm text-gray-700">
                                                Advanced composition techniques
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm text-gray-700">
                                                Time management strategies
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm text-gray-700">
                                                Full syllabus coverage
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">
                                                1 Year
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">
                                                Exam Ready
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        href="/courses/class10"
                                        className="block w-full rounded-lg bg-brand-blue-dark px-6 py-3 text-center font-medium text-white transition-colors hover:bg-brand-blue-light"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="mb-20 rounded-2xl bg-gradient-to-r from-[#006DD6]/10 to-[#344871]/10 p-8 md:p-12">
                                <div className="mb-12 text-center">
                                    <h2 className="mb-4 text-3xl font-bold text-[#344871] md:text-4xl">
                                        Why Choose Our Courses?
                                    </h2>
                                    <p className="mx-auto max-w-2xl text-gray-600">
                                        Experience the difference with our
                                        proven teaching methodology and
                                        personalized approach.
                                    </p>
                                </div>

                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="text-center">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-dark">
                                            <GraduationCap className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-2 font-bold text-[#344871]">
                                            Certified Teacher
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Cambridge-certified examiner with 8+
                                            years of experience
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue">
                                            <Users className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-2 font-bold text-[#344871]">
                                            Small Batches
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Personalized attention with limited
                                            students per batch
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-light">
                                            <Target className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-2 font-bold text-[#344871]">
                                            CAIE Aligned
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Curriculum designed to meet
                                            Cambridge standards
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Class Modes */}
                            <div className="mb-20">
                                <div className="mb-12 text-center">
                                    <h2 className="mb-4 text-3xl font-bold text-[#344871] md:text-4xl">
                                        Class Modes
                                    </h2>
                                    <p className="text-gray-600">
                                        Choose the learning environment that
                                        suits you best
                                    </p>
                                </div>

                                <div className="grid gap-8 md:grid-cols-2">
                                    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                                        <div className="mb-6 flex items-center gap-6">
                                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-light">
                                                <MapPin className="h-8 w-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-2xl font-bold text-[#344871]">
                                                    Offline Classes
                                                </h3>
                                                <p className="text-gray-600">
                                                    Physical classroom
                                                    experience in Dhaka
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-6 space-y-3">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                                <span className="text-sm text-gray-700">
                                                    Interactive classroom
                                                    sessions
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                                <span className="text-sm text-gray-700">
                                                    Printed study materials
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                                <span className="text-sm text-gray-700">
                                                    Personalized attention
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center font-medium text-brand-navy">
                                            <MapPin className="h-4 w-4" />{' '}
                                            <span className="ml-2">
                                                8/12, Block B, Lalmatia
                                            </span>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                                        <div className="mb-6 flex items-center gap-6">
                                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-light">
                                                <Monitor className="h-8 w-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-2xl font-bold text-[#344871]">
                                                    Online Classes
                                                </h3>
                                                <p className="text-gray-600">
                                                    Virtual learning from
                                                    anywhere
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-6 space-y-3">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                                <span className="text-sm text-gray-700">
                                                    Live interactive sessions
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                                <span className="text-sm text-gray-700">
                                                    Recorded sessions available
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                                <span className="text-sm text-gray-700">
                                                    Global accessibility
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center font-medium text-brand-navy">
                                            <Monitor className="h-4 w-4" />{' '}
                                            <span className="ml-2">
                                                Google Classroom
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gradient-to-r from-[#006DD6] to-[#344871] px-4 py-20 md:px-8">
                        <div className="container mx-auto max-w-4xl text-center">
                            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                                Ready to Excel in O Level Bengali?
                            </h2>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                                Join thousands of successful students who have
                                mastered Bengali with our proven teaching
                                methods.
                            </p>

                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <button className="rounded-lg bg-gradient-to-r from-brand-blue to-brand-navy px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-xl hover:shadow-brand-blue/30">
                                    Enroll Now
                                </button>
                                <button className="rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-brand-navy hover:shadow-lg">
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="bg-gray-50 px-4 py-20 md:px-8">
                        <div className="container mx-auto max-w-4xl">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold text-[#344871] md:text-4xl">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-600">
                                    Ready to start your Bengali learning
                                    journey?
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-3">
                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#006DD6]">
                                        <Phone className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="mb-2 font-bold text-[#344871]">
                                        Call Us
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        +880 1948-116595
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        +880 1711-772662
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#344871]">
                                        <Mail className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="mb-2 font-bold text-[#344871]">
                                        Email Us
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        rofsankhan@gmail.com
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue">
                                        <MapPin className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="mb-2 font-bold text-[#344871]">
                                        Visit Us
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        8/12, Block B, Lalmatia, Dhaka 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </>
    );
}
