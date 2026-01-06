export default function AdminFooter() {
    return (
        <footer className="bg-foreground text-white border-t border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="text-sm text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Rofsan Khan - O Level Bengali. All rights reserved.</p>
                        <p className="text-xs mt-1">Cambridge Assessment International Education</p>
                    </div>

                    <div className="text-sm text-gray-400">
                        <p>Admin Panel v1.0 - Secure Management Interface</p>
                        <p className="text-xs mt-1">Website Developed by sakibian.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
