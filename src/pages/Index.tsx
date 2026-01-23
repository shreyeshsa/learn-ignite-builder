import Header from "@/components/Header";
import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import WhyPeopleFail from "@/components/WhyPeopleFail";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstructorSection from "@/components/InstructorSection";
import PositioningSection from "@/components/PositioningSection";
import CurriculumSection from "@/components/CurriculumSection";
import PlatformSection from "@/components/PlatformSection";
import GoldMembershipSection from "@/components/GoldMembershipSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import ShareSection from "@/components/ShareSection";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StickyNav />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
        <InstructorSection />
        <WhyPeopleFail />
        <PositioningSection />
        <CurriculumSection />
        <PlatformSection />
        <GoldMembershipSection />
        <WhatsAppSection />
        <ShareSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
