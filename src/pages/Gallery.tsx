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
  { src: heroImage, alt: "Dancing on Brighton seafront", w: 1920, h: 1080 },
  { src: connectionImage, alt: "Partner dance connection", w: 800, h: 800 },
  { src: classesImage, alt: "Salsa class in studio", w: 800, h: 800 },
  { src: eventsImage, alt: "Salsa social event", w: 800, h: 800 },
  { src: workshopsImage, alt: "Mindful movement workshop", w: 800, h: 800 },
  { src: soulImage, alt: "1:1 coaching session", w: 800, h: 800 },
  { src: aboutImage, alt: "Verity dancing on the beach", w: 800, h: 1000 },
];

const Gallery = () => (
  <Layout>
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <SectionHeading handwritten="moments of" title="Joy & Flow" subtitle="A glimpse into the Salsa & Flow world." />
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="mb-4 break-inside-avoid">
              <img
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                className="w-full rounded-sm hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Gallery;
