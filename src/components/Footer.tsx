import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <span className="font-handwritten text-4xl text-primary">Salsa</span>
          <span className="font-display text-xl text-primary-foreground ml-1">&amp; Flow</span>
          <p className="font-body text-sm mt-4 opacity-70 leading-relaxed">
            Where dance meets mindfulness — helping you feel confident, connected, and fully expressed.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display text-lg mb-4">Stay in the Flow</h4>
          <p className="font-body text-sm opacity-70 mb-4">Join the community for class updates, events, and inspiration.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-sm bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary"
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground font-body text-sm font-bold tracking-wide rounded-sm hover:opacity-90 transition-opacity">
              Join
            </button>
          </div>
        </div>

        {/* Links + Social */}
        <div>
          <h4 className="font-display text-lg mb-4">Connect</h4>
          <div className="flex gap-4 mb-4">
            <a href="https://instagram.com/salsaandflow" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://tiktok.com/@dancinghealing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.71a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.14z"/></svg>
            </a>
            <a href="https://linkedin.com/in/verityiris" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:verity@salsaandflow.com" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          <p className="font-body text-sm opacity-70">verity@salsaandflow.com</p>
          <div className="flex gap-4 mt-4 text-sm opacity-50 font-body">
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            <Link to="/classes" className="hover:opacity-100 transition-opacity">Classes</Link>
            <Link to="/events" className="hover:opacity-100 transition-opacity">Events</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="font-body text-xs opacity-50">© {new Date().getFullYear()} Salsa &amp; Flow. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
