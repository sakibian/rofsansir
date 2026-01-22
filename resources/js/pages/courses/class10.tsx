import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Star, Award, Users, Clock, CheckCircle, ArrowLeft, GraduationCap, BookOpen, Target } from 'lucide-react';

export default function Class10Course() {
    return (
        <>
            <Head>
                <title>Class X O Level Bengali Exam Focused Program | Rofsan Sir</title>
                <meta name="description" content="Class X O Level Bengali Exam Focused Program - Intensive preparation for final examination. Cambridge-certified teaching for exam success." />
                <meta name="keywords" content="Class X Bengali, O Level Bengali Class 10, Cambridge exam preparation, Bengali final exam, Rofsan Sir" />
            </Head>

            <div className="min-h-screen bg-white">
                <div className="relative z-10">
                    <Header />

                    {/* Breadcrumb */}
                    <section className="pt-32 pb-8 px-4 md:px-8">
                        <div className="container mx-auto max-w-6xl">
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                <Link href="/courses" className="hover:text-[#006DD6] transition-colors">
                                    Courses
                                </Link>
                                <span>/</span>
                                <span className="text-[#006DD6] font-medium">Class X Exam Focused Program</span>
                            </div>
                        </div>
                    </section>

                    {/* Hero Section */}
                    <section className="pb-16 px-4 md:px-8">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center px-4 py-2 bg-[#344871] text-[#344871] rounded-full mb-6">
                                    <Award className="w-4 h-4 mr-2" />
                                    <span className="font-medium">Exam Focused Program</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-[#344871] mb-6">
                                    Intensive Preparation for
                                    <span className="block text-[#006DD6]">Final Examination</span>
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    The Class X programme is an exam-focused course designed to prepare students thoroughly for CAIE O Level Bengali examinations. The course emphasises exam technique, accuracy, and confidence.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#344871] mb-2">1 Year</div>
                                    <div className="text-gray-600 text-sm">Intensive Program</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#344871] mb-2">Full</div>
                                    <div className="text-gray-600 text-sm">Syllabus Coverage</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#344871] mb-2">Mock</div>
                                    <div className="text-gray-600 text-sm">Exam Practice</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#344871] mb-2">100%</div>
                                    <div className="text-gray-600 text-sm">Exam Ready</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Course Overview */}
                    <section className="py-16 px-4 md:px-8 bg-gray-50">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-[#344871] mb-6">Program Overview</h2>
                                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                        This intensive programme is specifically designed for Class X students preparing for their final O Level Bengali examination. The focus is on mastering exam techniques, building confidence, and achieving excellent results.
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        Classes are highly structured and exam-oriented. Students practise under exam-like conditions and receive detailed feedback to improve performance and build examination confidence.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-[#006DD6]" />
                                            <span className="text-gray-700">Saturday-Thursday</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award className="w-5 h-5 text-[#344871]" />
                                            <span className="text-gray-700">Exam Excellence</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <div className="text-center mb-6">
                                        <GraduationCap className="w-16 h-16 text-[#344871] mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-[#344871]">Perfect For</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Class X O Level Bengali candidates</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Retake candidates</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Students aiming for strong and consistent exam performance</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* What Students Learn */}
                    <section className="py-16 px-4 md:px-8">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#344871] mb-4">What Students Learn</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Comprehensive exam preparation covering advanced composition, full syllabus, and exam techniques
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-[#006DD6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Advanced Composition</h3>
                                    <p className="text-gray-600">Master advanced writing techniques and essay structures</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-100">
                                    <div className="w-12 h-12 bg-[#344871] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Full Paper Coverage</h3>
                                    <p className="text-gray-600">Complete Paper 01 and Paper 02 syllabus mastery</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-200">
                                    <div className="w-12 h-12 bg-[#344871] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Time Management</h3>
                                    <p className="text-gray-600">Strategies for optimal exam time allocation</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-300">
                                    <div className="w-12 h-12 bg-[#006DD6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <GraduationCap className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Answer Presentation</h3>
                                    <p className="text-gray-600">Perfecting answer structure and marking awareness</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-400">
                                    <div className="w-12 h-12 bg-[#344871] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Mock Examinations</h3>
                                    <p className="text-gray-600">Full syllabus mock tests with detailed feedback</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-500">
                                    <div className="w-12 h-12 bg-[#344871] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Exam Confidence</h3>
                                    <p className="text-gray-600">Building mental preparedness for exam success</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Teaching Approach */}
                    <section className="py-16 px-4 md:px-8 bg-gray-50">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#344871] mb-4">Teaching Approach</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Highly structured, exam-oriented methodology with real-time practice and feedback
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-bold text-[#344871] mb-6">Exam-Focused Learning</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Topic-wise mock tests</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Full syllabus mock examinations</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Solve classes with detailed explanations</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">One-to-one feedback where needed</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-bold text-[#344871] mb-6">Exam Excellence System</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Real exam-style evaluation</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Time-bound practice sessions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Marking scheme familiarization</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Performance tracking and improvement</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Expected Outcome */}
                    <section className="py-16 px-4 md:px-8">
                        <div className="container mx-auto max-w-4xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#344871] mb-4">Expected Outcome</h2>
                                <p className="text-gray-600">
                                    What students achieve after completing the Class X Exam Focused Program
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-[#344871]/10 to-[#006DD6]/10 rounded-2xl p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <Award className="w-16 h-16 text-[#344871] mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-[#344871] mb-4">Exam Excellence</h3>
                                </div>

                                <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                                    Students enter the O Level Bengali examination with confidence, clarity, and a thorough understanding of CAIE exam requirements. They are fully prepared for exam success with strong techniques and mental preparedness.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-[#006DD6] rounded-full flex items-center justify-center mx-auto mb-3">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#344871] mb-2">Exam Confidence</h4>
                                        <p className="text-gray-600 text-sm">Mental preparedness and exam-day confidence</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-[#344871] rounded-full flex items-center justify-center mx-auto mb-3">
                                            <BookOpen className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#344871] mb-2">Technique Mastery</h4>
                                        <p className="text-gray-600 text-sm">Proven exam strategies and time management</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-[#344871] rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Target className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#344871] mb-2">Grade Excellence</h4>
                                        <p className="text-gray-600 text-sm">Prepared for top grades in O Level Bengali</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-[#344871] to-[#344871]">
                        <div className="container mx-auto max-w-4xl text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready for Exam Success?
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Join our Class X Exam Focused Program and achieve excellence in your O Level Bengali examination.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <button className="bg-white text-[#344871] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                                    Enroll Now
                                </button>
                                <Link
                                    href="/courses"
                                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#344871] transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back to Courses
                                </Link>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </>
    );
}
