'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { sidebars } from '@/app/data/technologies/sidebar';
import { getTechnologyLabel } from '@/lib/tutorials';

export default function MobileSidebar() {
  const pathname = usePathname();
  const technology = pathname.split('/')[2];
  const sidebarSections = technology ? sidebars[technology] : undefined;

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
            <SheetTitle>{getTechnologyLabel(technology)} Course</SheetTitle>
          </SheetHeader>

          <div className="space-y-8 p-6">
            {sidebarSections?.map((section) => (
              <div key={section.title}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </h3>

                <div className="space-y-1">
                  {section.lessons.map((lesson) => {
                    const active = pathname === `/learn/${technology}/${lesson.slug}`;

                    return (
                      <Link
                        key={lesson.slug}
                        href={`/learn/${technology}/${lesson.slug}`}
                        className={`block rounded-lg px-3 py-2 text-sm transition ${
                          active ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                        }`}
                      >
                        {lesson.title}
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
