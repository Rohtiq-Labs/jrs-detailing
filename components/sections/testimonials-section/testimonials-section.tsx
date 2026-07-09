import { Reveal } from "@/components/reveal/reveal";
import { testimonials } from "@/data/testimonials";
import { StarRating } from "./star-rating";
import { TestimonialsCarousel } from "./testimonials-carousel";

export const TestimonialsSection = () => (
  <section className="testimonials" id="testimonials">
    <div className="wrap">
      <Reveal className="testimonials__head" variant="up">
        <p className="eyebrow">Reviews</p>
        <h2 className="testimonials__title">What Our Client Says</h2>
      </Reveal>

      <div className="testimonials__desktop">
        {testimonials.map((item, index) => (
          <Reveal
            key={item.name}
            className="testi-card"
            variant="in"
            delay={index * 140}
          >
            <StarRating count={item.stars} />
            <p className="testi-card__quote">&ldquo;{item.quote}&rdquo;</p>
            <p className="testi-card__name">— {item.name}</p>
            {index < testimonials.length - 1 ? (
              <div className="testi-card__rule" aria-hidden="true" />
            ) : null}
          </Reveal>
        ))}
      </div>

      <Reveal variant="up" delay={80}>
        <TestimonialsCarousel items={testimonials} />
      </Reveal>
    </div>
  </section>
);
