import CourseSidebar from '@/components/ui/tutorial/CourseSidebar';
import MobileSidebar from '@/components/ui/tutorial/MobileSidebar';

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();
  return (
    <div className="container mx-auto">
      {/* Mobile Sidebar */}
      <div className="mb-2 lg:hidden">{/* <MobileSidebar /> */}</div>

      <div className="flex items-start gap-8 px-4">
        <CourseSidebar />

        <main className="min-w-0 flex-1 ">{children}</main>
      </div>
    </div>
  );
}
