import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import classesImage from "@/assets/classes.jpg";

const schedule = [
  { day: "Monday", time: "7:00 – 8:15 PM", level: "All Levels", location: "Hove Studio" },
  { day: "Wednesday", time: "7:30 – 8:45 PM", level: "Improvers", location: "Brighton Centre" },
  { day: "Saturday", time: "10:00 – 11:30 AM", level: "Beginners Welcome", location: "Hove Studio" },
];

const Classes = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
        <div>
          <span className="font-handwritten text-3xl text-primary block mb-2">weekly</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">Classes in Brighton</h1>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Our weekly salsa classes are designed to help you feel confident, connected, and joyful — whether you've never danced before or you've been moving for years.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Each class blends salsa technique with mindful movement, breathwork, and a whole lot of fun. No partner needed. No experience required. Just bring yourself.
          </p>
          <CTAButton to="https://flowstate.com/salsaandflow" variant="primary" external>Book a Class</CTAButton>
        </div>
        <div>
          <img src={classesImage} alt="Salsa class in a bright airy studio" width={800} height={800} loading="lazy" className="rounded-sm w-full aspect-square object-cover" />
        </div>
      </div>
    </section>

    {/* What to Expect */}
    <section className="section-warm py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading handwritten="what to expect" title="Your First Class" />
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Arrive & Ground", desc: "We start with a mindful check-in and breathwork to bring you into your body." },
            { step: "02", title: "Move & Learn", desc: "Salsa fundamentals taught with warmth and patience. No pressure, just flow." },
            { step: "03", title: "Connect & Celebrate", desc: "Partner work, freestyle, and the joy of dancing together. You'll leave buzzing." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <span className="font-statement text-5xl text-primary/20 block mb-2">{item.step}</span>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Schedule */}
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading handwritten="this week" title="Class Schedule" />
        <div className="space-y-4">
          {schedule.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h3 className="font-display text-lg font-semibold">{s.day}</h3>
                <p className="font-body text-sm text-muted-foreground">{s.time} · {s.location}</p>
              </div>
              <span className="font-body text-xs font-bold tracking-widest uppercase text-primary bg-terracotta-light px-3 py-1 rounded-sm">{s.level}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAButton to="https://flowstate.com/salsaandflow" variant="primary" external>Book Now via Flow State</CTAButton>
        </div>
      </div>
    </section>
  </Layout>
);

export default Classes;
