import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { resolveUrl } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useIsMobile } from '@/hooks/use-mobile';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    const isMobile = useIsMobile();

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            asChild
                            isActive={page.url.startsWith(
                                resolveUrl(item.href),
                            )}
                            tooltip={{ children: item.title }}
                            className={isMobile ? "text-white hover:text-white hover:bg-white/10" : ""}
                        >
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon className={isMobile ? "text-white" : ""} />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
