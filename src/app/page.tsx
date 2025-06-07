import FAQSection from '@/components/FAQSection';
import HelpBussiness from '@/components/HelpBussiness';
import Hero from '@/components/Hero';
import OurServices from '@/components/OurServices';
import ProjectShowcase from '@/components/ProjectShowcase';
import VissionMission from '@/components/VissionMission';
import TestimonialsSection from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Price from '@/components/Price';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main>
      <Hero />
      <OurServices/>
      <HelpBussiness/>
      <VissionMission/>
      <ProjectShowcase/>
      <FAQSection/>
      <TestimonialsSection/>
      <Contact/>
      <Price/>
      <Footer/>

      
    </main>
  );
}
