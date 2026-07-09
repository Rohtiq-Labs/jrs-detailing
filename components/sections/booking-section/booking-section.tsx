import { FrameMarks } from "@/components/frame-marks/frame-marks";
import { Reveal } from "@/components/reveal/reveal";
import { contact } from "@/data/contact";

export const BookingSection = () => (
  <section className="booking frame" id="booking">
    <FrameMarks />
    <div className="wrap booking__content">
      <Reveal
        as="p"
        className="eyebrow"
        variant="fade"
        style={{
          justifyContent: "center",
          display: "flex",
          marginBottom: "22px",
        }}
      >
        Call or Text to Book
      </Reveal>
      <Reveal as="h2" className="booking__title" variant="in" delay={100}>
        Ready for your
        <br />
        <em>next detail?</em>
      </Reveal>
      <Reveal as="p" className="booking__sub" variant="up" delay={200}>
        Call or text {contact.phone.display} with your vehicle and location —
        we&apos;ll lock in a time that works.
      </Reveal>
      <Reveal className="booking__actions" variant="up" delay={320}>
        <a href={`tel:${contact.phone.tel}`} className="btn-primary">
          Call Now →
        </a>
        <a href={`sms:${contact.phone.tel}`} className="btn-secondary">
          Text to Book →
        </a>
      </Reveal>
    </div>
  </section>
);
