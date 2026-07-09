export type Testimonial = {
  stars: number;
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  {
    stars: 5,
    quote:
      "Great communication! A1 detailing! I wouldn't recommend anyone else!",
    name: "Steve W",
  },
  {
    stars: 5,
    quote:
      "Cleaned my car very well! Love the communication and was very helpful picking what would be best!",
    name: "Janelle O",
  },
  {
    stars: 5,
    quote:
      "Did a very great job! He got all the swirls out of my paint and was very friendly and nice.",
    name: "Jonathan B",
  },
];
