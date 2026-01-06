import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, User } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function StudentLogin() {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/student/login');
    };

    return (
        <>
            <Head title="Student Login - Rofsan Sir" />
            <div className="min-h-screen bg-background">
                <Header />

                <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                            <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <User className="h-8 w-8 text-primary" />
                            </div>
                            <h1 className="text-3xl font-bold text-foreground">Student Portal</h1>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Sign in to access your learning resources and dashboard
                            </p>
                        </div>

                        <Card className="backdrop-blur-sm">
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
                                <CardDescription className="text-center text-muted-foreground">
                                    Enter your credentials to access your student account
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {errors.general && (
                                        <Alert variant="destructive">
                                            <AlertDescription>{errors.general}</AlertDescription>
                                        </Alert>
                                    )}

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="student@rofsansir.com"
                                            className={errors.email ? "border-destructive" : ""}
                                            disabled={processing}
                                        />
                                        {errors.email && (
                                            <p className="text-sm text-destructive">{errors.email}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                placeholder="Enter your password"
                                                className={errors.password ? "border-destructive pr-10" : "pr-10"}
                                                disabled={processing}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                disabled={processing}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                                                ) : (
                                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="text-sm text-destructive">{errors.password}</p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                                        disabled={processing}
                                    >
                                        {processing ? "Signing In..." : "Sign In"}
                                    </Button>
                                </form>

                                <div className="mt-6 text-center">
                                    <p className="text-sm text-muted-foreground">
                                        Don't have an account?{' '}
                                        <a href="/register" className="font-medium text-primary hover:text-primary/80">
                                            Contact your instructor
                                        </a>
                                    </p>
                                </div>

                                <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                                    <h3 className="text-sm font-semibold text-foreground mb-2">Demo Credentials</h3>
                                    <div className="text-xs text-muted-foreground space-y-1">
                                        <p><strong>Email:</strong> student@rofsansir.com</p>
                                        <p><strong>Password:</strong> student123</p>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        For demonstration purposes only. In production, use your actual credentials.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="text-center text-sm text-muted-foreground">
                            <p>For teacher access, please use the admin portal</p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
