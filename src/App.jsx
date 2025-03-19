import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogoMarquee from './components/clientLogoMarquee';
import Stats from './components/Stats';
import Features from './components/Features';
import CampusJourney from './components/CampusJourney';
import LogoMarquee from './components/LogoMarquee';
import TabSection from './components/TabSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import VideoModal from './components/VideoModal';
import Footer from './components/Footer';

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className=''>
        <Hero />
        <ClientLogoMarquee />
        <Stats />
        <Features />
        <LogoMarquee />
        <TabSection />
        <CampusJourney />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/your-video-id"
      />
    </>
  );
}

export default App;