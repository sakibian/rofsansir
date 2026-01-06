import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ReactNode, useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            {/* Header with integrated mobile menu */}
            <AdminHeader />

            {/* Main Content Area - Full Viewport Height */}
            <div className="flex min-h-[calc(100vh-4rem)] flex-1 overflow-hidden">
                {/* Desktop Sidebar - Full Height */}
                <div className="hidden md:block">
                    <AdminSidebar className="h-full w-64" />
                </div>

                {/* Main Content */}
                <main className="flex-1 overflow-auto">
                    <div className="min-h-full">{children}</div>
                </main>
            </div>
        </div>
    );
}
