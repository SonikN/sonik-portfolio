import CinematicBackground from '@/components/CinematicBackground';
import Hero from '@/components/Hero';
import MediaHub from '@/components/MediaHub';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative w-full">
      <CinematicBackground />
      <Hero />
      <MediaHub />
      <Resume />
      <Contact />
    </main>
  );
}
