import { Metadata } from "next";
import { getLandingContent } from "@/lib/landing-content";
import { HeroSection } from "@/components/hero-section";
import { GallerySection } from "@/components/gallery-section";
import { HighlightsSection } from "@/components/highlights-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export const revalidate = 3600; // re-generate every hour

export const metadata: Metadata = {
  title: "Ferienwohnung Unterm Schloß · Hambach an der Weinstraße",
  description:
    "Historisches Altstadthaus mit 120 m², Holzofen und Innenhof – Traumurlaub in Hambach. Jetzt Verfügbarkeit prüfen!",
  openGraph: {
    title: "Ferienwohnung Unterm Schloß",
    description:
      "Ferienidylle in Hambach mit Top-Bewertungen, liebevoller Ausstattung und persönlichem Gastgeber-Service.",
    images: [
      {
        url: "/images/00-hero-hambacher-schloss.jpg",
        width: 1800,
        height: 1200,
        alt: "Ferienwohnung Unterm Schloß – Blick auf Hambacher Schloss",
      },
    ],
  },
};

export default async function HomePage() {
  const content = await getLandingContent();

  return (
    <>
      <main className="bg-white text-slate-900">
        <HeroSection hero={content.hero} />
        <GallerySection images={content.gallery} />
        <HighlightsSection highlights={content.highlights} />
        <TestimonialsSection testimonials={content.testimonials} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
