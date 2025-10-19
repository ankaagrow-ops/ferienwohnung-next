import { BookingForm } from "./booking-form";
import { getBlockedDatesFromICal, getMockBlockedDates } from "@/lib/ical-parser";

export async function BookingSection() {
  // Try to fetch blocked dates from Booking.com iCal feed
  // If ICAL_URL is not set, use mock data for development
  const icalUrl = process.env.BOOKING_COM_ICAL_URL;

  let blockedDates: string[] = [];

  if (icalUrl) {
    blockedDates = await getBlockedDatesFromICal(icalUrl);
    console.log(`Loaded ${blockedDates.length} blocked dates from Booking.com`);
  } else {
    // Use mock data for development
    blockedDates = getMockBlockedDates();
    console.log("Using mock blocked dates (set BOOKING_COM_ICAL_URL environment variable for real data)");
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Jetzt buchen & sparen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Buchen Sie direkt über unsere Website und profitieren Sie von besseren Konditionen.
            Kein Aufpreis, keine versteckten Gebühren.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Direktbuchung = Beste Preise
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Keine Buchungsgebühren</h3>
            <p className="text-sm text-gray-600">Sparen Sie die Provisionen anderer Plattformen</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Direkter Kontakt</h3>
            <p className="text-sm text-gray-600">Persönliche Betreuung von Anfang bis Ende</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Schnelle Bestätigung</h3>
            <p className="text-sm text-gray-600">Antwort innerhalb von 24 Stunden</p>
          </div>
        </div>

        {/* Booking Form */}
        <BookingForm blockedDates={blockedDates} />

        {/* Info Box */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
          <h4 className="font-semibold text-lg mb-2">So funktioniert&apos;s:</h4>
          <ol className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
              <span>Wählen Sie Ihre Wunschdaten im Kalender aus</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
              <span>Füllen Sie das Formular mit Ihren Kontaktdaten aus</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
              <span>Wir prüfen die Verfügbarkeit und senden Ihnen innerhalb von 24h ein Angebot</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
              <span>Nach Ihrer Bestätigung ist die Buchung verbindlich</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
