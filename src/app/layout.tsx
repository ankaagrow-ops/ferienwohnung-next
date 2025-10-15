import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ferienwohnung-unterm-schloss.de"
  ),
  title: "Ferienwohnung Unterm Schloß",
  description:
    "Erlebe die Pfalz in einer großzügigen Ferienwohnung mitten in Hambach – jetzt Aufenthalt planen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
