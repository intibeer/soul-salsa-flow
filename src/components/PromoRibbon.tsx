import { Link } from "react-router-dom";

/**
 * Inline promotional ribbon that sits below the homepage hero.
 * Non-dismissible by design — promotes the weekly Bachata residency.
 */
const PromoRibbon = () => (
  <div className="relative bg-orange-700 text-primary-foreground bg-grain overflow-hidden">
    <div
      className="absolute inset-0 opacity-30 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 20% 50%, hsl(40 100% 75% / 0.5), transparent 55%), radial-gradient(ellipse at 80% 50%, hsl(15 95% 40% / 0.45), transparent 55%)",
      }}
    />
    <div className="relative container mx-auto px-6 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">
      <div className="flex items-baseline gap-2 sm:gap-3">
        <span className="font-handwritten text-3xl sm:text-4xl leading-none text-primary-foreground/90">
          new
        </span>
        <span className="font-statement text-xl sm:text-2xl uppercase tracking-wide">
          Bachata on Tuesdays
        </span>
      </div>
      <span className="hidden sm:inline w-px h-8 bg-primary-foreground/30" />
      <p className="font-body text-sm sm:text-[0.95rem] text-primary-foreground/90">
        The Greenhouse, Hove · 7–10 PM · from 14 April
      </p>
      <Link
        to="/events"
        className="inline-flex items-center gap-2 font-body text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-primary bg-primary-foreground hover:bg-warm-white hover:-translate-y-0.5 shadow-warm px-5 py-2.5 rounded-full transition-all"
      >
        Details →
      </Link>
    </div>
  </div>
);

export default PromoRibbon;
