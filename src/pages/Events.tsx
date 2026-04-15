import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import eventsImage from "@/assets/events.jpg";

const events = [
  { title: "Salsa & Flirt Social", date: "Sat 26 April, 8 PM – Midnight", location: "The Haunt, Brighton", type: "Social" },
  { title: "Full Moon Flow Dance", date: "Fri 9 May, 7:30 – 9:30 PM", location: "Beach Studio, Hove", type: "Special" },
  { title: "Summer Salsa on the Seafront", date: "Sun 15 June, 4 – 8 PM", location: "Brighton Beach", type: "Event" },
  { title: "Salsa & Flirt Social", date: "Sat 28 June, 8 PM – Midnight", location: "The Haunt, Brighton", type: "Social" },
  { title: "Solstice Dance Ceremony", date: "Sat 21 June, 6 – 9 PM", location: "Stanmer Park", type: "Special" },
];

const Events = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={eventsImage} alt="Salsa social event with warm ambient lighting" width={800} height={800} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-24">
        <span className="font-handwritten text-3xl text-primary-foreground/80 block mb-2">come dance with us</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight max-w-2xl">Events &amp; Socials</h1>
        <p className="font-body text-lg text-primary-foreground/70 mt-4 max-w-xl">
          From Salsa &amp; Flirt socials to full moon flows on the beach — our events are where the magic happens.
        </p>
      </div>
    </section>

    {/* Event List */}
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading handwritten="what's on" title="Upcoming Events" />
        <div className="space-y-4">
          {events.map((e, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-body text-xs font-bold tracking-widest uppercase text-primary">{e.type}</span>
                <h3 className="font-display text-xl font-semibold mt-1">{e.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{e.date} · {e.location}</p>
              </div>
              <CTAButton to="/contact" variant="outline">Get Tickets</CTAButton>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-20 px-6 text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">Don't Miss a Thing</h2>
        <p className="font-body text-primary-foreground/70 mb-8">Follow us on Instagram for the latest event announcements and behind-the-scenes moments.</p>
        <CTAButton to="https://instagram.com/salsaandflow" variant="light" external>Follow @salsaandflow</CTAButton>
      </div>
    </section>
  </Layout>
);

export default Events;
