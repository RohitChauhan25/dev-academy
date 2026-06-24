'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MobileMenu() {
  return (
    <Button variant="ghost" size="icon">
      <Menu className="h-5 w-5" />
    </Button>
  );
}
