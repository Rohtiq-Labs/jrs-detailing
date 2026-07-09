export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  featured?: boolean;
};

const img = (num: string) => `/assets/images/img-${num}.jpg`;

export const galleryItems: GalleryItem[] = [
  { id: "02", src: img("02"), alt: "Detailed vehicle exterior", featured: true },
  { id: "03", src: img("03"), alt: "Clean car interior detail" },
  { id: "04", src: img("04"), alt: "Full detail result" },
  { id: "05", src: img("05"), alt: "Interior console and trim detail" },
  { id: "06", src: img("06"), alt: "Professional detailing work" },
  { id: "07", src: img("07"), alt: "Vehicle surface restoration", featured: true },
  { id: "08", src: img("08"), alt: "Mobile detailing service" },
  { id: "09", src: img("09"), alt: "Exterior wash and finish" },
  { id: "10", src: img("10"), alt: "Detailed paint and bodywork" },
  { id: "11", src: img("11"), alt: "Luxury interior detail" },
  { id: "12", src: img("12"), alt: "Dashboard and console cleaning" },
  { id: "13", src: img("13"), alt: "Wheel and tire detail" },
  { id: "14", src: img("14"), alt: "Finished detail showcase", featured: true },
];
