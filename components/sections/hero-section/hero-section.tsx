import Image from "next/image";
import { Reveal } from "@/components/reveal/reveal";
import { sectionImages } from "@/data/images";

export const HeroSection = () => (
  <section className="hero">
    <div className="hero__media">
      <Image
        src={sectionImages.hero.src}
        alt={sectionImages.hero.alt}
        fill
        priority
        sizes="100vw"
      />
    </div>

    <div className="hero__body">
      <Reveal as="h1" className="hero__headline" variant="in" delay={120}>
        Student-Owned.
        <em>Premium Results.</em>
      </Reveal>
      <Reveal className="hero__foot" variant="up" delay={280}>
        <a href="#booking" className="btn-primary">
          Book Now →
        </a>
      </Reveal>
    </div>

    <Reveal className="hero__scroll" variant="fade" delay={480}>
      <span className="hero__scroll-line" aria-hidden="true" />
      Scroll
    </Reveal>
  </section>
);
