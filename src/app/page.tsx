import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Footer from '@/components/sections/Footer';
import MouseEffect from '@/components/ui/MouseEffect';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-2">
          <Hero />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Services />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}