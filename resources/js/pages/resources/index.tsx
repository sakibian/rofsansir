import Header from '@/components/header';
import Footer from '@/components/Footer';
import { Head } from '@inertiajs/react';

export default function Resources() {
    return (
        <>
            <Head title="Resources - Rofsan Sir" />
            <div className="min-h-screen bg-background">
                <Header />
                <main className="container-max section-padding py-16">
                    <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
                    <p className="text-center text-muted-foreground">
                        Study materials and resources coming soon.
                    </p>
                </main>
                <Footer />
            </div>
        </>
    );
}
