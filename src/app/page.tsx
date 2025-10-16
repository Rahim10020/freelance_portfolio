import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Footer from '@/components/sections/Footer';
import MouseEffect from '@/components/ui/MouseEffect';

export default function Home() {
  return (
    <>
      <MouseEffect />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Hero />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Services />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}