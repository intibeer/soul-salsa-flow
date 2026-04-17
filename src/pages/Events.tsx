import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import eventsImage from "@/assets/events.jpg";

interface EventItem {
  title: string;
  date: string;
  location: string;
  type: "Social" | "Special" | "Event";
  url?: string;
  cta?: string;
  featured?: boolean;
  description?: string;
}

const events: EventItem[] = [
  {
    title: "Salsa & Flirt: Valentine's Speed Dating Social",
    date: "Fri 13 February, 7:30 PM",
    location: "Brighton",
    type: "Social",
    url: "https://www.eventbrite.com/e/salsa-flirt-valentines-salsa-speed-dating-social-tickets-1980198681562?aff=oddtdtcreator",
    cta: "Book on Eventbrite",
    featured: true,
    description:
      "My signature Valentine's night — salsa, speed dating, and the best kind of chaos. All levels welcome.",
  },
  {
    title: "Salsa & Flirt Social",
    date: "Sat 26 April, 8 PM – Midnight",
    location: "The Haunt, Brighton",
    type: "Social",
  },
  {
    title: "Full Moon Flow Dance",
    date: "Fri 9 May, 7:30 – 9:30 PM",
    location: "Beach Studio, Hove",
    type: "Special",
  },
  {
    title: "Summer Salsa on the Seafront",
    date: "Sun 15 June, 4 – 8 PM",
    location: "Brighton Beach",
    type: "Event",
  },
  {
    title: "Salsa & Flirt Social",
    date: "Sat 28 June, 8 PM – Midnight",
    location: "The Haunt, Brighton",
    type: "Social",
  },
  {
    title: "Solstice Dance Ceremony",
    date: "Sat 21 June, 6 – 9 PM",
    location: "Stanmer Park",
    type: "Special",
  },
];

const typeStyles: Record<string, string> = {
  Social: "bg-warm-peach text-primary",
  Special: "bg-orange-100 text-orange-700",
  Event: "bg-warm-cream text-orange-700",
};

const Events = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[62vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={eventsImage}
          alt="Salsa social event under warm string lights"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(22 90% 18% / 0.55) 0%, hsl(25 95% 20% / 0.65) 60%, hsl(25 100% 25% / 0.75) 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-soft-light opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, hsl(40 100% 75% / 0.6), transparent 60%)",
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-28">
        <span className="font-handwritten text-3xl md:text-4xl text-primary-foreground/90 block mb-2">
          come dance with us
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-semibold text-primary-foreground leading-[1.02] tracking-tight max-w-3xl">
          Events &amp; <span className="italic font-normal">Socials</span>
        </h1>
        <div className="h-[2px] w-14 rounded-full bg-primary-foreground/70 mt-6 mb-6" />
        <p className="font-body text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
          From Salsa &amp; Flirt socials to full moon flows on the beach — our
          events are where the magic happens.
        </p>
      </div>
    </section>

    {/* Featured event */}
    {events.filter((e) => e.featured).map((e) => (
      <section key={e.title} className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-orange-gradient p-10 md:p-14 shadow-warm-lg">
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 10% 20%, hsl(40 100% 85% / 0.6), transparent 55%), radial-gradient(ellipse at 90% 80%, hsl(20 90% 30% / 0.55), transparent 55%)",
              }}
            />
            <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="flex-1">
                <span className="font-handwritten text-3xl text-primary-foreground/90 block mb-2">
                  featured
                </span>
                <span className="inline-block font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase bg-primary-foreground text-primary px-3 py-1 rounded-full mb-4">
                  {e.type}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight leading-tight mb-3">
                  {e.title}
                </h2>
                <p className="font-body text-primary-foreground/90 mb-2">
                  {e.date} · {e.location}
                </p>
                {e.description && (
                  <p className="font-body text-primary-foreground/85 max-w-xl leading-relaxed mt-3">
                    {e.description}
                  </p>
                )}
              </div>
              <CTAButton to={e.url!} external variant="light" size="lg">
                {e.cta || "Book Tickets"}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    ))}

    {/* Event List */}
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading handwritten="what's on" title="All Upcoming Events" />
        <div className="space-y-4">
          {events.filter((e) => !e.featured).map((e, i) => (
            <div
              key={i}
              className="group bg-card border border-border/60 rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-warm hover:shadow-warm-lg hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex-1">
                <span
                  className={`inline-block font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase px-3 py-1 rounded-full ${
                    typeStyles[e.type] || "bg-warm-peach text-primary"
                  }`}
                >
                  {e.type}
                </span>
                <h3 className="font-display text-2xl font-semibold mt-3 tracking-tight leading-tight">
                  {e.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {e.date} · {e.location}
                </p>
              </div>
              {e.url ? (
                <CTAButton to={e.url} external variant="outline" size="sm">
                  {e.cta || "Book"}
                </CTAButton>
              ) : (
                <CTAButton to="/contact" variant="outline" size="sm">
                  Get Tickets
                </CTAButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-24 px-6 text-center overflow-hidden bg-warm-gradient">
      <div
        className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full opacity-40 blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-200)), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full opacity-40 blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-300)), transparent 70%)" }}
      />
      <div className="relative container mx-auto max-w-2xl">
        <span className="font-handwritten text-3xl text-primary block mb-2">
          don't miss a thing
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
          Follow <span className="italic text-primary">Along</span>
        </h2>
        <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-6" />
        <p className="font-body text-muted-foreground mb-10 leading-relaxed">
          Follow on Instagram for the latest event announcements and
          behind-the-scenes moments.
        </p>
        <CTAButton
          to="https://www.instagram.com/salsaandflow"
          variant="primary"
          external
          size="lg"
        >
          Follow @salsaandflow
        </CTAButton>
      </div>
    </section>
  </Layout>
);

export default Events;
