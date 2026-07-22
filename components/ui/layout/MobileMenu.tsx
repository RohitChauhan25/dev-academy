'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import ThemeToggle from './ThemeToggle';
import SearchDialog from './SearchDialog';

const navItems = [
  {
    title: 'Learn',
    href: '/learn',
  },
  {
    title: 'Practice',
    href: '/practice',
  },
  {
    title: 'Interview',
    href: '/interview-questions',
  },
  {
    title: 'Roadmaps',
    href: '/roadmaps',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Resources',
    href: '/resources',
  },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px]">
        <SheetHeader>
          <SheetTitle>DevAcademy</SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col gap-4">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium hover:bg-muted"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Theme</span>
              <ThemeToggle />
            </div>
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
