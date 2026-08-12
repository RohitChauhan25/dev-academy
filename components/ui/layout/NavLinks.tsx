"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Learn",
    href: "/learn",
  },
  {
    title: "Practice",
    href: "/practice",
  },
  {
    title: "Questions",
    href: "/interview-questions",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  // {
  //   title: 'Resources',
  //   href: '/resources',
  // },

  {
    title: "About",
    href: "/about",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.title}
            href={link.href}
            className="group relative py-1 text-base font-medium text-foreground transition hover:text-foreground"
          >
            {link.title}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#FBBF24] via-[#FBBF24] to-[#6366F1]  transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                isActive ? "scale-x-100" : ""
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
