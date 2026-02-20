import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <PainSection />
      <SolutionSection />
      <BenefitsSection />
      <StatsSection />
      <TestimonialsSection />
      <BonusSection />
      <PricingSection />
      <FAQSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
