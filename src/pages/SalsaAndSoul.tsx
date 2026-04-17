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
    quote:
      "Working with Verity 1:1 was the most profound experience. I came in feeling stuck and left feeling free. My body finally feels like mine.",
    name: "Jessica W.",
  },
  {
    quote:
      "Verity holds the most incredible space. She sees you completely and guides you so gently back to yourself. I can't recommend this enough.",
    name: "Amira D.",
  },
];

const SalsaAndSoul = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute top-20 -right-32 w-[32rem] h-[32rem] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-300)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
        <div>
          <span className="font-handwritten text-3xl text-primary block mb-2">1:1 coaching</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight mb-2">
            Salsa &amp; <span className="italic">Soul</span>
          </h1>
          <div className="h-[2px] w-14 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mt-5 mb-7" />
          <p className="font-statement text-2xl italic text-primary mb-6">
            A transformative 1:1 journey back to yourself.
          </p>
          <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed mb-9">
            Salsa &amp; Soul is for women who are ready to feel confident,
            connected, and fully alive in their bodies. Through a blend of
            salsa, somatic coaching, breathwork, and embodiment practices, we'll
            work together to unlock what's been held inside — and set it free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton to="/contact" variant="primary" size="lg">Enquire Now</CTAButton>
            <CTAButton to="/contact" variant="outline" size="lg">Book Free Call</CTAButton>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 bg-orange-gradient opacity-20 rounded-3xl blur-2xl"
            aria-hidden="true"
          />
          <img
            src={soulImage}
            alt="Embodied somatic rest practice on yoga mats"
            width={800}
            height={800}
            loading="lazy"
            className="relative rounded-2xl w-full aspect-square object-cover shadow-warm-lg"
          />
        </div>
      </div>
    </section>

    {/* Confidence Activation Challenge */}
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-warm-gradient border border-primary/20 p-10 md:p-14 shadow-warm-lg">
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-40 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(var(--orange-300)), transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <span className="font-handwritten text-3xl text-primary block mb-2">
                start here
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4">
                The <span className="italic">Confidence Activation</span> Challenge
              </h2>
              <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mb-6" />
              <p className="font-body text-[1.02rem] text-muted-foreground leading-relaxed mb-7">
                A short, potent self-paced challenge to reconnect you with your
                body and your voice. Daily prompts, somatic practices, and a
                gentle way to feel the work before you commit to 1:1.
              </p>
              <CTAButton
                to="https://buy.stripe.com/test_dRm3cu87zc7E6zdc2S7EQ00"
                external
                variant="primary"
                size="lg"
              >
                Join the Challenge
              </CTAButton>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              {[
                "Daily somatic prompts",
                "Private practice videos",
                "Accessible from anywhere",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-card rounded-full py-2.5 px-5 shadow-warm border border-border/60"
                >
                  <span className="text-primary">✦</span>
                  <span className="font-body text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What You'll Experience */}
    <section className="section-warm py-28 px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading handwritten="imagine" title="What's Possible" />
        <div className="space-y-4">
          {transformations.map((t, i) => (
            <div
              key={i}
              className="group flex items-start gap-5 bg-card border border-border/60 rounded-2xl p-6 shadow-warm hover:shadow-warm-lg hover:-translate-x-1 hover:border-primary/40 transition-all duration-300"
            >
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-100 to-warm-peach flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                ✦
              </span>
              <p className="font-body text-[1.02rem] text-foreground leading-relaxed pt-1.5">
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading handwritten="kind words" title="Client Testimonials" />
        <div className="grid md:grid-cols-2 gap-6">
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
              <p className="font-body font-semibold text-sm text-foreground pt-4 border-t border-border/60">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Free Call CTA */}
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
          take the first step
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
          Book a Free 30-Minute <span className="italic text-primary">Breakthrough Call</span>
        </h2>
        <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-6" />
        <p className="font-body text-muted-foreground mb-10 leading-relaxed">
          No pressure, no commitment. Just a conversation about where you are,
          where you want to be, and how Salsa &amp; Soul can get you there.
        </p>
        <CTAButton to="/contact" variant="primary" size="lg">Book Your Free Call</CTAButton>
      </div>
    </section>
  </Layout>
);

export default SalsaAndSoul;
