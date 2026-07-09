export type ServicePackage = {
  num: string;
  title: string;
  tagline: string;
  price: string;
  features: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type AddOnService = {
  title: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
};

import { sectionImages } from "@/data/images";

export const servicePackages: ServicePackage[] = [
  {
    num: "01",
    title: "Interior Detail",
    tagline: "Deep clean inside",
    price: "$55",
    image: sectionImages.services.interior,
    features: [
      "Full interior vacuum",
      "Dashboard & console wipe-down",
      "Seat cleaning & conditioning",
      "Door panel cleaning",
      "Window cleaning (inside)",
      "Floor mat cleaning",
      "Air freshener",
    ],
  },
  {
    num: "02",
    title: "Exterior Detail",
    tagline: "A fresh, clean finish",
    price: "$65",
    image: sectionImages.services.exterior,
    features: [
      "Hand wash & rinse",
      "Wheel & tire cleaning",
      "Tire dressing",
      "Window cleaning (outside)",
      "Door jamb wipe-down",
      "Exterior surface dry",
      "Trim wipe-down",
    ],
  },
  {
    num: "03",
    title: "Full Detail",
    tagline: "The complete package",
    price: "$120",
    image: sectionImages.services.full,
    features: [
      "Everything in Interior Detail",
      "Everything in Exterior Detail",
      "Deep carpet shampoo",
      "Leather conditioning",
      "Complete interior & exterior",
      "Best value for a full refresh",
    ],
  },
];

export const addOnServices: AddOnService[] = [
  {
    title: "Pet Hair Removal",
    price: "$15–$25",
    image: sectionImages.services.addons.petHair,
  },
  {
    title: "Stain Removal",
    price: "$15–$25",
    image: sectionImages.services.addons.stain,
  },
  {
    title: "Headlight Restoration",
    price: "$40–$65",
    image: sectionImages.services.addons.headlight,
  },
];
