import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Shield, User, Settings, LogOut, ChevronDown, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AdminSidebar from './AdminSidebar';

export default function AdminHeader() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        window.location.href = '/';
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <div className="flex items-center space-x-2">
                                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                                <div className="min-w-0">
                                    <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">
                                        Admin Panel
                                    </h1>
                                    <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                                        Rofsan Sir Management
                                    </p>
                                </div>
                            </div>

                            {/* Inline Menu Button for Mobile */}
                            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                                <SheetTrigger asChild>
                                    <button className="md:hidden p-2 rounded-md border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hover:bg-accent transition-colors">
                                        <Menu className="h-4 w-4 text-muted-foreground" />
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-72 sm:w-80 p-0">
                                    <AdminSidebar />
                                </SheetContent>
                            </Sheet>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <Link
                                href="/"
                                className="hidden sm:inline-flex text-muted-foreground hover:text-foreground px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
                            >
                                ← Back to Website
                            </Link>

                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground px-2 sm:px-3 py-2 rounded-md transition-colors"
                                >
                                    <User className="h-4 w-4 flex-shrink-0" />
                                    <span className="hidden sm:inline">Administrator</span>
                                    <span className="sm:hidden">Admin</span>
                                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                            <Link
                                                href="/settings/profile"
                                                onClick={() => setDropdownOpen(false)}
                                                className="flex items-center w-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                                            >
                                                <Settings className="mr-3 h-4 w-4" />
                                                Settings
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center w-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                                            >
                                                <LogOut className="mr-3 h-4 w-4" />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {dropdownOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setDropdownOpen(false)}
                />
            )}
        </header>
    );
}
