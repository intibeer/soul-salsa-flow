import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import EventModal from "@/components/EventModal";
import classesImage from "@/assets/classes.jpg";
import { classes } from "@/data/events";

const salsaFlowClass = classes.find((c) => c.id === "salsa-and-flow-thursdays")!;

const classBenefits = salsaFlowClass.highlights || [];

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

const Classes = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
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
            to="https://www.flowstate-hove.com/schedule"
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
      <div className="container mx-auto max-w-4xl">
        <SectionHeading handwritten="this week" title="Class Schedule" />

        <div className="relative overflow-hidden rounded-3xl bg-card border border-border/60 shadow-warm-lg">
          <div className="relative grid md:grid-cols-[1fr_1.4fr]">
            {/* Left: time + location panel */}
            <div className="relative p-10 md:p-12 bg-sunset-gradient text-primary-foreground bg-grain">
              <span className="inline-block font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase bg-primary-foreground text-primary px-3 py-1.5 rounded-full mb-5">
                Thursdays · Weekly
              </span>
              <h3 className="font-statement text-5xl md:text-6xl leading-[0.95] tracking-tight mb-3 uppercase">
                Salsa
                <br />
                <span className="normal-case font-script text-[1.1em]">&amp;</span>{" "}
                Flow
              </h3>
              <div className="h-[2px] w-12 rounded-full bg-primary-foreground/70 mb-6" />
              <p className="font-handwritten text-3xl text-primary-foreground/90 mb-2">
                at Flow State
              </p>
              <p className="font-body text-primary-foreground/90 leading-relaxed mb-1">
                <span className="font-bold">7:45 PM</span> · Thursdays
              </p>
              <p className="font-body text-primary-foreground/80 leading-relaxed text-[0.95rem]">
                48 Brunswick Street West, Hove BN3 1EL
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <CTAButton
                  to="https://www.flowstate-hove.com/schedule"
                  variant="light"
                  external
                >
                  Book via Flow State
                </CTAButton>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-body text-sm font-semibold tracking-[0.18em] uppercase text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                >
                  More info →
                </button>
              </div>
            </div>

            {/* Right: description */}
            <div className="p-10 md:p-12">
              <h4 className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-4">
                Experience the true joy of movement
              </h4>
              <div className="h-[2px] w-10 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mb-6" />
              <p className="font-body text-[1rem] text-muted-foreground leading-relaxed mb-4">
                Salsa is more than just a dance — it's a powerful way to enter
                a flow state, where movement becomes effortless, the mind
                quiets, and you connect deeply with the music, your partner,
                and yourself.
              </p>
              <ul className="space-y-2.5 mb-5">
                {classBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 font-body text-[0.95rem] text-foreground/90">
                    <span className="text-primary mt-0.5">✦</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-[0.95rem] text-muted-foreground leading-relaxed mb-4">
                Salsa is great for cardiovascular health, coordination, brain
                function, memory, and confidence. The rhythmic movement
                quietens the mind; the music lifts the spirit; dancing with
                others boosts oxytocin — the hormone of connection.
              </p>
              <p className="font-body text-[0.95rem] text-muted-foreground leading-relaxed">
                No partner or experience needed — just bring your energy and
                an open heart. Whether you're here to improve your skills or
                simply lose yourself in the rhythm, you'll leave feeling
                uplifted, present, and alive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <EventModal
      event={salsaFlowClass}
      open={modalOpen}
      onOpenChange={setModalOpen}
    />
  </Layout>
  );
};

export default Classes;
