import Link from 'next/link';

const links = [
  {
    title: 'Learn',
    href: '/learn',
  },
  {
    title: 'Interview Questions',
    href: '/interview-questions',
  },
  {
    title: 'Blogs',
    href: '/blogs',
  },
  {
    title: 'Resources',
    href: '/resources',
  },

  // {
  //   title: 'About',
  //   href: '/about',
  // },
];

export default function NavLinks() {
  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="text-base font-medium text-foreground transition hover:text-foreground"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
