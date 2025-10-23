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
  // Hauptbilder
  {
    src: "/images/05-wohnzimmer.jpg",
    alt: "Gemütliches Wohnzimmer mit Holzofen in der Ferienwohnung Hambach",
    width: 800,
    height: 600,
    category: "Wohnzimmer"
  },
  {
    src: "/images/04-kueche-essbereich.jpg", 
    alt: "Moderne Küche mit Essbereich in der Ferienwohnung Hambach",
    width: 600,
    height: 400,
    category: "Küche"
  },
  {
    src: "/images/07-badezimmer-badewanne.jpg",
    alt: "Luxuriöses Badezimmer mit Fußbodenheizung in der Ferienwohnung Hambach",
    width: 600,
    height: 400,
    category: "Badezimmer"
  },
  {
    src: "/images/02-innenhof-terrasse.jpg",
    alt: "Gemütlicher Innenhof zum Entspannen in der Ferienwohnung Hambach",
    width: 800,
    height: 600,
    category: "Außenbereich"
  },
  {
    src: "/images/06-schlafzimmer-hauptraum.jpg",
    alt: "Stilvolles Schlafzimmer in der Ferienwohnung Hambach",
    width: 600,
    height: 400,
    category: "Schlafzimmer"
  },
  {
    src: "/images/03-aussenansicht-gebaeude.jpg",
    alt: "Historisches Gebäude in der Schloßstraße 18, Neustadt an der Weinstraße",
    width: 800,
    height: 600,
    category: "Außenansicht"
  },
  
  // Wohnzimmer Details
  {
    src: "/images/08-wohnzimmer-detail-1.jpg",
    alt: "Gemütliche Sitzecke mit Blick auf den Garten in der Ferienwohnung Hambach",
    width: 600,
    height: 400,
    category: "Wohnzimmer"
  },
  {
    src: "/images/09-wohnzimmer-detail-2.jpg",
    alt: "Historische Elemente und moderne Einrichtung im Wohnzimmer",
    width: 600,
    height: 400,
    category: "Wohnzimmer"
  },
  {
    src: "/images/10-wohnzimmer-detail-3.jpg",
    alt: "Gemütliche Atmosphäre mit Holzofen im Wohnzimmer",
    width: 600,
    height: 400,
    category: "Wohnzimmer"
  },
  {
    src: "/images/11-wohnzimmer-detail-4.jpg",
    alt: "Stilvolle Einrichtung mit Blick auf die Umgebung",
    width: 600,
    height: 400,
    category: "Wohnzimmer"
  },
  {
    src: "/images/12-wohnzimmer-detail-5.jpg",
    alt: "Entspannungsbereich im gemütlichen Wohnzimmer",
    width: 600,
    height: 400,
    category: "Wohnzimmer"
  },
  {
    src: "/images/13-wohnzimmer-detail-6.jpg",
    alt: "Premium Ausstattung im Wohnzimmer der Ferienwohnung",
    width: 600,
    height: 400,
    category: "Wohnzimmer"
  },
  
  // Küche Details
  {
    src: "/images/14-kueche-detail-1.jpg",
    alt: "Moderne Küchengeräte und Arbeitsplatte in der Ferienwohnung",
    width: 600,
    height: 400,
    category: "Küche"
  },
  {
    src: "/images/15-kueche-detail-2.jpg",
    alt: "Voll ausgestattete Küche mit allen notwendigen Geräten",
    width: 600,
    height: 400,
    category: "Küche"
  },
  {
    src: "/images/16-kueche-detail-3.jpg",
    alt: "Funktionale Kücheneinrichtung für den perfekten Aufenthalt",
    width: 600,
    height: 400,
    category: "Küche"
  },
  {
    src: "/images/17-kueche-detail-4.jpg",
    alt: "Moderne Küche mit Essbereich in der Ferienwohnung Hambach",
    width: 600,
    height: 400,
    category: "Küche"
  },
  {
    src: "/images/18-kueche-detail-5.jpg",
    alt: "Stilvolle Küchenausstattung mit Blick ins Grüne",
    width: 600,
    height: 400,
    category: "Küche"
  },
  
  // Badezimmer Details
  {
    src: "/images/19-badezimmer-detail-1.jpg",
    alt: "Luxuriöse Badewanne mit Blick ins Grüne in der Ferienwohnung",
    width: 600,
    height: 400,
    category: "Badezimmer"
  },
  {
    src: "/images/20-badezimmer-detail-2.jpg",
    alt: "Modernes Badezimmer mit Fußbodenheizung",
    width: 600,
    height: 400,
    category: "Badezimmer"
  },
  {
    src: "/images/21-badezimmer-detail-3.jpg",
    alt: "Entspannungsbereich im luxuriösen Badezimmer",
    width: 600,
    height: 400,
    category: "Badezimmer"
  },
  {
    src: "/images/22-badezimmer-detail-4.jpg",
    alt: "Premium Badezimmerausstattung in der Ferienwohnung",
    width: 600,
    height: 400,
    category: "Badezimmer"
  },
  {
    src: "/images/23-badezimmer-detail-5.jpg",
    alt: "Stilvolles Badezimmer mit modernen Elementen",
    width: 600,
    height: 400,
    category: "Badezimmer"
  },
  
  // Schlafzimmer Details
  {
    src: "/images/24-schlafzimmer-detail-1.jpg",
    alt: "Gemütliches Schlafzimmer mit historischen Elementen",
    width: 600,
    height: 400,
    category: "Schlafzimmer"
  },
  {
    src: "/images/25-schlafzimmer-detail-2.jpg",
    alt: "Entspannungsbereich im stilvollen Schlafzimmer",
    width: 600,
    height: 400,
    category: "Schlafzimmer"
  },
  {
    src: "/images/26-schlafzimmer-detail-3.jpg",
    alt: "Premium Schlafzimmerausstattung in der Ferienwohnung",
    width: 600,
    height: 400,
    category: "Schlafzimmer"
  },
  {
    src: "/images/27-schlafzimmer-detail-4.jpg",
    alt: "Gemütliches Schlafzimmer mit Blick auf die Umgebung",
    width: 600,
    height: 400,
    category: "Schlafzimmer"
  },
  
  // Außenbereich Details
  {
    src: "/images/28-innenhof-detail-1.jpg",
    alt: "Ruhiger Innenhof mit Sitzgelegenheiten zum Entspannen",
    width: 800,
    height: 600,
    category: "Außenbereich"
  },
  {
    src: "/images/29-innenhof-detail-2.jpg",
    alt: "Gemütlicher Außenbereich der Ferienwohnung Hambach",
    width: 800,
    height: 600,
    category: "Außenbereich"
  },
  {
    src: "/images/30-innenhof-detail-3.jpg",
    alt: "Entspannungsbereich im Innenhof der Ferienwohnung",
    width: 800,
    height: 600,
    category: "Außenbereich"
  },
  {
    src: "/images/31-innenhof-detail-4.jpg",
    alt: "Stilvoller Außenbereich mit historischem Charme",
    width: 800,
    height: 600,
    category: "Außenbereich"
  },
  
  // Umgebung
  {
    src: "/images/32-hambacher-schloss.jpg",
    alt: "Blick auf das Hambacher Schloss von der Ferienwohnung - Wiege der deutschen Demokratie",
    width: 800,
    height: 600,
    category: "Umgebung"
  },
  {
    src: "/images/33-weinberge.jpg",
    alt: "Weinberge der Pfalz in der Umgebung der Ferienwohnung Hambach",
    width: 800,
    height: 600,
    category: "Umgebung"
  },
  {
    src: "/images/34-pfaelzer-wald.jpg",
    alt: "Pfälzer Wald - direkt vor der Tür der Ferienwohnung",
    width: 800,
    height: 600,
    category: "Umgebung"
  },
  {
    src: "/images/35-deutsche-weinstrasse.jpg",
    alt: "Deutsche Weinstraße - Start für Weinwanderungen von der Ferienwohnung",
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