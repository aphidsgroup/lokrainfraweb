import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import ProjectCategories from "@/components/ProjectCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import ResidentialCommercial from "@/components/ResidentialCommercial";
import JVSection from "@/components/JVSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <TrustStrip />
        <ServicesSection />
        <ProjectCategories />
        <WhyChooseUs />
        <ProcessSection />
        <ResidentialCommercial />
        <JVSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
