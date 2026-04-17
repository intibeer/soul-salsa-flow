import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";

interface InstagramFeedProps {
  handle?: string;
  postUrls?: string[];
}

const DEFAULT_POSTS: string[] = [
  // Swap these for your actual post permalinks (https://www.instagram.com/p/XXXXX/)
  // Leave the array empty and the component falls back to the follow-only card.
];

const InstagramFeed = ({
  handle = "salsaandflow",
  postUrls = DEFAULT_POSTS,
}: InstagramFeedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!postUrls.length) return;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    const process = () => {
      const w = window as unknown as { instgrm?: { Embeds?: { process: () => void } } };
      w.instgrm?.Embeds?.process();
    };

    if (existing) {
      process();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, [postUrls]);

  const profileUrl = `https://www.instagram.com/${handle}`;

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-300)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="font-handwritten text-3xl md:text-4xl text-primary block mb-2">
            follow along
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            From the <span className="italic">studio</span>, to the stage, to the seafront
          </h2>
          <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-5" />
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 font-body text-sm font-semibold tracking-[0.15em] uppercase text-primary hover:gap-3 transition-all"
          >
            <Instagram size={16} /> @{handle}
          </a>
        </div>

        {postUrls.length > 0 ? (
          <div
            ref={containerRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {postUrls.map((url) => (
              <div
                key={url}
                className="rounded-2xl overflow-hidden shadow-warm bg-card border border-border/60 min-h-[24rem]"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    margin: 0,
                    padding: 0,
                    width: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-3xl overflow-hidden bg-orange-gradient p-14 md:p-20 text-center shadow-warm-lg hover:shadow-[0_20px_60px_-12px_hsl(25_100%_47%_/_0.4)] transition-all"
          >
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 20% 30%, hsl(40 100% 85% / 0.5), transparent 55%), radial-gradient(ellipse at 80% 70%, hsl(20 90% 30% / 0.5), transparent 55%)",
              }}
            />
            <div className="relative">
              <Instagram
                size={56}
                className="mx-auto text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight mb-4">
                Come dance with me on Instagram
              </h3>
              <p className="font-body text-primary-foreground/85 max-w-xl mx-auto leading-relaxed mb-8">
                Behind-the-scenes from class, Salsa &amp; Flirt socials, solo
                flows on Brighton beach, and the quieter side of the practice.
              </p>
              <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-foreground text-primary font-body text-sm font-semibold tracking-[0.18em] uppercase shadow-warm group-hover:-translate-y-0.5 transition-transform">
                Follow @{handle}
              </span>
            </div>
          </a>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;
