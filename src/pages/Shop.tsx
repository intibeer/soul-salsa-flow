import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

interface Product {
  title: string;
  description: string;
  offer?: string;
  price?: string;
  url?: string;
  image?: string;
  emoji?: string;
}

const products: Product[] = [
  {
    title: "Amphi Botanicals",
    description:
      "Adaptogen mushroom drinks I sip on to stay grounded, focused, and energised through busy teaching weeks.",
    offer: "15% off with VERITYCOOPER",
    url: "https://amphibotanicals.com/?ref=VERITYCOOPER",
    image:
      "https://ugc.production.linktr.ee/4a2603f2-f2d6-4eaa-be43-f7a5ae70eabb_Minimalist-Floral-Hello-Spring-Facebook-Post.png?io=true&size=thumbnail-stack_v1_0",
  },
  {
    title: "Ouroboros Ring",
    description:
      "My self-engagement ring by Rebekah Ann Jewellery — a daily reminder to choose myself first.",
    image:
      "https://ugc.production.linktr.ee/88c5d712-abaf-4b62-b374-a3061f48a3c1_3ff5b64623fc9d9ae82bb0012ba1ebfb.jpeg?io=true&size=thumbnail-stack_v1_0",
    url: "https://www.instagram.com/dancingishealing_",
  },
  {
    title: "Gousto",
    description:
      "Recipe boxes that keep dinners simple on dance-night-heavy weeks. Real ingredients, proper flavour.",
    offer: "65% off your first box",
    url: "https://www.gousto.co.uk/raf/?promo_code=VERIT42302179",
    image:
      "https://ugc.production.linktr.ee/a6cffb7d-12ba-4229-9506-70ba8d40c721_fvvoivoc.jpeg?io=true&size=thumbnail-stack_v1_0",
  },
  {
    title: "Wild",
    description:
      "Refillable natural deodorant and body care — kind to skin, kind to the planet.",
    offer: "Referral discount",
    url: "https://mention-me.com/m/ol/pp7mx-verity-cooper",
    emoji: "🌿",
  },
  {
    title: "Geowear — Brown Jumpsuit",
    description:
      "The jumpsuit I live in between class and coffee. Flattering, stretchy, and built to move.",
    price: "£79.99",
    emoji: "👗",
  },
  {
    title: "Geowear — Blue Dancewear Jumpsuit",
    description:
      "My go-to for photoshoots and socials. Cut for dance, gorgeous for everything else.",
    price: "£79.99",
    emoji: "💃",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const content = (
    <div className="group relative h-full bg-card border border-border/60 rounded-2xl p-7 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-500 flex flex-col">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-orange-100 to-warm-peach">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl">
            {product.emoji || "✦"}
          </div>
        )}
        {product.offer && (
          <span className="absolute top-3 left-3 font-body text-[0.65rem] font-bold tracking-[0.18em] uppercase bg-orange-gradient text-primary-foreground px-3 py-1.5 rounded-full shadow-warm">
            {product.offer}
          </span>
        )}
      </div>
      <h3 className="font-display text-xl font-semibold mb-2 tracking-tight leading-tight">
        {product.title}
      </h3>
      <p className="font-body text-[0.95rem] text-muted-foreground leading-relaxed flex-1">
        {product.description}
      </p>
      <div className="mt-5 pt-5 border-t border-border/60 flex items-center justify-between">
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
