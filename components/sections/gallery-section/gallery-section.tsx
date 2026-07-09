import Image from "next/image";
import { FrameMarks } from "@/components/frame-marks/frame-marks";
import { Reveal } from "@/components/reveal/reveal";
import { galleryItems } from "@/data/gallery";

export const GallerySection = () => (
  <section className="gallery" id="gallery">
    <div className="wrap">
      <Reveal className="gallery__head" variant="up">
        <p className="eyebrow">The Work</p>
        <h2 className="gallery__title">Photo Gallery</h2>
        <p className="gallery__sub">
          Recent details — all in one place.
        </p>
      </Reveal>

      <div className="gallery__grid">
        {galleryItems.map((item, index) => (
          <Reveal
            key={item.id}
            className={`gallery__item frame${item.featured ? " gallery__item--featured" : ""}`}
            variant="in"
            delay={index * 70}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
            />
            <FrameMarks />
            <span className="gallery__num" aria-hidden="true">
              {item.id}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
