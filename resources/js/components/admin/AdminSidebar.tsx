import { router } from '@inertiajs/react';
import {
    BarChart3,
    Users,
    Mail,
    Calendar
} from 'lucide-react';

interface AdminSidebarProps {
    className?: string;
}

export default function AdminSidebar({ className = '' }: AdminSidebarProps) {
    const currentPath = window.location.pathname;

    const navigation = [
        {
            name: 'Dashboard',
            href: '/admin/dashboard',
            icon: BarChart3,
            current: currentPath === '/admin/dashboard'
        },
        {
            name: 'Students',
            href: '/admin/students',
            icon: Users,
            current: currentPath === '/admin/students'
        },
        {
            name: 'Email Lists',
            href: '/admin/emails',
            icon: Mail,
            current: currentPath === '/admin/emails'
        },
        {
            name: 'Schedules',
            href: '/admin/schedules',
            icon: Calendar,
            current: currentPath === '/admin/schedules'
        }
    ];

    const handleNavigate = (href: string) => {
        router.visit(href);
    };

    return (
        <div className={`flex flex-col bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-border/40 shadow-sm md:border-r transition-all duration-300 ${className}`}>
            <div className="p-4 border-b border-border/40">
                <h2 className="text-lg font-semibold text-foreground">Admin Panel</h2>
            </div>

            <nav className="flex-1 px-3 py-4 space-y-2">
                {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.name}
                            onClick={() => handleNavigate(item.href)}
                            className={`
                                group flex items-center w-full px-3 py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-200
                                ${item.current
                                    ? 'bg-accent text-accent-foreground shadow-sm'
                                    : 'text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground'
                                }
                            `}
                        >
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mr-3" />
                            <span className="truncate">{item.name}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}
