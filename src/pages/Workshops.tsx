import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import workshopsImage from "@/assets/workshops.jpg";

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

    {/* Enquiry */}
    <section className="section-warm py-28 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border/60 shadow-warm-lg p-10 md:p-14 text-center">
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-40 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(var(--orange-200)), transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative">
            <span className="font-handwritten text-3xl text-primary block mb-2">
              by enquiry only
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4">
              Bespoke <span className="italic">Workshops</span>
            </h2>
            <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-6" />
            <p className="font-body text-[1rem] text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              Workshops are announced periodically and held in intimate groups.
              Get in touch to be notified of the next one, or to enquire about
              a private workshop for your team, retreat, or event.
            </p>
            <CTAButton to="/contact" variant="primary" size="lg">
              Enquire About Workshops
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Workshops;
