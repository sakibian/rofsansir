import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

interface AccessLog {
    id: number;
    gmail: string;
    folder_name: string;
    folder_id: string;
    accessed_at: string;
    ip_address: string | null;
}

interface BlockedGmail {
    id: number;
    gmail: string;
    blocked_at: string;
    blocked_by: string;
    reason: string | null;
}

interface Stats {
    total_accesses: number;
    unique_gmails: number;
    recent_accesses: number;
    most_accessed_folder: string;
    total_blocked: number;
    recent_blocks: number;
}

interface Props {
    accessLogs: AccessLog[];
    blockedGmails: BlockedGmail[];
    stats: Stats;
    isDriveConfigured?: boolean;
}

export default function AdminDrive({ accessLogs, blockedGmails, stats, isDriveConfigured = false }: Props) {
    const [showBlockDialog, setShowBlockDialog] = useState(false);

    const blockForm = useForm({
        gmail: '',
        reason: '',
    });

    const handleBlockGmail = () => {
        blockForm.post('/admin/drive/block-gmail', {
            onSuccess: () => {
                setShowBlockDialog(false);
                blockForm.reset();
                window.location.reload();
            },
        });
    };

    const handleUnblockGmail = (gmail: string) => {
        if (confirm(`Are you sure you want to unblock ${gmail}?`)) {
            fetch('/admin/drive/unblock-gmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
                body: JSON.stringify({ gmail }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.reload();
                }
            });
        }
    };

    return (
        <>
            <Head title="Google Drive Access Logs - Admin" />
            <div className="min-h-screen bg-background">
                <Header />

                <main className="py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold text-foreground">Google Drive Access Logs</h1>
                                    <p className="mt-2 text-muted-foreground">
                                        Monitor student access to Google Drive folders and manage blocked accounts
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    {!isDriveConfigured && (
                                        <a
                                            href="/admin/drive/setup"
                                            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                                        >
                                            Connect Google Drive
                                        </a>
                                    )}
                                    <button
                                        onClick={() => setShowBlockDialog(true)}
                                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    >
                                        Block Gmail Account
                                    </button>
                                </div>
                            </div>
                            {!isDriveConfigured && (
                                <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800">
                                    Google Drive is not yet connected. Connect your admin Google Drive account to
                                    serve real study materials from your folders.
                                </div>
                            )}
                        </div>

                        {/* Stats */}
                        <div className="grid md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-card p-6 rounded-lg border">
                                <h3 className="text-sm font-medium text-muted-foreground">Total Accesses</h3>
                                <p className="text-2xl font-bold">{stats.total_accesses}</p>
                                <p className="text-xs text-muted-foreground">All time</p>
                            </div>

                            <div className="bg-card p-6 rounded-lg border">
                                <h3 className="text-sm font-medium text-muted-foreground">Unique Students</h3>
                                <p className="text-2xl font-bold">{stats.unique_gmails}</p>
                                <p className="text-xs text-muted-foreground">Accessed materials</p>
                            </div>

                            <div className="bg-card p-6 rounded-lg border">
                                <h3 className="text-sm font-medium text-muted-foreground">Recent Accesses</h3>
                                <p className="text-2xl font-bold">{stats.recent_accesses}</p>
                                <p className="text-xs text-muted-foreground">Last 7 days</p>
                            </div>

                            <div className="bg-card p-6 rounded-lg border">
                                <h3 className="text-sm font-medium text-muted-foreground">Blocked Accounts</h3>
                                <p className="text-2xl font-bold text-red-600">{stats.total_blocked}</p>
                                <p className="text-xs text-muted-foreground">Currently blocked</p>
                            </div>
                        </div>

                        {/* Block Gmail Modal */}
                        {showBlockDialog && (
                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                <div className="bg-background p-6 rounded-lg border max-w-md w-full mx-4">
                                    <h2 className="text-xl font-bold mb-4">Block Gmail Account</h2>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Gmail Address</label>
                                            <input
                                                type="email"
                                                value={blockForm.data.gmail}
                                                onChange={(e) => blockForm.setData('gmail', e.target.value)}
                                                className="w-full p-2 border rounded-lg"
                                                placeholder="student@gmail.com"
                                            />
                                            {blockForm.errors.gmail && (
                                                <p className="text-sm text-red-600 mt-1">{blockForm.errors.gmail}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1">Reason (Optional)</label>
                                            <textarea
                                                value={blockForm.data.reason}
                                                onChange={(e) => blockForm.setData('reason', e.target.value)}
                                                className="w-full p-2 border rounded-lg"
                                                rows={3}
                                                placeholder="Reason for blocking..."
                                            />
                                            {blockForm.errors.reason && (
                                                <p className="text-sm text-red-600 mt-1">{blockForm.errors.reason}</p>
                                            )}
                                        </div>

                                        <div className="flex gap-3 pt-4">
                                            <button
                                                onClick={handleBlockGmail}
                                                disabled={blockForm.processing}
                                                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50"
                                            >
                                                {blockForm.processing ? 'Blocking...' : 'Block Account'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setShowBlockDialog(false)}
                                                className="flex-1 border px-4 py-2 rounded-lg hover:bg-accent"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-3 bg-red-50 rounded-lg">
                                        <p className="text-xs text-red-800">
                                            <strong>Warning:</strong> Blocked accounts will be unable to access any Google Drive folders.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Access Logs Table */}
                        <div className="bg-card rounded-lg border overflow-hidden mb-8">
                            <div className="p-6 border-b">
                                <h2 className="text-xl font-bold">Access Logs</h2>
                                <p className="text-sm text-muted-foreground">
                                    Recent student access to Google Drive folders
                                </p>
                            </div>

                            <div className="p-6">
                                {accessLogs.length === 0 ? (
                                    <div className="text-center py-8">
                                        <p className="text-gray-600 mb-4">No access logs yet</p>
                                        <p className="text-sm text-gray-500">Access logs will appear here when students view materials</p>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="text-left py-3 px-4 font-medium">Gmail Account</th>
                                                    <th className="text-left py-3 px-4 font-medium">Folder Accessed</th>
                                                    <th className="text-left py-3 px-4 font-medium">Access Time</th>
                                                    <th className="text-left py-3 px-4 font-medium">IP Address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {accessLogs.map((log) => (
                                                    <tr key={log.id} className="border-b">
                                                        <td className="py-3 px-4">
                                                            <span className="font-medium">{log.gmail}</span>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <span className="font-medium">{log.folder_name}</span>
                                                        </td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">
                                                            {new Date(log.accessed_at).toLocaleString()}
                                                        </td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">
                                                            {log.ip_address || 'N/A'}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Blocked Gmails Table */}
                        <div className="bg-card rounded-lg border overflow-hidden">
                            <div className="p-6 border-b">
                                <h2 className="text-xl font-bold">Blocked Accounts</h2>
                                <p className="text-sm text-muted-foreground">
                                    Gmail accounts that have been blocked from accessing materials
                                </p>
                            </div>

                            <div className="p-6">
                                {blockedGmails.length === 0 ? (
                                    <div className="text-center py-8">
                                        <p className="text-gray-600 mb-4">No blocked accounts</p>
                                        <p className="text-sm text-gray-500">Blocked Gmail accounts will appear here</p>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="text-left py-3 px-4 font-medium">Gmail Account</th>
                                                    <th className="text-left py-3 px-4 font-medium">Blocked By</th>
                                                    <th className="text-left py-3 px-4 font-medium">Blocked At</th>
                                                    <th className="text-left py-3 px-4 font-medium">Reason</th>
                                                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {blockedGmails.map((blocked) => (
                                                    <tr key={blocked.id} className="border-b">
                                                        <td className="py-3 px-4">
                                                            <span className="font-medium text-red-600">{blocked.gmail}</span>
                                                        </td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">
                                                            {blocked.blocked_by}
                                                        </td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">
                                                            {new Date(blocked.blocked_at).toLocaleString()}
                                                        </td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">
                                                            {blocked.reason || 'No reason provided'}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <button
                                                                onClick={() => handleUnblockGmail(blocked.gmail)}
                                                                className="text-green-600 hover:text-green-700 text-sm underline"
                                                            >
                                                                Unblock
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
