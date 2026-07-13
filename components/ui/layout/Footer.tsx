'use client';

import Link from 'next/link';

import { Mail, ArrowUpRight, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Logo from './Logo';
export default function Footer() {
  const platformLinks = [
    {
      title: 'Practice',
      href: '/practice',
    },
    {
      title: 'Interview Questions',
      href: '/questions',
    },
    {
      title: 'Roadmaps',
      href: '/roadmaps',
    },
    {
      title: 'Blogs',
      href: '/blogs',
    },
  ];

  const resources = [
    {
      title: 'Frontend',
      href: '/questions/frontend',
    },
    {
      title: 'Backend',
      href: '/questions/backend',
    },
    {
      title: 'System Design',
      href: '/questions/system-design',
    },
    {
      title: 'Machine Coding',
      href: '/questions/machine-coding',
    },
  ];

  const company = [
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Privacy Policy',
      href: '/privacy',
    },
    {
      title: 'Terms',
      href: '/terms',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <footer className="border-t bg-background  z-10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}

          <div className="lg:col-span-2">
            <Logo />

            <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
              Practice real interview questions, prepare for technical interviews, explore roadmaps,
              and learn through developer-focused blogs—all in one place.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://github.com"
                target="_blank"
                className="rounded-lg border p-2 transition hover:border-violet-500 hover:text-violet-500"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-lg border p-2 transition hover:border-violet-500 hover:text-violet-500"
              >
                <FaLinkedin size={18} />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="rounded-lg border p-2 transition hover:border-violet-500 hover:text-violet-500"
              >
                <FaXTwitter size={18} />
              </Link>

              <Link
                href="mailto:hello@example.com"
                className="rounded-lg border p-2 transition hover:border-violet-500 hover:text-violet-500"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Platform */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">Platform</h3>

            <ul className="space-y-3">
              {platformLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-muted-foreground transition hover:text-white"
                  >
                    {item.title}

                    <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">Resources</h3>

            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-muted-foreground transition hover:text-white"
                  >
                    {item.title}

                    <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">Company</h3>

            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-muted-foreground transition hover:text-white"
                  >
                    {item.title}

                    <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} InterviewHub. All rights reserved.</p>

          {/* <p>Built with ❤️ using Next.js, Tailwind CSS & shadcn/ui</p> */}
        </div>
      </div>
    </footer>
  );
}
