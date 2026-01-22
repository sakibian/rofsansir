import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';
import { BookOpen, FileText, Search, Download, Clock, Shield, Lock, CheckCircle, Filter } from 'lucide-react';
import { useScrollAnimation } from '@/animations/hooks/useScrollAnimation';
import { useCardHoverAnimation, useButtonHoverAnimation } from '@/animations/hooks/useHoverAnimation';
import AnimatedSection from '@/animations/components/AnimatedSection';
import AnimatedGrid from '@/animations/components/AnimatedGrid';

export default function Resources() {
    const { elementRef: heroRef, isIntersecting: heroIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: categoriesRef, isIntersecting: categoriesIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: guidebooksRef, isIntersecting: guidebooksIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: freeResourcesRef, isIntersecting: freeResourcesIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: accessLevelsRef, isIntersecting: accessLevelsIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: instructionsRef, isIntersecting: instructionsIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { elementRef: updatesRef, isIntersecting: updatesIntersecting } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { hoverStyles: cardHoverStyles, hoverHandlers: cardHoverHandlers } = useCardHoverAnimation();
    const { hoverStyles: buttonHoverStyles, hoverHandlers: buttonHoverHandlers } = useButtonHoverAnimation();

    return (
        <>
            <Head title="Resources - Rofsan Sir" />
            <div className="min-h-screen bg-background">
                <Header />

                {/* Page Header */}
                <AnimatedSection
                    className="bg-gradient-to-br from-brand-blue/5 via-white to-brand-navy/5 py-16"
                    animate={heroIntersecting}
                    animationType="fade-in-up"
                    delay={0}
                    elementRef={heroRef}
                >
                    <div className="container-max section-padding">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                                Expert Resources for O Level Bengali Excellence
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Free and Premium study materials created by a Cambridge Examiner
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Resource Categories */}
                <section className="py-16" aria-label="Resource categories" role="region">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Resource Categories</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: BookOpen,
                                    title: "Literature Analysis (সাহিত্য বিশ্লেষণ)",
                                    items: [
                                        "Poem analysis with examiner insights",
                                        "Prose comprehension guides",
                                        "Character studies",
                                        "Theme explanations",
                                        "Literary devices in Bengali literature"
                                    ],
                                    filter: "Topic | Year | Paper Type"
                                },
                                {
                                    icon: FileText,
                                    title: "Grammar Notes (ব্যাকরণ নোট)",
                                    items: [
                                        "Parts of Speech (পদ)",
                                        "Sentence Structure (বাক্য গঠন)",
                                        "Tenses (কাল)",
                                        "Voice (বচন)",
                                        "Bengali Punctuation (যতিচিহ্ন)",
                                        "Common Grammar Mistakes"
                                    ],
                                    filter: "Topic | Difficulty Level"
                                },
                                {
                                    icon: Search,
                                    title: "Vocabulary Lists (শব্দভাণ্ডার)",
                                    items: [
                                        "Thematic Vocabulary",
                                        "Rare Bengali Words with English Equivalents",
                                        "Synonyms and Antonyms",
                                        "Idioms and Phrases (বাগধারা)",
                                        "Academic Vocabulary for Essays"
                                    ],
                                    filter: "Theme | Alphabet | Difficulty"
                                },
                                {
                                    icon: CheckCircle,
                                    title: "Past Paper Practice",
                                    items: [
                                        "Previous Year Question Papers",
                                        "Examiner-marked Sample Answers",
                                        "Mark Scheme Explanations",
                                        "Common Pitfalls to Avoid",
                                        "Paper 1 & Paper 2 Sections"
                                    ],
                                    filter: "Year | Paper | Topic"
                                },
                                {
                                    icon: FileText,
                                    title: "Worksheets & Practice Materials",
                                    items: [
                                        "Composition Writing Practice",
                                        "Comprehension Exercises",
                                        "Grammar Drills",
                                        "Translation Practice (Bengali ↔ English)",
                                        "Vocabulary Tests"
                                    ],
                                    filter: "Topic | Grade Level"
                                }
                            ].map((category, index) => {
                                const colors = [
                                    { border: 'border-t-brand-blue', icon: 'text-brand-blue', bgIcon: 'bg-brand-blue/10' },
                                    { border: 'border-t-brand-navy', icon: 'text-brand-navy', bgIcon: 'bg-brand-navy/10' },
                                    { border: 'border-t-brand-navy', icon: 'text-brand-navy', bgIcon: 'bg-brand-navy/10' },
                                    { border: 'border-t-brand-blue', icon: 'text-brand-blue', bgIcon: 'bg-brand-blue/10' },
                                    { border: 'border-t-brand-navy', icon: 'text-brand-navy', bgIcon: 'bg-brand-navy/10' },
                                ];
                                const color = colors[index % colors.length];
                                return (
                                    <div key={index} className={`group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${color.border} border-t-4`}>
                                        <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:scale-110 mx-auto ${color.bgIcon}`}>
                                            <category.icon className={`h-8 w-8 ${color.icon} transition-transform duration-300`} />
                                        </div>
                                        <h3 className="mb-4 text-xl font-bold text-brand-navy">
                                            {category.title}
                                        </h3>
                                        <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                                            {category.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>• {item}</li>
                                            ))}
                                        </ul>
                                        <div className="flex items-center gap-2 text-xs text-primary">
                                            <Filter className="h-3 w-3" />
                                            <span>Filter by: {category.filter}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Published Guidebooks */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-brand-navy mb-4">Published Guidebooks</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Comprehensive O Level Bengali Resources by a Cambridge Examiner
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "O Level Bengali BASICS PLUS",
                                    subtitle: "A Complete Guide to O Level Bengali - CAIE Subject Code 3204/2 - Paper 02",
                                    focus: "Foundational grammar, core concepts, and essential language structures",
                                    status: "premium",
                                    color: "blue"
                                },
                                {
                                    title: "O Level Bengali COMPOSITION PLUS",
                                    subtitle: "A Complete Guide to O Level Bengali Composition Writing - CAIE Subject Code 3204/1 - Paper 01",
                                    focus: "Comprehensive composition writing techniques and creative expression strategies",
                                    status: "premium",
                                    color: "navy"
                                },
                                {
                                    title: "O Level Bengali PRACTICE PLUS",
                                    subtitle: "Intensive Preparation for Cambridge O Level Bengali 3204 - Paper 1 & 2",
                                    focus: "Extensive practice materials, exercises, and topic-wise drills",
                                    status: "premium",
                                    color: "navy"
                                },
                                {
                                    title: "O Level Bengali FOUNDATION PLUS",
                                    subtitle: "Building Strong Basics in Bengali for O Level Students",
                                    focus: "Complete foundation course with step-by-step integrated approach",
                                    status: "new",
                                    color: "blue"
                                },
                                {
                                    title: "O Level Bengali REVISION PLUS",
                                    subtitle: "Topic Wise Past Paper of CAIE O Level Bengali 3204",
                                    focus: "Organized past papers by topic with detailed solutions",
                                    status: "premium",
                                    color: "navy"
                                },
                                {
                                    title: "Aspects of Bengali Language",
                                    subtitle: "A Complete Guide to 'O' Level Bengali - CIE Subject Code: 3204/2 - Paper-2",
                                    focus: "Comprehensive Paper 2 preparation",
                                    status: "premium",
                                    color: "navy"
                                },
                                {
                                    title: "Bengali Easy Composition",
                                    subtitle: "A Complete Guide to 'O' level Bengali Composition Writing - CIE Subject Code: 3204/1 - Paper-1",
                                    focus: "Simplified composition writing for Paper 1",
                                    status: "premium",
                                    color: "blue"
                                },
                                {
                                    title: "O Level Bengali REVISION BOOK",
                                    subtitle: "CAIE O Level Bengali 3204 - Cambridge Past Papers with Solutions",
                                    focus: "Past papers, mark schemes, examiner commentary",
                                    status: "premium",
                                    color: "navy"
                                }
                            ].map((book, index) => {
                                const colorClasses = {
                                    blue: { bg: 'bg-brand-blue', text: 'text-white', badge: 'bg-brand-navy' },
                                    navy: { bg: 'bg-brand-navy', text: 'text-white', badge: 'bg-brand-navy' }
                                };
                                const colorClass = colorClasses[book.color as keyof typeof colorClasses];
                                return (
                                    <div key={index} className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                                        {book.status === "new" && (
                                            <div className="absolute -top-2 -right-2 bg-brand-navy text-brand-navy text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                                                NEW
                                            </div>
                                        )}
                                        <div className="mb-4">
                                            <h3 className="font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">{book.title}</h3>
                                            <p className="text-sm text-gray-600 mb-3">{book.subtitle}</p>
                                            <p className="text-sm text-brand-navy mb-4"><strong>Focus:</strong> {book.focus}</p>
                                            <p className="text-xs text-gray-500"><strong>Author:</strong> Rofsan Khan</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className={`flex-1 ${colorClass.bg} ${colorClass.text} px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg`}>
                                                <Download className="h-4 w-4 inline mr-1" />
                                                Download PDF
                                            </button>
                                            <button className="flex-1 border border-gray-300 bg-gray-50 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                                                Order Physical Copy
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                            <h3 className="font-semibold text-brand-navy mb-4">About the Author</h3>
                            <p className="text-gray-600">
                                These published works reflect Rofsan Khan's commitment to high-quality academic resources rooted in classroom realities and learner needs. As a Cambridge-trained examiner with years of teaching experience at leading institutions, each book is designed to address real challenges faced by English medium students learning Bengali.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Free Resources */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Free Resources (Open Access)</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Literature Analysis Samples", status: "free", action: "View & Download" },
                                { title: "Grammar Quick Reference Guide", status: "free", action: "View & Download" },
                                { title: "Vocabulary Flashcards (50 Words)", status: "free", action: "View & Download" },
                                { title: "Sample Essay - 'আমার প্রিয় ঋতু'", status: "free", action: "View & Download" }
                            ].map((resource, index) => (
                                <div key={index} className="bg-card p-6 rounded-xl border border-border text-center">
                                    <div className="mb-4">
                                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold mb-3">
                                            <CheckCircle className="h-3 w-3" />
                                            FREE
                                        </div>
                                        <h3 className="font-semibold text-foreground">{resource.title}</h3>
                                    </div>
                                    <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                                        {resource.action}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Resource Access Levels */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Resource Access Levels</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <CheckCircle className="h-6 w-6 text-green-600" />
                                    </div>
                                    <h3 className="font-semibold text-foreground">Free Resources</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Available to all visitors</li>
                                    <li>• No registration required</li>
                                    <li>• Preview of premium content</li>
                                </ul>
                            </div>

                            <div className="bg-card p-6 rounded-xl border border-border">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <Shield className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold text-foreground">Student Resources</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Available to enrolled students</li>
                                    <li>• Requires student login</li>
                                    <li>• Full access to course materials</li>
                                </ul>
                            </div>

                            <div className="bg-card p-6 rounded-xl border border-border">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-amber-100 rounded-lg">
                                        <Lock className="h-6 w-6 text-amber-600" />
                                    </div>
                                    <h3 className="font-semibold text-foreground">Premium Resources</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Published books and complete guides</li>
                                    <li>• Available for purchase</li>
                                    <li>• Downloadable after payment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Download Instructions */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Download Instructions</h2>

                        <div className="max-w-2xl mx-auto">
                            <ol className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">1</div>
                                    <div>
                                        <p className="font-medium text-foreground">Click on resource title</p>
                                        <p className="text-muted-foreground">Browse and select the material you need</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">2</div>
                                    <div>
                                        <p className="font-medium text-foreground">Preview available (for paid resources)</p>
                                        <p className="text-muted-foreground">Sample pages and table of contents</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">3</div>
                                    <div>
                                        <p className="font-medium text-foreground">For free: Direct download</p>
                                        <p className="text-muted-foreground">Immediate access to free resources</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">4</div>
                                    <div>
                                        <p className="font-medium text-foreground">For premium: Add to cart → Payment → Download link sent via email</p>
                                        <p className="text-muted-foreground">Secure payment process with instant delivery</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* Resource Updates */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding text-center">
                        <h2 className="text-3xl font-bold text-foreground mb-8">Resource Updates</h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <div className="flex items-center justify-center mb-3">
                                    <Clock className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">New resources added</h3>
                                <p className="text-muted-foreground">Weekly</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <div className="flex items-center justify-center mb-3">
                                    <Download className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Latest Upload</h3>
                                <p className="text-muted-foreground">[Date]</p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <div className="flex items-center justify-center mb-3">
                                    <BookOpen className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Coming Soon</h3>
                                <p className="text-muted-foreground">Vocabulary Spotlight Series, Video Tutorials</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
