import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-dance.jpg";
import connectionImage from "@/assets/connection.jpg";
import classesImage from "@/assets/classes.jpg";
import eventsImage from "@/assets/events.jpg";
import workshopsImage from "@/assets/workshops.jpg";
import soulImage from "@/assets/soul-coaching.jpg";
import aboutImage from "@/assets/about-verity.jpg";

import veritySmile from "@/assets/gallery/verity-smile.jpg";
import verityHair from "@/assets/gallery/verity-hair.jpg";
import verityArmsOut from "@/assets/gallery/verity-arms-out.jpg";
import verityArmsUp from "@/assets/gallery/verity-arms-up.jpg";
import verityMotion from "@/assets/gallery/verity-motion.jpg";
import classJoy from "@/assets/gallery/class-verity-joy.jpg";
import classGroup from "@/assets/gallery/class-group.jpg";
import partnerSocial from "@/assets/gallery/partner-social.jpg";
import roomFull from "@/assets/gallery/room-full.jpg";
import groupLaughing from "@/assets/gallery/group-laughing.jpg";
import verityTeaching from "@/assets/gallery/verity-teaching.jpg";
import portraitGreen from "@/assets/gallery/portrait-green.jpg";
import eventStringlights from "@/assets/gallery/event-stringlights.jpg";
import socialPartner from "@/assets/gallery/social-partner.jpg";
import socialConnection from "@/assets/gallery/social-connection.jpg";

const images = [
  { src: heroImage, alt: "Verity dancing joyfully at a Salsa & Flow class" },
  { src: verityArmsUp, alt: "Verity mid-dance, arms raised" },
  { src: partnerSocial, alt: "A partner dance moment at a Salsa & Flirt social" },
  { src: classGroup, alt: "Salsa & Flow class practicing in the studio" },
  { src: verityHair, alt: "Verity with hair flowing mid-turn" },
  { src: connectionImage, alt: "Two dancers in a tender partner connection" },
  { src: groupLaughing, alt: "Students laughing together after class" },
  { src: verityMotion, alt: "Verity in motion, hair catching the light" },
  { src: eventStringlights, alt: "Salsa & Flirt event under warm string lights" },
  { src: roomFull, alt: "A full studio during a class" },
  { src: veritySmile, alt: "Verity smiling between takes" },
  { src: classJoy, alt: "Verity dancing with her eyes closed in pure joy" },
  { src: verityTeaching, alt: "Verity teaching among a circle of students" },
  { src: socialPartner, alt: "Partner dance at a Salsa & Flirt social" },
  { src: workshopsImage, alt: "Workshop demonstration" },
  { src: verityArmsOut, alt: "Verity with arms out, mid-step" },
  { src: socialConnection, alt: "Hands meeting on the dance floor" },
  { src: eventsImage, alt: "Salsa social dancing under string lights" },
  { src: soulImage, alt: "Somatic embodied rest practice" },
  { src: portraitGreen, alt: "Student portrait in green" },
  { src: classesImage, alt: "Salsa class practicing together" },
  { src: aboutImage, alt: "Verity Iris portrait" },
];

const Gallery = () => (
  <Layout>
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-300)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[50%] -left-24 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-400)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative container mx-auto">
        <SectionHeading
          handwritten="moments of"
          title="Joy & Flow"
          subtitle="A glimpse into the Salsa & Flow world — from the studio, to socials, to the seafront."
        />
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className="mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-warm group bg-warm-peach"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Gallery;
