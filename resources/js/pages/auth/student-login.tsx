import { Head } from '@inertiajs/react';
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        // Basic validation
        const newErrors: typeof errors = {};
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsLoading(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Mock authentication logic
            if (email === 'student@rofsansir.com' && password === 'student123') {
                // Redirect to student dashboard
                window.location.href = '/student/dashboard';
            } else {
                setErrors({ general: 'Invalid email or password' });
            }
        } catch (error) {
            setErrors({ general: 'An error occurred. Please try again.' });
        } finally {
            setIsLoading(false);
        }
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="student@rofsansir.com"
                                            className={errors.email ? "border-destructive" : ""}
                                            disabled={isLoading}
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
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter your password"
                                                className={errors.password ? "border-destructive pr-10" : "pr-10"}
                                                disabled={isLoading}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                disabled={isLoading}
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

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                id="remember"
                                                type="checkbox"
                                                className="h-4 w-4 text-primary focus:ring-primary border-border"
                                            />
                                            <label htmlFor="remember" className="text-sm text-muted-foreground">
                                                Remember me
                                            </label>
                                        </div>
                                        <a
                                            href="#"
                                            className="text-sm font-medium text-primary hover:text-primary/80"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Signing In..." : "Sign In"}
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
