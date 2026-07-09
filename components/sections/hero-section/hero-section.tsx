import Image from "next/image";

export const HeroSection = () => (
  <section className="hero">
    <div className="hero__media">
      <Image
        src="https://images.unsplash.com/photo-1722385640799-4ee84eb90038?auto=format&fit=crop&w=1800&q=75"
        alt="Dark studio front three-quarter view of a detailed luxury vehicle"
        fill
        priority
        sizes="100vw"
      />
    </div>

    <div className="hero__body">
      <h1 className="hero__headline">
        Student-Owned.
        <em>Premium Results.</em>
      </h1>
      <div className="hero__foot">
        <a href="#booking" className="btn-primary">
          Book Now →
        </a>
      </div>
    </div>

    <div className="hero__scroll">
      <span className="hero__scroll-line" aria-hidden="true" />
      Scroll
    </div>
  </section>
);
