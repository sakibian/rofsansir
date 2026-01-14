import { Head, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CheckCircle, LogOut } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

interface DriveFile {
    id: string;
    name: string;
    mimeType: string;
    size: number | null;
    webViewLink: string | null;
    webContentLink: string | null;
    thumbnailLink: string | null;
    modifiedTime: string;
    iconLink: string | null;
    parents: string[];
    isFolder: boolean;
}

interface DriveData {
    id: number;
    name: string;
    contents: DriveFile[];
    has_access: boolean;
    last_authenticated?: string | null;
}

interface Props {
    driveData?: DriveData;
}

export default function StudentDashboard({ driveData }: Props) {
    const initialData = driveData ?? { id: 1, name: 'Google Drive Study Materials', contents: [], has_access: false };
    const [drive, setDrive] = useState<DriveData>(initialData);
    const { props } = usePage<{
        flash?: {
            success?: string | null;
            error?: string | null;
        };
    }>();

    const handleLogout = () => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/student/logout';

        const csrfToken = document.querySelector('meta[name="csrf-token"]');
        if (csrfToken) {
            const tokenInput = document.createElement('input');
            tokenInput.type = 'hidden';
            tokenInput.name = '_token';
            tokenInput.value = csrfToken.getAttribute('content') || '';
            form.appendChild(tokenInput);
        }

        document.body.appendChild(form);
        form.submit();
    };

    const loadDriveContents = async () => {
        try {
            const response = await fetch('/student/drive/contents');
            if (response.ok) {
                const data = await response.json();
                setDrive(prev => ({ ...prev, contents: data.contents, has_access: true }));
            }
        } catch (error) {
            console.error('Failed to load drive contents:', error);
        }
    };

    // Load contents for authenticated drive on mount
    useEffect(() => {
        if (drive.has_access && drive.contents.length === 0) {
            void loadDriveContents();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // After successful OAuth authentication, automatically load contents
    useEffect(() => {
        if (props.flash?.success) {
            void loadDriveContents();
        }
    }, [props.flash?.success]);

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
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                                {props.flash?.error && (
                                    <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                                        {props.flash.error}
                                    </div>
                                )}
                                {props.flash?.success && (
                                    <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                                        {props.flash.success}
                                    </div>
                                )}

                                <div className="border rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100">
                                                <BookOpen className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-foreground">{drive.name}</h4>
                                                {drive.last_authenticated && (
                                                    <p className="text-sm text-muted-foreground">
                                                        Last authenticated: {new Date(drive.last_authenticated).toLocaleDateString()}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        {!drive.has_access && (
                                            <a
                                                href="/drive/access"
                                                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                                            >
                                                Authenticate
                                            </a>
                                        )}
                                    </div>

                                    {drive.has_access ? (
                                        <div className="space-y-2">
                                            <h5 className="text-sm font-medium text-gray-900">Contents:</h5>
                                            {drive.contents.length === 0 ? (
                                                <p className="text-sm text-gray-500 italic">This drive appears to be empty or loading...</p>
                                            ) : (
                                                <div className="space-y-1">
                                                    {drive.contents.map((file) => (
                                                        <div key={file.id} className="flex items-center justify-between py-2 px-3 rounded bg-gray-50">
                                                            <div className="flex items-center gap-2">
                                                                {file.isFolder ? (
                                                                    <span className="text-blue-500">📁</span>
                                                                ) : (
                                                                    <span className="text-gray-500">📄</span>
                                                                )}
                                                                <span className="text-sm">{file.name}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                {!file.isFolder && file.webContentLink && (
                                                                    <a
                                                                        href={file.webContentLink}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-blue-600 hover:text-blue-800 text-sm underline"
                                                                    >
                                                                        Download
                                                                    </a>
                                                                )}
                                                                {file.webViewLink && (
                                                                    <a
                                                                        href={file.webViewLink}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-gray-600 hover:text-gray-800 text-sm underline"
                                                                    >
                                                                        View
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                            <p className="text-sm text-yellow-800">
                                                <strong>Authentication Required:</strong> Click "Authenticate" to access study materials with your Gmail account.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                                    <p className="text-sm text-green-800">
                                        <strong>Access Granted:</strong> You have read-only access to view and download files from Google Drive.
                                        Files include PDFs, documents, and other study materials.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
