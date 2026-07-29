import type { Metadata } from 'next';

import ContactHero from '@/components/ui/contact/ContactHero';
import ContactForm from '@/components/ui/contact/ContactForm';
import ContactInfo from '@/components/ui/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact — Dev Academy',
  description: 'Get in touch with the Dev Academy team — questions, feedback, or bug reports.',
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_16rem]">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}
