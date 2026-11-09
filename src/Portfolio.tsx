import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Credentials } from './components/sections/Credentials';
import { Footer } from './components/sections/Footer';
import { Hero } from './components/sections/Hero';
import { InterestsMarquee } from './components/sections/InterestsMarquee';
import { Journey } from './components/sections/Journey';
import { Navbar } from './components/sections/Navbar';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Tools } from './components/sections/Tools';
import { NAV_IDS } from './data/content';
import { useActiveSection } from './hooks/UseActiveSection';
import { useScrollProgress } from './hooks/useScrollProgress';
import { GLOBAL_CSS } from './styles/globalStyles';

/** The full single-page portfolio: fixed navbar, then each section in order. */
export default function Portfolio() {
  const active = useActiveSection(NAV_IDS);
  const { progress, scrolled } = useScrollProgress();

  return (
    <div className="lc-root min-h-screen bg-[#FBFAF7] text-[#1B1B1B] antialiased">
      <style>{GLOBAL_CSS}</style>
      <Navbar active={active} progress={progress} scrolled={scrolled} />
      <main>
        <Hero />
        <InterestsMarquee />
        <Services />
        <Projects />
        <About />
        <Tools />
        <Journey />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
