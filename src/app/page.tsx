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
  // Außenansicht
  {
    src: "/images/exterior/01-fassade-hauptansicht.jpg",
    alt: "Weiße historische Fassade eines Fachwerkhauses mit grünen Fensterläden und dunklem Ziegeldach in malerischer Altstadtgasse",
    width: 1920,
    height: 1440,
    category: "Außenansicht"
  },

  // Innenhof / Außenbereich
  {
    src: "/images/courtyard/01-innenhof-eingang.jpg",
    alt: "Romantischer gepflasterter Innenhof mit grüner Holztür, Weinfässern und üppiger Begrünung",
    width: 1920,
    height: 1440,
    category: "Außenbereich"
  },
  {
    src: "/images/courtyard/02-innenhof-fachwerk.jpg",
    alt: "Historischer Innenhof mit rot-weißem Fachwerk, grüner Holztür, Weinfässern und vielen Topfpflanzen",
    width: 1920,
    height: 1440,
    category: "Außenbereich"
  },
  {
    src: "/images/courtyard/03-innenhof-sitzbereich.jpg",
    alt: "Gemütlicher Sitzbereich im Innenhof mit Holztisch, Gartenstühlen, Weinfass und mediterranen Pflanzen",
    width: 1920,
    height: 1440,
    category: "Außenbereich"
  },
  {
    src: "/images/courtyard/04-innenhof-panorama.jpg",
    alt: "Weitläufiger Innenhof-Panorama mit Sitzecke, Bepflanzung, historischem Sandsteingewölbe und Fachwerk-Gebäude",
    width: 1920,
    height: 1440,
    category: "Außenbereich"
  },
  {
    src: "/images/courtyard/05-treppe-innenhof.jpg",
    alt: "Rustikale Holztreppe mit dunklem Holzgeländer führt durch begrünten Innenhof zur Ferienwohnung",
    width: 1920,
    height: 1440,
    category: "Außenbereich"
  },

  // Wohnzimmer
  {
    src: "/images/living-room/01-wohnzimmer-hauptansicht.jpg",
    alt: "Elegantes Wohnzimmer mit olivgrünem Sofa, Designer-Kugelleuchte, Parkettboden und großen Fenstern mit grauen Vorhängen",
    width: 1920,
    height: 1440,
    category: "Wohnzimmer"
  },
  {
    src: "/images/living-room/02-wohnzimmer-alternativ.jpg",
    alt: "Wohnzimmer mit olivgrünem Sofa, antikem gelbem Schrank mit floralen Motiven, dunkler Akzentwand und Holzboden",
    width: 1920,
    height: 1440,
    category: "Wohnzimmer"
  },
  {
    src: "/images/living-room/03-kaminofen.jpg",
    alt: "Moderner rot-schwarzer Kaminofen mit brennendem Feuer auf dunklem Fliesenboden neben grauem Sofa",
    width: 1920,
    height: 1440,
    category: "Wohnzimmer"
  },

  // Küche
  {
    src: "/images/kitchen/01-kueche-essbereich.jpg",
    alt: "Offene moderne Küche mit weißen Schränken, Holzarbeitsplatte, rotem Smeg-Kühlschrank und großem Esstisch mit gepolsterten Stühlen",
    width: 1920,
    height: 1440,
    category: "Küche"
  },
  {
    src: "/images/kitchen/02-kueche-panorama.jpg",
    alt: "Großzügige Küche mit weißen Hängeschränken, gelben Fliesen, modernen Geräten und Essplatz mit Designer-Pendelleuchten",
    width: 1920,
    height: 1440,
    category: "Küche"
  },

  // Schlafzimmer
  {
    src: "/images/bedroom/01-schlafzimmer-doppelbett.jpg",
    alt: "Geräumiges Schlafzimmer mit Doppelbett, grauen Kissen, Holzschrank, sichtbaren Deckenbalken und zwei Fenstern mit grauen Vorhängen",
    width: 1920,
    height: 1440,
    category: "Schlafzimmer"
  },
  {
    src: "/images/bedroom/02-schlafzimmer-durchgang.jpg",
    alt: "Schlafzimmer mit Doppelbett, Kiefernschrank, Holzbalken an der Decke und Durchgang zum angrenzenden Raum",
    width: 1920,
    height: 1440,
    category: "Schlafzimmer"
  },
  {
    src: "/images/bedroom/03-schlafzimmer-weiss.jpg",
    alt: "Schlafzimmer mit weißem Holzbett, sichtbaren Deckenbalken, Holzboden und zwei Fenstern mit grauen Vorhängen",
    width: 1920,
    height: 1440,
    category: "Schlafzimmer"
  },
  {
    src: "/images/bedroom/04-schlafzimmer-detail.jpg",
    alt: "Schlafzimmerdetail mit antikem Holzschrank, Stehlampe, Fenster mit grauen Vorhängen und Parkettboden",
    width: 1920,
    height: 1440,
    category: "Schlafzimmer"
  },
  {
    src: "/images/bedroom/05-schlafzimmer-antikschrank.jpg",
    alt: "Gemütliches Schlafzimmer mit massivem antikem Holzschrank, brauner Akzentwand, Pendelleuchte und grauen Vorhängen",
    width: 1920,
    height: 1440,
    category: "Schlafzimmer"
  },

  // Badezimmer
  {
    src: "/images/bathroom/03-dusche-detail.jpg",
    alt: "Geräumige begehbare Dusche mit beigen Fliesen, Regendusche und Oberlicht für natürliches Licht",
    width: 1920,
    height: 1440,
    category: "Badezimmer"
  },
  {
    src: "/images/bathroom/04-badezimmer-komplett.jpg",
    alt: "Vollständige Badezimmeransicht mit Waschbecken, Wandtoilette, Handtuchheizkörper, terracotta Bodenfliesen und großem Fenster",
    width: 1920,
    height: 1440,
    category: "Badezimmer"
  },
  {
    src: "/images/bathroom/05-gaeste-wc.jpg",
    alt: "Kompaktes Gäste-WC mit weißem Waschbecken, Toilette, Holzboden und Fenster mit dezentem Sichtschutz",
    width: 1920,
    height: 1440,
    category: "Badezimmer"
  },

  // Flur/Eingangsbereich
  {
    src: "/images/hallway/02-flur-fachwerk.jpg",
    alt: "Langer Flur mit Holzboden, sichtbaren Fachwerkbalken an weißer Wand und antikem Holzmöbel",
    width: 1920,
    height: 1440,
    category: "Eingangsbereich"
  },
  {
    src: "/images/hallway/03-flur-eingang.jpg",
    alt: "Moderner heller Flur mit Holzboden, weißen Wänden, Holztüren und dekorativer Lampe auf Sideboard",
    width: 1920,
    height: 1440,
    category: "Eingangsbereich"
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