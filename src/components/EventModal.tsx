import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import CTAButton from "@/components/CTAButton";
import { AppEvent } from "@/data/events";

interface EventModalProps {
  event: AppEvent | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventModal = ({ event, open, onOpenChange }: EventModalProps) => {
  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-border/70 p-0 bg-card">
        {/* Header band */}
        <div className="relative overflow-hidden rounded-t-2xl bg-sunset-gradient text-primary-foreground p-8 md:p-10 bg-grain">
          <span className="inline-block font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase bg-primary-foreground text-primary px-3 py-1.5 rounded-full mb-4">
            {event.type}
          </span>
          <DialogTitle asChild>
            <h2 className="font-statement text-3xl md:text-4xl leading-[1.05] tracking-tight uppercase">
              {event.title}
            </h2>
          </DialogTitle>
          <div className="h-[2px] w-12 rounded-full bg-primary-foreground/60 mt-4 mb-5" />
          <DialogDescription asChild>
            <div className="font-body text-primary-foreground/95 space-y-1">
              <p className="font-semibold">{event.fullDate || event.date}</p>
              <p className="text-primary-foreground/85 text-[0.95rem]">
                {event.address || event.location}
                {event.venueHandle && (
                  <>
                    {" · "}
                    <a
                      href={`https://www.instagram.com/${event.venueHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
                    >
                      @{event.venueHandle}
                    </a>
                  </>
                )}
              </p>
            </div>
          </DialogDescription>
        </div>

        {/* Body */}
        <div className="p-8 md:p-10 space-y-6">
          {event.summary && (
            <p className="font-serif-elegant italic text-xl text-foreground/90 leading-relaxed">
              {event.summary}
            </p>
          )}

          {event.body && event.body.length > 0 && (
            <div className="space-y-4">
              {event.body.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-[0.98rem] text-muted-foreground leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          )}

          {event.highlights && event.highlights.length > 0 && (
            <div className="pt-2">
              <h3 className="font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase text-primary mb-3">
                What to expect
              </h3>
              <ul className="space-y-2">
                {event.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 font-body text-[0.95rem] text-foreground/90"
                  >
                    <span className="text-primary mt-0.5">✦</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.pricing && event.pricing.length > 0 && (
            <div className="pt-2">
              <h3 className="font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase text-primary mb-3">
                Tickets
              </h3>
              <ul className="space-y-2">
                {event.pricing.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 font-body text-[0.95rem] text-foreground/90 bg-warm-cream rounded-xl px-4 py-3"
                  >
                    <span className="text-primary mt-0.5">✦</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.hosts && event.hosts.length > 0 && (
            <div className="pt-2">
              <h3 className="font-body text-[0.65rem] font-bold tracking-[0.22em] uppercase text-primary mb-3">
                Your hosts
              </h3>
              <div className="flex flex-wrap gap-2">
                {event.hosts.map((h) => (
                  <a
                    key={h.handle}
                    href={`https://www.instagram.com/${h.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-warm-peach rounded-full pl-4 pr-3 py-1.5 text-sm font-body hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="font-semibold">{h.name}</span>
                    <span className="text-primary/80 group-hover:text-primary-foreground/90 text-xs">
                      @{h.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {event.url && (
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <CTAButton to={event.url} external variant="primary" size="lg">
                {event.cta || "Book Now"}
              </CTAButton>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
