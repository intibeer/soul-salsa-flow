import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/classes", label: "Classes" },
  { to: "/workshops", label: "Workshops" },
  { to: "/events", label: "Events" },
  { to: "/salsa-and-soul", label: "Salsa & Soul" },
  { to: "/gallery", label: "Gallery" },
  { to: "/shop", label: "Shop" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-warm"
          : "bg-background/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-baseline gap-1.5 group" aria-label="Salsa & Flow home">
          <span className="font-script text-[2.2rem] leading-none text-primary transition-transform group-hover:-rotate-3 duration-300">
            Salsa&nbsp;&amp;
          </span>
          <span className="font-statement text-xl leading-none text-foreground tracking-[0.06em] uppercase">
            Flow
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-[0.8rem] font-body tracking-[0.12em] uppercase transition-colors ${
                  active ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] w-6 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-warm-peach text-primary hover:bg-orange-200 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/60 animate-fade-in">
          <div className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`py-3 px-4 rounded-lg text-[0.95rem] font-body tracking-wide transition-colors ${
                    active
                      ? "bg-warm-peach text-primary font-semibold"
                      : "text-foreground hover:bg-warm-cream hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
