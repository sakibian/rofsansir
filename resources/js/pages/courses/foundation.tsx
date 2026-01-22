import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Award, Users, Clock, CheckCircle, ArrowLeft, GraduationCap, BookOpen, Target } from 'lucide-react';

export default function FoundationCourse() {
    return (
        <>
            <Head>
                <title>Foundation Batch (Class VIII) | O Level Bengali | Rofsan Sir</title>
                <meta name="description" content="Foundation Batch for Class VIII students - Building strong foundations in O Level Bengali. Perfect for students beginning their O Level journey." />
                <meta name="keywords" content="O Level Bengali foundation, Class VIII Bengali course, Bengali basics, foundation batch Dhaka" />
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
                                <span className="text-[#006DD6] font-medium">Foundation Batch (Class VIII)</span>
                            </div>
                        </div>
                    </section>

                    {/* Hero Section */}
                    <section className="pb-16 px-4 md:px-8">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center px-4 py-2 bg-[#006DD6] text-white rounded-full mb-6">
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    <span className="font-medium">Foundation Program</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-[#344871] mb-6">
                                    Building Strong Foundations in
                                    <span className="block text-[#006DD6]">O Level Bengali</span>
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    The Foundation Batch is designed for students who are beginning their O Level Bengali journey or who need extra support to strengthen their basic language skills.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#006DD6] mb-2">1 Year</div>
                                    <div className="text-gray-600 text-sm">Program Duration</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#006DD6] mb-2">Small</div>
                                    <div className="text-gray-600 text-sm">Batch Size</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#006DD6] mb-2">Weekly</div>
                                    <div className="text-gray-600 text-sm">Assessments</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#006DD6] mb-2">100%</div>
                                    <div className="text-gray-600 text-sm">Personal Attention</div>
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
                                        This programme focuses on building confidence, clarity, and familiarity with Bengali in a structured and supportive way. Students learn at their own pace with personalized guidance.
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        Lessons are delivered in a simple, step-by-step manner specially suited for English-medium students. Extra attention is given to students who feel anxious or weak in Bengali.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-[#006DD6]" />
                                            <span className="text-gray-700">Saturday-Thursday</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-5 h-5 text-[#344871]" />
                                            <span className="text-gray-700">Limited Seats</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <div className="text-center mb-6">
                                        <GraduationCap className="w-16 h-16 text-[#006DD6] mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-[#344871]">Perfect For</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Class VIII students</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Students planning to take O Level Bengali</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Learners needing strong fundamentals</span>
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
                                    Comprehensive curriculum covering all essential Bengali language fundamentals
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-[#006DD6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Basic Sentence Structure</h3>
                                    <p className="text-gray-600">Learn proper sentence formation and usage in Bengali</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-100">
                                    <div className="w-12 h-12 bg-[#344871] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Vocabulary Building</h3>
                                    <p className="text-gray-600">Expand vocabulary for everyday and academic contexts</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-200">
                                    <div className="w-12 h-12 bg-brand-navy rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Spelling & Word Formation</h3>
                                    <p className="text-gray-600">Master Bengali spelling rules and word building</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-300">
                                    <div className="w-12 h-12 bg-[#006DD6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <GraduationCap className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Composition Writing Basics</h3>
                                    <p className="text-gray-600">Introduction to basic writing and composition skills</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-400">
                                    <div className="w-12 h-12 bg-[#344871] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Reading Comprehension</h3>
                                    <p className="text-gray-600">Develop basic reading and understanding skills</p>
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
                                    Our methodology is designed to make learning Bengali enjoyable and effective
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-bold text-[#344871] mb-6">Student-Centered Learning</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Personalized pace learning</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Individual attention and support</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Regular progress monitoring</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Confidence building approach</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-bold text-[#344871] mb-6">Assessment & Practice</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Regular class tests</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Basic writing practice</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Guided worksheets</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Foundational assessments</span>
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
                                    What students achieve after completing the Foundation Batch
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-[#006DD6]/10 to-[#344871]/10 rounded-2xl p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <Award className="w-16 h-16 text-[#344871] mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-[#344871] mb-4">Program Success</h3>
                                </div>

                                <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                                    Students complete the Foundation Batch with improved confidence, basic language control, and readiness to move into the Class IX O Level Bengali programme.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-[#006DD6] rounded-full flex items-center justify-center mx-auto mb-3">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#344871] mb-2">Confidence</h4>
                                        <p className="text-gray-600 text-sm">Overcome anxiety and build confidence in Bengali</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-[#344871] rounded-full flex items-center justify-center mx-auto mb-3">
                                            <BookOpen className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#344871] mb-2">Foundation</h4>
                                        <p className="text-gray-600 text-sm">Strong fundamentals for future learning</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-[#344871] rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Target className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#344871] mb-2">Readiness</h4>
                                        <p className="text-gray-600 text-sm">Prepared for advanced O Level courses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-[#006DD6] to-[#344871]">
                        <div className="container mx-auto max-w-4xl text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Start Your Bengali Journey?
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Join our Foundation Batch and build a strong foundation for your O Level Bengali success.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <button className="bg-[#344871] text-[#344871] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2a3a5c] transition-colors">
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
