import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import aboutImage from "@/assets/about-verity.jpg";

const values = [
  {
    title: "Embodiment Over Perfection",
    desc: "It's not about getting the steps right. It's about feeling alive in your body.",
  },
  {
    title: "Radical Welcome",
    desc: "Every body, every background, every level. You belong here.",
  },
  {
    title: "Joy as Medicine",
    desc: "Movement and music are some of the most powerful healing tools we have.",
  },
  {
    title: "Community as Container",
    desc: "We grow braver together. The dance floor is our safe space.",
  },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-300)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
        <div className="relative">
          <div
            className="absolute -inset-4 bg-orange-gradient opacity-20 rounded-3xl blur-2xl"
            aria-hidden="true"
          />
          <img
            src={aboutImage}
            alt="Verity Iris, founder of Salsa & Flow, portrait"
            width={800}
            height={1000}
            className="relative rounded-2xl w-full object-cover aspect-[4/5] shadow-warm-lg"
          />
          <div className="absolute -bottom-5 -right-5 bg-card rounded-2xl px-5 py-3 shadow-warm-lg border border-border/60 hidden md:block">
            <p className="font-handwritten text-2xl text-primary leading-none">Verity Iris</p>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground mt-1">
              Founder & Teacher
            </p>
          </div>
        </div>
        <div>
          <span className="font-handwritten text-3xl text-primary block mb-2">meet</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight">
            Verity Iris
          </h1>
          <div className="h-[2px] w-14 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mt-5 mb-7" />
          <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed mb-5">
            I'm a salsa dancer, somatic coach, and the founder of Salsa &amp;
            Flow. I believe that dance isn't just about steps — it's about how
            you feel when you move. It's about reconnecting with your body,
            your confidence, and your joy.
          </p>
          <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed mb-5">
            After years of teaching salsa in Brighton and working with women on
            confidence and embodiment, I created Salsa &amp; Flow as a space
            where movement meets mindfulness. A space that's welcoming,
            empowering, and transformative.
          </p>
          <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed mb-9">
            Whether you're stepping onto the dance floor for the first time or
            deepening your practice, I'm here to guide you back to yourself —
            one step, one breath, one dance at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton to="/salsa-and-soul" variant="primary">Work With Me 1:1</CTAButton>
            <CTAButton to="/classes" variant="outline">Join a Class</CTAButton>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-warm py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading handwritten="what I believe" title="My Values" />
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="group bg-card border border-border/60 rounded-2xl p-9 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <span className="text-primary text-xl mt-0.5 group-hover:scale-125 transition-transform">
                  ✦
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="font-body text-[0.95rem] text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative bg-orange-gradient py-24 px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 30%, hsl(40 100% 85% / 0.5), transparent 55%), radial-gradient(ellipse at 80% 70%, hsl(20 90% 30% / 0.5), transparent 55%)",
        }}
      />
      <div className="relative container mx-auto max-w-2xl">
        <span className="font-handwritten text-3xl text-primary-foreground/85 block mb-2">
          your next step
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-4 tracking-tight">
          Ready to Begin?
        </h2>
        <div className="h-[2px] w-12 rounded-full bg-primary-foreground/60 mx-auto mb-6" />
        <p className="font-body text-primary-foreground/85 mb-10 leading-relaxed">
          Join a class, attend an event, or book a free 30-minute breakthrough call.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton to="/classes" variant="light">View Classes</CTAButton>
          <CTAButton to="/contact" variant="light">Get in Touch</CTAButton>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
