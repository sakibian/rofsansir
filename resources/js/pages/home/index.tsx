import Footer from '@/components/Footer';
import Header from '@/components/header';
import { Head } from '@inertiajs/react';
// Animation components are used in section components
import '@/animations/index';
import AssessmentSection from './components/AssessmentSection';
import BooksSection from './components/BooksSection';
import CoursesSection from './components/CoursesSection';
import HeroSection from './components/HeroSection';
import MentorSection from './components/MentorSection';
import WhyRofsanSirSection from './components/WhyRofsanSirSection';

interface Routine {
    id: number;
    title: string;
    day_of_week: string;
    start_time: string;
    end_time: string;
    location?: string | null;
    description?: string | null;
}

interface Props {
    routines: Routine[];
}

export default function Home({ routines }: Props) {
    return (
        <>
            <Head>
                <title>
                    Rofsan Sir - O Level Bangla Expert | Cambridge Examiner |
                    Dhaka, Bangladesh
                </title>
                <meta
                    name="description"
                    content="Master O Level Bangla with Rofsan Sir, a certified Cambridge Examiner. Expert coaching for Paper 1 & 2, full syllabus coverage, mock tests, and guaranteed results. Classes in Dhaka, Bangladesh."
                />
                <meta
                    name="keywords"
                    content="O Level Bangla, Cambridge Examiner, Rofsan Sir, Bengali tuition, O Level coaching, Paper 1 Paper 2, Dhaka classes, Bangladesh education, Cambridge IGCSE"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://rofsansir.com/" />
                <meta
                    property="og:title"
                    content="Rofsan Sir - O Level Bangla Expert | Cambridge Examiner"
                />
                <meta
                    property="og:description"
                    content="Master O Level Bangla with certified Cambridge Examiner. Expert coaching, mock tests, guaranteed results. Classes in Dhaka, Bangladesh."
                />
                <meta
                    property="og:image"
                    content="https://rofsansir.com/logos/logo.png"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Rofsan Sir" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://rofsansir.com/" />
                <meta
                    name="twitter:title"
                    content="Rofsan Sir - O Level Bangla Expert | Cambridge Examiner"
                />
                <meta
                    name="twitter:description"
                    content="Master O Level Bangla with certified Cambridge Examiner. Expert coaching, mock tests, guaranteed results."
                />
                <meta
                    name="twitter:image"
                    content="https://rofsansir.com/logos/logo.png"
                />

                {/* Additional SEO Meta Tags */}
                <meta name="author" content="Rofsan Sir" />
                <meta
                    name="robots"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://rofsansir.com/" />

                {/* Local SEO */}
                <meta name="geo.region" content="BD-C" />
                <meta name="geo.placename" content="Dhaka, Bangladesh" />
                <meta name="geo.position" content="23.8103;90.4125" />
                <meta name="ICBM" content="23.8103, 90.4125" />

                {/* Business/Contact Info */}
                <meta
                    name="contact"
                    content="Rofsan Sir Educational Services"
                />
                <meta
                    name="DC.title"
                    content="Rofsan Sir - O Level Bangla Coaching"
                />

                {/* Educational Schema Preparation */}
                <meta name="course:subject" content="O Level Bangla" />
                <meta name="course:provider" content="Rofsan Sir" />
                <meta
                    name="course:institution"
                    content="Rofsan Sir Educational Services"
                />
            </Head>
            <div className="min-h-screen bg-background">
                <Header />
                <main aria-label="Main content sections" role="main">
                    <HeroSection />
                    <MentorSection />
                    <CoursesSection />
                    <AssessmentSection />
                    <BooksSection />
                    <WhyRofsanSirSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
