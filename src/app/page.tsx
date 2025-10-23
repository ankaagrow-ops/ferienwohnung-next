import { HeroSection } from "@/components/hero-section";
import { ValueProposition } from "@/components/value-proposition";
import { GallerySection } from "@/components/gallery-section";
import { FeaturesSection } from "@/components/features-section";
import { SurroundingsSection } from "@/components/surroundings-section";
import { LocationActivities } from "@/components/location-activities";
import { RestaurantsSection } from "@/components/restaurants-section";
import { PricingSection } from "@/components/pricing-section";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SchemaOrg } from "@/components/schema-org";

// Premium Content Data
const heroContent = {
  title: "Historisches Wohnen in der Wiege der Demokratie",
  subtitle: "Charmante Ferienwohnung in Hambach – Wo Geschichte auf Gemütlichkeit trifft",
  description: "Erlebt die Pfalz von ihrer schönsten Seite in unserer liebevoll eingerichteten Ferienwohnung.",
  cta: "Jetzt anfragen",
  secondaryCta: "Entdecken",
  image: "/images/00-hero-hambacher-schloss.jpg",
  features: [
    "Fußweg zum Hambacher Schloss",
    "Mitten in der Weinstraße", 
    "Premium Ausstattung"
  ]
};

const galleryImages = [
  {
    src: "/images/05-wohnzimmer.jpg",
    alt: "Gemütliches Wohnzimmer mit Holzofen",
    width: 800,
    height: 600,
    category: "Wohnzimmer"
  },
  {
    src: "/images/04-kueche-essbereich.jpg", 
    alt: "Moderne Küche mit Essbereich",
    width: 600,
    height: 400,
    category: "Küche"
  },
  {
    src: "/images/07-badezimmer-badewanne.jpg",
    alt: "Luxuriöses Badezimmer mit Fußbodenheizung",
    width: 600,
    height: 400,
    category: "Badezimmer"
  },
  {
    src: "/images/02-innenhof-terrasse.jpg",
    alt: "Gemütlicher Innenhof zum Entspannen",
    width: 800,
    height: 600,
    category: "Außenbereich"
  },
  {
    src: "/images/06-schlafzimmer-hauptraum.jpg",
    alt: "Stilvolles Schlafzimmer",
    width: 600,
    height: 400,
    category: "Schlafzimmer"
  },
  {
    src: "/images/03-aussenansicht-gebaeude.jpg",
    alt: "Historisches Gebäude in der Schloßstraße",
    width: 800,
    height: 600,
    category: "Außenansicht"
  },
  {
    src: "/images/08-wohnzimmer-detail.jpg",
    alt: "Gemütliche Sitzecke mit Blick auf den Garten",
    width: 600,
    height: 400,
    category: "Wohnzimmer"
  },
  {
    src: "/images/09-kueche-detail.jpg",
    alt: "Moderne Küchengeräte und Arbeitsplatte",
    width: 600,
    height: 400,
    category: "Küche"
  },
  {
    src: "/images/10-badezimmer-detail.jpg",
    alt: "Luxuriöse Badewanne mit Blick ins Grüne",
    width: 600,
    height: 400,
    category: "Badezimmer"
  },
  {
    src: "/images/11-schlafzimmer-detail.jpg",
    alt: "Gemütliches Schlafzimmer mit historischen Elementen",
    width: 600,
    height: 400,
    category: "Schlafzimmer"
  },
  {
    src: "/images/12-innenhof-detail.jpg",
    alt: "Ruhiger Innenhof mit Sitzgelegenheiten",
    width: 800,
    height: 600,
    category: "Außenbereich"
  },
  {
    src: "/images/13-hambacher-schloss.jpg",
    alt: "Blick auf das Hambacher Schloss von der Ferienwohnung",
    width: 800,
    height: 600,
    category: "Umgebung"
  },
  {
    src: "/images/14-weinberge.jpg",
    alt: "Weinberge der Pfalz in der Umgebung",
    width: 800,
    height: 600,
    category: "Umgebung"
  },
  {
    src: "/images/15-pfaelzer-wald.jpg",
    alt: "Pfälzer Wald - direkt vor der Tür",
    width: 800,
    height: 600,
    category: "Umgebung"
  },
  {
    src: "/images/16-deutsche-weinstrasse.jpg",
    alt: "Deutsche Weinstraße - Start für Weinwanderungen",
    width: 800,
    height: 600,
    category: "Umgebung"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SchemaOrg />
      <Navigation />
      
      <main>
        <HeroSection hero={heroContent} />
        <ValueProposition />
        <GallerySection images={galleryImages} />
        <FeaturesSection />
        <SurroundingsSection />
        <LocationActivities />
        <RestaurantsSection />
        <PricingSection />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
}