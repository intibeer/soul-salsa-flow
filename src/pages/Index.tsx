import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import heroImage from "@/assets/hero-dance.jpg";
import connectionImage from "@/assets/connection.jpg";
import classesImage from "@/assets/classes.jpg";
import eventsImage from "@/assets/events.jpg";

const testimonials = [
  {
    quote: "Salsa & Flow changed my life. I walked in anxious and disconnected — I walked out feeling like myself again.",
    name: "Sarah M.",
    context: "Classes attendee",
  },
  {
    quote: "Verity creates a space where you can be vulnerable and strong at the same time. It's pure magic.",
    name: "Lauren K.",
    context: "Workshop participant",
  },
  {
    quote: "I've never felt more confident in my body. This isn't just dance — it's therapy, community, and joy.",
    name: "Rebecca T.",
    context: "Salsa & Soul 1:1 client",
  },
];

const pillars = [
  {
    icon: "✦",
    title: "Confidence",
    description: "Rediscover your power through movement. No experience needed — just a willingness to show up.",
  },
  {
    icon: "❋",
    title: "Connection",
    description: "Feel deeply connected to your body, your emotions, and the people around you.",
  },
  {
    icon: "◎",
    title: "Expression",
    description: "Release what's held inside. Salsa becomes your language of joy, freedom, and self-expression.",
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
    <meta name="description" content="Feel confident, connected, and fully expressed. Salsa classes, workshops, events, and 1:1 Salsa & Soul coaching with Verity Iris in Brighton." />

    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Woman dancing salsa on Brighton seafront at golden hour" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-handwritten text-3xl md:text-5xl text-primary-foreground/90 mb-4 animate-fade-in-up">
          This is how your life changes
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-bold leading-tight mb-6 animate-fade-in-up animate-delay-100">
          Find your confidence.<br />Feel alive in your body.
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
          Salsa &amp; Flow is where dance meets mindfulness — helping you feel confident, connected, and fully expressed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <CTAButton to="/classes" variant="primary">Book a Class</CTAButton>
          <CTAButton to="/events" variant="light">Join an Event</CTAButton>
        </div>
      </div>
    </section>

    {/* Three Pillars */}
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <SectionHeading
          handwritten="what is"
          title="Salsa & Flow"
          subtitle="More than a dance class. A practice for your body, mind, and soul."
        />
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <div key={i} className="text-center">
              <span className="text-4xl text-primary mb-4 block">{pillar.icon}</span>
              <h3 className="font-display text-2xl font-semibold mb-3">{pillar.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Image Band */}
    <section className="section-warm py-24 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div>
          <img src={connectionImage} alt="Hands connecting during partner dance" width={800} height={800} loading="lazy" className="rounded-sm w-full aspect-square object-cover" />
        </div>
        <div>
          <span className="font-handwritten text-3xl text-primary block mb-2">step into</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 leading-tight">
            A space where you can breathe, move, and be yourself
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Whether you're looking to build confidence, release stress, connect with others, or simply have the best night of your week — Salsa &amp; Flow is your invitation to come home to your body.
          </p>
          <CTAButton to="/about" variant="outline">Meet Verity</CTAButton>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <SectionHeading handwritten="voices from" title="The Community" />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-8">
              <p className="font-display text-lg italic leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-body font-bold text-sm">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Upcoming Events Teaser */}
    <section className="section-warm py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading handwritten="coming up" title="Upcoming Events" subtitle="Join us for something special." />
        <div className="space-y-4">
          {upcomingEvents.map((event, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-body text-xs font-bold tracking-widest uppercase text-primary">{event.type}</span>
                <h3 className="font-display text-xl font-semibold mt-1">{event.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{event.date} · {event.location}</p>
              </div>
              <CTAButton to="/events" variant="outline">Details</CTAButton>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter / CTA Band */}
    <section className="bg-primary py-20 px-6">
      <div className="container mx-auto text-center max-w-2xl">
        <span className="font-handwritten text-3xl text-primary-foreground/80 block mb-2">ready to</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">Step Into Your Flow?</h2>
        <p className="font-body text-primary-foreground/70 mb-8">
          Join the mailing list for class updates, event invites, and a dose of inspiration in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-sm bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
          />
          <button className="px-6 py-3 bg-primary-foreground text-foreground font-body text-sm font-bold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
