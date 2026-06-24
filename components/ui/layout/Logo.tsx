import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <GraduationCap className="h-6 w-6 text-primary" />

      <span className="text-xl font-bold">DevAcademy</span>
    </Link>
  );
}
