export type EventType = "Social" | "Special" | "Event" | "Class";

export interface Host {
  name: string;
  handle: string; // Instagram handle without the @
}

export interface AppEvent {
  id: string;
  title: string;
  /** Short date label (shown on cards) */
  date: string;
  /** Longer, friendlier date label for the modal */
  fullDate?: string;
  /** Short location label (shown on cards) */
  location: string;
  /** Full address (shown in modal) */
  address?: string;
  /** Venue Instagram handle, without the @ */
  venueHandle?: string;
  type: EventType;
  /** Primary booking URL (Eventbrite / SyncUp / Flow State / Stripe etc.) */
  url?: string;
  /** Label for the booking button */
  cta?: string;
  /** Whether to surface this event at the top of the Events page */
  featured?: boolean;
  /** One-sentence summary used on cards + preview */
  summary?: string;
  /** Full descriptive body (paragraphs, shown in modal) */
  body?: string[];
  /** Highlight bullet points (shown in modal) */
  highlights?: string[];
  /** Pricing breakdown lines (shown in modal) */
  pricing?: string[];
  /** Hosts (shown in modal for co-hosted events) */
  hosts?: Host[];
}

/** Weekly classes — pulled into Classes.tsx as modal content. */
export const classes: AppEvent[] = [
  {
    id: "salsa-and-flow-thursdays",
    title: "Salsa & Flow — Thursdays at Flow State",
    date: "Thursdays · 7:45 PM",
    fullDate: "Every Thursday · 7:45 PM",
    location: "Flow State, Hove",
    address: "Flow State · 48 Brunswick Street West, Hove BN3 1EL",
    type: "Class",
    url: "https://www.flowstate-hove.com/schedule",
    cta: "Book via Flow State",
    summary:
      "Experience the true joy of movement. Salsa as a path to flow state — where the mind quiets and the body leads.",
    body: [
      "Salsa is more than just a dance — it's a powerful way to enter a flow state, where movement becomes effortless, the mind quiets, and you connect deeply with the music, your partner, and yourself.",
      "Salsa dancing isn't just fun — it's incredibly beneficial for the mind, body, and spirit. It's a great cardiovascular workout, improves flexibility, boosts energy and endorphins, and supports coordination, brain function, memory, and confidence.",
      "The rhythmic movement helps quiet the mind and enhance focus; the music is uplifting for the spirit; and dancing with others is incredibly beneficial for building connections — and getting a boost of oxytocin, the hormone linked to bonding and connection.",
      "No partner or experience is needed — just bring your energy and an open heart. Whether you're here to improve your dance skills, find joy in movement, or simply lose yourself in the rhythm, this class will leave you feeling uplifted, present, and alive.",
    ],
    highlights: [
      "Learn fundamental salsa steps, spins, and partner work",
      "Cultivate body awareness and confidence through movement",
      "Explore musicality and rhythm to fully embody the dance",
      "Connect with yourself and with others",
    ],
  },
];

