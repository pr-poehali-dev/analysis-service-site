import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 font-['Open_Sans']">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}