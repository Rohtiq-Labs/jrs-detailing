import Image from "next/image";
import { FrameMarks } from "@/components/frame-marks/frame-marks";
import { Reveal } from "@/components/reveal/reveal";

const showcaseItems = [
  {
    size: "lg" as const,
    src: "https://images.unsplash.com/photo-1714434087918-4b9abedef3c6?auto=format&fit=crop&w=1400&q=75",
    alt: "Close up of a freshly detailed black car exterior",
    caption: "Full Detail — Exterior",
  },
  {
    size: "md" as const,
    src: "https://images.unsplash.com/photo-1521038430013-28f2dfa2b7fc?auto=format&fit=crop&w=1000&q=75",
    alt: "Macro shot of a detailed dark car interior",
    caption: "Interior Reset",
  },
  {
    size: "sm" as const,
    src: "https://images.unsplash.com/photo-1756664825124-15a086629185?auto=format&fit=crop&w=1000&q=75",
    alt: "Close up of a clean detailed wheel and tire",
    caption: "Wheels & Trim",
  },
  {
    size: "md" as const,
    src: "https://images.unsplash.com/photo-1609842465593-c64fdfcd013c?auto=format&fit=crop&w=1000&q=75",
    alt: "Dark leather car dashboard and steering wheel after detailing",
    caption: "Dash & Console",
  },
];

export const ShowcaseSection = () => (
  <section className="showcase" id="showcase">
    <div className="wrap">
      <Reveal className="showcase__head">
        <p className="eyebrow">The Work</p>
        <h2 className="showcase__title">Proof, not promises.</h2>
      </Reveal>
    </div>

    <Reveal variant="scale" className="showcase__rail">
      {showcaseItems.map((item) => (
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
