import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Calendar, Mail, Shield, UserPlus, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Dashboard',
        href: '/admin/dashboard',
    },
];

interface Stats {
    total_students: number;
    total_emails_collected: number;
    recent_logins: Array<{
        id: number;
        email: string;
        created_at: string;
        updated_at: string;
        student_email?: {
            email: string;
            last_access_at: string | null;
        };
    }>;
}

interface Props {
    stats?: Stats;
}

export default function AdminDashboard({ stats }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Dashboard" />

            <div className="max-w-9.5/10 mx-auto w-full space-y-8 px-6 pt-4 md:px-4">
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-foreground">
                                Admin Dashboard
                            </h1>
                            <p className="mt-2 text-muted-foreground">
                                Manage student accounts, email lists, and
                                schedules
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Students
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stats?.total_students || 0}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Active student accounts
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Emails Collected
                            </CardTitle>
                            <Mail className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stats?.total_emails_collected || 0}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Student email addresses
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Recent Activity
                            </CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stats?.recent_logins?.length || 0}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Recent student logins
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                System Status
                            </CardTitle>
                            <Shield className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">
                                Active
                            </div>
                            <p className="text-xs text-muted-foreground">
                                All systems operational
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card className="transition-shadow hover:shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <UserPlus className="h-5 w-5 text-primary" />
                                Student Management
                            </CardTitle>
                            <CardDescription>
                                Create, update, and manage student accounts
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href="/admin/students">
                                <Button className="w-full">
                                    Manage Students
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="transition-shadow hover:shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-primary" />
                                Email Lists
                            </CardTitle>
                            <CardDescription>
                                View and export collected student emails
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href="/admin/emails">
                                <Button className="w-full" variant="outline">
                                    View Emails
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="transition-shadow hover:shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-primary" />
                                Class Schedules
                            </CardTitle>
                            <CardDescription>
                                Manage and update class routine schedules
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href="/admin/schedules">
                                <Button className="w-full" variant="outline">
                                    Manage Schedules
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Student Activity</CardTitle>
                        <CardDescription>
                            Latest student logins and email collections
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {stats?.recent_logins &&
                        stats.recent_logins.length > 0 ? (
                            <div className="space-y-4">
                                {stats.recent_logins.map((student) => (
                                    <div
                                        key={student.id}
                                        className="flex items-center justify-between rounded-lg bg-muted p-3"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                                <Users className="h-4 w-4 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">
                                                    {student.email}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {student.student_email
                                                        ?.email &&
                                                        `Email: ${student.student_email.email}`}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-muted-foreground">
                                                Last active:{' '}
                                                {new Date(
                                                    student.updated_at,
                                                ).toLocaleDateString()}
                                            </p>
                                            {student.student_email
                                                ?.last_access_at && (
                                                <p className="text-xs text-muted-foreground">
                                                    Portal access:{' '}
                                                    {new Date(
                                                        student.student_email.last_access_at,
                                                    ).toLocaleDateString()}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-8 text-center">
                                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                                <h3 className="mt-2 text-sm font-medium text-muted-foreground">
                                    No recent activity
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Student login activity will appear here
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
