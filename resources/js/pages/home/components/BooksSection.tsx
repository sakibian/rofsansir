import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const books = [
    {
        title: 'O Level Bengali BASICS PLUS',
        subtitle: 'A Complete Guide to O Level Bengali - CAIE Subject Code 3204/2 - Paper 02',
        focus: 'Foundational grammar, core concepts, and essential language structures',
        image: '/books/1.png',
        isNew: false,
    },
    {
        title: 'O Level Bengali COMPOSITION PLUS',
        subtitle: 'A Complete Guide to O Level Bengali Composition Writing - CAIE Subject Code 3204/1 - Paper 01',
        focus: 'Comprehensive composition writing techniques and creative expression strategies',
        image: '/books/2.png',
        isNew: false,
    },
    {
        title: 'O Level Bengali PRACTICE PLUS',
        subtitle: 'Intensive Preparation for Cambridge O Level Bengali 3204 - Paper 1 & 2',
        focus: 'Extensive practice materials, exercises, and topic-wise drills',
        image: '/books/3.png',
        isNew: false,
    },
    {
        title: 'O Level Bengali FOUNDATION PLUS',
        subtitle: 'Building Strong Basics in Bengali for O Level Students',
        focus: 'Complete foundation course with step-by-step integrated approach',
        image: '/books/4.png',
        isNew: true,
    },
    {
        title: 'O Level Bengali REVISION PLUS',
        subtitle: 'Topic Wise Past Paper of CAIE O Level Bengali 3204',
        focus: 'Organized past papers by topic with detailed solutions',
        image: '/books/5.png',
        isNew: false,
    },
    {
        title: 'Aspects of Bengali Language',
        subtitle: 'A Complete Guide to \'O\' Level Bengali - CIE Subject Code: 3204/2 - Paper-2',
        focus: 'Comprehensive Paper 2 preparation',
        image: '/books/6.png',
        isNew: false,
    },
    {
        title: 'Bengali Easy Composition',
        subtitle: 'A Complete Guide to \'O\' level Bengali Composition Writing - CIE Subject Code: 3204/1 - Paper-1',
        focus: 'Simplified composition writing for Paper 1',
        image: '/books/7.png',
        isNew: false,
    },
];

const BooksSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const booksPerView = 4; // Show 4 books on desktop, 2 on tablet, 1 on mobile
    const maxIndex = Math.max(0, books.length - booksPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const visibleBooks = books.slice(currentIndex, currentIndex + booksPerView);

    return (
        <section id="books" className="bg-surface py-16 lg:py-24">
            <div className="container-max section-padding">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
                        Rofsan Khan's Published Guidebooks
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Comprehensive O Level Bengali Resources by a Cambridge Examiner
                    </p>
                </div>

                {/* Books Carousel */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 rounded-full bg-white p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
                        aria-label="Previous books"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
                        aria-label="Next books"
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>

                    {/* Books Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {visibleBooks.map((book, index) => (
                            <div
                                key={currentIndex + index}
                                className="group animate-fade-in cursor-pointer"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl shadow-soft transition-all duration-300 group-hover:shadow-card">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {book.isNew && (
                                        <div className="absolute top-2 right-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
                                            NEW
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>

                                <h3 className="mb-1 font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-2">
                                    {book.title}
                                </h3>
                                <p className="mb-2 text-xs text-muted-foreground line-clamp-2">
                                    {book.subtitle}
                                </p>
                                <p className="mb-3 text-xs text-muted-foreground line-clamp-2">
                                    {book.focus}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-primary">
                                        View Details
                                    </span>
                                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="mt-12 text-center">
                    <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
                        These published works reflect Rofsan Khan's commitment to high-quality academic resources rooted in classroom realities and learner needs. Each book is designed by a Cambridge Examiner to address real challenges faced by English medium students.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BooksSection;
