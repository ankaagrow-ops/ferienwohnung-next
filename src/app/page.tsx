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

// Premium Content Data - wird jetzt über Übersetzungen geladen
const heroContent = {
  image: "/images/exterior/01-fassade-hauptansicht.jpg",
  features: [
    "Fußweg zum Hambacher Schloss",
    "Mitten in der Weinstraße",
    "Premium Ausstattung"
  ]
};

const galleryImages = [
  // Außenbereich & Umgebung
  {
    src: "/images/courtyard/03-innenhof-sitzbereich.jpg",
    alt: "Gemütlicher Sitzbereich im Innenhof mit Holztisch, Gartenstühlen, Weinfass und mediterranen Pflanzen",
    width: 1920,
    height: 1440,
    category: "Außenbereich"
  },
  {
    src: "/images/surroundings/02-weinberge-pfalz.jpg",
    alt: "Malerische Weinberge der Pfalz in direkter Umgebung der Ferienwohnung",
    width: 1920,
    height: 1280,
    category: "Umgebung"
  },

  // Innenräume
  {
    src: "/images/living-room/01-wohnzimmer-hauptansicht.jpg",
    alt: "Elegantes Wohnzimmer mit olivgrünem Sofa, Designer-Kugelleuchte, Parkettboden und großen Fenstern",
    width: 1920,
    height: 1440,
    category: "Wohnzimmer"
  },
  {
    src: "/images/kitchen/01-kueche-essbereich.jpg",
    alt: "Offene moderne Küche mit weißen Schränken, Holzarbeitsplatte, rotem Smeg-Kühlschrank und großem Esstisch",
    width: 1920,
    height: 1440,
    category: "Küche"
  },
  {
    src: "/images/bedroom/01-schlafzimmer-doppelbett.jpg",
    alt: "Geräumiges Schlafzimmer mit Doppelbett, sichtbaren Deckenbalken und zwei Fenstern",
    width: 1920,
    height: 1440,
    category: "Schlafzimmer"
  },
  {
    src: "/images/bathroom/04-badezimmer-komplett.jpg",
    alt: "Modernes Badezimmer mit Waschbecken, Wandtoilette und großem Fenster",
    width: 1920,
    height: 1440,
    category: "Badezimmer"
  },

  // Weitere Highlights
  {
    src: "/images/surroundings/01-pfaelzer-wald-landschaft.jpg",
    alt: "Idyllischer Pfälzer Wald – perfekt für Wanderungen direkt von der Haustür",
    width: 1920,
    height: 1280,
    category: "Umgebung"
  },
  {
    src: "/images/living-room/03-kaminofen.jpg",
    alt: "Gemütlicher Kaminofen mit brennendem Feuer für romantische Abende",
    width: 1920,
    height: 1440,
    category: "Wohnzimmer"
  },
  {
    src: "/images/courtyard/02-innenhof-fachwerk.jpg",
    alt: "Historischer Innenhof mit rot-weißem Fachwerk und üppiger Bepflanzung",
    width: 1920,
    height: 1440,
    category: "Außenbereich"
  },
  {
    src: "/images/surroundings/03-deutsche-weinstrasse.jpg",
    alt: "Deutsche Weinstraße – Start für unvergessliche Weinwanderungen",
    width: 1920,
    height: 1280,
    category: "Umgebung"
  },
  {
    src: "/images/bedroom/05-schlafzimmer-antikschrank.jpg",
    alt: "Gemütliches Schlafzimmer mit antikem Holzschrank und warmer Atmosphäre",
    width: 1920,
    height: 1440,
    category: "Schlafzimmer"
  },
  {
    src: "/images/hallway/02-flur-fachwerk.jpg",
    alt: "Authentischer Flur mit sichtbaren Fachwerkbalken und historischem Charme",
    width: 1920,
    height: 1440,
    category: "Details"
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