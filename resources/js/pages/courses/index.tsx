import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';
import { CheckCircle, Users, BookOpen, TestTube, Monitor, Award, Phone, MapPin, Mail } from 'lucide-react';

export default function Courses() {
    return (
        <>
            <Head title="Courses & Admission - Rofsan Sir" />
            <div className="min-h-screen bg-background">
                <Header />

                {/* Page Header */}
                <section className="py-16 bg-background">
                    <div className="container-max section-padding">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                                O Level Bangla - Comprehensive Course with Cambridge Examiner
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Course Overview */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-8">Course Overview</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-card p-8 rounded-xl border border-border">
                                    <h3 className="text-xl font-bold text-primary mb-4">Paper 1: Composition & Comprehension</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Essay Writing (রচনা)</li>
                                        <li>• Comprehension Passages (বোধগম্যতা)</li>
                                        <li>• Creative Writing</li>
                                        <li>• Literature Analysis</li>
                                        <li>• Vocabulary Building</li>
                                    </ul>
                                </div>
                                <div className="bg-card p-8 rounded-xl border border-border">
                                    <h3 className="text-xl font-bold text-primary mb-4">Paper 2: Language & Grammar</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Bengali Grammar (ব্যাকরণ)</li>
                                        <li>• Language Structure</li>
                                        <li>• Translation Skills</li>
                                        <li>• Sentence Construction</li>
                                        <li>• Past Paper Practice</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-foreground mb-6">Course Format</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4 p-6 bg-surface rounded-lg">
                                    <Monitor className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Online Batches</h4>
                                        <p className="text-muted-foreground">For students outside Dhaka and abroad</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-surface rounded-lg">
                                    <Users className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Offline Batches</h4>
                                        <p className="text-muted-foreground">Dhaka-based students</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Features */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Course Features</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: TestTube, title: "High-Tech Classroom", desc: "Modern learning environment with digital resources" },
                                { icon: BookOpen, title: "Top Resources", desc: "Access to exclusive study materials and guidebooks" },
                                { icon: TestTube, title: "Regular Tests", desc: "10 Topical Mock Tests following CAIE Pattern" },
                                { icon: CheckCircle, title: "Full Syllabus Coverage", desc: "Comprehensive preparation for both papers" },
                                { icon: Award, title: "Examiner Insights", desc: "Direct guidance from a Cambridge Bengali Examiner" },
                                { icon: Users, title: "Small Batch Size", desc: "Personalized attention for every student" }
                            ].map((feature, index) => (
                                <div key={index} className="bg-card p-6 rounded-xl border border-border text-center">
                                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Special Programs */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12">Special Programs</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-xl border border-primary/20">
                                <h3 className="text-xl font-bold text-primary mb-4">O Level Bengali Topical Mock Test Series</h3>
                                <div className="space-y-2 text-muted-foreground mb-4">
                                    <p>• Start Date: 11 October 2025</p>
                                    <p>• Number of Tests: 10 Topical Mocks</p>
                                    <p>• Pattern: CAIE Standard</p>
                                    <p>• Coverage: Complete O Level Syllabus</p>
                                </div>
                                <p className="font-semibold text-foreground">Benefits: Real exam simulation, detailed feedback, score improvement strategies</p>
                            </div>

                            <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-8 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-secondary mb-4">Crash Course</h3>
                                <div className="space-y-2 text-muted-foreground mb-4">
                                    <p>• Duration: Intensive preparation program</p>
                                    <p>• Target: Oct-Nov exam session</p>
                                    <p>• Focus: Rapid revision, exam techniques, past paper practice</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Current Admissions */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12">Current Admissions</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-foreground mb-6">Open Batches:</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-card p-6 rounded-lg border border-border">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span className="font-semibold text-foreground">May-June 2026 Batch</span>
                                    </div>
                                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">OPEN</span>
                                </div>
                                <div className="bg-card p-6 rounded-lg border border-border">
                                    <div className="flex items-center gap-3 mb-3">
                                        <TestTube className="h-5 w-5 text-primary" />
                                        <span className="font-semibold text-foreground">October-November 2023 Crash Course</span>
                                    </div>
                                    <span className="inline-block bg-secondary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">Open</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-foreground mb-6">Accepting Students for:</h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { grade: "Class 8", desc: "Beginning O Level journey" },
                                    { grade: "Class 9", desc: "Mid-level preparation" },
                                    { grade: "Class 10", desc: "Final year intensive" }
                                ].map((cls, index) => (
                                    <div key={index} className="bg-card p-4 rounded-lg border border-border text-center min-w-[150px]">
                                        <div className="text-2xl font-bold text-primary mb-1">{cls.grade}</div>
                                        <div className="text-sm text-muted-foreground">{cls.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enrollment Process */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12">Fees & Enquiry</h2>

                        <div className="bg-card p-8 rounded-xl border border-border mb-8">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Course Fees</h3>
                            <p className="text-muted-foreground mb-6">Contact for details</p>

                            <h3 className="text-xl font-semibold text-foreground mb-4">Enrollment Process:</h3>
                            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                                <li>Fill the enquiry form</li>
                                <li>Schedule a consultation call</li>
                                <li>Receive course details and fee structure</li>
                                <li>Complete registration</li>
                                <li>Get access to student portal</li>
                            </ol>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                                Enquire Now
                            </button>
                            <button className="bg-secondary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                                Enrol Now
                            </button>
                            <button className="border border-border bg-background px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors">
                                WhatsApp Us
                            </button>
                        </div>
                    </div>
                </section>

                {/* Why Choose Rofsan Sir */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Rofsan Sir?</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-4">Cambridge-Certified Expertise</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• CAIE-Certified and Cambridge-Trained Bengali Educator</li>
                                    <li>• Official Cambridge O Level Bengali Examiner</li>
                                    <li>• Assessment Specialist for Cambridge O Level Bengali</li>
                                    <li>• Former Senior Faculty at Oxford International School (2019-2024)</li>
                                    <li>• Former Lead Teacher, Bengali Department at European Standard School</li>
                                    <li>• Author of 4 Published O Level Bengali Guidebooks</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-4">Unique Teaching Approach</h3>
                                <p className="text-muted-foreground mb-4">
                                    A core strength of Rofsan's professional journey is his research-based, modern, and activity-driven approach to teaching Bengali, developed specifically for English medium learners.
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Reduces rote memorization</li>
                                    <li>• Empowers critical engagement with language</li>
                                    <li>• Develops genuine fluency</li>
                                    <li>• Makes Bengali valuable beyond exams</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-4">Proven Results</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Guided thousands of O Level candidates to success</li>
                                    <li>• Consistent A* and A grades achievement</li>
                                    <li>• Students gain confidence and genuine proficiency</li>
                                    <li>• High success rate year after year</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Class Locations */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12">Class Locations</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-lg font-semibold text-primary mb-4">Primary Center</h3>
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <p className="font-medium">7/7, Block-C, Lalmatia</p>
                                        <p className="text-muted-foreground">Dhaka-1207, Bangladesh</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="text-lg font-semibold text-primary mb-4">Secondary Center</h3>
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <p className="font-medium">8/12, Block-B, Lalmatia</p>
                                        <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-surface p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-2">
                                <Monitor className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold text-primary">Online Classes</h3>
                            </div>
                            <p className="text-muted-foreground">Available via Zoom/Google Meet for students outside Dhaka and abroad</p>
                        </div>
                    </div>
                </section>

                {/* Contact for Admission */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Contact for Admission</h2>

                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                                <div className="space-y-1">
                                    <p className="font-semibold">+880 1643-390839</p>
                                    <p className="font-semibold">+880 1948-116595</p>
                                    <p className="font-semibold">01711 772 662</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                                <div>
                                    <p className="font-semibold">rofsankhan@gmail.com</p>
                                    <p className="text-muted-foreground">Email us anytime</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                                <div>
                                    <p className="font-semibold">Lalmatia, Dhaka</p>
                                    <p className="text-muted-foreground">Visit our centers</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-muted-foreground mb-6">
                                Online batches available for students outside Dhaka and Abroad
                            </p>
                            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                                Call Now: +880 1948-116595
                            </button>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
