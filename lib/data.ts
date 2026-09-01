export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    tagline: "Study, work and visit visa support",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "canada",
    name: "Canada",
    tagline: "University admission and study permits",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "united-states",
    name: "United States",
    tagline: "F1 student visas and tour packages",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "turkey",
    name: "Turkey",
    tagline: "Business, tourism and study visas",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "china",
    name: "China",
    tagline: "Trade, business and university admissions",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "europe-schengen",
    name: "Europe / Schengen",
    tagline: "Holiday tours and conference travel",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=700&q=80",
  },
];

export type Service = {
  id: string;
  category: "travel" | "study" | "docs";
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "flight-booking",
    category: "travel",
    title: "Flight Booking & Ticketing",
    description:
      "Best-fare itineraries, reservations and reissues handled directly with airlines.",
    icon: "✈️",
  },
  {
    id: "tour-packages",
    category: "travel",
    title: "Holiday & Tour Packages",
    description:
      "Planned getaways and group tours with accommodation and transfers arranged for you.",
    icon: "🏖️",
  },
  {
    id: "airport-pickup",
    category: "travel",
    title: "Airport Pickup & Escort",
    description:
      "Arrival support at your destination airport, arranged before you travel.",
    icon: "🚗",
  },
  {
    id: "study-abroad",
    category: "study",
    title: "Study Abroad Placement",
    description:
      "University matching and admission support across the UK, Canada, the US and beyond.",
    icon: "🎓",
  },
  {
    id: "work-abroad",
    category: "study",
    title: "Work Abroad Program",
    description:
      "Guidance through employer sponsorship routes and work-permit applications.",
    icon: "💼",
  },
  {
    id: "student-visa",
    category: "docs",
    title: "Student Visa Processing",
    description:
      "Document review, financial evidence checks and embassy appointment preparation.",
    icon: "🛂",
  },
  {
    id: "passport-assistance",
    category: "docs",
    title: "Passport Assistance",
    description:
      "Guidance through new applications, renewals and expedited requests.",
    icon: "📘",
  },
  {
    id: "document-vetting",
    category: "docs",
    title: "Document Vetting & Translation",
    description:
      "Certified checks on transcripts, statements and supporting paperwork before filing.",
    icon: "📋",
  },
];

export const steps = [
  {
    number: 1,
    title: "Choose your service",
    description:
      "Select a study abroad program, visa counselling or flight booking option — online or at our Agona Swedru office.",
  },
  {
    number: 2,
    title: "Submit details & documents",
    description:
      "Work with a consultant to file, verify and complete every required travel document.",
  },
  {
    number: 3,
    title: "Get approved & fly",
    description:
      "Receive your approvals, tickets and departure support, ready for takeoff.",
  },
];

export type EstimatorOption = {
  label: string;
  standard: { time: string; description: string };
  express: { time: string; description: string };
};

export const estimatorOptions: Record<string, EstimatorOption> = {
  visa: {
    label: "Visa Application Support",
    standard: {
      time: "3 – 6 weeks",
      description:
        "Direct consulate appointment handling and application package review.",
    },
    express: {
      time: "1 – 2 weeks",
      description:
        "Priority document review with expedited embassy scheduling where available.",
    },
  },
  study: {
    label: "Study Abroad Program",
    standard: {
      time: "8 – 12 weeks",
      description:
        "University matching, admission processing and student visa filing combined.",
    },
    express: {
      time: "4 – 6 weeks",
      description:
        "Fast-tracked for candidates with documents already prepared and verified.",
    },
  },
  work: {
    label: "Work Abroad Program",
    standard: {
      time: "6 – 10 weeks",
      description:
        "Employer verification, sponsorship checks and work-permit application filing.",
    },
    express: {
      time: "3 – 5 weeks",
      description:
        "Priority handling for candidates with an existing employer offer.",
    },
  },
  ticketing: {
    label: "Flight & Ticketing",
    standard: {
      time: "24 – 48 hours",
      description: "Standard fare search, comparison and reservation issue.",
    },
    express: {
      time: "Same day",
      description: "Urgent departures handled with same-day ticket issue.",
    },
  },
};

export type BlogPost = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "UK student visa changes: what you need to know",
    date: "August 2026",
    category: "Embassy update",
    excerpt:
      "A breakdown of recent policy updates on dependant rules and financial maintenance requirements.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Top fall university deadlines for Canadian admissions",
    date: "August 2026",
    category: "Scholarships",
    excerpt:
      "Which Canadian institutions are accepting applications for the upcoming semester, and how to prepare.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "How to secure discounted international airfares",
    date: "July 2026",
    category: "Flight booking",
    excerpt:
      "Ticketing tips on booking early and avoiding seasonal price surges on long-haul routes.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=80",
  },
];

export const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    label: "Holiday & vacation packages",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
    label: "Study abroad admissions",
  },
  {
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=700&q=80",
    label: "Flight reservation & ticketing",
  },
  {
    image:
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=700&q=80",
    label: "Visa counselling session",
  },
  {
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=700&q=80",
    label: "Airport pickup & escort",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

// Placeholders — replace with real client testimonials once collected.
export const testimonials: Testimonial[] = [
  {
    quote: "[Client testimonial goes here — add once collected.]",
    name: "[Client name]",
    detail: "[Service used, e.g. Study visa — UK]",
  },
  {
    quote: "[Client testimonial goes here — add once collected.]",
    name: "[Client name]",
    detail: "[Service used, e.g. Flight booking]",
  },
  {
    quote: "[Client testimonial goes here — add once collected.]",
    name: "[Client name]",
    detail: "[Service used, e.g. Work permit — Canada]",
  },
];

export const faqs = [
  {
    question: "Where is Akwantufuo Travel Consult located?",
    answer:
      "Our office address and digital GPS location are placeholders in this build — add the real details in lib/site-config.ts.",
  },
  {
    question: "How long does visa application support take?",
    answer:
      "Processing timelines vary by destination and embassy schedule, typically 2–6 weeks for standard processing. See the estimator above for a category-specific range.",
  },
  {
    question: "Can you assist with university admissions abroad?",
    answer:
      "Yes — end-to-end support for study abroad programs, including university matching, applications and student visa processing.",
  },
  {
    question: "How do I book a flight ticket?",
    answer:
      "Contact us through the form below, message us on WhatsApp, or call our hotline for immediate flight reservations and ticketing.",
  },
];
