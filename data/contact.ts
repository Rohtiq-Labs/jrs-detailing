export const contact = {
  location: {
    city: "Leesburg, VA",
    note: "Mobile — we come to you!",
  },
  phone: {
    display: "(843) 450-3930",
    tel: "+18434503930",
  },
  email: "blittlejr@icloud.com",
  hours: [
    { days: "Mon–Fri", time: "9am – 3pm" },
    { days: "Sat–Sun", time: "9am – 8pm" },
  ],
} as const;

export const contactItems = [
  {
    label: "Location",
    value: contact.location.city,
    sub: contact.location.note,
    href: undefined,
  },
  {
    label: "Phone",
    value: contact.phone.display,
    href: `tel:${contact.phone.tel}`,
  },
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "Hours",
    value: contact.hours,
    href: undefined,
  },
] as const;
