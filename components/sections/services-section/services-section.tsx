import Image from "next/image";
import { FrameMarks } from "@/components/frame-marks/frame-marks";
import { Reveal } from "@/components/reveal/reveal";
import { addOnServices, servicePackages } from "@/data/services";

export const ServicesSection = () => (
  <section className="services" id="services">
    <div className="wrap">
      <Reveal className="services__head" variant="up">
        <div>
          <p className="eyebrow">The Menu</p>
          <h2 className="services__title">Services & Pricing</h2>
        </div>
        <p className="services__count">03 Packages</p>
      </Reveal>

      <div className="services__packages">
        {servicePackages.map((service, index) => (
          <Reveal
            key={service.num}
            className="service-package"
            variant="up"
            delay={index * 120}
          >
            <div className="service-package__head">
              <span className="service-package__num">{service.num}</span>
              <div className="service-package__intro">
                <h3 className="service-package__title">{service.title}</h3>
                <p className="service-package__tagline">{service.tagline}</p>
              </div>
              <p className="service-package__price">{service.price}</p>
            </div>

            <div className="service-package__body">
              <div className="service-package__media frame">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 280px"
                />
                <FrameMarks />
              </div>

              <ul className="service-package__features">
                {service.features.map((feature) => (
                  <li key={feature} className="service-package__feature">
                    <span className="service-package__mark" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="services-addons" variant="in" delay={80}>
        <div className="services-addons__head">
          <p className="eyebrow">Extras</p>
          <h3 className="services-addons__title">Add-On Services</h3>
        </div>

        <ul className="services-addons__list">
          {addOnServices.map((addon, index) => (
            <Reveal
              key={addon.title}
              as="li"
              className="addon-row"
              variant="fade"
              delay={index * 90}
            >
              <div className="addon-row__main">
                <div className="addon-row__media frame">
                  <Image
                    src={addon.image.src}
                    alt={addon.image.alt}
                    fill
                    sizes="72px"
                  />
                  <FrameMarks />
                </div>
                <span className="addon-row__name">{addon.title}</span>
              </div>
              <span className="addon-row__price">{addon.price}</span>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);
