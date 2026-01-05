import Header from '@/components/header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import MentorSection from './components/MentorSection';
import CoursesSection from './components/CoursesSection';
import BooksSection from './components/BooksSection';
import CTASection from './components/CTASection';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home - Rofsan Sir" />
            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <HeroSection />
                    <StatsSection />
                    <MentorSection />
                    <CoursesSection />
                    <BooksSection />
                    <CTASection />
                </main>
                <Footer />
            </div>
        </>
    );
}
