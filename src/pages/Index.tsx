import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import NetworkSection from "@/components/NetworkSection";
import ScrollToTop from "@/components/ScrollToTop";

import FooterCTA from "@/components/FooterCTA";
import FAQTab from "@/components/FAQTab";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Professional Coworking Office Spaces in Mumbai | Awfis - Starting ₹9,000/month</title>
        <meta 
          name="description" 
          content="Premium coworking office spaces in Mumbai with private cabins & fixed desks. Starting ₹9,000/month, 1-month lock-in. BKC, Lower Parel, Andheri & 15+ locations. Book now!" 
        />
        <meta name="keywords" content="coworking space mumbai, office space mumbai, private office mumbai, awfis mumbai, coworking bkc, office space lower parel" />
        <link rel="canonical" href="https://awfis.com/mumbai" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional Coworking Office Spaces in Mumbai | Awfis" />
        <meta property="og:description" content="Premium coworking solutions starting ₹9,000/month. Private cabins, fixed desks across 15+ Mumbai locations." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Awfis Mumbai Coworking Spaces",
            "description": "Professional coworking office spaces in Mumbai with premium amenities",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressCountry": "IN"
            },
            "telephone": "1800-123-AWFIS",
            "priceRange": "₹9000-₹50000",
            "openingHours": "Mo-Su 00:00-24:00"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        
        <GallerySection />
        <ServicesSection />
        <AmenitiesSection />
        <NetworkSection />
        <FooterCTA />
      </main>
      <FAQTab />
      <ScrollToTop />
    </>
  );
};

export default Index;
