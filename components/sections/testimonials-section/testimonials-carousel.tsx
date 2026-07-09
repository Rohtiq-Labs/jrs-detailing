"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/data/testimonials";
import { FrameMarks } from "@/components/frame-marks/frame-marks";
import { StarRating } from "./star-rating";

type TestimonialsCarouselProps = {
  items: Testimonial[];
};

export const TestimonialsCarousel = ({ items }: TestimonialsCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + items.length) % items.length);
    },
    [items.length],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (event: React.TouchEvent) => {
    touchDeltaX.current = event.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (touchDeltaX.current < -48) goNext();
    if (touchDeltaX.current > 48) goPrev();
  };

  return (
    <div
      className="testimonials-carousel"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div
        className="testimonials-carousel__viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="testimonials-carousel__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <article
              key={item.name}
              className="testimonials-carousel__slide"
              aria-hidden={index !== activeIndex}
            >
              <div className="testimonials-carousel__card frame">
                <FrameMarks />

                <StarRating count={item.stars} />
                <p className="testimonials-carousel__quote">&ldquo;{item.quote}&rdquo;</p>
                <p className="testimonials-carousel__name">— {item.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="testimonials-carousel__nav">
        <button
          type="button"
          className="testimonials-carousel__arrow"
          aria-label="Previous testimonial"
          onClick={goPrev}
        >
          ←
        </button>

        <div className="testimonials-carousel__dots" role="tablist">
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              className={`testimonials-carousel__dot${index === activeIndex ? " is-active" : ""}`}
              aria-label={`Show testimonial from ${item.name}`}
              aria-selected={index === activeIndex}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="testimonials-carousel__arrow"
          aria-label="Next testimonial"
          onClick={goNext}
        >
          →
        </button>
      </div>
    </div>
  );
};
