"use client";

import { useEffect } from "react";
import { contact } from "@/data/contact";

const menuLinks = [
  { num: "01", label: "Services", href: "#services" },
  { num: "02", label: "Gallery", href: "#showcase" },
  { num: "03", label: "Reviews", href: "#testimonials" },
  { num: "04", label: "Contact", href: "#contact" },
  { num: "05", label: "Book Now", href: "#booking" },
];

type NavMenuProps = {
  open: boolean;
  onClose: () => void;
};

export const NavMenu = ({ open, onClose }: NavMenuProps) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (open) {
      document.addEventListener("keydown", onKeyDown);
    }

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={`nav-menu${open ? " is-open" : ""}`}
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <button
        type="button"
        className="nav-menu__backdrop"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <nav
        id="site-menu"
        className="nav-menu__panel"
        aria-label="Site navigation"
      >
        <ul className="nav-menu__list">
          {menuLinks.map((link, index) => (
            <li
              key={link.href}
              className="nav-menu__item"
              style={{ "--nav-delay": `${index * 70}ms` } as React.CSSProperties}
            >
              <a href={link.href} className="nav-menu__link" onClick={onClose}>
                <span className="nav-menu__num">{link.num}</span>
                <span className="nav-menu__label">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-menu__foot">
          <a
            href={`tel:${contact.phone.tel}`}
            className="nav-menu__social"
            onClick={onClose}
          >
            {contact.phone.display}
          </a>
          <p className="nav-menu__loc">{contact.location.city}</p>
        </div>
      </nav>
    </div>
  );
};
