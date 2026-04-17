import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import classesImage from "@/assets/classes.jpg";

const schedule = [
  { day: "Monday", time: "7:00 – 8:15 PM", level: "All Levels", location: "Hove Studio" },
  { day: "Wednesday", time: "7:30 – 8:45 PM", level: "Improvers", location: "Brighton Centre" },
  { day: "Saturday", time: "10:00 – 11:30 AM", level: "Beginners Welcome", location: "Hove Studio" },
];

const steps = [
  {
    step: "01",
    title: "Arrive & Ground",
    desc: "We start with a mindful check-in and breathwork to bring you into your body.",
  },
  {
    step: "02",
    title: "Move & Learn",
    desc: "Salsa fundamentals taught with warmth and patience. No pressure, just flow.",
  },
  {
    step: "03",
    title: "Connect & Celebrate",
    desc: "Partner work, freestyle, and the joy of dancing together. You'll leave buzzing.",
  },
];

const Classes = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute -top-32 right-0 w-[28rem] h-[28rem] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-200)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl">
        <div>
          <span className="font-handwritten text-3xl text-primary block mb-2">weekly</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight mb-2">
            Classes in <span className="italic">Brighton</span>
          </h1>
          <div className="h-[2px] w-14 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mt-5 mb-6" />
          <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed mb-5">
            Our weekly salsa classes are designed to help you feel confident,
            connected, and joyful — whether you've never danced before or
            you've been moving for years.
          </p>
          <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed mb-9">
            Each class blends salsa technique with mindful movement,
            breathwork, and a whole lot of fun. No partner needed. No
            experience required. Just bring yourself.
          </p>
          <CTAButton
            to="https://flowstate.com/salsaandflow"
            variant="primary"
            external
            size="lg"
          >
            Book a Class
          </CTAButton>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 bg-orange-gradient opacity-20 rounded-3xl blur-2xl"
            aria-hidden="true"
          />
          <img
            src={classesImage}
            alt="Salsa & Flow class practicing together in the studio"
            width={800}
            height={800}
            loading="lazy"
            className="relative rounded-2xl w-full aspect-square object-cover shadow-warm-lg"
          />
        </div>
      </div>
    </section>

    {/* What to Expect */}
    <section className="section-warm py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading handwritten="what to expect" title="Your First Class" />
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <div
              key={i}
              className="relative bg-card border border-border/60 rounded-2xl p-9 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-500"
            >
              <span className="font-statement text-6xl text-transparent bg-gradient-to-br from-orange-600 to-orange-300 bg-clip-text block leading-none mb-4">
                {item.step}
              </span>
              <h3 className="font-display text-xl font-semibold mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="font-body text-[0.95rem] text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Schedule */}
    <section className="py-28 px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading handwritten="this week" title="Class Schedule" />
        <div className="space-y-4">
          {schedule.map((s, i) => (
            <div
              key={i}
              className="bg-card border border-border/60 rounded-2xl p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-warm hover:shadow-warm-lg hover:border-primary/40 transition-all duration-300"
            >
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {s.day}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-0.5">
                  {s.time} · {s.location}
                </p>
              </div>
              <span className="font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase text-primary bg-warm-peach px-4 py-1.5 rounded-full">
                {s.level}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <CTAButton
            to="https://flowstate.com/salsaandflow"
            variant="primary"
            external
            size="lg"
          >
            Book Now via Flow State
          </CTAButton>
        </div>
      </div>
    </section>
  </Layout>
);

export default Classes;
