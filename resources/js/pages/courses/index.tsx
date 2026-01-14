import Header from '@/components/header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import InteractiveTable from '@/components/InteractiveTable';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle, Users, BookOpen, TestTube, Monitor, Award, Phone, MapPin, Mail } from 'lucide-react';

interface RoutineEntry {
    id: number;
    class_level: string;
    batch: string;
    day_1: string;
    time_1: string;
    classroom_1: string;
    day_2: string;
    time_2: string;
    classroom_2: string;
    session_year: string;
    is_active: boolean;
}

interface PaymentPlan {
    id: number;
    class_level: string;
    monthly_fee: number;
    months: number;
    total_fee: number;
    full_payment_discount: number;
    installment_amount: number;
    admission_fee: string;
    books_fee: string;
    additional_fee: string;
    features: string;
    payment_terms: string;
    is_active: boolean;
}

export default function Courses() {
    const [routines, setRoutines] = useState<RoutineEntry[]>([]);
    const [paymentPlans, setPaymentPlans] = useState<PaymentPlan[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [routinesResponse, plansResponse] = await Promise.all([
                    fetch('/routines'),
                    fetch('/payment-plans')
                ]);

                const routinesData = await routinesResponse.json();
                const plansData = await plansResponse.json();

                setRoutines(routinesData.routines || []);
                setPaymentPlans(plansData.payment_plans || []);
            } catch (error) {
                console.error('Failed to load routine data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Bengali Routine & Payment System | O Level Classes Schedule | Rofsan Sir</title>
                <meta name="description" content="Complete O Level Bengali routine and payment system for 2025-2026. Class schedules for Class 8, 9 & 10, detailed payment plans, installment options. Cambridge Examiner guidance in Dhaka, Bangladesh." />
                <meta name="keywords" content="O Level routine, Bengali classes schedule, payment plans, Class 8 9 10 schedule, Cambridge Bengali, Dhaka coaching, installment payment, mock tests schedule" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://rofsansir.com/courses" />
                <meta property="og:title" content="Bengali Routine & Payment System | O Level Classes Schedule" />
                <meta property="og:description" content="Complete 2025-2026 O Level Bengali class schedule, payment plans, and enrollment information. Cambridge Examiner approved curriculum." />
                <meta property="og:image" content="https://rofsansir.com/logos/logo.png" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Rofsan Sir" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://rofsansir.com/courses" />
                <meta name="twitter:title" content="O Level Bengali Routine & Payment | Rofsan Sir" />
                <meta name="twitter:description" content="Complete class schedule and payment information for O Level Bengali coaching with Cambridge Examiner." />
                <meta name="twitter:image" content="https://rofsansir.com/logos/logo.png" />

                {/* Additional SEO Meta Tags */}
                <meta name="author" content="Rofsan Sir" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <meta name="googlebot" content="index, follow" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://rofsansir.com/courses" />

                {/* Breadcrumbs */}
                <script type="application/ld+json">
                {{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{{
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://rofsansir.com/"
                    }}, {{
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Courses & Schedule",
                        "item": "https://rofsansir.com/courses"
                    }}]
                }}
                </script>
            </Head>
            <div className="min-h-screen bg-background">
                <Header />

                {/* Page Header */}
                <section className="py-16 bg-background">
                    <div className="container-max section-padding">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Bengali Routine and Payment System
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                2025-2026 Session
                            </p>
                        </div>
                    </div>
                </section>

                {/* Class Routine */}
                <section className="py-16">
                    <div className="container-max section-padding">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Bengali Routine (2025-2026)</h2>

                        {loading ? (
                            <div className="space-y-8">
                                {/* Skeleton for Class-8 */}
                                <div className="bg-card p-8 rounded-xl border border-border">
                                    <div className="skeleton skeleton-title w-24 mb-6"></div>
                                    <div className="space-y-3">
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                    </div>
                                </div>

                                {/* Skeleton for Class-9 */}
                                <div className="bg-card p-8 rounded-xl border border-border">
                                    <div className="skeleton skeleton-title w-24 mb-6"></div>
                                    <div className="space-y-3">
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                    </div>
                                </div>

                                {/* Skeleton for Class-10 */}
                                <div className="bg-card p-8 rounded-xl border border-border">
                                    <div className="skeleton skeleton-title w-28 mb-6"></div>
                                    <div className="space-y-3">
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                        <div className="skeleton skeleton-text w-full h-12"></div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Class-8 */}
                                <div className="bg-card p-8 rounded-xl border border-border mb-8 animate-fade-in-up hover-lift">
                                    <h3 className="text-xl font-semibold text-primary mb-6">Class-8</h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="text-left py-3 px-4 font-medium">Batch</th>
                                                    <th className="text-left py-3 px-4 font-medium">Class 1</th>
                                                    <th className="text-left py-3 px-4 font-medium">Class 2</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {routines.filter(r => r.class_level === 'Class-8').map((routine, index) => (
                                                    <tr key={routine.id} className="border-b table-row animate-fade-in-up" style={{animationDelay: `${index * 0.05}s`}}>
                                                        <td className="py-3 px-4 font-medium">{routine.batch}</td>
                                                        <td className="py-3 px-4">
                                                            {routine.day_1 && routine.time_1 ? (
                                                                <>
                                                                    <div className="font-medium">{routine.day_1}</div>
                                                                    <div className="text-sm text-muted-foreground">{routine.time_1}</div>
                                                                    {routine.classroom_1 && <div className="text-sm text-primary">({routine.classroom_1})</div>}
                                                                </>
                                                            ) : (
                                                                <span className="text-muted-foreground">------</span>
                                                            )}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            {routine.day_2 && routine.time_2 ? (
                                                                <>
                                                                    <div className="font-medium">{routine.day_2}</div>
                                                                    <div className="text-sm text-muted-foreground">{routine.time_2}</div>
                                                                    {routine.classroom_2 && <div className="text-sm text-primary">({routine.classroom_2})</div>}
                                                                </>
                                                            ) : (
                                                                <span className="text-muted-foreground">---</span>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Class-9 */}
                                <div className="bg-card p-8 rounded-xl border border-border mb-8 animate-fade-in-up hover-lift" style={{animationDelay: '0.2s'}}>
                                    <h3 className="text-xl font-semibold text-primary mb-6">Class-9</h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="text-left py-3 px-4 font-medium">Batch</th>
                                                    <th className="text-left py-3 px-4 font-medium">Class 1</th>
                                                    <th className="text-left py-3 px-4 font-medium">Class 2</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {routines.filter(r => r.class_level === 'Class-9').map((routine, index) => (
                                                    <tr key={routine.id} className="border-b table-row animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                                                        <td className="py-3 px-4 font-medium">{routine.batch}</td>
                                                        <td className="py-3 px-4">
                                                            {routine.day_1 && routine.time_1 ? (
                                                                <>
                                                                    <div className="font-medium">{routine.day_1}</div>
                                                                    <div className="text-sm text-muted-foreground">{routine.time_1}</div>
                                                                    {routine.classroom_1 && <div className="text-sm text-primary">({routine.classroom_1})</div>}
                                                                </>
                                                            ) : (
                                                                <span className="text-muted-foreground">------</span>
                                                            )}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            {routine.day_2 && routine.time_2 ? (
                                                                <>
                                                                    <div className="font-medium">{routine.day_2}</div>
                                                                    <div className="text-sm text-muted-foreground">{routine.time_2}</div>
                                                                    {routine.classroom_2 && <div className="text-sm text-primary">({routine.classroom_2})</div>}
                                                                </>
                                                            ) : (
                                                                <span className="text-muted-foreground">---</span>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Class-10 */}
                                <div className="bg-card p-8 rounded-xl border border-border mb-8 animate-fade-in-up hover-lift" style={{animationDelay: '0.4s'}}>
                                    <h3 className="text-xl font-semibold text-primary mb-6">Class-10</h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="text-left py-3 px-4 font-medium">Batch</th>
                                                    <th className="text-left py-3 px-4 font-medium">Class 1</th>
                                                    <th className="text-left py-3 px-4 font-medium">Class 2</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {routines.filter(r => r.class_level === 'Class-10').map((routine, index) => (
                                                    <tr key={routine.id} className={`border-b table-row ${index < 8 ? `animate-fade-in-up stagger-${index + 1}` : 'animate-fade-in-up'}`} style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                                                        <td className="py-3 px-4 font-medium">{routine.batch}</td>
                                                        <td className="py-3 px-4">
                                                            {routine.day_1 && routine.time_1 ? (
                                                                <>
                                                                    <div className="font-medium">{routine.day_1}</div>
                                                                    <div className="text-sm text-muted-foreground">{routine.time_1}</div>
                                                                    {routine.classroom_1 && <div className="text-sm text-primary">({routine.classroom_1})</div>}
                                                                </>
                                                            ) : (
                                                                <span className="text-muted-foreground">------</span>
                                                            )}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            {routine.day_2 && routine.time_2 ? (
                                                                <>
                                                                    <div className="font-medium">{routine.day_2}</div>
                                                                    <div className="text-sm text-muted-foreground">{routine.time_2}</div>
                                                                    {routine.classroom_2 && <div className="text-sm text-primary">({routine.classroom_2})</div>}
                                                                </>
                                                            ) : (
                                                                <span className="text-muted-foreground">---</span>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                                    <div className="bg-card p-6 rounded-xl border border-border hover-lift">
                                        <h3 className="text-lg font-semibold text-primary mb-4">Online Classes</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Zoom/Google Meet</li>
                                            <li>• Recorded sessions available</li>
                                            <li>• Interactive whiteboard</li>
                                            <li>• Digital study materials</li>
                                        </ul>
                                    </div>

                                    <div className="bg-card p-6 rounded-xl border border-border hover-lift">
                                        <h3 className="text-lg font-semibold text-primary mb-4">Offline Classes</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Lalmatia, Dhaka centers</li>
                                            <li>• Small batch sizes</li>
                                            <li>• Personalized attention</li>
                                            <li>• Printed materials provided</li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {/* Payment System */}
                <section className="py-16 bg-surface">
                    <div className="container-max section-padding">
                        {paymentPlans.length > 0 && (
                            <>
                                {/* Class-9 Payment System */}
                                {paymentPlans.filter(plan => plan.class_level === 'Class-9').map((plan) => (
                                    <div key={plan.id} className="bg-card p-8 rounded-xl border border-border mb-8">
                                        <h3 className="text-xl font-semibold text-primary mb-6">Class-9 Payment System 2025-2026</h3>

                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div className="bg-primary/5 p-4 rounded-lg">
                                                <h4 className="font-semibold text-foreground mb-2">Full Payment</h4>
                                                <p className="text-muted-foreground">
                                                    3500×12=42,000 + admission 1000 + Books-3000 = Total 46,000/=
                                                </p>
                                                <p className="text-primary font-bold mt-2">37,000/= (Discount)</p>
                                                <p className="text-sm text-muted-foreground">Full Payment (July to June)</p>
                                            </div>

                                            <div className="bg-secondary/5 p-4 rounded-lg">
                                                <h4 className="font-semibold text-foreground mb-2">Installment</h4>
                                                <p className="text-muted-foreground">
                                                    3500×12=42,000 + admission 1000 + Books-3000 = Total 46,000/=
                                                </p>
                                                <p className="text-secondary font-bold mt-2">22,000/= May/June/July</p>
                                                <p className="text-sm text-muted-foreground">
                                                    18,000/= In Aug (2 Month) + 18,000/= (Sep+Oct) + 18,000/= (Nov+Dec) + 18,000/= (Jan+Feb) + 18,000/= (Mar+April) + 7,000/= (May+June) [1,000/= add fee, Book-3,000/=]
                                                </p>
                                            </div>
                                        </div>

                                        <div className="text-sm text-muted-foreground">
                                            <p>• 2 Classes In Every Week</p>
                                            <p>• P1&P2 Books, Appendix Book</p>
                                            <p>• All Monthly Exam</p>
                                        </div>
                                    </div>
                                ))}

                                {/* O-Level Payment System */}
                                {paymentPlans.filter(plan => plan.class_level === 'O-Level').map((plan) => (
                                    <div key={plan.id} className="bg-card p-8 rounded-xl border border-border mb-8">
                                        <h3 className="text-xl font-semibold text-primary mb-6">O-Level Payment System (July to Dec 2025-2026)</h3>

                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div className="bg-primary/5 p-4 rounded-lg">
                                                <h4 className="font-semibold text-foreground mb-2">Full Payment</h4>
                                                <p className="text-muted-foreground">
                                                    3500×6=21,000/= admission 1000, Books-4000 Topical Mock 7,000/=
                                                </p>
                                                <p className="text-primary font-bold mt-2">26,000/= Total</p>
                                                <p className="text-sm text-muted-foreground">(July to Dec)</p>
                                            </div>

                                            <div className="bg-secondary/5 p-4 rounded-lg">
                                                <h4 className="font-semibold text-foreground mb-2">Installment</h4>
                                                <p className="text-muted-foreground">
                                                    3500×6=21,000/= admission 1000, Books-4000 Topical Mock 7,000/=
                                                </p>
                                                <p className="text-secondary font-bold mt-2">18,000/= June/July</p>
                                                <p className="text-sm text-muted-foreground">12,000/= In Aug</p>
                                            </div>
                                        </div>

                                        <div className="text-sm text-muted-foreground">
                                            <p>• 2 Class in Every week, P1 & P2 Books Topical Mock & Mock Solve</p>
                                            <p>• Admission form</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}

                        <div className="bg-card p-8 rounded-xl border border-border">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Enrollment Process</h3>
                            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                                <li>Fill the enquiry form</li>
                                <li>Schedule a consultation call</li>
                                <li>Receive course details and fee structure</li>
                                <li>Complete registration</li>
                                <li>Get access to student portal</li>
                            </ol>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                                    Enquire Now
                                </button>
                               
                                <button className="border border-border bg-background px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors">
                                    WhatsApp Us
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}