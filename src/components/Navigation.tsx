'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, Send, History, Menu } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { WalletConnect } from './WalletConnect';
import { UserProfile } from './UserProfile';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: History },
  { name: 'Send', href: '/send', icon: Send },
];

export function Navigation() {
  const pathname = usePathname();
  const { isConnected } = useWallet();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
      {navigation.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
              pathname === item.href
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Icon className="h-4 w-4 mr-2" />
            {item.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Cosmos Web3
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLinks />
          </div>

          {/* User Interaction Area */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isConnected ? <UserProfile /> : <WalletConnect />}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks />
                  <div className="pt-4">
                    {isConnected ? <UserProfile /> : <WalletConnect />}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}