export const events: AppEvent[] = [
  {
    id: "salsa-connect-earth-day",
    title: "Salsa & Connect — Earth Day Special",
    date: "Wed 22 April, 7 – 10 PM",
    fullDate: "Wednesday 22 April · 7 PM – 10 PM",
    location: "The Greenhouse, Hove",
    address: "The Greenhouse · 55 Church Rd, Brighton and Hove, Hove BN3 2BD",
    venueHandle: "thegreenhousebrighton",
    type: "Special",
    featured: true,
    url: "https://www.eventbrite.co.uk/e/salsa-connect-tickets-1985150291962",
    cta: "Book on Eventbrite",
    summary:
      "An Earth Day evening of salsa, connection activities, and real human presence.",
    body: [
      "Take an evening for you to connect with yourself and others. Salsa & Connect is more than a dance event — it's a space to reconnect with people, build confidence, and experience the joy of real-life connection through music and movement.",
      "Making new friends as an adult isn't always easy. Busy lives, work commitments, and digital habits make it difficult to meet people in a natural way. We created Salsa & Connect to change that — bringing people together through movement, conversation, and shared experiences in a relaxed, welcoming space.",
      "Whether you come alone or with friends, you'll be part of an evening designed to help people open up, meet new faces, and build genuine connections that go beyond the dance floor.",
    ],
    highlights: [
      "Connection-based activities to break the ice",
      "A beginner-friendly salsa class to get everyone moving",
      "Social salsa — dance, chat, and connect",
      "Phone-free mindset so you can stay present",
      "No partner or experience needed",
    ],
    pricing: [
      "£10 · General admission — connection activities, salsa class, social",
      "£5 · From 9 PM — freestyle salsa social only",
    ],
    hosts: [
      { name: "Verity", handle: "iamverityiris" },
      { name: "Sophia", handle: "sophiatyndallbristow" },
    ],
  },
  {
    id: "bachata-tuesdays",
    title: "Bachata on Tuesdays",
    date: "Every Tuesday, 7 – 10 PM · from 14 April",
    fullDate: "Every Tuesday · 7 PM – 10 PM · starting 14 April",
    location: "The Greenhouse, Hove",
    address: "The Greenhouse · 55 Church Rd, Brighton and Hove, Hove BN3 2BD",
    venueHandle: "thegreenhousebrighton",
    type: "Social",
    featured: true,
    url: "https://www.syncupevents.com/events/east-sussex-bachata-on-tuesdays-by-salsa-flow",
    cta: "Book on SyncUp",
    summary:
      "A weekly Tuesday night in Hove to move, connect, and learn Bachata — mindfulness and wellbeing through dance.",
    body: [
      "You've heard of salsa… but have you heard of Bachata? In a world of surface-level conversations and scrolling through life, this is your space to come back to your body — and back to genuine human connection.",
      "Bachata is a Latin dance originating from the Dominican Republic. Mostly enjoyed in partners, it's a way to socialise, connect, and celebrate. Drop out of your head, tune into your body, and find flow state. This isn't just a dance class — it's a mindfulness and wellbeing experience.",
      "Learning to dance becomes so much easier when you're not doing it alone. There's something powerful about having someone there, literally holding your hands and guiding and moving with you. It takes the pressure off, helps you relax, and reminds you that you're supported every step of the way.",
    ],
    highlights: [
      "7:00–8:00 PM · Bachata class — rhythm, partner connection, body awareness, musicality",
      "8:00–10:00 PM · Social dancing — practise, meet people, connect without small talk",
      "Beginners and improvers welcome",
      "Come solo or bring a friend. No partner or experience needed",
    ],
    pricing: ["£10 · Class", "Free · Social from 8 PM"],
    hosts: [
      { name: "Verity", handle: "iamverityiris" },
      { name: "Sophia", handle: "sophiatyndallbristow" },
      { name: "Santi", handle: "santi_nahman" },
      { name: "Lloyd", handle: "lloydburton619" },
    ],
  },
  {
    id: "salsa-flirt-valentines",
    title: "Salsa & Flirt: Valentine's Speed Dating Social",
    date: "Fri 13 February, 7:30 PM",
    fullDate: "Friday 13 February · 7:30 PM",
    location: "Brighton",
    type: "Social",
    url: "https://www.eventbrite.co.uk/e/salsa-flirt-valentines-salsa-speed-dating-couples-date-night-social-tickets-1980198681562?aff=oddtdtcreator",
    cta: "Book on Eventbrite",
    summary:
      "Our signature Valentine's night — salsa, speed dating, and the best kind of chaos.",
    body: [
      "Our signature Valentine's night returns. A curated evening of salsa, speed dating, and real-life sparks — for singles, couples, and everyone in between. All levels welcome.",
    ],
  },
];

export const featuredEvents = events.filter((e) => e.featured);
export const upcomingEvents = events.slice(0, 3);
