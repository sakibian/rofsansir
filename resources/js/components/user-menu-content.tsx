import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { logout } from '@/routes';
import { edit } from '@/routes/profile';
import { type User } from '@/types';
import { Link, router } from '@inertiajs/react';
import { LogOut, Settings } from 'lucide-react';

interface UserMenuContentProps {
    user: User;
    variant?: 'sidebar' | 'footer';
}

export function UserMenuContent({ user, variant = 'footer' }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();
    const isMobile = useIsMobile();
    const isSidebarDropdown = variant === 'sidebar' && isMobile;

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <>
            <DropdownMenuLabel className={`p-0 font-normal ${isSidebarDropdown ? "bg-gray-800" : ""}`}>
                <div className={`flex items-center gap-2 px-1 py-1.5 text-left text-sm ${isSidebarDropdown ? "text-white" : ""}`}>
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className={isSidebarDropdown ? "bg-white/20" : ""} />
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link
                        className={`block w-full ${isSidebarDropdown ? "text-white hover:bg-white/10 focus:bg-white/10" : ""}`}
                        href={edit()}
                        as="button"
                        prefetch
                        onClick={cleanup}
                    >
                        <Settings className={`mr-2 ${isSidebarDropdown ? "text-white" : ""}`} />
                        Settings
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className={isSidebarDropdown ? "bg-white/20" : ""} />
            <DropdownMenuItem asChild>
                <Link
                    className={`block w-full ${isSidebarDropdown ? "text-white hover:bg-white/10 focus:bg-white/10" : ""}`}
                    href={logout()}
                    as="button"
                    onClick={handleLogout}
                    data-test="logout-button"
                >
                    <LogOut className={`mr-2 ${isSidebarDropdown ? "text-white" : ""}`} />
                    Log out
                </Link>
            </DropdownMenuItem>
        </>
    );
}
