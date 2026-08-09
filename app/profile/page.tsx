import type { Metadata } from 'next';

import ProfilePage from '@/components/ui/profile/ProfilePage';

export const metadata: Metadata = {
  title: 'Your Profile — Dev Academy',
  description: 'View and manage your Dev Academy profile and learning progress.',
};

export default function Page() {
  return <ProfilePage />;
}
