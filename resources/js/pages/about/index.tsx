import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';
import { Award, BookOpen, Users, GraduationCap, MapPin, Phone, Mail, Star, CheckCircle } from 'lucide-react';

export default function About() {
    return (
        <>
            <Head title="About Rofsan Sir - Cambridge Examiner" />
            <div className="min-h-screen bg-background">
                <Header />

                {/* Page Header */}
                <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
                    <div className="container-max section-padding">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Meet Your Cambridge Examiner
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                CAIE-Certified Bengali Educator | Assessment Specialist | Published Author
                            </p>
                        </div>
                    </div>
                </section>

                {/* Professional Overview */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Professional Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Rofsan Khan is a CAIE-certified and Cambridge-trained Bengali educator, currently serving as an <strong className="text-primary">Examiner and Assessment Specialist for Cambridge O Level Bengali</strong>. With a distinguished career spanning over five years in leadership positions at Bangladesh's premier English medium institutions, he has established himself as one of the country's leading authorities on O Level Bengali instruction and assessment.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Career Journey & Teaching Leadership */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Career Journey & Teaching Leadership</h2>

                        <div className="space-y-8 max-w-4xl mx-auto">
                            <div className="bg-card p-8 rounded-xl border border-border">
                                <div className="flex items-center gap-3 mb-6">
                                    <GraduationCap className="h-8 w-8 text-primary" />
                                    <h3 className="text-2xl font-bold text-primary">2019 - 2024: Oxford International School (OIS)</h3>
                                </div>
                                <h4 className="text-xl font-semibold text-foreground mb-4">Senior Faculty of Bengali</h4>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Developed comprehensive curriculum frameworks for O Level Bengali</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Designed internal assessments aligned with Cambridge standards</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Mentored junior faculty members in effective teaching methodologies</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Led departmental training sessions on assessment techniques</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-card p-8 rounded-xl border border-border">
                                <div className="flex items-center gap-3 mb-6">
                                    <Users className="h-8 w-8 text-secondary" />
                                    <h3 className="text-2xl font-bold text-secondary">European Standard School (ESS)</h3>
                                </div>
                                <h4 className="text-xl font-semibold text-foreground mb-4">Lead Teacher, Bengali Department</h4>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Overall leadership of the Bengali language program</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Syllabus planning and curriculum development</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Internal assessment design and standardization</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Departmental training and professional development</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span>Quality assurance for Bengali language instruction across multiple levels</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Qualifications */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Academic Qualifications</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-card p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-primary mb-6">University of Chittagong</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Award className="h-5 w-5 text-primary mt-0.5" />
                                        <span className="text-muted-foreground"><strong>Honours Degree</strong> in Bengali Language and Literature</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Award className="h-5 w-5 text-primary mt-0.5" />
                                        <span className="text-muted-foreground"><strong>Master's Degree</strong> in Bengali Language and Literature</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-card p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-secondary mb-6">Cambridge International Education</h3>
                                <p className="text-muted-foreground mb-4">Completed formal training programs in:</p>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li>• Syllabus interpretation and delivery</li>
                                    <li>• Assessment methodology and marking standards</li>
                                    <li>• Exam preparation strategies aligned with global academic standards</li>
                                    <li>• Cambridge examination system and mark scheme application</li>
                                </ul>
                                <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
                                    <p className="text-sm font-semibold text-secondary">Professional Certifications:</p>
                                    <p className="text-sm text-secondary">CAIE-Certified Educator, Cambridge Assessment Trained Examiner, Assessment Specialist for O Level Bengali</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Examiner & Assessment Expertise */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Examiner & Assessment Expertise</h2>

                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                As a <strong className="text-primary">Cambridge-appointed Examiner</strong>, Rofsan brings invaluable insider knowledge to his teaching:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-muted-foreground">In-depth understanding of Cambridge mark schemes</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-muted-foreground">Direct experience evaluating thousands of O Level scripts</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-muted-foreground">Expert knowledge of what examiners look for in high-scoring answers</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-muted-foreground">Practical insights into common mistakes and how to avoid them</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-muted-foreground">Comprehensive understanding of assessment methodology</span>
                                    </div>
                                </div>

                                <div className="bg-card p-6 rounded-xl border border-border">
                                    <p className="text-muted-foreground leading-relaxed">
                                        This unique position allows him to guide students with precision, ensuring they understand not just what to write, but <strong className="text-primary">how examiners will evaluate their work</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Teaching Philosophy & Methodology */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Teaching Philosophy & Methodology</h2>

                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-primary mb-6">A Research-Based, Modern Approach</h3>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                A core strength of Rofsan's professional journey is his <strong className="text-primary">research-based, modern, and activity-driven approach to teaching Bengali</strong>, developed specifically for English medium learners. His pedagogy represents a fundamental shift from traditional methods:
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                <div className="bg-card p-6 rounded-xl border border-border">
                                    <h4 className="font-semibold text-foreground mb-3">1. Linguistic Analysis Integration</h4>
                                    <p className="text-sm text-muted-foreground">Breaking down complex grammar and language structures into understandable components through systematic linguistic analysis</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border">
                                    <h4 className="font-semibold text-foreground mb-3">2. Student-Centered Learning</h4>
                                    <p className="text-sm text-muted-foreground">Activity-driven classroom techniques that engage students actively rather than passive listening</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border">
                                    <h4 className="font-semibold text-foreground mb-3">3. Simplified Grammar Instruction</h4>
                                    <p className="text-sm text-muted-foreground">Making Bengali grammar accessible without oversimplification, maintaining academic rigor while ensuring clarity</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border">
                                    <h4 className="font-semibold text-foreground mb-3">4. Literary Appreciation Development</h4>
                                    <p className="text-sm text-muted-foreground">Teaching students to engage with Bengali literature critically and appreciatively, not just memorize texts</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border">
                                    <h4 className="font-semibold text-foreground mb-3">5. Anti-Rote Learning Design</h4>
                                    <p className="text-sm text-muted-foreground">Deliberately designed to reduce dependency on rote memorization and translation</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20">
                                <h4 className="text-xl font-bold text-primary mb-4">The Goal: Real Fluency</h4>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Rofsan's method empowers students to:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Engage critically with the Bengali language</li>
                                    <li>• Develop genuine fluency and confidence</li>
                                    <li>• Move beyond translation dependency</li>
                                    <li>• Understand cultural contexts and nuances</li>
                                    <li>• Value Bengali as a living language, not just an exam subject</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    <strong className="text-primary">Making Bengali Accessible:</strong> His approach makes Bengali not just a subject to pass, but a language students understand, value, and carry forward as English medium learners. Students leave his classes with both excellent exam results and genuine language competency.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Teaching Impact & Student Success */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Teaching Impact & Student Success</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-card p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-primary mb-6">Proven Track Record</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li>• Guided thousands of O Level candidates to strong examination success</li>
                                    <li>• Consistent achievement of high grades (A* and A) by students</li>
                                    <li>• Students report increased confidence in Bengali language skills</li>
                                    <li>• High success rate maintained year after year across different batches</li>
                                </ul>
                            </div>

                            <div className="bg-card p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-secondary mb-6">Student Outcomes</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li>• Strong examination performance in both Paper 1 and Paper 2</li>
                                    <li>• Development of genuine language proficiency beyond exam requirements</li>
                                    <li>• Cultural connection and appreciation for Bengali heritage</li>
                                    <li>• Skills that students carry forward into higher education and beyond</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-xl border border-secondary/20 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold text-primary mb-4">Teaching Approach Focus</h3>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">Clarity</h4>
                                    <p className="text-sm text-muted-foreground">Clear explanation and instruction</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">Readiness</h4>
                                    <p className="text-sm text-muted-foreground">Exam readiness and strategic preparation</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">Connection</h4>
                                    <p className="text-sm text-muted-foreground">Cultural connection and authentic language use</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Published Works & Academic Contributions */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Published Works & Academic Contributions</h2>

                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Rofsan is the author of <strong className="text-primary">four comprehensive O Level Bengali guidebooks</strong> that have become essential resources for thousands of students:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-card p-6 rounded-xl border border-border">
                                    <h3 className="font-bold text-foreground mb-2">O Level Bengali Basics Plus</h3>
                                    <p className="text-sm text-muted-foreground mb-3">Foundational guide covering core concepts, grammar fundamentals, and essential language structures for students beginning their O Level journey.</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border">
                                    <h3 className="font-bold text-foreground mb-2">O Level Bengali Compositions Plus</h3>
                                    <p className="text-sm text-muted-foreground mb-3">Comprehensive composition writing guide with essay structures, sample pieces, and techniques for creative and analytical writing.</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border">
                                    <h3 className="font-bold text-foreground mb-2">O Level Bengali Practice Plus</h3>
                                    <p className="text-sm text-muted-foreground mb-3">Extensive practice materials with topic-wise exercises, grammar drills, and comprehensive answer keys aligned to CAIE standards.</p>
                                </div>
                                <div className="bg-card p-6 rounded-xl border border-border relative">
                                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                                        NEW
                                    </div>
                                    <h3 className="font-bold text-foreground mb-2">O Level Bengali Foundation Plus</h3>
                                    <p className="text-sm text-muted-foreground mb-3">Complete foundation course offering integrated, step-by-step preparation covering the entire O Level syllabus.</p>
                                </div>
                            </div>

                            <div className="bg-card p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-primary mb-4">Author's Philosophy</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    These published works reflect Rofsan's commitment to <strong className="text-primary">high-quality academic resources rooted in classroom realities and learner needs</strong>. Each book addresses real challenges he has observed in years of teaching English medium students, providing practical solutions that work in actual learning environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professional Approach */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Professional Approach</h2>

                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-primary mb-8">What Sets Rofsan Apart</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Star className="h-5 w-5 text-amber-500 mt-0.5" />
                                        <span className="text-muted-foreground"><strong>Dual Perspective:</strong> Both teacher and examiner—understands learning challenges AND assessment standards</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Star className="h-5 w-5 text-amber-500 mt-0.5" />
                                        <span className="text-muted-foreground"><strong>Research-Based Methods:</strong> Teaching approach grounded in linguistic research and pedagogical best practices</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Star className="h-5 w-5 text-amber-500 mt-0.5" />
                                        <span className="text-muted-foreground"><strong>English Medium Expertise:</strong> Specialized understanding of challenges faced by English medium students learning Bengali</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Star className="h-5 w-5 text-amber-500 mt-0.5" />
                                        <span className="text-muted-foreground"><strong>Leadership Experience:</strong> Proven track record leading departments and training other teachers</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Star className="h-5 w-5 text-amber-500 mt-0.5" />
                                        <span className="text-muted-foreground"><strong>Continuous Development:</strong> Ongoing Cambridge training and professional development</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Star className="h-5 w-5 text-amber-500 mt-0.5" />
                                        <span className="text-muted-foreground"><strong>Published Authority:</strong> Author of widely-used guidebooks demonstrating deep subject expertise</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20">
                                <h3 className="text-xl font-bold text-primary mb-4">Commitment to Excellence</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Rofsan's work is driven by a commitment to:
                                </p>
                                <ul className="space-y-2 text-muted-foreground mt-4">
                                    <li>• Academic excellence without compromising accessibility</li>
                                    <li>• Student success measured not just by grades but by genuine learning</li>
                                    <li>• Cultural connection through language education</li>
                                    <li>• Professional integrity in teaching and assessment</li>
                                    <li>• Continuous improvement and innovation in teaching methods</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Vision & Mission</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-card p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-primary mb-6">Vision</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To make Bengali language education accessible, engaging, and successful for English medium students across Bangladesh and beyond, while preserving the beauty and cultural richness of the language.
                                </p>
                            </div>

                            <div className="bg-card p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-secondary mb-6">Mission</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To provide world-class Bengali language instruction that combines Cambridge assessment expertise with innovative, student-centered teaching methods, enabling students to achieve academic excellence while developing genuine language proficiency and cultural appreciation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Connect With Rofsan Khan */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Connect With Rofsan Khan</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Professional Inquiries</h3>
                                        <p className="text-muted-foreground">rofsankhan@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Teaching Location</h3>
                                        <p className="text-muted-foreground">Lalmatia, Dhaka-1207, Bangladesh</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Phone</h3>
                                        <p className="text-muted-foreground">+880 1948-116595</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-primary mb-4">Website</h3>
                                <p className="text-muted-foreground mb-4">www.rofsankhan.com</p>

                                <div className="border-t border-border pt-4">
                                    <p className="text-muted-foreground italic leading-relaxed">
                                        "Learning Bengali should never be about just passing an exam. It's about connecting with your heritage, understanding a beautiful language, and carrying that knowledge forward with pride and confidence."
                                    </p>
                                    <p className="text-primary font-semibold mt-2">— Rofsan Khan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
