import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OpportunitySection from "@/components/OpportunitySection";
import StepsSection from "@/components/StepsSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import ModulesCarousel from "@/components/ModulesCarousel";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";
import SocialProofPopup from "@/components/SocialProofPopup";

const Index = () => {
  return (
    <div className="gradient-bg min-h-screen relative">
      <SocialProofPopup />
      <Navbar />
      <HeroSection />
      <OpportunitySection />
      <PainSection />
      <SolutionSection />
      <StepsSection />
      <ModulesCarousel />
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
