import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <HowItWorks />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 