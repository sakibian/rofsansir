import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { Head, useForm } from '@inertiajs/react';
import { Calendar, CheckCircle, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Dashboard',
        href: '/admin/dashboard',
    },
    {
        title: 'Schedules',
        href: '/admin/schedules',
    },
];

interface Schedule {
    id: number;
    title: string;
    description: string | null;
    day: string;
    time: string;
    created_at: string;
}

interface Props {
    schedules?: Schedule[];
}

export default function AdminSchedules({ schedules = [] }: Props) {
    const [showCreateModal, setShowCreateModal] = useState(false);

    const createForm = useForm({
        title: '',
        description: '',
        day: '',
        time: '',
    });

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        createForm.post('/admin/schedules');
    };

    const deleteForm = useForm({});

    const handleDelete = (schedule: Schedule) => {
        if (confirm(`Are you sure you want to delete "${schedule.title}"?`)) {
            deleteForm.delete(`/admin/schedules/${schedule.id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Schedule Management - Admin" />

            <div className="max-w-9.5/10 mx-auto w-full space-y-8 px-6 pt-4 md:px-4">
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-foreground">
                                Schedule Management
                            </h1>
                            <p className="mt-2 text-muted-foreground">
                                Manage and update class routine schedules
                            </p>
                        </div>
                        <Dialog
                            open={showCreateModal}
                            onOpenChange={setShowCreateModal}
                        >
                            <DialogTrigger asChild>
                                <Button className="flex items-center gap-2">
                                    <Plus className="h-4 w-4" />
                                    Add Schedule
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Create New Schedule
                                    </DialogTitle>
                                    <DialogDescription>
                                        Add a new class schedule entry.
                                    </DialogDescription>
                                </DialogHeader>
                                <form
                                    onSubmit={handleCreate}
                                    className="space-y-4"
                                >
                                    {createForm.errors.title && (
                                        <Alert variant="destructive">
                                            <AlertDescription>
                                                {createForm.errors.title}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            id="title"
                                            value={createForm.data.title}
                                            onChange={(e) =>
                                                createForm.setData(
                                                    'title',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Class title"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="description">
                                            Description
                                        </Label>
                                        <Input
                                            id="description"
                                            value={createForm.data.description}
                                            onChange={(e) =>
                                                createForm.setData(
                                                    'description',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Optional description"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="day">Day</Label>
                                            <Input
                                                id="day"
                                                value={createForm.data.day}
                                                onChange={(e) =>
                                                    createForm.setData(
                                                        'day',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="e.g., Monday"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="time">Time</Label>
                                            <Input
                                                id="time"
                                                value={createForm.data.time}
                                                onChange={(e) =>
                                                    createForm.setData(
                                                        'time',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="e.g., 10:00 AM"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-3">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() =>
                                                setShowCreateModal(false)
                                            }
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            disabled={createForm.processing}
                                        >
                                            {createForm.processing
                                                ? 'Creating...'
                                                : 'Create Schedule'}
                                        </Button>
                                    </div>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>



                <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Schedules
                            </CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {schedules.length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Class schedule entries
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                This Week
                            </CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {
                                    schedules.filter((s) => {
                                        const days = [
                                            'Sunday',
                                            'Monday',
                                            'Tuesday',
                                            'Wednesday',
                                            'Thursday',
                                            'Friday',
                                            'Saturday',
                                        ];
                                        const today = new Date().getDay();
                                        return s.day === days[today];
                                    }).length
                                }
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Today's classes
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                With Description
                            </CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {schedules.filter((s) => s.description).length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Detailed schedules
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                System Status
                            </CardTitle>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">
                                Active
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Schedules operational
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Class Schedule Entries</CardTitle>
                        <CardDescription>
                            All scheduled class entries organized by day and
                            time
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 sm:p-6">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="min-w-[200px]">
                                            Title
                                        </TableHead>
                                        <TableHead className="min-w-[200px]">
                                            Description
                                        </TableHead>
                                        <TableHead className="min-w-[100px]">
                                            Day
                                        </TableHead>
                                        <TableHead className="min-w-[100px]">
                                            Time
                                        </TableHead>
                                        <TableHead className="min-w-[100px]">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {schedules.map((schedule) => (
                                        <TableRow key={schedule.id}>
                                            <TableCell className="font-medium">
                                                {schedule.title}
                                            </TableCell>
                                            <TableCell>
                                                {schedule.description ||
                                                    'No description'}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">
                                                    {schedule.day}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {schedule.time}
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleDelete(schedule)
                                                    }
                                                    className="min-w-[80px] text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 className="h-4 w-4 sm:mr-1" />
                                                    <span className="hidden sm:inline">
                                                        Delete
                                                    </span>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        {schedules.length === 0 && (
                            <div className="py-12 text-center">
                                <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                                <h3 className="mt-2 text-sm font-medium text-muted-foreground">
                                    No schedules found
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Class schedules will appear here when added
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
