
"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { HomeIcon, BookText, SpellCheckIcon, LibraryIcon, SettingsIcon, UserCircle, LogOutIcon, YoutubeIcon, LogIn, UserPlus } from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/custom/sidebar-custom'; 
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

interface NavItem {
  href: string;
  icon: React.ElementType;
  label: string; // English label for tooltip
  amharicLabel: string; // Amharic label for mobile/expanded if ever used
  isExternal?: boolean;
}

const mainNavItems: NavItem[] = [
  { href: '/', icon: HomeIcon, label: 'Home', amharicLabel: 'መግቢያ' },
  { href: '/amharic-dictionary', icon: BookText, label: 'Amharic Dictionary', amharicLabel: 'የአማርኛ መዝገበ ቃላት' },
  { href: '/english-dictionary', icon: SpellCheckIcon, label: 'English Dictionary', amharicLabel: 'የእንግሊዝኛ መዝገበ ቃላት' },
  { href: '/literature', icon: LibraryIcon, label: 'Literature', amharicLabel: 'የአማርኛ ሥነ ጽሑፍ' },
  {
    href: '/learning-channel',
    icon: YoutubeIcon,
    label: 'Learning Channel',
    amharicLabel: 'የቋንቋ መማሪያ ቻናል',
  },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    router.push('/');
  };

  const currentNavItem = mainNavItems.find(item => pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)));
  const dynamicHeaderTextAm = currentNavItem ? currentNavItem.amharicLabel : 'የአማርኛ መማሪያ';


  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen">
        <Sidebar collapsible="icon" className="border-r">
          <SidebarContent className="flex-1 overflow-y-auto pt-4">
            <SidebarMenu className="p-2 space-y-1">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    legacyBehavior={item.isExternal ? undefined : true}
                    passHref={item.isExternal ? undefined : true}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    {...(item.isExternal ? { Component: 'a' as any } : {})}
                  >
                    <SidebarMenuButton
                      variant="default"
                      isActive={!item.isExternal && (pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/'))}
                      tooltip={{content: item.label, side: 'right', align: 'center', className: "bg-sidebar-accent text-sidebar-accent-foreground"}}
                    >
                      <item.icon className="h-7 w-7" />
                      <span lang="am" className="hidden group-data-[mobile=true]:inline">
                        {item.amharicLabel}
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1 flex flex-col bg-background">
          <header className={cn(
            "sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/95 shadow-sm backdrop-blur-md"
          )}>
            <div className="flex items-center gap-2 sm:gap-4 pl-4"> 
              <SidebarTrigger className="md:hidden" /> 
              <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
                <BookText className="h-7 w-7" />
                <span className="text-lg font-semibold hidden sm:inline" lang="am">
                 {dynamicHeaderTextAm}
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-1">
                {mainNavItems.filter(navItem => navItem.href !== '/').map((item) => ( 
                  <Link
                    key={item.href}
                    href={item.href}
                    legacyBehavior={item.isExternal ? undefined : true}
                    passHref={item.isExternal ? undefined : true}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                     {...(item.isExternal ? { Component: 'a' as any } : {})}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "font-medium px-3 py-1.5 h-auto",
                        (!item.isExternal && (pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')))
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                      lang="am"
                    >
                      {item.amharicLabel}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 pr-4"> 
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="user avatar"/>
                      <AvatarFallback lang="am">ተጠቃሚ</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="w-full flex items-center cursor-pointer">
                      <UserCircle className="mr-2 h-4 w-4" /> Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="w-full flex items-center cursor-pointer">
                      <SettingsIcon className="mr-2 h-4 w-4" /> Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/login" className="w-full flex items-center cursor-pointer">
                      <LogIn className="mr-2 h-4 w-4" /> Login
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/signup" className="w-full flex items-center cursor-pointer">
                      <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer w-full flex items-center">
                    <LogOutIcon className="mr-2 h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 overflow-auto"> 
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
