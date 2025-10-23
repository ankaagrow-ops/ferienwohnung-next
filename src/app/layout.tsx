import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ferienwohnung-hambach.de"
  ),
  title: "Ferienwohnung Hambach | Historisches Wohnen an der Weinstraße",
  description: "Charmante Ferienwohnung in Hambach Pfalz – Hambacher Schloss fußläufig. Holzofen, Fußbodenheizung, modern & gemütlich. Jetzt anfragen!",
  keywords: "Ferienwohnung Hambach, Hambacher Schloss, Pfalz Unterkunft, Weinstraße, Neustadt, Schloßstraße 18, historisches Wohnen",
  authors: [{ name: "Eva Dirion" }],
  openGraph: {
    title: "Ferienwohnung Hambach - Historisches Wohnen",
    description: "Charmante Ferienwohnung in Hambach Pfalz – Hambacher Schloss fußläufig. Holzofen, Fußbodenheizung, modern & gemütlich.",
    type: "website",
    locale: "de_DE",
    siteName: "Ferienwohnung Hambach",
    images: [
      {
        url: "/images/00-hero-hambacher-schloss.jpg",
        width: 1200,
        height: 630,
        alt: "Historisches Haus in Hambach an der Weinstraße",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferienwohnung Hambach - Historisches Wohnen",
    description: "Charmante Ferienwohnung in Hambach Pfalz – Hambacher Schloss fußläufig. Holzofen, Fußbodenheizung, modern & gemütlich.",
    images: ["/images/00-hero-hambacher-schloss.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ferienwohnung-hambach.de",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}