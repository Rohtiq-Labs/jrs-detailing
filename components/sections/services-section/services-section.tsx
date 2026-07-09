import { Reveal } from "@/components/reveal/reveal";

const services = [
  {
    num: "01",
    title: "Interior Detail",
    desc: "Every surface, reset — vacuumed, conditioned, and wiped down until it feels new again.",
  },
  {
    num: "02",
    title: "Exterior Detail",
    desc: "Hand-washed, clayed, and sealed for a finish that actually holds its shine.",
  },
  {
    num: "03",
    title: "Full Detail",
    desc: "Interior and exterior, together — the complete reset, inside and out.",
  },
];

export const ServicesSection = () => (
  <section className="services" id="services">
    <div className="wrap">
      <Reveal className="services__head">
        <div>
          <p className="eyebrow">The Menu</p>
          <h2 className="services__title">Featured Services</h2>
        </div>
        <p className="services__count">03 Offerings</p>
      </Reveal>

      {services.map((service) => (
        <Reveal key={service.num} className="service-row">
          <span className="service-row__num">{service.num}</span>
          <div className="service-row__main">
            <h3 className="service-row__title">{service.title}</h3>
            <p className="service-row__desc">{service.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
