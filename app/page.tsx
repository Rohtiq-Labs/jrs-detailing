import { ScrollGauge } from "@/components/scroll-gauge/scroll-gauge";
import { SiteNav } from "@/components/site-nav/site-nav";
import { SiteFooter } from "@/components/site-footer/site-footer";
import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { ServicesSection } from "@/components/sections/services-section/services-section";
import { ShowcaseSection } from "@/components/sections/showcase-section/showcase-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section/testimonials-section";
import { ConvenienceSection } from "@/components/sections/convenience-section/convenience-section";
import { BookingSection } from "@/components/sections/booking-section/booking-section";

export default function Home() {
  return (
    <>
      <ScrollGauge />
      <SiteNav />

      <main id="top">
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <ConvenienceSection />
        <BookingSection />
        <SiteFooter />
      </main>
    </>
  );
}
