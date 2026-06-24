import Hero from '@/components/ui/home/HeroSection';
import PlatformStats from '@/components/ui/home/stats';
import Stats from '@/components/ui/home/stats';
import Footer from '@/components/ui/layout/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformStats />
    </>
  );
}
