"use client";

import { useEffect, useState } from "react";
import { NavMenu } from "./nav-menu";

export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <header
        className={`site-nav${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
      >
        <a href="#top" className="logo" onClick={closeMenu}>
          JRS <span>Detailing</span>
        </a>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={toggleMenu}
        >
          <span className="nav-toggle__line" aria-hidden="true" />
          <span className="nav-toggle__line" aria-hidden="true" />
        </button>
      </header>

      <NavMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
};
