const img = (num: string) => `/assets/images/img-${num}.jpg`;

export const sectionImages = {
  hero: {
    src: img("01"),
    alt: "Detailed luxury vehicle after professional mobile detailing",
  },
} as const;
