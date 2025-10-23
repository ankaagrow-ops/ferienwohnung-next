export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Ferienwohnung Hambach",
    "description": "Charmante Ferienwohnung in Hambach Pfalz – Hambacher Schloss fußläufig. Holzofen, Fußbodenheizung, modern & gemütlich.",
    "url": "https://ferienwohnung-hambach.de",
    "logo": "https://ferienwohnung-hambach.de/logo.png",
    "image": [
      "https://ferienwohnung-hambach.de/images/00-hero-hambacher-schloss.jpg",
      "https://ferienwohnung-hambach.de/images/05-wohnzimmer.jpg",
      "https://ferienwohnung-hambach.de/images/04-kueche-essbereich.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Schloßstraße 18",
      "addressLocality": "Neustadt an der Weinstraße",
      "addressRegion": "Rheinland-Pfalz",
      "postalCode": "67434",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.3544",
      "longitude": "8.1356"
    },
    "telephone": "+49-172-8049269",
    "email": "eva.dirion@gmx.net",
    "priceRange": "€€",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Pets Allowed",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Kitchen",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Washing Machine",
        "value": true
      }
    ],
    "checkinTime": "15:00",
    "checkoutTime": "10:00",
    "petsAllowed": true,
    "smokingAllowed": false,
    "numberOfRooms": 1,
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 6,
      "minValue": 1
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.booking.com/hotel/de/ferienwohnung-hambach.html"
    ],
    "hasMap": "https://www.google.com/maps/place/Schloßstraße+18,+67434+Neustadt+an+der+Weinstraße",
    "openingHours": "Mo-Su 00:00-23:59",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
