import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InstagramGallery from '@/components/InstagramGallery';
import ClassSchedule from '@/components/ClassSchedule';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <InstagramGallery />
      <ClassSchedule />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
