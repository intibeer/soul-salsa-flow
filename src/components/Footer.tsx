import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Sunset gradient band */}
    <div className="bg-sunset-gradient text-primary-foreground relative">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top left, hsl(40 100% 80% / 0.35), transparent 60%), radial-gradient(ellipse at bottom right, hsl(20 100% 40% / 0.4), transparent 60%)",
        }}
      />
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-14">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="font-handwritten text-5xl text-primary-foreground leading-none">
                Salsa
              </span>
              <span className="font-display text-2xl text-primary-foreground/95 leading-none">
                &amp; Flow
              </span>
            </div>
            <p className="font-body text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
              Where dance meets mindfulness — helping you feel confident,
              connected, and fully expressed.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-xl mb-2">Stay in the Flow</h4>
            <div className="h-[2px] w-10 rounded-full bg-primary-foreground/70 mb-4" />
            <p className="font-body text-sm text-primary-foreground/80 mb-5 leading-relaxed">
              Join the community for class updates, events, and a dose of
              inspiration.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground focus:bg-primary-foreground/20 transition-all"
              />
              <button className="px-5 py-2.5 bg-primary-foreground text-primary font-body text-xs font-bold tracking-widest uppercase rounded-full hover:bg-warm-white hover:-translate-y-0.5 transition-all shadow-warm">
                Join
              </button>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-xl mb-2">Connect</h4>
            <div className="h-[2px] w-10 rounded-full bg-primary-foreground/70 mb-4" />
            <div className="flex gap-3 mb-5">
              {[
                {
                  href: "https://instagram.com/verityiris_",
                  label: "Instagram",
                  icon: <Instagram size={18} />,
                },
                {
                  href: "https://tiktok.com/@dancinghealing",
                  label: "TikTok",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.71a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.14z" />
                    </svg>
                  ),
                },
                {
                  href: "https://linkedin.com/in/verityiris",
                  label: "LinkedIn",
                  icon: <Linkedin size={18} />,
                },
                {
                  href: "mailto:verity@salsaandflow.com",
                  label: "Email",
                  icon: <Mail size={18} />,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="font-body text-sm text-primary-foreground/90">
              verity@salsaandflow.com
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 mt-5 text-xs uppercase tracking-[0.18em] text-primary-foreground/70 font-body">
              <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
              <Link to="/classes" className="hover:text-primary-foreground transition-colors">Classes</Link>
              <Link to="/events" className="hover:text-primary-foreground transition-colors">Events</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} Salsa &amp; Flow. Made with warmth in Brighton.
          </p>
          <p className="font-handwritten text-xl text-primary-foreground/80">
            one breath, one step, one dance
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
