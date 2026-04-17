import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-dance.jpg";
import connectionImage from "@/assets/connection.jpg";
import classesImage from "@/assets/classes.jpg";
import eventsImage from "@/assets/events.jpg";
import workshopsImage from "@/assets/workshops.jpg";
import soulImage from "@/assets/soul-coaching.jpg";
import aboutImage from "@/assets/about-verity.jpg";

const images = [
  { src: heroImage, alt: "Verity dancing joyfully at a Salsa & Flow class", w: 1920, h: 1080 },
  { src: connectionImage, alt: "Partner dance connection", w: 800, h: 800 },
  { src: classesImage, alt: "Salsa & Flow class in the studio", w: 800, h: 800 },
  { src: eventsImage, alt: "Salsa social event under string lights", w: 800, h: 800 },
  { src: workshopsImage, alt: "Workshop demonstration", w: 800, h: 800 },
  { src: soulImage, alt: "Somatic embodied rest practice", w: 800, h: 800 },
  { src: aboutImage, alt: "Verity Iris portrait", w: 800, h: 1000 },
];

const Gallery = () => (
  <Layout>
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-300)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container mx-auto">
        <SectionHeading
          handwritten="moments of"
          title="Joy & Flow"
          subtitle="A glimpse into the Salsa & Flow world."
        />
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className="mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-warm group"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Gallery;
