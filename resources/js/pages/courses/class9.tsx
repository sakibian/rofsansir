import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Star, Award, Users, Clock, CheckCircle, ArrowLeft, GraduationCap, BookOpen, Target } from 'lucide-react';

export default function Class9Course() {
    return (
        <>
            <Head>
                <title>Class IX O Level Bengali Regular Program | Rofsan Sir</title>
                <meta name="description" content="Class IX O Level Bengali Regular Program - Strengthening skills and exam readiness. Comprehensive preparation for Cambridge O Level Bengali." />
                <meta name="keywords" content="Class IX Bengali, O Level Bengali Class 9, Cambridge Bengali preparation, Bengali tuition Class IX" />
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
                                <span className="text-[#006DD6] font-medium">Class IX Regular Program</span>
                            </div>
                        </div>
                    </section>

                    {/* Hero Section */}
                    <section className="pb-16 px-4 md:px-8">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center px-4 py-2 bg-[#344871] text-white rounded-full mb-6">
                                    <Target className="w-4 h-4 mr-2" />
                                    <span className="font-medium">Regular Program</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-[#344871] mb-6">
                                    Strengthening Skills &
                                    <span className="block text-[#006DD6]">Exam Readiness</span>
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    The Class IX programme focuses on developing core O Level Bengali skills while gradually introducing exam-style practice. Students learn to apply language concepts correctly and confidently.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#344871] mb-2">1 Year</div>
                                    <div className="text-gray-600 text-sm">Program Duration</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#344871] mb-2">Weekly</div>
                                    <div className="text-gray-600 text-sm">Practice Sessions</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#344871] mb-2">CAIE</div>
                                    <div className="text-gray-600 text-sm">Aligned Curriculum</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                                    <div className="text-2xl font-bold text-[#344871] mb-2">100%</div>
                                    <div className="text-gray-600 text-sm">Exam Focused</div>
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
                                        This comprehensive programme bridges the gap between foundational learning and advanced exam preparation. Students develop proficiency in all aspects of O Level Bengali while building confidence for examinations.
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        Concepts are explained clearly with regular practice sessions. Students are encouraged to write confidently while developing accuracy and structure in their answers.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-[#006DD6]" />
                                            <span className="text-gray-700">Saturday-Thursday</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-5 h-5 text-[#344871]" />
                                            <span className="text-gray-700">Focused Groups</span>
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
                                            <span className="text-gray-700">Class IX students</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Students seeking systematic exam preparation</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Learners aiming to improve writing and comprehension skills</span>
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
                                    Comprehensive curriculum covering composition, language skills, and exam techniques
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-[#006DD6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Composition Writing</h3>
                                    <p className="text-gray-600">Letter, Report, Dialogue writing fundamentals</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-100">
                                    <div className="w-12 h-12 bg-[#344871] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Vocabulary Expansion</h3>
                                    <p className="text-gray-600">Advanced vocabulary and sentence transformation</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-200">
                                    <div className="w-12 h-12 bg-[#E9BA08] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Reading Techniques</h3>
                                    <p className="text-gray-600">Advanced reading and comprehension strategies</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-300">
                                    <div className="w-12 h-12 bg-[#006DD6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <GraduationCap className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">CAIE Assessment Prep</h3>
                                    <p className="text-gray-600">Understanding Cambridge assessment expectations</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-400">
                                    <div className="w-12 h-12 bg-[#344871] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Language Comprehension</h3>
                                    <p className="text-gray-600">MCQ and open-ended comprehension practice</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group delay-500">
                                    <div className="w-12 h-12 bg-[#E9BA08] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#344871] mb-3">Writing Skills</h3>
                                    <p className="text-gray-600">Developing accuracy and structure in answers</p>
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
                                    Structured methodology combining theory, practice, and personalized feedback
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-bold text-[#344871] mb-6">Comprehensive Learning</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Clear concept explanations</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Regular practice sessions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Topic-wise assessments</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Writing practice with feedback</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-bold text-[#344871] mb-6">Assessment & Progress</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Monthly and pop tests</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Mid-term and yearly examinations</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Detailed progress reports</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Personalized improvement plans</span>
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
                                    What students achieve after completing the Class IX Regular Program
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-[#344871]/10 to-[#006DD6]/10 rounded-2xl p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <Award className="w-16 h-16 text-[#E9BA08] mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-[#344871] mb-4">Program Success</h3>
                                </div>

                                <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                                    Students develop strong fundamentals, improved writing ability, and readiness to enter Class X with confidence. They gain proficiency in all aspects of O Level Bengali while building examination skills.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-[#006DD6] rounded-full flex items-center justify-center mx-auto mb-3">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#344871] mb-2">Writing Proficiency</h4>
                                        <p className="text-gray-600 text-sm">Master composition writing with proper structure and style</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-[#344871] rounded-full flex items-center justify-center mx-auto mb-3">
                                            <BookOpen className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#344871] mb-2">Language Mastery</h4>
                                        <p className="text-gray-600 text-sm">Strong command over Bengali vocabulary and grammar</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-[#E9BA08] rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Target className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#344871] mb-2">Exam Readiness</h4>
                                        <p className="text-gray-600 text-sm">Prepared for Class X O Level Bengali examinations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-[#344871] to-[#006DD6]">
                        <div className="container mx-auto max-w-4xl text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Excel in Class IX Bengali?
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Join our Class IX Regular Program and build a strong foundation for your O Level success.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <button className="bg-white text-[#344871] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
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
