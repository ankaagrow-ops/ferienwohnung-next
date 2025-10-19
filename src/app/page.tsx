import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { GallerySection } from "@/components/gallery-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BookingSection } from "@/components/booking-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { getLandingContent } from "@/lib/landing-content";

export const revalidate = 3600;

export default async function HomePage() {
  const content = await getLandingContent();

  return (
    <div className="bg-white text-slate-900">
      <Navigation />
      <main className="flex flex-col pt-16">
        <HeroSection hero={content.hero} />
        <HighlightsSection highlights={content.highlights} />
        <GallerySection images={content.gallery} />
        <TestimonialsSection testimonials={content.testimonials} />
        <BookingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
