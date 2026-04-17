import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import workshopsImage from "@/assets/workshops.jpg";

const workshops = [
  {
    title: "Embodied Confidence: Move Beyond Fear",
    date: "Saturday 10 May, 2–5 PM",
    location: "Hove Studio",
    description:
      "A 3-hour deep dive into somatic movement, breathwork, and salsa — designed to help you release fear and step into your power.",
    price: "£45",
  },
  {
    title: "Salsa & Surrender: A Dance of Trust",
    date: "Saturday 7 June, 2–5 PM",
    location: "Brighton Centre",
    description:
      "Explore the art of leading and following as a metaphor for trust, boundaries, and surrender in life and relationships.",
    price: "£45",
  },
];

const Workshops = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-200)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
        <div>
          <span className="font-handwritten text-3xl text-primary block mb-2">go deeper</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight mb-2">
            Workshops
          </h1>
          <div className="h-[2px] w-14 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mt-5 mb-6" />
          <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed mb-5">
            Our workshops are immersive experiences that go beyond the weekly
            class. Each one is a deep dive into a specific theme — blending
            salsa, somatic practice, and personal growth.
          </p>
          <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed">
            Expect movement, music, reflection, and real breakthroughs.
            Limited spaces to keep it intimate.
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 bg-orange-gradient opacity-20 rounded-3xl blur-2xl"
            aria-hidden="true"
          />
          <img
            src={workshopsImage}
            alt="Teachers demonstrating partner connection to a workshop group"
            width={800}
            height={800}
            loading="lazy"
            className="relative rounded-2xl w-full aspect-square object-cover shadow-warm-lg"
          />
        </div>
      </div>
    </section>

    {/* Schedule */}
    <section className="section-warm py-28 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading handwritten="upcoming" title="Workshop Schedule" />
        <div className="space-y-6">
          {workshops.map((w, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border/60 rounded-2xl p-10 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br from-orange-100 to-warm-peach opacity-0 group-hover:opacity-70 blur-3xl transition-opacity duration-700 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 tracking-tight leading-tight">
                    {w.title}
                  </h3>
                  <p className="inline-block font-body text-[0.7rem] font-bold tracking-[0.2em] uppercase text-primary bg-warm-peach px-3 py-1 rounded-full mb-4">
                    {w.date} · {w.location}
                  </p>
                  <p className="font-body text-[0.98rem] text-muted-foreground leading-relaxed">
                    {w.description}
                  </p>
                </div>
                <div className="flex md:flex-col items-center md:items-end gap-4 shrink-0">
                  <div className="text-right">
                    <span className="font-statement text-4xl text-transparent bg-gradient-to-br from-orange-600 to-orange-400 bg-clip-text block leading-none">
                      {w.price}
                    </span>
                    <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                      per person
                    </span>
                  </div>
                  <CTAButton to="/contact" variant="primary" size="sm">
                    Book
                  </CTAButton>
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
