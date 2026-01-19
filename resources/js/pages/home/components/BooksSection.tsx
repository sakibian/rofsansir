const books = [
    {
        title: 'O Level Bengali FOUNDATION PLUS',
        subtitle:
            'A foundation book to make O Level Bengali easier and more manageable for learners.',
        image: '/books/4.png',
    },
    {
        title: 'O Level Bengali BASICS PLUS',
        subtitle:
            'A Complete guide to O Level Bengali Language and Comprehension part— CAIE subject code 3204/2 Paper-02',
        image: '/books/1.png',
    },
    {
        title: 'O Level Bengali COMPOSITION PLUS',
        subtitle:
            'A complete guide to O Level Bengali composition writing — CAIE Subject code 3204/1 Paper 01',
        image: '/books/2.png',
    },
    {
        title: 'O Level Bengali PRACTICE PLUS',
        subtitle:
            'Intensive Preparation for Cambridge O Level Bengali 3204 — Paper 1 & 2',
        image: '/books/3.png',
    },
    {
        title: 'O Level Bengali REVISION PLUS',
        subtitle: 'Topic wise past paper of CAIE O Level Bengali 3204',
        image: '/books/5.png',
    },
];

const BooksSection = () => {
    return (
        <section id="books" className="py-20 px-4 md:px-8 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl md:text-4xl font-bold text-[#344871]">
                        Rofsan Khan's Published Guidebooks
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-600">
                        Comprehensive O Level Bengali Resources by Rofsan Sir
                    </p>
                </div>

                {/* Books Modern Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-1 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                <div className="relative overflow-hidden rounded-xl bg-white">
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                        />
                                    </div>

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Floating badge */}
                                    <div className="absolute top-3 right-3 translate-y-2 transform rounded-full bg-[#E9BA08] px-2 py-1 text-xs font-bold text-[#344871] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        {index + 1}
                                    </div>
                                </div>
                            </div>

                            <div className="px-2 text-center">
                                <h3 className="mb-3 text-base leading-tight font-bold text-[#344871] transition-colors duration-300 group-hover:text-[#006DD6]">
                                    {book.title}
                                </h3>
                                <p className="line-clamp-3 text-xs leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                                    {book.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BooksSection;
