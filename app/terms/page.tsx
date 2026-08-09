import type { Metadata } from 'next';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { PROSE_CLASS } from '@/components/ui/blog/proseClass';

export const metadata: Metadata = {
  title: 'Terms of Service — Dev Academy',
  description: 'The terms and conditions for using Dev Academy.',
};

const LAST_UPDATED = 'July 28, 2026';

export default function TermsPage() {
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

        <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl">Terms of Service</h1>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <div className={`mt-10 ${PROSE_CLASS}`}>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of Dev Academy
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), including our practice questions,
            tutorials, and blog content. By using the site, you agree to these Terms.
          </p>

          <h2>Use of the Site</h2>
          <p>
            Dev Academy is provided to help developers learn and prepare for technical interviews.
            You agree to use the site only for lawful purposes and in a way that doesn&apos;t
            infringe on the rights of, or restrict or inhibit the use of, the site by anyone else.
          </p>

          <h2>Content Ownership</h2>
          <p>
            Unless otherwise noted, all tutorials, questions, and blog content on this
            site are owned by Dev Academy or its content contributors and are protected by
            copyright. You may use this content for personal learning purposes, but you may not
            republish, redistribute, or sell it without permission.
          </p>

          <h2>User-Submitted Content</h2>
          <p>
            If you submit content to us — such as a blog post, comment, or message through our
            contact form — you retain ownership of it, but you grant us a non-exclusive,
            royalty-free license to use, display, and publish that content on the site. You are
            responsible for ensuring any content you submit is accurate and doesn&apos;t infringe on
            the rights of others.
          </p>

          <h2>No Professional Guarantee</h2>
          <p>
            Content on this site — including interview questions and answers — is
            provided for educational purposes only. We make no guarantee that using this site will
            result in passing an interview, securing a job, or achieving any particular outcome.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our site may link to third-party websites or resources. We are not responsible for the
            content, accuracy, or practices of any third-party sites.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The site is provided &quot;as is&quot; without warranties of any kind, express or
            implied. We do not guarantee that the site will be uninterrupted, error-free, or free of
            harmful components.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Dev Academy shall not be liable for any
            indirect, incidental, or consequential damages arising from your use of the site.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the site after changes are
            posted constitutes acceptance of the updated Terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms, reach out via our{' '}
            <Link href="/contact">contact page</Link> or email us at{' '}
            <a href="mailto:devacademyofficial@gmail.com">devacademyofficial@gmail.com</a>. See also
            our <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
