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
      title: "Ferienwohnung Unterm Schloß",
      subtitle: "Historisches Ambiente trifft modernen Komfort in Hambach",
      description:
        "120 m² Altstadthaus, zwei Schlafzimmer, Holzofen, sonniger Innenhof. Ideal für Familien, Paare und Freunde, die die Pfalz mit allen Sinnen erleben möchten.",
      ctas: [
        {
          label: "Verfügbarkeit prüfen",
          href: "#kontakt",
          flavor: "primary",
        },
        {
          label: "Weitere Eindrücke",
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
        title: "Premium-Lage",
        description:
          "Direkt an der Weinstraße gelegen – Weinberge, Cafés und das Hambacher Schloss in fußläufiger Entfernung.",
      },
      {
        title: "Liebevoll eingerichtet",
        description:
          "Holzofen, maßgeschneiderte Schreinerküche, Naturmaterialien und hochwertige Boxspringbetten für erholsame Nächte.",
      },
      {
        title: "Beste Bewertungen",
        description:
          "9,7/10 auf Booking.com – besonders gelobt werden Ausstattung, Sauberkeit und persönliche Gastgebertipps.",
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
        text: "Wunderschöne Ferienwohnung mit viel Liebe zum Detail. Der Innenhof ist abends ein Traum und die Region bietet unendliche Ausflugsmöglichkeiten.",
      },
      {
        id: "julia-2024",
        name: "Julia",
        location: "Stuttgart",
        rating: 5,
        text: "Wir haben uns wie zuhause gefühlt. Besonders die kleinen Aufmerksamkeiten der Gastgeber und die Winzer-Empfehlungen waren Gold wert.",
      },
      {
        id: "karl-2023",
        name: "Karl & Verena",
        location: "Hamburg",
        rating: 5,
        text: "Perfekte Basis für ein verlängertes Weinwochenende. Die Küche ist top ausgestattet, die Betten super bequem – wir kommen wieder!",
      },
    ],
  };
}
