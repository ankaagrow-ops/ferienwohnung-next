export type HeroContent = {
  title: string;
  subtitle: string;
  description: string;
  ctas: Array<{ label: string; href: string; flavor?: "primary" | "secondary" }>;
  image: {
    src: string;
    alt: string;
  };
};

export type Highlight = {
  title: string;
  description: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
};

export type LandingContent = {
  hero: HeroContent;
  highlights: Highlight[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
};

/**
 * Simulates a CMS fetch. Runs on the server (SSG with revalidation).
 */
export async function getLandingContent(): Promise<LandingContent> {
  // In production this function would call a headless CMS or database.
  // Keeping the data co-located on the server gives us full SSR/SSG benefits.
  return {
    hero: {
      title: "Willkommen in unserem Zuhause",
      subtitle: "Eine liebevoll eingerichtete Ferienwohnung mitten in Hambach",
      description:
        "Unser 120 m² Altstadthaus mit zwei Schlafzimmern, gemütlichem Holzofen und sonnigem Innenhof ist perfekt für euren Aufenthalt in der Pfalz. Hier könnt ihr entspannen, die Region erkunden und euch wie zuhause fühlen.",
      ctas: [
        {
          label: "Anfrage senden",
          href: "#kontakt",
          flavor: "primary",
        },
        {
          label: "Bilder anschauen",
          href: "#galerie",
          flavor: "secondary",
        },
      ],
      image: {
        src: "/images/00-hero-hambacher-schloss.jpg",
        alt: "Hambacher Schloss über den Weinbergen der Pfalz",
      },
    },
    highlights: [
      {
        title: "Mitten im Herzen von Hambach",
        description:
          "Unsere Ferienwohnung liegt direkt an der Weinstraße. Weinberge, gemütliche Cafés und das Hambacher Schloss sind nur wenige Schritte entfernt.",
      },
      {
        title: "Mit Liebe zum Detail eingerichtet",
        description:
          "Holzofen für gemütliche Abende, eine maßgeschneiderte Küche und hochwertige Betten. Wir haben alles so gestaltet, wie wir es selbst mögen.",
      },
      {
        title: "Von Gästen geliebt",
        description:
          "Unsere Gäste schätzen besonders die persönliche Betreuung und unsere Tipps für die schönsten Ecken der Pfalz.",
      },
    ],
    gallery: [
      {
        src: "/images/04-kueche-essbereich.jpg",
        alt: "Offene Wohnküche mit großem Esstisch und Naturmaterialien",
        label: "Wohnküche & Esstafel",
      },
      {
        src: "/images/05-wohnzimmer.jpg",
        alt: "Wohnzimmer mit Holzofen und gemütlicher Sitzecke",
        label: "Wohnzimmer mit Holzofen",
      },
      {
        src: "/images/06-schlafzimmer-hauptraum.jpg",
        alt: "Helles Schlafzimmer mit Kingsize-Bett und historischen Details",
        label: "Hauptschlafzimmer",
      },
      {
        src: "/images/07-badezimmer-badewanne.jpg",
        alt: "Modernes Bad mit Regendusche, Badewanne und Fußbodenheizung",
        label: "Bad mit Fußbodenheizung",
      },
      {
        src: "/images/02-innenhof-terrasse.jpg",
        alt: "Privater Innenhof mit Sitzlounge, viel Grün und Grill",
        label: "Innenhof & Lounge",
      },
      {
        src: "/images/03-aussenansicht-gebaeude.jpg",
        alt: "Außenansicht des denkmalgeschützten Hauses in der Hambacher Schloßstraße",
        label: "Haus in der Schloßstraße",
      },
    ],
    testimonials: [
      {
        id: "anne-2024",
        name: "Anne & Tobias",
        location: "Münster",
        rating: 5,
        text: "Eva und Jon haben eine wunderschöne Ferienwohnung geschaffen. Der Innenhof ist unser Lieblingsplatz geworden und ihre Tipps für die Region waren perfekt.",
      },
      {
        id: "julia-2024",
        name: "Julia",
        location: "Stuttgart",
        rating: 5,
        text: "Wir haben uns von der ersten Minute an wohlgefühlt. Die persönliche Betreuung und die kleinen Details machen den Unterschied. Danke für alles!",
      },
      {
        id: "karl-2023",
        name: "Karl & Verena",
        location: "Hamburg",
        rating: 5,
        text: "Perfekt für unser Weinwochenende! Die Küche ist wunderbar ausgestattet und die Betten so bequem, dass wir gar nicht mehr weg wollten.",
      },
    ],
  };
}
