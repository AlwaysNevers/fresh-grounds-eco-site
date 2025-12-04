import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUpcyclingSection from "@/components/WhyUpcyclingSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Fresh Grounds | Eco-Friendly Odor Neutralizing Sachets</title>
        <meta 
          name="description" 
          content="Transform coffee waste into powerful, non-toxic odor neutralizers. Our compostable sachets are made from upcycled coffee grounds, baking soda, and essential oils." 
        />
        <meta name="keywords" content="eco-friendly, odor neutralizer, coffee grounds, sustainable, compostable, non-toxic, air freshener" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProductSection />
          <HowItWorksSection />
          <WhyUpcyclingSection />
          <PartnershipsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
