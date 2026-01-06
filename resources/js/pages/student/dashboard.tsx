import { Head, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BookOpen, Mail, CheckCircle, LogOut } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

interface Props {
    hasCollectedEmail: boolean;
    showEmailModal: boolean;
}

export default function StudentDashboard({ hasCollectedEmail, showEmailModal }: Props) {
    const [showModal, setShowModal] = useState(showEmailModal);
    const [showDrive, setShowDrive] = useState(hasCollectedEmail);

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        name: '',
    });

    useEffect(() => {
        if (hasCollectedEmail) {
            setShowDrive(true);
            setShowModal(false);
        }
    }, [hasCollectedEmail]);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/student/collect-email', {
            onSuccess: () => {
                setShowModal(false);
                setShowDrive(true);
            },
        });
    };

    const handleSkip = () => {
        setShowModal(false);
        setShowDrive(true);
    };

    const handleLogout = () => {
        post('/student/logout');
    };

    return (
        <>
            <Head title="Student Portal - Rofsan Sir" />
            <div className="min-h-screen bg-background">
                <Header />

                <main className="py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold text-foreground">Student Portal</h1>
                                    <p className="mt-2 text-muted-foreground">
                                        Welcome to your learning resources dashboard
                                    </p>
                                </div>
                                <Button
                                    onClick={handleLogout}
                                    variant="outline"
                                    className="flex items-center gap-2"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </Button>
                            </div>
                        </div>

                        {/* Status Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <Card>
                                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Account Status</CardTitle>
                                    <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-green-600">Active</div>
                                    <p className="text-xs text-muted-foreground">Student account verified</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Email Status</CardTitle>
                                    {hasCollectedEmail ? (
                                        <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                                    ) : (
                                        <Mail className="h-4 w-4 text-orange-500 ml-auto" />
                                    )}
                                </CardHeader>
                                <CardContent>
                                    <div className={`text-2xl font-bold ${hasCollectedEmail ? 'text-green-600' : 'text-orange-600'}`}>
                                        {hasCollectedEmail ? 'Collected' : 'Pending'}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        {hasCollectedEmail ? 'Email collected for updates' : 'Please provide email for updates'}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Resources</CardTitle>
                                    <BookOpen className="h-4 w-4 text-blue-500 ml-auto" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-blue-600">Available</div>
                                    <p className="text-xs text-muted-foreground">Access to study materials</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Google Drive Section */}
                        {showDrive && (
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <BookOpen className="h-5 w-5" />
                                        Study Materials
                                    </CardTitle>
                                    <CardDescription>
                                        Access your O Level Bengali study resources and materials
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                                        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Google Drive Resources
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            Your study materials will be displayed here. Google Drive integration will be added in the next phase.
                                        </p>
                                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                            <p className="text-sm text-yellow-800">
                                                <strong>Note:</strong> Google Drive integration is coming soon. For now, this demonstrates the portal structure.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </main>

                {/* Email Collection Modal */}
                <Dialog open={showModal} onOpenChange={setShowModal}>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <Mail className="h-5 w-5" />
                                Stay Updated
                            </DialogTitle>
                            <DialogDescription>
                                Help us keep you updated with new study materials and important announcements.
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            {errors.email && (
                                <Alert variant="destructive">
                                    <AlertDescription>{errors.email}</AlertDescription>
                                </Alert>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name (Optional)</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="flex-1"
                                >
                                    {processing ? 'Submitting...' : 'Submit & Continue'}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleSkip}
                                    className="flex-1"
                                >
                                    Skip for Now
                                </Button>
                            </div>
                        </form>

                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <p className="text-xs text-blue-800">
                                <strong>Privacy:</strong> Your email will only be used to send updates about study materials and course information.
                            </p>
                        </div>
                    </DialogContent>
                </Dialog>

                <Footer />
            </div>
        </>
    );
}
