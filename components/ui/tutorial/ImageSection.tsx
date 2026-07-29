import Image from 'next/image';
import { slugify } from '@/lib/utils';

export default function ImageSection({
  title,
  src,
  alt,
}: {
  title: string;
  src: string;
  alt: string;
}) {
  return (
    <section id={slugify(title)} className="mt-12 scroll-mt-24">
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>

      <Image src={src} alt={alt} width={900} height={500} className="rounded-xl border" />
    </section>
  );
}
