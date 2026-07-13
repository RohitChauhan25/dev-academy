'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { javascriptSidebar } from '@/app/data/technologies/sidebar';

export default function CourseSidebar() {
  const pathname = usePathname();

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};

    javascriptSidebar.forEach((section) => {
      section.lessons.forEach((lesson: any) => {
        if (lesson.children?.some((child: any) => pathname === `/learn/javascript/${child.slug}`)) {
          initial[lesson.slug] = true;
        }
      });
    });

    return initial;
  });

  const toggleMenu = (slug: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    pathname !== '/learn/javascript' && (
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="fixed top-20 h-[calc(100vh-5rem)] w-60 overflow-y-auto border-r pr-3">
          <div className="space-y-8 py-6">
            {javascriptSidebar.map((section) => (
              <div key={section.title}>
                <h3 className="mb-3 px-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {section.title}
                </h3>

                <div className="space-y-1">
                  {section.lessons.map((lesson: any) => {
                    const active = pathname === `/learn/javascript/${lesson.slug}`;

                    const hasChildren = lesson.children && lesson.children.length > 0;

                    return (
                      <div key={lesson.slug}>
                        <div
                          className={`flex items-center justify-between rounded-md transition ${
                            active ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                          }`}
                        >
                          <Link
                            href={`/learn/javascript/${lesson.slug}`}
                            className="flex-1 px-3 py-2 text-sm"
                          >
                            {lesson.title}
                          </Link>

                          {hasChildren && (
                            <button onClick={() => toggleMenu(lesson.slug)} className="p-2">
                              {openMenus[lesson.slug] ? (
                                <ChevronDown size={16} />
                              ) : (
                                <ChevronRight size={16} />
                              )}
                            </button>
                          )}
                        </div>

                        {hasChildren && openMenus[lesson.slug] && (
                          <div className="ml-5 mt-1 border-l pl-3">
                            {lesson.children.map((child: any) => {
                              const childActive = pathname === `/learn/javascript/${child.slug}`;

                              return (
                                <Link
                                  key={child.slug}
                                  href={`/learn/javascript/${child.slug}`}
                                  className={`block rounded-md px-3 py-2 text-sm transition ${
                                    childActive
                                      ? 'bg-primary text-primary-foreground'
                                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                  }`}
                                >
                                  {child.title}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    )
  );
}
