import ProfileDropdown from '../profile/ProfileDropdown';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import SearchDialog from './SearchDialog';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 border-b bg-background/80 backdrop-blur shadow w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Logo />

        <div className="hidden lg:flex items-center gap-8">
          <NavLinks />
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <SearchDialog />
          <ThemeToggle />

          {/* <Button variant="ghost">Sign In</Button> */}
          <ProfileDropdown />
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <SearchDialog mobile={true} />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
