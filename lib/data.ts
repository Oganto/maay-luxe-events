// ---------------------------------------------------------------------------
// MAAY LUXE EVENTS — site content
// Edit copy, add portfolio pieces, testimonials, and journal posts here.
// UI components read from this file; no copy is hardcoded in the sections.
// ---------------------------------------------------------------------------

export const brand = {
  name: "MAAY LUXE EVENTS",
  tagline: "Creating Moments that Define Memories",
  descriptor: "Luxury Event Design • Planning • Styling",
  email: "maayluxeevents@gmail.com",
  instagramHandle: "@Maayluxe_events",
  instagramUrl: "https://instagram.com/Maayluxe_events",
  whatsapp: "09058567300",
  // WhatsApp deep link uses the international format without symbols.
  // TODO: confirm country code — assuming Nigeria (+234) for the wa.me link.
  whatsappUrl: "https://wa.me/2349058567300",
  location: "Lagos, Nigeria",
};

// "Kind Words" (#testimonials) and "Journal" (#journal) are left out of nav
// for now since those sections hide themselves until real content exists —
// add them back here once testimonials/journalPosts below have entries.
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type StatItem = {
  value: string;
  label: string;
};

// TODO: replace with real numbers — none provided yet. The strip stays
// hidden (see components/StatsStrip.tsx) until this array has entries.
export const stats: StatItem[] = [];

export const aboutIntro = [
  "At Maay Luxe Events, we transform ideas into refined celebrations through thoughtful planning, distinctive design and seamless execution.",
  "From the first concept to the final detail, every event is curated to create moments that feel uniquely yours, and define memories.",
];

export const ourStoryParagraphs = [
  "Maay Luxe Events was birthed from a passion, a purpose, and a curiosity that started long before it became a business.",
  "As a young girl, I found myself drawn to creating little designs and transforming spaces. From decorating altar walls to contributing to graduation ceremonies, I was always fascinated by how a simple space could be transformed into something beautiful and memorable.",
  "What began as curiosity slowly became a calling.",
  "During my university years, I had the opportunity to work with different events companies, starting as an Event Coordinator and Usher, and gradually becoming more involved in the planning and execution of events. I also became part of my school's entrepreneurial skills programme (ENT), where I joined the Events Planning and Coordination team.",
  "These experiences exposed me to the realities of the industry and helped me understand that creating beautiful events requires much more than creativity — it requires discipline, resilience, teamwork, consistency, and intentionality.",
  "Over the years, the brand itself has evolved with me — from Maay Moments, to Maay Events, and now to Maay Luxe Events.",
  "Each chapter has shaped who we are today, and every opportunity has been part of the journey.",
];

export const storySignatureLine = "The desire to create.";

export const coreValues = [
  { title: "Intentional", description: "Every detail has a purpose." },
  { title: "Creative", description: "We turn ideas into beautiful realities." },
  { title: "Excellent", description: "We pursue exceptional standards." },
  { title: "Consistent", description: "We show up and deliver." },
  { title: "Resilient", description: "We evolve through every season." },
  { title: "Authentic", description: "Your story remains at the heart of our design." },
  { title: "Hospitable", description: "We create experiences that make people feel cared for." },
];

export const visionMission = {
  vision:
    "To redefine celebration through beauty, intentional design, and unforgettable experiences.",
  mission:
    "To create beautifully curated celebrations that tell our clients' stories through thoughtful design, seamless planning, and exceptional attention to detail.",
  closing: "We don't just create beautiful events. We create moments people remember.",
};

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Full Event Planning",
    description: "End-to-end planning from first concept to final walkthrough.",
  },
  {
    title: "Event Design & Styling",
    description: "A distinctive visual direction, styled down to the last detail.",
  },
  {
    title: "Wedding Coordination",
    description: "Seamless coordination so your day unfolds exactly as envisioned.",
  },
  {
    title: "Guest Experience",
    description: "Thoughtful touches that make every guest feel considered.",
  },
  {
    title: "Bridal Assistance",
    description: "Dedicated support for the bride, from prep through send-off.",
  },
  {
    title: "Event Content",
    description: "Documenting the day's beauty for stories worth keeping.",
  },
  {
    title: "Decoration",
    description: "Spaces transformed with intention, texture, and restraint.",
  },
  {
    title: "Vendor Coordination",
    description: "Trusted vendors, aligned timelines, one point of contact.",
  },
  {
    title: "Event Coordination",
    description: "On-the-ground logistics handled with precision and calm.",
  },
];

export type PortfolioCategory =
  | "Weddings"
  | "Birthdays"
  | "Corporate"
  | "Celebrations"
  | "Styling & Decor";

