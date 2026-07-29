import type { Metadata } from 'next';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { PROSE_CLASS } from '@/components/ui/blog/proseClass';

export const metadata: Metadata = {
  title: 'Privacy Policy — Dev Academy',
  description: 'How Dev Academy collects, uses, and protects your information.',
};

const LAST_UPDATED = 'July 28, 2026';

export default function PrivacyPolicyPage() {
  return (
    <div className="relative overflow-hidden py-20">
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="container relative mx-auto max-w-5xl px-6">
        <Badge
          variant="outline"
          className="rounded-full border-violet-500/30 bg-violet-500/10 px-4 py-2 text-violet-400"
        >
          Legal
        </Badge>

        <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl">Privacy Policy</h1>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <div className={`mt-10 ${PROSE_CLASS}`}>
          <p>
            Dev Academy (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates this website
            to help developers practice interview questions, follow roadmaps, and learn through
            tutorials and blogs. This Privacy Policy explains what information we collect, how we
            use it, and the choices you have.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Information you provide.</strong> When you use our contact form, submit a blog
              post, or otherwise reach out, we collect the details you enter — such as your name,
              email address, and message content.
            </li>
            <li>
              <strong>Usage data.</strong> We may collect standard technical information such as
              your browser type, device type, pages visited, and referring URLs to help us
              understand how the site is used.
            </li>
            <li>
              <strong>Cookies and local storage.</strong> We use cookies or local storage to
              remember preferences such as your theme (light/dark mode) and progress through
              practice questions.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your messages and requests submitted via the contact form.</li>
            <li>To operate, maintain, and improve the site and its content.</li>
            <li>To understand aggregate usage patterns and fix issues.</li>
            <li>To remember your preferences between visits.</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>Sharing of Information</h2>
          <p>
            We do not share your personal information with third parties, except where required to
            operate the site (for example, hosting and analytics providers) or where required by
            law.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain contact form submissions and related correspondence only as long as needed to
            respond to your request or as required for legitimate business purposes.
          </p>

          <h2>Your Choices</h2>
          <ul>
            <li>
              You can clear cookies and local storage at any time through your browser settings.
            </li>
            <li>
              You can request that we delete personal information you&apos;ve submitted by
              contacting us using the details below.
            </li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            This site is not directed at children under 13, and we do not knowingly collect personal
            information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated &quot;Last updated&quot; date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, reach out via our{' '}
            <Link href="/contact">contact page</Link> or email us at{' '}
            <a href="mailto:devacademyofficial@gmail.com">devacademyofficial@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
