const img = (num: string) => `/assets/images/img-${num}.jpg`;

export const sectionImages = {
  hero: {
    src: img("01"),
    alt: "Detailed luxury vehicle after professional mobile detailing",
  },
  services: {
    interior: {
      src: img("03"),
      alt: "Detailed car interior with clean leather seats",
    },
    exterior: {
      src: img("09"),
      alt: "Freshly detailed car exterior with glossy paint",
    },
    full: {
      src: img("04"),
      alt: "Complete interior and exterior detail result",
    },
    addons: {
      petHair: {
        src: img("05"),
        alt: "Car interior upholstery and seating surfaces",
      },
      stain: {
        src: img("06"),
        alt: "Car interior surface after stain removal",
      },
      headlight: {
        src: img("07"),
        alt: "Car headlight and front end after restoration",
      },
    },
  },
  convenience: {
    src: img("05"),
    alt: "Mobile detailing service at the customer's location",
  },
  contact: {
    src: img("11"),
    alt: "Professional auto detailing work and results",
  },
  booking: {
    src: img("10"),
    alt: "",
  },
  showcase: [
    {
      size: "lg" as const,
      src: img("11"),
      alt: "Detailed car exterior finish",
      caption: "Full Detail — Exterior",
    },
    {
      size: "md" as const,
      src: img("12"),
      alt: "Clean detailed car interior",
      caption: "Interior Reset",
    },
    {
      size: "sm" as const,
      src: img("13"),
      alt: "Detailed wheel and tire close-up",
      caption: "Wheels & Trim",
    },
    {
      size: "md" as const,
      src: img("14"),
      alt: "Detailed dashboard and console",
      caption: "Dash & Console",
    },
  ],
} as const;
