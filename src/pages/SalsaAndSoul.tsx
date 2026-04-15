import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import soulImage from "@/assets/soul-coaching.jpg";

const transformations = [
  "Feel confident and at home in your body",
  "Release anxiety, people-pleasing, and self-doubt",
  "Reconnect with your sensuality and joy",
  "Find your voice and learn to take up space",
  "Build unshakeable self-trust through embodied practice",
];

const testimonials = [
  {
    quote: "Working with Verity 1:1 was the most profound experience. I came in feeling stuck and left feeling free. My body finally feels like mine.",
    name: "Jessica W.",
  },
  {
    quote: "Verity holds the most incredible space. She sees you completely and guides you so gently back to yourself. I can't recommend this enough.",
    name: "Amira D.",
  },
];

const SalsaAndSoul = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
        <div>
          <span className="font-handwritten text-3xl text-primary block mb-2">1:1 coaching</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">Salsa &amp; Soul</h1>
          <p className="font-statement text-xl text-muted-foreground mb-6">
            A transformative 1:1 journey back to yourself.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Salsa &amp; Soul is for women who are ready to feel confident, connected, and fully alive in their bodies. Through a blend of salsa, somatic coaching, breathwork, and embodiment practices, we'll work together to unlock what's been held inside — and set it free.
          </p>
          <CTAButton to="/contact" variant="primary">Enquire Now</CTAButton>
        </div>
        <div>
          <img src={soulImage} alt="One-on-one coaching session in a serene room" width={800} height={800} loading="lazy" className="rounded-sm w-full aspect-square object-cover" />
        </div>
      </div>
    </section>

    {/* What You'll Experience */}
    <section className="section-warm py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading handwritten="imagine" title="What's Possible" />
        <div className="space-y-4">
          {transformations.map((t, i) => (
            <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-sm p-5">
              <span className="text-primary text-xl mt-0.5">✦</span>
              <p className="font-body text-foreground leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading handwritten="kind words" title="Client Testimonials" />
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-8">
              <p className="font-display text-lg italic leading-relaxed mb-6">"{t.quote}"</p>
              <p className="font-body font-bold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Free Call CTA */}
    <section className="bg-primary py-20 px-6 text-center">
      <div className="container mx-auto max-w-2xl">
        <span className="font-handwritten text-3xl text-primary-foreground/80 block mb-2">take the first step</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">Book a Free 30-Minute Breakthrough Call</h2>
        <p className="font-body text-primary-foreground/70 mb-8">
          No pressure, no commitment. Just a conversation about where you are, where you want to be, and how Salsa &amp; Soul can get you there.
        </p>
        <CTAButton to="/contact" variant="light">Book Your Free Call</CTAButton>
      </div>
    </section>
  </Layout>
);

export default SalsaAndSoul;
