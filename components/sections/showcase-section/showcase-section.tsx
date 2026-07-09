import Image from "next/image";
import { FrameMarks } from "@/components/frame-marks/frame-marks";
import { Reveal } from "@/components/reveal/reveal";
import { sectionImages } from "@/data/images";

export const ShowcaseSection = () => (
  <section className="showcase" id="showcase">
    <div className="wrap">
      <Reveal className="showcase__head" variant="up">
        <p className="eyebrow">The Work</p>
        <h2 className="showcase__title">Proof, not promises.</h2>
      </Reveal>
    </div>

    <Reveal variant="scale" className="showcase__rail" delay={100}>
      {sectionImages.showcase.map((item) => (
        <div
          key={item.caption}
          className={`showcase__item showcase__item--${item.size} frame`}
        >
          <Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 78vw, 44vw" />
          <FrameMarks />
          <span className="showcase__cap">{item.caption}</span>
        </div>
      ))}
    </Reveal>
  </section>
);
