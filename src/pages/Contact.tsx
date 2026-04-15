import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-24 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 max-w-5xl">
          {/* Form */}
          <div>
            <span className="font-handwritten text-3xl text-primary block mb-2">let's talk</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">Get in Touch</h1>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Whether you have a question about classes, want to book a 1:1 session, or just want to say hello — I'd love to hear from you.
            </p>

            {submitted ? (
              <div className="bg-terracotta-light rounded-sm p-8 text-center">
                <span className="font-handwritten text-3xl text-primary block mb-2">thank you!</span>
                <p className="font-body text-foreground">Your message has been sent. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-bold block mb-1">Name</label>
                  <input type="text" required className="w-full px-4 py-3 border border-border rounded-sm font-body text-sm bg-card focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="font-body text-sm font-bold block mb-1">Email</label>
                  <input type="email" required className="w-full px-4 py-3 border border-border rounded-sm font-body text-sm bg-card focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="font-body text-sm font-bold block mb-1">What's on your mind?</label>
                  <textarea rows={5} required className="w-full px-4 py-3 border border-border rounded-sm font-body text-sm bg-card focus:outline-none focus:border-primary resize-none" />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-bold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="md:pt-24">
            <div className="section-warm rounded-sm p-8 mb-8">
              <h3 className="font-display text-xl font-semibold mb-4">Connect</h3>
              <div className="space-y-3">
                <a href="mailto:verity@salsaandflow.com" className="flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors">
                  <Mail size={18} /> verity@salsaandflow.com
                </a>
                <a href="https://instagram.com/salsaandflow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors">
                  <Instagram size={18} /> @salsaandflow
                </a>
                <a href="https://linkedin.com/in/verityiris" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors">
                  <Linkedin size={18} /> Verity Iris
                </a>
              </div>
            </div>

            <div className="section-warm rounded-sm p-8">
              <h3 className="font-display text-xl font-semibold mb-4">Based in Brighton</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                All classes and events take place across Brighton &amp; Hove. Specific venue details are shared upon booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
