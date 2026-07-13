'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { javascriptSidebar } from '@/app/data/technologies/sidebar';

export default function MobileSidebar() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex w-full  mt-4 items-center justify-between">
            <span>Course Content</span>
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-80 overflow-y-auto p-0">
          <SheetHeader className="border-b px-6 py-4">
            <SheetTitle>JavaScript Course</SheetTitle>
          </SheetHeader>

          <div className="space-y-8 p-6">
            {javascriptSidebar.map((section: any) => (
              <div key={section.title}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </h3>

                <div className="space-y-1">
                  {section.lessons.map((lesson: any) => {
                    const active = pathname === `/learn/javascript/${lesson}`;

                    return (
                      <Link
                        key={lesson}
                        href={`/learn/javascript/${lesson}`}
                        className={`block rounded-lg px-3 py-2 text-sm transition ${
                          active ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                        }`}
                      >
                        {lesson
                          .replace(/-/g, ' ')
                          .replace(/\b\w/g, (char: any) => char.toUpperCase())}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
