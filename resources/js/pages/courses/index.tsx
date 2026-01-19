import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Star, Award, Users, Monitor, Phone, MapPin, Mail, GraduationCap, Clock, BookOpen, Target, CheckCircle } from 'lucide-react';

export default function Courses() {
    return (
        <>
            <Head>
                <title>O Level Bengali Courses & Admission | Rofsan Sir</title>
                <meta name="description" content="Comprehensive O Level Bengali courses with Cambridge Examiner guidance. Regular courses, mini courses for Class 8, 9, 10. CAIE-aligned curriculum with expert teaching." />
                <meta name="keywords" content="O Level Bengali courses, Cambridge Bengali, admission, Class 8 9 10 courses, Bengali tuition Dhaka, CAIE curriculum" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://rofsansir.com/courses" />
                <meta property="og:title" content="O Level Bengali Courses & Admission | Rofsan Sir" />
                <meta property="og:description" content="Comprehensive O Level Bengali courses with Cambridge Examiner guidance. Regular and mini courses available." />
                <meta property="og:image" content="https://rofsansir.com/logos/logo.png" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Rofsan Sir" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://rofsansir.com/courses" />
                <meta name="twitter:title" content="O Level Bengali Courses & Admission | Rofsan Sir" />
                <meta name="twitter:description" content="Comprehensive O Level Bengali courses with Cambridge Examiner guidance." />
                <meta name="twitter:image" content="https://rofsansir.com/logos/logo.png" />
            </Head>

            <div className="min-h-screen bg-white">
                <div className="relative z-10">
                    <Header />

                    {/* Hero Section */}
                    <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-[#006DD6]/5 to-[#344871]/5">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center px-6 py-3 bg-[#006DD6] text-white rounded-full mb-8">
                                    <Star className="w-5 h-5 mr-2" />
                                    <span className="font-medium">Cambridge Certified Teaching</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-[#344871] mb-6">
                                    O Level Bengali
                                    <span className="block text-[#006DD6]">Courses & Programs</span>
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                                    Master Bengali with expert guidance from a certified Cambridge Examiner. Structured learning paths for Class 8, 9, and 10 students.
                                </p>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                        <div className="text-3xl font-bold text-[#006DD6] mb-2">8+</div>
                                        <div className="text-gray-600 text-sm font-medium">Years Experience</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                        <div className="text-3xl font-bold text-[#006DD6] mb-2">98%</div>
                                        <div className="text-gray-600 text-sm font-medium">Success Rate</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                        <div className="text-3xl font-bold text-[#006DD6] mb-2">1000+</div>
                                        <div className="text-gray-600 text-sm font-medium">Students Trained</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                        <div className="text-3xl font-bold text-[#006DD6] mb-2">4.9/5</div>
                                        <div className="text-gray-600 text-sm font-medium">Student Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Course Programs */}
                    <section className="py-20 px-4 md:px-8">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#344871] mb-4">Our Programs</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Choose the perfect program for your learning journey. Each course is designed for different skill levels and exam preparation needs.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 mb-20">
                                {/* Foundation Program */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-[#006DD6] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <BookOpen className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#344871] mb-2">Foundation Batch</h3>
                                        <p className="text-[#006DD6] font-medium">Class VIII</p>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">Basic sentence structure</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">Vocabulary building</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">Composition writing basics</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">1 Year</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">Small Batch</span>
                                        </div>
                                    </div>

                                    <Link
                                        href="/courses/foundation"
                                        className="w-full bg-[#006DD6] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#0054A5] transition-colors text-center block"
                                    >
                                        Learn More
                                    </Link>
                                </div>

                                {/* Class IX Program */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-[#344871] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Target className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#344871] mb-2">Regular Program</h3>
                                        <p className="text-[#006DD6] font-medium">Class IX</p>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">Composition writing skills</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">Vocabulary expansion</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">CAIE assessment prep</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">1 Year</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">Focused Groups</span>
                                        </div>
                                    </div>

                                    <Link
                                        href="/courses/class9"
                                        className="w-full bg-[#344871] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2a3a5c] transition-colors text-center block"
                                    >
                                        Learn More
                                    </Link>
                                </div>

                                {/* Class X Program */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-[#E9BA08] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Award className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#344871] mb-2">Exam Focused</h3>
                                        <p className="text-[#006DD6] font-medium">Class X</p>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">Advanced composition techniques</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">Time management strategies</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">Full syllabus coverage</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">1 Year</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">Exam Ready</span>
                                        </div>
                                    </div>

                                    <Link
                                        href="/courses/class10"
                                        className="w-full bg-[#E9BA08] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#d4a607] transition-colors text-center block"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gradient-to-r from-[#006DD6]/10 to-[#344871]/10 rounded-2xl p-8 md:p-12 mb-20">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#344871] mb-4">Why Choose Our Courses?</h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                        Experience the difference with our proven teaching methodology and personalized approach.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-[#006DD6] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <GraduationCap className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="font-bold text-[#344871] mb-2">Certified Teacher</h3>
                                        <p className="text-gray-600 text-sm">Cambridge-certified examiner with 8+ years of experience</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-[#344871] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="font-bold text-[#344871] mb-2">Small Batches</h3>
                                        <p className="text-gray-600 text-sm">Personalized attention with limited students per batch</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-[#E9BA08] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Target className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="font-bold text-[#344871] mb-2">CAIE Aligned</h3>
                                        <p className="text-gray-600 text-sm">Curriculum designed to meet Cambridge standards</p>
                                    </div>
                                </div>
                            </div>

                            {/* Class Modes */}
                            <div className="mb-20">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#344871] mb-4">Class Modes</h2>
                                    <p className="text-gray-600">Choose the learning environment that suits you best</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
                                        <div className="flex items-center gap-6 mb-6">
                                            <div className="w-16 h-16 bg-[#006DD6] rounded-full flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-[#344871] mb-2">Offline Classes</h3>
                                                <p className="text-gray-600">Physical classroom experience in Dhaka</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">Interactive classroom sessions</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">Printed study materials</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">Personalized attention</span>
                                            </div>
                                        </div>

                                        <div className="text-[#006DD6] font-medium">
                                            Location: The Elites, Lalmatia, Dhaka
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
                                        <div className="flex items-center gap-6 mb-6">
                                            <div className="w-16 h-16 bg-[#344871] rounded-full flex items-center justify-center flex-shrink-0">
                                                <Monitor className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-[#344871] mb-2">Online Classes</h3>
                                                <p className="text-gray-600">Virtual learning from anywhere</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">Live interactive sessions</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">Recorded sessions available</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">Global accessibility</span>
                                            </div>
                                        </div>

                                        <div className="text-[#344871] font-medium">
                                            Platform: Zoom/Google Meet
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-[#006DD6] to-[#344871]">
                        <div className="container mx-auto max-w-4xl text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Excel in O Level Bengali?
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Join thousands of successful students who have mastered Bengali with our proven teaching methods.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-[#E9BA08] text-[#344871] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d4a607] transition-colors">
                                    Enroll Now
                                </button>
                                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#344871] transition-colors">
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="py-20 px-4 md:px-8 bg-gray-50">
                        <div className="container mx-auto max-w-4xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#344871] mb-4">Get in Touch</h2>
                                <p className="text-gray-600">Ready to start your Bengali learning journey?</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#006DD6] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Phone className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-[#344871] mb-2">Call Us</h3>
                                    <p className="text-gray-600 text-sm">+880 1948-116595</p>
                                    <p className="text-gray-600 text-sm">+880 1711-772662</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#344871] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-[#344871] mb-2">Email Us</h3>
                                    <p className="text-gray-600 text-sm">rofsankhan@gmail.com</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#E9BA08] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-[#344871] mb-2">Visit Us</h3>
                                    <p className="text-gray-600 text-sm">The Elites, Lalmatia, Dhaka</p>
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