export const portfolioCategories: ("All" | PortfolioCategory)[] = [
  "All",
  "Weddings",
  "Birthdays",
  "Corporate",
  "Celebrations",
  "Styling & Decor",
];

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  /** Image path — for videos, this is the poster/thumbnail frame. */
  image: string;
  caption?: string;
  /** Present only for video items — the actual video file path. */
  video?: string;
};

// Real event photography and video. The gallery renders these in a uniform
// grid, in this array's order — rearrange freely.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "event-01",
    title: "Hall Reception Styling",
    category: "Corporate",
    image: "/assets/events/event-01-hall-reception.jpg",
    caption: "Draped gold and ivory staging for a milestone reception, warmed by soft ambient light.",
  },
  {
    id: "event-02",
    title: "Rooftop Proposal",
    category: "Weddings",
    image: "/assets/events/event-02-rooftop-proposal.jpg",
    caption: "A skyline backdrop, a rose-framed arch, and a moment designed to be said yes to.",
  },
  {
    id: "event-03",
    title: "Bluey-Themed Birthday",
    category: "Birthdays",
    image: "/assets/events/event-03-bluey-birthday.jpg",
    caption: "A playful world in soft blue and gold, built around a favourite character.",
  },
  {
    id: "event-12",
    title: "Emerald & Gold Reception",
    category: "Weddings",
    image: "/assets/events/event-12-green-gold-reception.jpg",
    caption: "Deep emerald linens against gold chargers, styled beneath a draped garden canopy.",
  },
  {
    id: "event-06",
    title: "Elegant Place Setting",
    category: "Styling & Decor",
    image: "/assets/events/event-06-place-setting.jpg",
    caption: "Fine china and gold flatware, finished with a single bloom at every seat.",
  },
  {
    id: "event-13",
    title: "Ivory & Gold Ballroom",
    category: "Weddings",
    image: "/assets/events/event-13-white-gold-reception.jpg",
    caption: "Crystal chandeliers and candlelight over an all-white reception, styled for grandeur.",
  },
  {
    id: "event-05",
    title: "In The Wild II — Picnic Setup",
    category: "Celebrations",
    image: "/assets/events/event-05-picnic-setup.jpg",
    caption: "Low seating, layered textiles, and florals arranged for an intimate outdoor gathering.",
  },
  {
    id: "event-07",
    title: "White Rose Table Styling",
    category: "Weddings",
    image: "/assets/events/event-07-white-rose-table.jpg",
    caption: "Cascading white roses along a mirrored table, restrained and romantic.",
  },
  {
    id: "event-10",
    title: "Birthday Backdrop Styling",
    category: "Birthdays",
    image: "/assets/events/event-10-birthday-backdrop-poster.jpg",
    video: "/assets/events/event-10-birthday-backdrop.mp4",
    caption: "A lavender backdrop with a floral monogram and a gold-flecked balloon garland.",
  },
  {
    id: "event-08",
    title: "In-Room Proposal",
    category: "Weddings",
    image: "/assets/events/event-08-inroom-proposal.jpg",
    caption: "Candlelight, red balloons, and a headboard spelled out for a private proposal.",
  },
  {
    id: "event-04",
    title: "In The Wild II — Garden Picnic",
    category: "Celebrations",
    image: "/assets/events/event-04-in-the-wild-picnic.jpg",
    caption: "An open-air picnic styled in blush tones, set against manicured garden hedges.",
  },
  {
    id: "event-11",
    title: "60th Birthday Arch",
    category: "Birthdays",
    image: "/assets/events/event-11-60th-arch-poster.jpg",
    video: "/assets/events/event-11-60th-arch.mp4",
    caption: "A floral archway framing a live photo montage for the guest of honour.",
  },
  {
    id: "event-09",
    title: "60th Birthday Celebration",
    category: "Birthdays",
    image: "/assets/events/event-09-60th-birthday.jpg",
    caption: "A milestone birthday styled in blush and gold beneath a draped tent.",
  },
];

export const experienceSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding the vision, personality, expectations, and story behind the event.",
  },
  {
    number: "02",
    title: "Concept",
    description: "Transforming ideas into a distinctive creative direction.",
  },
  {
    number: "03",
    title: "Planning",
    description: "Coordinating the details, vendors, timelines, logistics, and experience.",
  },
  {
    number: "04",
    title: "Execution",
    description: "Bringing the concept to life with precision and intentionality.",
  },
  {
    number: "05",
    title: "Event Day",
    description: "Creating a seamless experience where the client can be present and enjoy the moment.",
  },
];

export type Testimonial = {
  name: string;
  eventType: string;
  quote: string;
  photo?: string;
};

// TODO: replace with real client testimonials — none provided yet.
export const testimonials: Testimonial[] = [];

export type JournalPost = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
};

// TODO: replace with real journal/inspo content — none provided yet.
export const journalPosts: JournalPost[] = [];
