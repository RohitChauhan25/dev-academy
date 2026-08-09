'use client';

import ProfileDropdown from '../profile/ProfileDropdown';
import SignUpModal from '../auth/SignUpModal';
import { useAuth } from '@/components/providers/AuthProvider';

export default function NavbarAuthSlot() {
  const { user, status } = useAuth();

  if (status === 'loading') {
    return <div className="size-10 animate-pulse rounded-full bg-muted" />;
  }

  return user ? <ProfileDropdown user={user} /> : <SignUpModal />;
}
