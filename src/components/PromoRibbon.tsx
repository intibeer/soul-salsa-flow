import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "promo-ribbon:bachata-v1";
const RIBBON_HEIGHT = 44; // px, single-line desktop. Tailwind ignores this but we use it for --ribbon-h.

const PromoRibbon = () => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setDismissed(true);
    } catch {
      // ignore — localStorage may be unavailable
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--ribbon-h",
      dismissed ? "0px" : `${RIBBON_HEIGHT}px`
    );
  }, [dismissed]);

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  if (dismissed) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] bg-orange-700 text-primary-foreground"
      style={{ height: RIBBON_HEIGHT }}
    >
      <div className="relative h-full container mx-auto px-4 sm:px-6 flex items-center justify-center gap-3 text-center">
        <span className="hidden sm:inline font-handwritten text-2xl leading-none text-primary-foreground/90">
          new
        </span>
        <p className="font-body text-[0.78rem] sm:text-sm leading-snug">
          <span className="font-bold tracking-wide uppercase mr-2">
            Bachata on Tuesdays
          </span>
          <span className="text-primary-foreground/85 hidden sm:inline">
            at The Greenhouse, Hove · 7–10 PM · from 14 April
          </span>
          <span className="text-primary-foreground/85 sm:hidden">
            · The Greenhouse, Hove · from 14 April
          </span>
        </p>
        <Link
          to="/events"
          className="hidden md:inline-flex items-center gap-1 font-body text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-primary-foreground border border-primary-foreground/50 hover:bg-primary-foreground hover:text-primary px-3 py-1 rounded-full transition-colors"
        >
          Details →
        </Link>
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default PromoRibbon;
