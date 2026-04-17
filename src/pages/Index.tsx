import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import InstagramFeed from "@/components/InstagramFeed";
import heroImage from "@/assets/hero-dance.jpg";
import connectionImage from "@/assets/connection.jpg";

const testimonials = [
  {
    quote:
      "Salsa & Flow changed my life. I walked in anxious and disconnected — I walked out feeling like myself again.",
    name: "Sarah M.",
    context: "Classes attendee",
  },
  {
    quote:
      "Verity creates a space where you can be vulnerable and strong at the same time. It's pure magic.",
    name: "Lauren K.",
    context: "Workshop participant",
  },
  {
    quote:
      "I've never felt more confident in my body. This isn't just dance — it's therapy, community, and joy.",
    name: "Rebecca T.",
    context: "Salsa & Soul 1:1 client",
  },
];

const pillars = [
  {
    icon: "✦",
    title: "Confidence",
    description:
      "Rediscover your power through movement. No experience needed — just a willingness to show up.",
  },
  {
    icon: "❋",
    title: "Connection",
    description:
      "Feel deeply connected to your body, your emotions, and the people around you.",
  },
  {
    icon: "◎",
    title: "Expression",
    description:
      "Release what's held inside. Salsa becomes your language of joy, freedom, and self-expression.",
  },
];

const upcomingEvents = [
  { title: "Salsa & Flirt Social", date: "Sat 26 April", location: "Brighton", type: "Social" },
  { title: "Embodied Confidence Workshop", date: "Sat 10 May", location: "Hove Studio", type: "Workshop" },
  { title: "Summer Salsa on the Seafront", date: "Sun 15 June", location: "Brighton Beach", type: "Event" },
];

const Home = () => (
  <Layout>
    {/* SEO */}
    <title>Salsa & Flow — Salsa, Mindfulness & Somatic Coaching in Brighton</title>
    <meta
      name="description"
      content="Feel confident, connected, and fully expressed. Salsa classes, workshops, events, and 1:1 Salsa & Soul coaching with Verity Iris in Brighton."
    />

    {/* Hero */}
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Verity dancing joyfully at a Salsa & Flow class"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105"
        />
        {/* Warm orange vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(22 90% 20% / 0.45) 0%, hsl(25 95% 25% / 0.55) 45%, hsl(25 100% 30% / 0.7) 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-soft-light opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, hsl(40 100% 75% / 0.7), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-8">
        <p className="font-handwritten text-3xl md:text-5xl text-primary-foreground/95 mb-4 animate-fade-in-up">
          this is how your life changes
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-primary-foreground font-semibold leading-[1.02] tracking-tight mb-8 animate-fade-in-up animate-delay-100">
          Find your confidence.
          <br />
          <span className="italic font-normal">Feel alive</span> in your body.
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          Salsa &amp; Flow is where dance meets mindfulness — helping you feel
          confident, connected, and fully expressed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <CTAButton to="/classes" variant="primary" size="lg">
            Book a Class
          </CTAButton>
          <CTAButton to="/events" variant="light" size="lg">
            Join an Event
          </CTAButton>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-500 hidden sm:block">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/70">
          <span className="font-body text-[0.65rem] tracking-[0.3em] uppercase">scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-primary-foreground/80 to-transparent animate-shimmer" />
        </div>
      </div>
    </section>

    {/* Three Pillars */}
    <section className="relative py-28 px-6">
      <div className="container mx-auto">
        <SectionHeading
          handwritten="what is"
          title="Salsa & Flow"
          subtitle="More than a dance class. A practice for your body, mind, and soul."
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative p-10 rounded-2xl bg-card border border-border/60 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-100 to-warm-peach flex items-center justify-center text-primary text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="font-body text-[0.95rem] text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Image Band */}
    <section className="relative py-28 px-6 bg-warm-gradient overflow-hidden">
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-300)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
        <div className="relative">
          <div className="absolute -inset-4 bg-orange-gradient opacity-15 rounded-3xl blur-2xl" aria-hidden="true" />
          <img
            src={connectionImage}
            alt="Two dancers in a tender partner dance connection"
            width={800}
            height={800}
            loading="lazy"
            className="relative rounded-2xl w-full aspect-square object-cover shadow-warm-lg"
          />
        </div>
        <div>
          <span className="font-handwritten text-3xl text-primary block mb-2">step into</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-2 leading-[1.05] tracking-tight">
            A space where you can <span className="italic text-primary">breathe</span>, move, and be yourself
          </h2>
          <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mt-5 mb-6" />
          <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed mb-8">
            Whether you're looking to build confidence, release stress, connect
            with others, or simply have the best night of your week — Salsa
            &amp; Flow is your invitation to come home to your body.
          </p>
          <CTAButton to="/about" variant="outline">Meet Verity</CTAButton>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-28 px-6">
      <div className="container mx-auto">
        <SectionHeading handwritten="voices from" title="The Community" />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-card border border-border/70 rounded-2xl p-10 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-500"
            >
              <span
                className="absolute top-6 left-8 font-display text-6xl text-primary/20 leading-none select-none"
                aria-hidden="true"
              >
                “
              </span>
              <p className="relative font-display italic text-lg leading-relaxed mb-6 text-foreground/90">
                {t.quote}
              </p>
              <div className="pt-4 border-t border-border/60">
                <p className="font-body font-semibold text-sm text-foreground">{t.name}</p>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-primary/80 mt-1">
                  {t.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Upcoming Events Teaser */}
    <section className="section-warm py-28 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          handwritten="coming up"
          title="Upcoming Events"
          subtitle="Join us for something special."
        />
        <div className="space-y-4">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className="group bg-card border border-border/60 rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-warm hover:shadow-warm-lg hover:border-primary/40 transition-all duration-300"
            >
              <div>
                <span className="inline-block font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase text-primary bg-warm-peach px-3 py-1 rounded-full">
                  {event.type}
                </span>
                <h3 className="font-display text-2xl font-semibold mt-3 tracking-tight">
                  {event.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {event.date} · {event.location}
                </p>
              </div>
              <CTAButton to="/events" variant="outline" size="sm">
                Details
              </CTAButton>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAButton to="/events" variant="ghost">View all events</CTAButton>
        </div>
      </div>
    </section>

    {/* Instagram */}
    <InstagramFeed />

    {/* Newsletter / CTA Band */}
    <section className="relative py-24 px-6 overflow-hidden bg-warm-gradient">
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
      <div className="relative container mx-auto text-center max-w-2xl">
        <span className="font-handwritten text-3xl text-primary block mb-2">
          ready to
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
          Step Into Your <span className="italic text-primary">Flow?</span>
        </h2>
        <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-6" />
        <p className="font-body text-muted-foreground mb-10 leading-relaxed">
          Join the mailing list for class updates, event invites, and a dose of
          inspiration in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3.5 rounded-full bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <button className="px-7 py-3.5 bg-orange-gradient text-primary-foreground font-body text-xs font-bold tracking-[0.18em] uppercase rounded-full shadow-orange-glow hover:-translate-y-0.5 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
