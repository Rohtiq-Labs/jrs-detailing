import { Reveal } from "@/components/reveal/reveal";
import { contact, contactItems } from "@/data/contact";

export const ContactSection = () => (
  <section className="contact" id="contact">
    <div className="wrap">
      <Reveal className="contact__head" variant="up">
        <p className="eyebrow">Reach Us</p>
        <h2 className="contact__title">Contact</h2>
      </Reveal>

      <div className="contact__grid">
        {contactItems.map((item, index) => (
          <Reveal
            key={item.label}
            className="contact-card"
            variant="in"
            delay={index * 90}
          >
            <p className="contact-card__label">{item.label}</p>

            {item.label === "Hours" ? (
              <ul className="contact-card__hours">
                {contact.hours.map((block) => (
                  <li key={block.days} className="contact-card__hour">
                    <span>{block.days}</span>
                    <span>{block.time}</span>
                  </li>
                ))}
              </ul>
            ) : item.href ? (
              <a href={item.href} className="contact-card__value contact-card__link">
                {item.value}
              </a>
            ) : (
              <>
                <p className="contact-card__value">{item.value}</p>
                {"sub" in item && item.sub ? (
                  <p className="contact-card__sub">{item.sub}</p>
                ) : null}
              </>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
