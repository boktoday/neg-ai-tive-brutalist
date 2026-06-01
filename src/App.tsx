import { useEffect } from 'react';
import Hero from './components/Hero';
import VictimStories from './components/VictimStories';
import StorySubmission from './components/StorySubmission';
import Newsletter from './components/Newsletter';
import Merch from './components/Merch';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    // Smooth element reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section cards
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <VictimStories />
      <StorySubmission />
      <Newsletter />
      <Merch />
      <Footer />
    </div>
  );
}

export default App;
