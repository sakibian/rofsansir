import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';

export default function Tips() {
    return (
        <>
            <Head title="Examiner Tips - Rofsan Sir" />
            <div className="min-h-screen bg-background">
                <Header />
                <main className="container-max section-padding py-16">
                    <h1 className="text-4xl font-bold text-center mb-8">Examiner Tips</h1>
                    <p className="text-center text-muted-foreground">
                        Valuable tips from examiners coming soon.
                    </p>
                </main>
                <Footer />
            </div>
        </>
    );
}
