import { Reveal } from "@/components/reveal/reveal";

const nearbyAreas = [
  "Ashburn",
  "Sterling",
  "Purcellville",
  "Lansdowne",
  "Middleburg",
];

export const ConvenienceSection = () => (
  <section className="convenience" id="convenience">
    <div className="wrap convenience__grid">
      <Reveal className="convenience__lead" variant="left">
        <p className="eyebrow" style={{ marginBottom: "22px" }}>
          Mobile Convenience
        </p>
        <h2 className="convenience__statement">
          We bring professional detailing to you.
        </h2>
      </Reveal>

      <div className="convenience__rule" aria-hidden="true" />

      <Reveal className="convenience__side" variant="right" delay={120}>
        <p className="convenience__text">
          No drop-off, no waiting room. We show up fully equipped to your
          driveway, office lot, or curb — and leave nothing behind but a clean
          car.
        </p>

        <div>
          <p className="area-block__label">Service Area</p>
          <p className="area-block__main">Leesburg, VA</p>
        </div>

        <div>
          <p className="area-block__label">Nearby Areas</p>
          <ul className="area-list">
            {nearbyAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);
