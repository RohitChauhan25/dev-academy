import ProfileDropdown from '../profile/ProfileDropdown';
import SignUpModal from '../auth/SignUpModal';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import SearchDialog from './SearchDialog';
import ThemeToggle from './ThemeToggle';
import { getSearchIndex } from '@/lib/search-index';
import { auth } from '@/auth';

export default async function Navbar() {
  const searchIndex = getSearchIndex();
  const session = await auth();

  return (
    <header className="fixed top-0 z-50 border-b bg-background/80 backdrop-blur shadow w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Logo />

        <div className="hidden lg:flex items-center gap-8">
          <NavLinks />
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <SearchDialog items={searchIndex} />
          <ThemeToggle />

          {session?.user ? (
            <ProfileDropdown user={session.user} />
          ) : (
            <SignUpModal />
          )}
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <SearchDialog mobile={true} items={searchIndex} />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
