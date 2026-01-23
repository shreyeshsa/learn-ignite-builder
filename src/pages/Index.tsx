import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyPeopleFail from "@/components/WhyPeopleFail";
import PositioningSection from "@/components/PositioningSection";
import BenefitsSection from "@/components/BenefitsSection";
import ArtworkGallery from "@/components/ArtworkGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstructorSection from "@/components/InstructorSection";
import CurriculumSection from "@/components/CurriculumSection";
import DrawWithMeSection from "@/components/DrawWithMeSection";
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
      <main>
        <HeroSection />
        <WhyPeopleFail />
        <PositioningSection />
        <BenefitsSection />
        <ArtworkGallery />
        <TestimonialsSection />
        <InstructorSection />
        <CurriculumSection />
        <DrawWithMeSection />
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
