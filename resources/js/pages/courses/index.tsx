import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';

export default function Courses() {
    return (
        <>
            <Head title="Courses & Admission - Rofsan Sir" />
            <div className="min-h-screen bg-background">
                <Header />
                <main className="container-max section-padding py-16">
                    <h1 className="text-4xl font-bold text-center mb-8">Courses & Admission</h1>
                    <p className="text-center text-muted-foreground">
                        Course content and admission information coming soon.
                    </p>
                </main>
                <Footer />
            </div>
        </>
    );
}
