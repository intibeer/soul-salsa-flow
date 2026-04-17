import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import eventsImage from "@/assets/events.jpg";

const bachataHosts = [
  { name: "Verity", handle: "iamverityiris" },
  { name: "Sophia", handle: "sophiatyndallbristow" },
  { name: "Santi", handle: "santi_nahman" },
  { name: "Lloyd", handle: "lloydburton619" },
];

interface EventItem {
  title: string;
  date: string;
  location: string;
  type: "Social" | "Special" | "Event";
  url?: string;
  cta?: string;
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
  },
  {
    title: "Salsa & Connect — Earth Day Special",
    date: "Wed 22 April, 7 – 10 PM",
    location: "The Greenhouse, 55 Church Rd, Hove",
    type: "Special",
    url: "https://www.eventbrite.co.uk/e/salsa-connect-tickets-1985150291962",
    cta: "Book on Eventbrite",
  },
  {
    title: "Bachata on Tuesdays",
    date: "Every Tuesday, 7 – 10 PM · from 14 April",
    location: "The Greenhouse, 55 Church Rd, Hove",
    type: "Social",
    url: "https://www.syncupevents.com/events/east-sussex-bachata-on-tuesdays-by-salsa-flow",
    cta: "Book on SyncUp",
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
          From Salsa &amp; Flirt socials to Bachata at The Greenhouse — these
          are the nights we remember.
        </p>
      </div>
    </section>

    {/* Feature: Salsa & Connect (Earth Day) */}
    <section className="relative py-24 px-6 overflow-hidden">
      <div
        className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-300)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-sunset-gradient shadow-warm-lg bg-grain">
          <div className="relative grid md:grid-cols-[1.1fr_1fr] gap-0">
            {/* Left: poster copy */}
            <div className="p-10 md:p-14">
              <span className="inline-block font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase bg-primary-foreground text-primary px-3 py-1.5 rounded-full mb-5">
                Earth Day Special
              </span>
              <h2 className="font-statement text-5xl md:text-6xl text-primary-foreground leading-[0.95] tracking-tight mb-3 uppercase">
                Salsa
                <span className="normal-case font-script text-[1.2em] ml-2">&amp;</span>
                <br />
                Connect
              </h2>
              <div className="h-[2px] w-12 rounded-full bg-primary-foreground/70 mb-6" />
              <p className="font-body text-primary-foreground/95 leading-relaxed mb-2">
                <span className="font-bold">Wed 22 April · 7–10 PM</span> ·
                Happy Earth Day 🌎
              </p>
              <p className="font-body text-primary-foreground/85 mb-6">
                The Greenhouse, 55 Church Rd, Hove BN3 2BD ·{" "}
                <a
                  href="https://www.instagram.com/thegreenhousebrighton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
                >
                  @thegreenhousebrighton
                </a>
              </p>
              <ul className="space-y-1.5 mb-8 font-body text-primary-foreground/95 text-[0.95rem]">
                <li>✦ Connection activities + beginner salsa class + social — £10</li>
                <li>✦ 9 PM · Freestyle social dancing only — £5</li>
                <li>✦ No partner needed · No experience needed</li>
                <li>✦ Hosted by Verity &amp; Sophia</li>
              </ul>
              <CTAButton
                to="https://www.eventbrite.co.uk/e/salsa-connect-tickets-1985150291962"
                external
                variant="light"
                size="lg"
              >
                Book on Eventbrite
              </CTAButton>
            </div>

            {/* Right: evocative copy block */}
            <div className="p-10 md:p-14 md:border-l border-primary-foreground/20 backdrop-blur-[1px]">
              <span className="font-handwritten text-4xl text-primary-foreground/90 block mb-4">
                put down your phone
              </span>
              <p className="font-serif-elegant italic text-xl md:text-2xl text-primary-foreground leading-relaxed mb-6">
                If you're ready for deeper connection, put down your phone and
                pick up a salsa partner.
              </p>
              <p className="font-body text-primary-foreground/90 leading-relaxed mb-4">
                Come alone or bring a friend. You don't need to be a "dancer"
                to come to this — you just need to be open.
              </p>
              <p className="font-body text-primary-foreground/90 leading-relaxed mb-4">
                Because this isn't just about salsa. It's about connection. To
                others. To your confidence. To that part of you that's been
                waiting to come alive.
              </p>
              <p className="font-handwritten text-2xl text-primary-foreground mt-6">
                let's dance to connect
              </p>
              <p className="mt-6 inline-block font-body text-[0.7rem] font-bold tracking-[0.22em] uppercase bg-primary-foreground/15 text-primary-foreground px-3 py-1.5 rounded-full border border-primary-foreground/30">
                Spots limited · last event sold out
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Weekly residency: Bachata Tuesdays */}
    <section className="section-warm py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <span className="font-handwritten text-3xl text-primary block mb-2">
            every week
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Our Weekly Residency
          </h2>
          <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-5" />
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-card border border-border/60 shadow-warm-lg">
          <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-0">
            {/* Left: event detail */}
            <div className="p-10 md:p-12">
              <span className="inline-block font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase bg-warm-peach text-primary px-3 py-1.5 rounded-full mb-5">
                Tuesdays · Starting 14 April
              </span>
              <h3 className="font-statement text-5xl md:text-6xl leading-[0.95] tracking-tight mb-3 uppercase">
                Bachata
                <br />
                <span className="text-primary">on Tuesdays</span>
              </h3>
              <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mb-6" />
              <p className="font-body text-muted-foreground leading-relaxed mb-2">
                The Greenhouse, 55 Church Rd, Hove BN3 2BD ·{" "}
                <a
                  href="https://www.instagram.com/thegreenhousebrighton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-primary/30 hover:decoration-primary"
                >
                  @thegreenhousebrighton
                </a>
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">
                A weekly Tuesday night in Hove to move, connect, and learn
                something new. Not just a dance class — a mindfulness and
                wellbeing experience. Beginners &amp; improvers welcome.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                <div className="rounded-2xl border border-border/70 p-5 bg-warm-white">
                  <p className="font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase text-primary mb-2">
                    Class
                  </p>
                  <p className="font-display text-2xl font-semibold leading-none">
                    7 – 8 PM
                  </p>
                  <p className="font-statement text-3xl text-primary mt-1">£10</p>
                </div>
                <div className="rounded-2xl border border-border/70 p-5 bg-warm-white">
                  <p className="font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase text-primary mb-2">
                    Social
                  </p>
                  <p className="font-display text-2xl font-semibold leading-none">
                    8 – 10 PM
                  </p>
                  <p className="font-statement text-3xl text-primary mt-1">Free</p>
                </div>
              </div>

              <CTAButton
                to="https://www.syncupevents.com/events/east-sussex-bachata-on-tuesdays-by-salsa-flow"
                external
                variant="primary"
              >
                Book on SyncUp
              </CTAButton>
            </div>

            {/* Right: hosts */}
            <div className="relative p-10 md:p-12 bg-warm-gradient border-l-0 md:border-l border-border/60">
              <span className="font-handwritten text-3xl text-primary block mb-5">
                your hosts
              </span>
              <ul className="space-y-3">
                {bachataHosts.map((h) => (
                  <li key={h.handle}>
                    <a
                      href={`https://www.instagram.com/${h.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 bg-card rounded-full pl-5 pr-4 py-3 border border-border/60 hover:border-primary/40 hover:-translate-y-0.5 transition-all shadow-warm"
                    >
                      <div>
                        <p className="font-display text-lg font-semibold leading-none">
                          {h.name}
                        </p>
                        <p className="font-body text-xs text-muted-foreground mt-1">
                          @{h.handle}
                        </p>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-warm-peach text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="font-body text-xs text-muted-foreground mt-5 leading-relaxed">
                … plus other special guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Event List */}
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading handwritten="what's on" title="All Upcoming Events" />
        <div className="space-y-4">
          {events.map((e, i) => (
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
