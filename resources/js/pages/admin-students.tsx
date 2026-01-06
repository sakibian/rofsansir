import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
import { CheckCircle, Edit, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Dashboard',
        href: '/admin/dashboard',
    },
    {
        title: 'Students',
        href: '/admin/students',
    },
];

interface Student {
    id: number;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    student_email?: {
        email: string;
        last_access_at: string | null;
    };
}

interface Props {
    students?: Student[];
}

export default function AdminStudents({ students = [] }: Props) {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editingStudent, setEditingStudent] = useState<Student | null>(null);

    const createForm = useForm({
        email: '',
        password: '',
    });

    const editForm = useForm({
        email: '',
        password: '',
    });

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        createForm.post('/admin/students');
    };

    const handleEdit = (student: Student) => {
        setEditingStudent(student);
        editForm.setData({
            email: student.email,
            password: '',
        });
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingStudent) {
            editForm.put(`/admin/students/${editingStudent.id}`);
        }
    };

    const deleteForm = useForm({});

    const handleDelete = (student: Student) => {
        if (confirm(`Are you sure you want to delete ${student.email}?`)) {
            deleteForm.delete(`/admin/students/${student.id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Student Management - Admin" />

            <div className="max-w-9.5/10 mx-auto w-full space-y-8 px-6 pt-4 md:px-4">
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-foreground">
                                Student Management
                            </h1>
                            <p className="mt-2 text-muted-foreground">
                                Create, update, and manage student accounts
                            </p>
                        </div>
                        <Dialog
                            open={showCreateModal}
                            onOpenChange={setShowCreateModal}
                        >
                            <DialogTrigger asChild>
                                <Button className="flex items-center gap-2">
                                    <Plus className="h-4 w-4" />
                                    Add Student
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Create New Student Account
                                    </DialogTitle>
                                    <DialogDescription>
                                        Add a new student account with email and
                                        password.
                                    </DialogDescription>
                                </DialogHeader>
                                <form
                                    onSubmit={handleCreate}
                                    className="space-y-4"
                                >
                                    {createForm.errors.email && (
                                        <Alert variant="destructive">
                                            <AlertDescription>
                                                {createForm.errors.email}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                    <div className="space-y-2">
                                        <Label htmlFor="create-email">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="create-email"
                                            type="email"
                                            value={createForm.data.email}
                                            onChange={(e) =>
                                                createForm.setData(
                                                    'email',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="student@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="create-password">
                                            Password
                                        </Label>
                                        <Input
                                            id="create-password"
                                            type="password"
                                            value={createForm.data.password}
                                            onChange={(e) =>
                                                createForm.setData(
                                                    'password',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter password"
                                            required
                                        />
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
                                                : 'Create Student'}
                                        </Button>
                                    </div>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>



                <Card>
                    <CardContent className="p-0 sm:p-6">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Created</TableHead>
                                        <TableHead>Last Active</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {students.map((student) => (
                                        <TableRow key={student.id}>
                                            <TableCell className="font-medium">
                                                {student.email}
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant="default"
                                                    className="bg-green-100 text-green-800"
                                                >
                                                    <CheckCircle className="mr-1 h-3 w-3" />
                                                    Active
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {new Date(
                                                    student.created_at,
                                                ).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>
                                                {new Date(
                                                    student.updated_at,
                                                ).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col gap-2 sm:flex-row">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() =>
                                                            handleEdit(student)
                                                        }
                                                        className="min-w-[60px]"
                                                    >
                                                        <Edit className="h-4 w-4 sm:mr-1" />
                                                        <span className="hidden sm:inline">
                                                            Edit
                                                        </span>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() =>
                                                            handleDelete(
                                                                student,
                                                            )
                                                        }
                                                        className="min-w-[60px] text-red-600 hover:text-red-700"
                                                    >
                                                        <Trash2 className="h-4 w-4 sm:mr-1" />
                                                        <span className="hidden sm:inline">
                                                            Delete
                                                        </span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                {editingStudent && (
                    <Dialog
                        open={!!editingStudent}
                        onOpenChange={() => setEditingStudent(null)}
                    >
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Student Account</DialogTitle>
                                <DialogDescription>
                                    Update student account information.
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleUpdate} className="space-y-4">
                                {editForm.errors.email && (
                                    <Alert variant="destructive">
                                        <AlertDescription>
                                            {editForm.errors.email}
                                        </AlertDescription>
                                    </Alert>
                                )}
                                <div className="space-y-2">
                                    <Label htmlFor="edit-email">
                                        Email Address
                                    </Label>
                                    <Input
                                        id="edit-email"
                                        type="email"
                                        value={editForm.data.email}
                                        onChange={(e) =>
                                            editForm.setData(
                                                'email',
                                                e.target.value,
                                            )
                                        }
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="edit-password">
                                        New Password (leave blank to keep
                                        current)
                                    </Label>
                                    <Input
                                        id="edit-password"
                                        type="password"
                                        value={editForm.data.password}
                                        onChange={(e) =>
                                            editForm.setData(
                                                'password',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Enter new password"
                                    />
                                </div>
                                <div className="flex justify-end gap-3">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setEditingStudent(null)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={editForm.processing}
                                    >
                                        {editForm.processing
                                            ? 'Updating...'
                                            : 'Update Student'}
                                    </Button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </AppLayout>
    );
}
