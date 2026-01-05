import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';
import { BookOpen, FileText, Search, Download, Clock, Shield, Lock, CheckCircle, Filter } from 'lucide-react';

export default function Resources() {
    return (
        <>
            <Head title="Resources - Rofsan Sir" />
            <div className="min-h-screen bg-background">
                <Header />

                {/* Page Header */}
                <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
                    <div className="container-max section-padding">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Expert Resources for O Level Bengali Excellence
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Free and Premium study materials created by a Cambridge Examiner
                            </p>
                        </div>
                    </div>
                </section>

                {/* Resource Categories */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Resource Categories</h2>

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
                            ].map((category, index) => (
                                <div key={index} className="bg-card p-6 rounded-xl border border-border">
                                    <div className="flex items-center gap-3 mb-4">
                                        <category.icon className="h-6 w-6 text-primary" />
                                        <h3 className="font-semibold text-foreground">{category.title}</h3>
                                    </div>
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
                            ))}
                        </div>
                    </div>
                </section>

                {/* Published Guidebooks */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Published Guidebooks</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Comprehensive O Level Bengali Resources by a Cambridge Examiner
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "O Level Bengali BASICS PLUS",
                                    subtitle: "A Complete Guide to O Level Bengali - CAIE Subject Code 3204/2 - Paper 02",
                                    focus: "Foundational grammar, core concepts, and essential language structures",
                                    status: "premium"
                                },
                                {
                                    title: "O Level Bengali COMPOSITION PLUS",
                                    subtitle: "A Complete Guide to O Level Bengali Composition Writing - CAIE Subject Code 3204/1 - Paper 01",
                                    focus: "Comprehensive composition writing techniques and creative expression strategies",
                                    status: "premium"
                                },
                                {
                                    title: "O Level Bengali PRACTICE PLUS",
                                    subtitle: "Intensive Preparation for Cambridge O Level Bengali 3204 - Paper 1 & 2",
                                    focus: "Extensive practice materials, exercises, and topic-wise drills",
                                    status: "premium"
                                },
                                {
                                    title: "O Level Bengali FOUNDATION PLUS",
                                    subtitle: "Building Strong Basics in Bengali for O Level Students",
                                    focus: "Complete foundation course with step-by-step integrated approach",
                                    status: "new"
                                },
                                {
                                    title: "O Level Bengali REVISION PLUS",
                                    subtitle: "Topic Wise Past Paper of CAIE O Level Bengali 3204",
                                    focus: "Organized past papers by topic with detailed solutions",
                                    status: "premium"
                                },
                                {
                                    title: "Aspects of Bengali Language",
                                    subtitle: "A Complete Guide to 'O' Level Bengali - CIE Subject Code: 3204/2 - Paper-2",
                                    focus: "Comprehensive Paper 2 preparation",
                                    status: "premium"
                                },
                                {
                                    title: "Bengali Easy Composition",
                                    subtitle: "A Complete Guide to 'O' level Bengali Composition Writing - CIE Subject Code: 3204/1 - Paper-1",
                                    focus: "Simplified composition writing for Paper 1",
                                    status: "premium"
                                },
                                {
                                    title: "O Level Bengali REVISION BOOK",
                                    subtitle: "CAIE O Level Bengali 3204 - Cambridge Past Papers with Solutions",
                                    focus: "Past papers, mark schemes, examiner commentary",
                                    status: "premium"
                                }
                            ].map((book, index) => (
                                <div key={index} className="bg-card p-6 rounded-xl border border-border relative">
                                    {book.status === "new" && (
                                        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                                            NEW
                                        </div>
                                    )}
                                    <div className="mb-4">
                                        <h3 className="font-bold text-foreground mb-2">{book.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-3">{book.subtitle}</p>
                                        <p className="text-sm text-foreground mb-4"><strong>Focus:</strong> {book.focus}</p>
                                        <p className="text-xs text-muted-foreground"><strong>Author:</strong> Rofsan Khan</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                            <Download className="h-4 w-4 inline mr-1" />
                                            Download PDF
                                        </button>
                                        <button className="flex-1 border border-border bg-background px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent transition-colors">
                                            Order Physical Copy
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-card rounded-xl border border-border">
                            <h3 className="font-semibold text-foreground mb-4">About the Author</h3>
                            <p className="text-muted-foreground">
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
