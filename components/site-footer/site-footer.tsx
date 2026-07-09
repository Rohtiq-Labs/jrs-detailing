import { Reveal } from "@/components/reveal/reveal";
import { contact } from "@/data/contact";

export const SiteFooter = () => (
  <footer>
    <div className="wrap">
      <Reveal className="footer__row" variant="fade">
        <div>
          <p className="footer__brand">JRS Detailing</p>
          <p className="footer__sub">
            Student-Owned Mobile Auto Detailing
            <br />
            {contact.location.city}
          </p>
        </div>
        <div className="footer__links">
          <a href={`tel:${contact.phone.tel}`}>Call</a>
          <a href={`sms:${contact.phone.tel}`}>Text</a>
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href="#booking">Book Now</a>
        </div>
      </Reveal>
      <div className="footer__rule" />
      <Reveal as="p" className="footer__copy" variant="fade" delay={120}>
        © 2026 JRS Detailing. All rights reserved.
      </Reveal>
    </div>
  </footer>
);
