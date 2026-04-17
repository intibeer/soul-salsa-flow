import Layout from "@/components/Layout";

interface Product {
  title: string;
  tagline: string;
  description: string;
  offer?: string;
  price?: string;
  url?: string;
  image?: string;
  emoji: string;
}

const products: Product[] = [
  {
    title: "Amphi Botanicals",
    tagline: "Adaptogen mushroom drinks",
    description:
      "What I sip on to stay grounded, focused, and energised through busy teaching weeks.",
    offer: "15% off with VERITYCOOPER",
    url: "https://amphibotanicals.com/?ref=VERITYCOOPER",
    image:
      "https://ugc.production.linktr.ee/4a2603f2-f2d6-4eaa-be43-f7a5ae70eabb_Minimalist-Floral-Hello-Spring-Facebook-Post.png?io=true&size=thumbnail-stack_v1_0",
    emoji: "🍄",
  },
  {
    title: "Ouroboros Ring",
    tagline: "by Rebekah Ann Jewellery",
    description:
      "My self-engagement ring — a daily reminder to choose myself first.",
    image:
      "https://ugc.production.linktr.ee/88c5d712-abaf-4b62-b374-a3061f48a3c1_3ff5b64623fc9d9ae82bb0012ba1ebfb.jpeg?io=true&size=thumbnail-stack_v1_0",
    url: "https://www.instagram.com/_dancingishealing",
    emoji: "◯",
  },
  {
    title: "Gousto",
    tagline: "Recipe box",
    description:
      "Real ingredients, proper flavour, and easy dinners on dance-night-heavy weeks.",
    offer: "65% off first box",
    url: "https://www.gousto.co.uk/raf/?promo_code=VERIT42302179",
    image:
      "https://ugc.production.linktr.ee/a6cffb7d-12ba-4229-9506-70ba8d40c721_fvvoivoc.jpeg?io=true&size=thumbnail-stack_v1_0",
    emoji: "🥘",
  },
  {
    title: "Wild",
    tagline: "Natural deodorant & body care",
    description:
      "Refillable, kind to skin, kind to the planet — my everyday non-negotiable.",
    offer: "Referral discount",
    url: "https://mention-me.com/m/ol/pp7mx-verity-cooper",
    emoji: "🌿",
  },
  {
    title: "Geowear — Brown Jumpsuit",
    tagline: "Everyday dance-to-life wear",
    description:
      "The jumpsuit I live in between class and coffee. Flattering, stretchy, made to move.",
    price: "£79.99",
    emoji: "🤎",
  },
  {
    title: "Geowear — Blue Dancewear Jumpsuit",
    tagline: "Stage and social",
    description:
      "My go-to for photoshoots and socials. Cut for dance, gorgeous for everything else.",
    price: "£79.99",
    emoji: "💙",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const content = (
    <article className="group h-full bg-card border border-border/60 rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-500 flex flex-col">
      {/* Visual header with intentional blur treatment */}
      <div className="relative aspect-[5/4] overflow-hidden">
        {/* Soft blurred image backdrop — low-res thumbs become mood, not content */}
        {product.image ? (
          <div
            className="absolute inset-0 scale-125"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(28px) saturate(1.3)",
            }}
            aria-hidden="true"
          />
        ) : (
          <div
            className="absolute inset-0 bg-orange-gradient"
            aria-hidden="true"
          />
        )}
        {/* Warm overlay to unify cards and boost contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(25 100% 55% / 0.55), hsl(25 100% 40% / 0.55) 60%, hsl(22 95% 30% / 0.75))",
          }}
          aria-hidden="true"
        />
        {/* Radiant light for depth */}
        <div
          className="absolute inset-0 opacity-60 mix-blend-soft-light"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, hsl(40 100% 85% / 0.7), transparent 55%)",
          }}
        />

        {/* Emoji glyph */}
        <span
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-primary-foreground/20 backdrop-blur-md flex items-center justify-center text-xl border border-primary-foreground/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
          aria-hidden="true"
        >
          {product.emoji}
        </span>

        {/* Offer badge */}
        {product.offer && (
          <span className="absolute top-4 left-4 font-body text-[0.65rem] font-bold tracking-[0.18em] uppercase bg-primary-foreground text-primary px-3 py-1.5 rounded-full shadow-warm ring-1 ring-primary/10">
            {product.offer}
          </span>
        )}

        {/* Centred title on top of the mood backdrop */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="font-handwritten text-2xl text-primary-foreground/85 mb-1">
            {product.tagline}
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-primary-foreground font-semibold leading-tight tracking-tight text-balance">
            {product.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-7 flex-1 flex flex-col">
        <p className="font-body text-[0.95rem] text-muted-foreground leading-relaxed flex-1">
          {product.description}
        </p>
        <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
          {product.price ? (
            <span className="font-statement text-2xl text-transparent bg-gradient-to-br from-orange-600 to-orange-400 bg-clip-text">
              {product.price}
            </span>
          ) : (
            <span className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
              Verity's pick
            </span>
          )}
          {product.url && (
            <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold tracking-[0.18em] uppercase text-primary group-hover:gap-3 transition-all">
              Shop <span aria-hidden="true">→</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (product.url) {
    return (
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block h-full"
      >
        {content}
      </a>
    );
  }
  return <div className="h-full">{content}</div>;
};

const Shop = () => (
  <Layout>
    <title>Shop — Verity's Product Recommendations | Salsa & Flow</title>
    <meta
      name="description"
      content="A curated edit of the products Verity actually uses — from adaptogen drinks to dancewear. Some links are affiliate and include reader discounts."
    />

    {/* Hero */}
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute -top-32 -right-24 w-[32rem] h-[32rem] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-300)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container mx-auto max-w-3xl text-center">
        <span className="font-handwritten text-3xl text-primary block mb-2">
          a curated edit
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight mb-2">
          Verity's <span className="italic">Recommendations</span>
        </h1>
        <div className="h-[2px] w-14 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 mt-5 mb-7 mx-auto" />
        <p className="font-body text-[1.05rem] text-muted-foreground leading-relaxed">
          The small, beautiful things I actually reach for — from what I drink
          before a class, to what I wear on stage, to the ring I wear to
          remind myself I'm always coming home to me. Some links give you a
          reader discount. All are things I genuinely love.
        </p>
      </div>
    </section>

    {/* Product grid */}
    <section className="section-warm py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
        <p className="text-center font-body text-xs text-muted-foreground/80 mt-14 max-w-xl mx-auto leading-relaxed">
          Some links are affiliate or referral. You get the discount, I get a
          small thank-you — it helps keep this site running. Always recommended
          from real, personal use.
        </p>
      </div>
    </section>
  </Layout>
);

export default Shop;
