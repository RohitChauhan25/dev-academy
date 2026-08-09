import Link from 'next/link';
import { ChevronRight, Compass } from 'lucide-react';

const links = [
  { title: 'Browse Tutorials', href: '/learn' },
  { title: 'Practice Questions', href: '/practice' },
];

export default function BlogDiscoverMore() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <p className="flex items-center gap-2 border-b bg-muted/40 px-5 py-3 text-sm font-semibold">
        <Compass className="h-4 w-4 text-violet-500" />
        Discover More
      </p>

      <ul className="divide-y">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center justify-between px-5 py-3 text-sm font-medium transition hover:bg-muted/40"
            >
              {link.title}
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
