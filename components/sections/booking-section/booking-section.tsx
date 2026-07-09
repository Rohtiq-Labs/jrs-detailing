import { FrameMarks } from "@/components/frame-marks/frame-marks";
import { Reveal } from "@/components/reveal/reveal";

export const BookingSection = () => (
  <section className="booking frame" id="booking">
    <FrameMarks />
    <div className="wrap">
      <Reveal
        as="p"
        className="eyebrow"
        style={{
          justifyContent: "center",
          display: "flex",
          marginBottom: "22px",
        }}
      >
        DM to Book
      </Reveal>
      <Reveal as="h2" className="booking__title">
        Ready for your
        <br />
        <em>next detail?</em>
      </Reveal>
      <Reveal as="p" className="booking__sub">
        Message us on Instagram with your vehicle and location — we&apos;ll lock
        in a time that works.
      </Reveal>
      <Reveal className="booking__btn">
        <a
          href="https://instagram.com/jrsdetailing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Message on Instagram →
        </a>
      </Reveal>
    </div>
  </section>
);
