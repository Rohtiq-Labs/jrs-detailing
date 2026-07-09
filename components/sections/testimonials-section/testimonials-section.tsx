import { Reveal } from "@/components/reveal/reveal";

export const TestimonialsSection = () => (
  <section className="testimonials" id="testimonials">
    <div className="wrap testi">
      <Reveal as="span" className="quote-mark">
        &ldquo;
      </Reveal>
      <Reveal as="p" className="testi__quote">
        They came right to my apartment and my car looked better than the day I
        bought it. I genuinely didn&apos;t expect that level of detail.
      </Reveal>
      <Reveal as="p" className="testi__name">
        — Sarah M., Leesburg
      </Reveal>

      <Reveal className="testi--second">
        <p className="testi__quote">
          Affordable, professional, and they actually showed up on time. Booked
          again the next month.
        </p>
        <p className="testi__name">— Daniel R., Ashburn</p>
      </Reveal>
    </div>
  </section>
);
