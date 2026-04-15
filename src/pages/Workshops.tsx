import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import workshopsImage from "@/assets/workshops.jpg";

const workshops = [
  {
    title: "Embodied Confidence: Move Beyond Fear",
    date: "Saturday 10 May, 2–5 PM",
    location: "Hove Studio",
    description: "A 3-hour deep dive into somatic movement, breathwork, and salsa — designed to help you release fear and step into your power.",
    price: "£45",
  },
  {
    title: "Salsa & Surrender: A Dance of Trust",
    date: "Saturday 7 June, 2–5 PM",
    location: "Brighton Centre",
    description: "Explore the art of leading and following as a metaphor for trust, boundaries, and surrender in life and relationships.",
    price: "£45",
  },
];

const Workshops = () => (
  <Layout>
    <section className="relative py-24 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
        <div>
          <span className="font-handwritten text-3xl text-primary block mb-2">go deeper</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">Workshops</h1>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Our workshops are immersive experiences that go beyond the weekly class. Each one is a deep dive into a specific theme — blending salsa, somatic practice, and personal growth.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Expect movement, music, reflection, and real breakthroughs. Limited spaces to keep it intimate.
          </p>
        </div>
        <div>
          <img src={workshopsImage} alt="Intimate somatic movement workshop" width={800} height={800} loading="lazy" className="rounded-sm w-full aspect-square object-cover" />
        </div>
      </div>
    </section>

    <section className="section-warm py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading handwritten="upcoming" title="Workshop Schedule" />
        <div className="space-y-6">
          {workshops.map((w, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2">{w.title}</h3>
                  <p className="font-body text-sm text-primary font-bold mb-2">{w.date} · {w.location}</p>
                  <p className="font-body text-muted-foreground leading-relaxed">{w.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="font-statement text-2xl text-primary">{w.price}</span>
                  <CTAButton to="/contact" variant="primary">Book</CTAButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Workshops;
