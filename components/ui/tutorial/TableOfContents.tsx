'use client';

import Link from 'next/link';

interface Section {
  title?: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const items = sections.filter((section) => section.title);

  if (items.length === 0) return null;

  return (
    <aside className="my-8 rounded-xl border bg-card p-5">
      <h2 className="mb-4 text-lg font-semibold">On this page</h2>

      <nav>
        <ul className="space-y-2">
          {items.map((section) => {
            const id = section
              .title!.toLowerCase()
              .replace(/[^\w\s-]/g, '')
              .replace(/\s+/g, '-');

            return (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  className="text-sm text-muted-foreground transition hover:text-primary"
                >
                  {section.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
