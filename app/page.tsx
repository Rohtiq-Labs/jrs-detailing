import { ScrollGauge } from "@/components/scroll-gauge/scroll-gauge";
import { SiteNav } from "@/components/site-nav/site-nav";
import { SiteFooter } from "@/components/site-footer/site-footer";
import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { ServicesSection } from "@/components/sections/services-section/services-section";
import { GallerySection } from "@/components/sections/gallery-section/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section/testimonials-section";
import { ConvenienceSection } from "@/components/sections/convenience-section/convenience-section";
import { ContactSection } from "@/components/sections/contact-section/contact-section";
import { BookingSection } from "@/components/sections/booking-section/booking-section";

export default function Home() {
  return (
    <>
      <ScrollGauge />
      <SiteNav />

      <main id="top">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ConvenienceSection />
        <ContactSection />
        <BookingSection />
        <SiteFooter />
      </main>
    </>
  );
}
