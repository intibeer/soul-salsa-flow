import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import aboutImage from "@/assets/about-verity.jpg";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
        <div>
          <img src={aboutImage} alt="Verity Iris dancing on Brighton beach at sunset" width={800} height={1000} className="rounded-sm w-full object-cover aspect-[4/5]" />
        </div>
        <div>
          <span className="font-handwritten text-3xl text-primary block mb-2">meet</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">Verity Iris</h1>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            I'm a salsa dancer, somatic coach, and the founder of Salsa &amp; Flow. I believe that dance isn't just about steps — it's about how you feel when you move. It's about reconnecting with your body, your confidence, and your joy.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            After years of teaching salsa in Brighton and working with women on confidence and embodiment, I created Salsa &amp; Flow as a space where movement meets mindfulness. A space that's welcoming, empowering, and transformative.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Whether you're stepping onto the dance floor for the first time or deepening your practice, I'm here to guide you back to yourself — one step, one breath, one dance at a time.
          </p>
          <CTAButton to="/salsa-and-soul" variant="outline">Work With Me 1:1</CTAButton>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-warm py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading handwritten="what I believe" title="My Values" />
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            { title: "Embodiment Over Perfection", desc: "It's not about getting the steps right. It's about feeling alive in your body." },
            { title: "Radical Welcome", desc: "Every body, every background, every level. You belong here." },
            { title: "Joy as Medicine", desc: "Movement and music are some of the most powerful healing tools we have." },
            { title: "Community as Container", desc: "We grow braver together. The dance floor is our safe space." },
          ].map((v, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-8">
              <h3 className="font-display text-xl font-semibold mb-3">{v.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-20 px-6 text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">Ready to Begin?</h2>
        <p className="font-body text-primary-foreground/70 mb-8">Join a class, attend an event, or book a free 30-minute breakthrough call.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton to="/classes" variant="light">View Classes</CTAButton>
          <CTAButton to="/contact" variant="light">Get in Touch</CTAButton>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
