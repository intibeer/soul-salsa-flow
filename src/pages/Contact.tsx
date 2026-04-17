import { useState } from "react";
import Layout from "@/components/Layout";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-5 py-3.5 border border-border rounded-xl font-body text-sm bg-card focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <Layout>
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--orange-200)), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto grid md:grid-cols-2 gap-16 max-w-5xl">
          {/* Form */}
          <div>
            <span className="font-handwritten text-3xl text-primary block mb-2">let's talk</span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight mb-2">
              Get in <span className="italic">Touch</span>
            </h1>
            <div className="h-[2px] w-14 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mt-5 mb-7" />
            <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed mb-10">
              Whether you have a question about classes, want to book a 1:1
              session, or just want to say hello — I'd love to hear from you.
            </p>

            {submitted ? (
              <div className="bg-warm-peach border border-primary/20 rounded-2xl p-10 text-center shadow-warm">
                <span className="font-handwritten text-4xl text-primary block mb-2">
                  thank you!
                </span>
                <p className="font-body text-foreground leading-relaxed">
                  Your message has been sent. I'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-[0.7rem] font-bold tracking-[0.18em] uppercase text-muted-foreground block mb-2">
                    Name
                  </label>
                  <input type="text" required className={inputClass} />
                </div>
                <div>
                  <label className="font-body text-[0.7rem] font-bold tracking-[0.18em] uppercase text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input type="email" required className={inputClass} />
                </div>
                <div>
                  <label className="font-body text-[0.7rem] font-bold tracking-[0.18em] uppercase text-muted-foreground block mb-2">
                    What's on your mind?
                  </label>
                  <textarea rows={5} required className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-gradient text-primary-foreground font-body text-sm font-semibold tracking-[0.18em] uppercase rounded-full shadow-orange-glow hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_hsl(25_100%_47%_/_0.6)] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="md:pt-28 space-y-6">
            <div className="bg-card border border-border/60 rounded-2xl p-9 shadow-warm">
              <h3 className="font-display text-2xl font-semibold mb-2 tracking-tight">Connect</h3>
              <div className="h-[2px] w-10 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mb-6" />
              <div className="space-y-4">
                <a
                  href="mailto:verity@salsaandflow.com"
                  className="flex items-center gap-4 font-body text-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-warm-peach flex items-center justify-center text-primary group-hover:bg-orange-gradient group-hover:text-primary-foreground transition-all">
                    <Mail size={18} />
                  </span>
                  verity@salsaandflow.com
                </a>
                <a
                  href="https://www.instagram.com/_dancingishealing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 font-body text-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-warm-peach flex items-center justify-center text-primary group-hover:bg-orange-gradient group-hover:text-primary-foreground transition-all">
                    <Instagram size={18} />
                  </span>
                  @_dancingishealing
                </a>
                <a
                  href="https://linkedin.com/in/verityiris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 font-body text-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-warm-peach flex items-center justify-center text-primary group-hover:bg-orange-gradient group-hover:text-primary-foreground transition-all">
                    <Linkedin size={18} />
                  </span>
                  Verity Iris
                </a>
              </div>
            </div>

            <div className="bg-warm-gradient border border-border/60 rounded-2xl p-9 shadow-warm">
              <h3 className="font-display text-2xl font-semibold mb-2 tracking-tight">
                Based in Brighton
              </h3>
              <div className="h-[2px] w-10 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mb-5" />
              <p className="font-body text-[0.98rem] text-muted-foreground leading-relaxed">
                All classes and events take place across Brighton &amp; Hove.
                Specific venue details are shared upon booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
