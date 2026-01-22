import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';
import { BookOpen, CheckCircle, Lightbulb, MessageCircle, Target, TrendingUp, AlertTriangle, Calendar, Star } from 'lucide-react';
import { useScrollAnimation } from '@/animations/hooks/useScrollAnimation';
import { useCardHoverAnimation } from '@/animations/hooks/useHoverAnimation';
import AnimatedSection from '@/animations/components/AnimatedSection';
import AnimatedGrid from '@/animations/components/AnimatedGrid';

export default function Tips() {
    const { elementRef: heroRef, isIntersecting: heroIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: introRef, isIntersecting: introIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: categoriesRef, isIntersecting: categoriesIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: markSchemeRef, isIntersecting: markSchemeIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: successRef, isIntersecting: successIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: criteriaRef, isIntersecting: criteriaIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: mistakesRef, isIntersecting: mistakesIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: askRef, isIntersecting: askIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: resourcesRef, isIntersecting: resourcesIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { hoverStyles: cardHoverStyles, hoverHandlers: cardHoverHandlers } = useCardHoverAnimation();

    return (
        <>
            <Head title="Examiner Tips - Rofsan Sir" />
            <div className="min-h-screen bg-background">
                <Header />

                {/* Page Header */}
                <AnimatedSection
                    className="bg-gradient-to-br from-brand-blue/5 via-white to-brand-navy/5 py-16"
                    animationType="fade-in-up"
                    delay={0}
                    elementRef={heroRef}
                >
                    <div className="container-max section-padding">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                                The Examiner's Eye: Insider Secrets to O Level Bengali Success
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Direct insights from a Cambridge Bengali Examiner - Learn what actually gets you marks
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Introduction */}
                <AnimatedSection
                    className="py-16"
                    animationType="fade-in-up"
                    delay={100}
                    elementRef={introRef}
                >
                    <div className="container-max section-padding">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                As an official CAIE Bengali Examiner and Cambridge-trained Assessment Specialist, I evaluate hundreds of scripts every examination session. With over 5 years of experience leading Bengali departments at Oxford International School and European Standard School, I've developed deep insights into what actually earns marks and what causes students to lose them.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Here, I share the patterns I observe, common mistakes that cost students valuable marks, and proven strategies that have helped thousands of candidates achieve A* grades. These aren't generic tips—they're examiner insights from someone who designs assessments, trains teachers, and marks your actual exam papers.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Examiner Tips Categories */}
                <AnimatedSection
                    className="py-16 bg-surface"
                    animationType="fade-in-up"
                    delay={200}
                    ref={categoriesRef}
                    aria-label="Examiner tips categories"
                    role="region"
                >
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Examiner Tips Blog Categories</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Paper 1 Tips */}
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                                        <Target className="h-6 w-6 text-brand-blue" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy">Paper 1: Composition & Comprehension Tips</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-brand-blue/30 pl-4">
                                        <h4 className="font-semibold text-brand-navy mb-1">Tip #1: The 10-Second First Impression</h4>
                                        <p className="text-sm text-gray-600">What examiners look for in the opening paragraph of your composition.</p>
                                    </div>
                                    <div className="border-l-4 border-brand-blue/30 pl-4">
                                        <h4 className="font-semibold text-brand-navy mb-1">Tip #2: Vocabulary That Impresses</h4>
                                        <p className="text-sm text-gray-600">Rare Bengali words that demonstrate language sophistication (with examples and usage).</p>
                                    </div>
                                    <div className="border-l-4 border-brand-blue/30 pl-4">
                                        <h4 className="font-semibold text-brand-navy mb-1">Tip #3: Common Composition Mistakes</h4>
                                        <p className="text-sm text-gray-600">Five errors that appear in 80% of scripts - and how to avoid them.</p>
                                    </div>
                                    <div className="border-l-4 border-brand-blue/30 pl-4">
                                        <h4 className="font-semibold text-brand-navy mb-1">Tip #4: Comprehension Question Strategies</h4>
                                        <p className="text-sm text-gray-600">How to identify what the question is really asking for.</p>
                                    </div>
                                    <div className="border-l-4 border-brand-blue/30 pl-4">
                                        <h4 className="font-semibold text-brand-navy mb-1">Tip #5: Time Management in Paper 1</h4>
                                        <p className="text-sm text-gray-600">Allocating 2 hours effectively across all questions.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Paper 2 Tips */}
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center">
                                        <Lightbulb className="h-6 w-6 text-brand-navy" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy">Paper 2: Language & Grammar Tips</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-brand-navy/30 pl-4">
                                        <h4 className="font-semibold text-brand-navy mb-1">Tip #6: Grammar Questions That Trip Students Up</h4>
                                        <p className="text-sm text-gray-600">The three grammar topics where most marks are lost.</p>
                                    </div>
                                    <div className="border-l-4 border-brand-navy/30 pl-4">
                                        <h4 className="font-semibold text-brand-navy mb-1">Tip #7: Translation Excellence</h4>
                                        <p className="text-sm text-gray-600">Moving from literal translation to natural Bengali expression.</p>
                                    </div>
                                    <div className="border-l-4 border-brand-navy/30 pl-4">
                                        <h4 className="font-semibold text-brand-navy mb-1">Tip #8: Mark Scheme Secrets</h4>
                                        <p className="text-sm text-gray-600">Understanding how examiners award marks for grammar questions.</p>
                                    </div>
                                    <div className="border-l-4 border-brand-navy/30 pl-4">
                                        <h4 className="font-semibold text-brand-navy mb-1">Tip #9: Sentence Construction Mastery</h4>
                                        <p className="text-sm text-gray-600">Building complex sentences that showcase language ability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* General Exam Strategy Tips */}
                        <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center">
                                    <TrendingUp className="h-6 w-6 text-brand-navy" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy">General Exam Strategy Tips</h3>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="border-l-4 border-brand-navy/30 pl-4">
                                    <h4 className="font-semibold text-brand-navy mb-1">Tip #10: The A* Mindset</h4>
                                    <p className="text-sm text-gray-600">What separates grade A students from A* students.</p>
                                </div>
                                <div className="border-l-4 border-brand-navy/30 pl-4">
                                    <h4 className="font-semibold text-brand-navy mb-1">Tip #11: Past Paper Practice Method</h4>
                                    <p className="text-sm text-gray-600">The right way to use past papers for maximum improvement.</p>
                                </div>
                                <div className="border-l-4 border-brand-navy/30 pl-4">
                                    <h4 className="font-semibold text-brand-navy mb-1">Tip #12: Handwriting & Presentation</h4>
                                    <p className="text-sm text-gray-600">Yes, it matters - here's how much.</p>
                                </div>
                                <div className="border-l-4 border-brand-navy/30 pl-4">
                                    <h4 className="font-semibold text-brand-navy mb-1">Tip #13: Revision Strategy</h4>
                                    <p className="text-sm text-gray-600">A 6-week plan for comprehensive Bengali revision.</p>
                                </div>
                                <div className="border-l-4 border-brand-navy/30 pl-4">
                                    <h4 className="font-semibold text-brand-navy mb-1">Tip #14: Exam Day Checklist</h4>
                                    <p className="text-sm text-gray-600">What to do the night before and morning of your exam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Weekly Feature */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20">
                            <h2 className="text-2xl font-bold text-primary mb-4">Weekly Feature: "The Examiner's Eye"</h2>
                            <div className="flex items-center gap-4 mb-4">
                                <Calendar className="h-5 w-5 text-primary" />
                                <span className="text-muted-foreground">Latest Post: [Date]</span>
                            </div>
                            <p className="text-lg text-foreground mb-4 font-semibold">
                                This Week's Topic: "One common mistake students make in Paper 1"
                            </p>
                            <p className="text-muted-foreground">
                                Each week, I highlight a specific error pattern I observe frequently. Why students make this mistake, step-by-step correction method, and practice exercise.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mark Scheme Decoded */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Mark Scheme Decoded</h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Understanding what examiners look for:
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-card p-6 rounded-xl border border-border text-center">
                                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                                <h3 className="font-semibold text-foreground mb-3">Content</h3>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Relevance to question</li>
                                    <li>• Depth of ideas</li>
                                    <li>• Organization of thoughts</li>
                                </ul>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border text-center">
                                <div className="text-3xl font-bold text-secondary mb-2">40%</div>
                                <h3 className="font-semibold text-foreground mb-3">Language</h3>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Vocabulary range</li>
                                    <li>• Grammar accuracy</li>
                                    <li>• Sentence variety</li>
                                </ul>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border text-center">
                                <div className="text-3xl font-bold text-primary mb-2">20%</div>
                                <h3 className="font-semibold text-foreground mb-3">Style & Expression</h3>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Natural flow</li>
                                    <li>• Cultural authenticity</li>
                                    <li>• Appropriate register</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Student Success Stories */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Student Success Stories</h2>
                        <div className="text-center mb-8">
                            <h3 className="text-xl font-semibold text-primary mb-4">Celebrating Excellence</h3>
                            <ul className="space-y-2 text-muted-foreground max-w-md mx-auto">
                                <li>• Mock test toppers</li>
                                <li>• Final CAIE results highlights</li>
                                <li>• Student testimonials</li>
                                <li>• A* achievement strategies</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Examiner's Assessment Criteria */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Examiner's Assessment Criteria</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-card p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-primary mb-6">For Composition Writing</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Clear structure (introduction, body, conclusion)</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Sophisticated vocabulary</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Varied sentence structures</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Cultural appropriateness</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Grammatical accuracy</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Coherent flow of ideas</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold text-secondary mb-6">For Comprehension</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Direct answers to questions</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Evidence from the text</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Understanding of context</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Appropriate length of response</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">Clear Bengali expression</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-card p-8 rounded-xl border border-border">
                            <h3 className="text-xl font-bold text-primary mb-6">For Grammar/Language</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Technical accuracy</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Understanding of rules</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Proper application</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Attention to detail</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Mistakes Database */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Common Mistakes Database</h2>

                        <div className="bg-card p-8 rounded-xl border border-border">
                            <h3 className="text-xl font-bold text-primary mb-6">Top 10 Mistakes Students Make</h3>
                            <div className="grid gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                    <div key={num} className="flex items-start gap-4 p-4 bg-surface rounded-lg">
                                        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-foreground">Mistake #{num}</h4>
                                            <p className="text-sm text-muted-foreground">[Mistake + How to Fix]</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ask the Examiner */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <MessageCircle className="h-8 w-8 text-primary" />
                                <h2 className="text-3xl font-bold text-foreground">Ask the Examiner</h2>
                            </div>
                            <p className="text-lg text-muted-foreground mb-8">
                                Have a specific question? Submit your Bengali language or exam preparation questions, and I'll answer them in upcoming blog posts.
                            </p>
                            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                                Submit Question
                            </button>
                        </div>
                    </div>
                </section>

                {/* Examiner-Recommended Resources */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Examiner-Recommended Resources</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-card p-6 rounded-xl border border-border text-center">
                                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="font-semibold text-foreground mb-2">Textbooks</h3>
                                <p className="text-sm text-muted-foreground">Which textbooks to use</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border text-center">
                                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="font-semibold text-foreground mb-2">Online Resources</h3>
                                <p className="text-sm text-muted-foreground">Reliable online resources</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border text-center">
                                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="font-semibold text-foreground mb-2">Literature</h3>
                                <p className="text-sm text-muted-foreground">Bengali literature recommendations</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border text-center md:col-span-2 lg:col-span-1">
                                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="font-semibold text-foreground mb-2">Practice Materials</h3>
                                <p className="text-sm text-muted-foreground">Practice material suggestions</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
