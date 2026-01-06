import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Download, Mail, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Dashboard',
        href: '/admin/dashboard',
    },
    {
        title: 'Email Lists',
        href: '/admin/emails',
    },
];

interface Email {
    id: number;
    email: string;
    name: string | null;
    collected_at: string;
    user?: {
        email: string;
    };
}

interface Props {
    emails?: Email[];
    totalEmails?: number;
}

export default function AdminEmails({ emails = [], totalEmails }: Props) {
    const handleExport = () => {
        window.location.href = '/admin/emails/export';
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Email Management - Admin" />

            <div className="max-w-9.5/10 mx-auto w-full space-y-8 px-6 pt-4 md:px-4">
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-foreground">
                                Email Management
                            </h1>
                            <p className="mt-2 text-muted-foreground">
                                View and export collected student email
                                addresses
                            </p>
                        </div>
                        <Button
                            onClick={handleExport}
                            className="flex items-center gap-2"
                        >
                            <Download className="h-4 w-4" />
                            Export CSV
                        </Button>
                    </div>
                </div>

                <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Emails
                            </CardTitle>
                            <Mail className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {totalEmails || emails.length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Collected email addresses
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                With Names
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {emails.filter((email) => email.name).length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Emails with student names
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Latest Collection
                            </CardTitle>
                            <Mail className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {emails.length > 0
                                    ? new Date(
                                          emails[0].collected_at,
                                      ).toLocaleDateString()
                                    : 'N/A'}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Most recent email collection
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Collected Email Addresses</CardTitle>
                        <CardDescription>
                            All student email addresses collected for updates
                            and communications
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 sm:p-6">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="min-w-[200px]">
                                            Email Address
                                        </TableHead>
                                        <TableHead className="min-w-[120px]">
                                            Name
                                        </TableHead>
                                        <TableHead className="min-w-[140px]">
                                            Collected Date
                                        </TableHead>
                                        <TableHead className="min-w-[160px]">
                                            Associated Account
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {emails.map((email) => (
                                        <TableRow key={email.id}>
                                            <TableCell className="font-medium">
                                                {email.email}
                                            </TableCell>
                                            <TableCell>
                                                {email.name || 'Not provided'}
                                            </TableCell>
                                            <TableCell>
                                                {new Date(
                                                    email.collected_at,
                                                ).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>
                                                {email.user?.email ||
                                                    'Not registered'}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>

                    {emails.length === 0 && (
                        <div className="py-12 text-center">
                            <Mail className="mx-auto h-12 w-12 text-muted-foreground" />
                            <h3 className="mt-2 text-sm font-medium text-muted-foreground">
                                No emails collected
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Student email addresses will appear here when
                                collected
                            </p>
                        </div>
                    )}
                </Card>
            </div>
        </AppLayout>
    );
}
