"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Wie viele Personen können in der Wohnung übernachten?",
    answer:
      "Die Ferienwohnung bietet Platz für bis zu 6 Gäste. Es gibt zwei Schlafzimmer mit komfortablen Boxspringbetten sowie eine Schlafcouch im Wohnzimmer.",
  },
  {
    question: "Ist die Ferienwohnung haustierfreundlich?",
    answer:
      "Ja! Hunde sind bei uns herzlich willkommen. Wir berechnen 10 € pro Hund und Tag. Bitte gib bei der Buchung Bescheid, dass du mit Hund anreist.",
  },
  {
    question: "Gibt es Parkmöglichkeiten?",
    answer:
      "Ja, direkt vor dem Haus gibt es kostenlose öffentliche Parkplätze. Hambach ist verkehrsberuhigt, sodass in der Regel immer ein Platz verfügbar ist.",
  },
  {
    question: "Wie weit ist es zum Hambacher Schloss?",
    answer:
      "Das Hambacher Schloss ist nur etwa 10-15 Gehminuten entfernt. Der Aufstieg durch die Weinberge ist wunderschön und lohnt sich besonders zum Sonnenuntergang.",
  },
  {
    question: "Welche Ausstattung hat die Küche?",
    answer:
      "Die Küche ist voll ausgestattet mit Geschirrspüler, Backofen, Ceranfeld, Kühlschrank mit Gefrierfach, Kaffeemaschine, Wasserkocher und allem nötigen Geschirr. Perfekt für Selbstversorger!",
  },
  {
    question: "Gibt es WLAN?",
    answer:
      "Ja, schnelles WLAN ist selbstverständlich kostenlos verfügbar. Die Zugangsdaten findest du in der Willkommensmappe in der Wohnung.",
  },
  {
    question: "Was sind die Check-in und Check-out Zeiten?",
    answer:
      "Check-in ist ab 15:00 Uhr möglich, Check-out bis 10:00 Uhr. Flexible Zeiten können nach Absprache oft arrangiert werden.",
  },
  {
    question: "Gibt es eine Mindestaufenthaltsdauer?",
    answer:
      "In der Hauptsaison (Mai-Oktober) beträgt die Mindestaufenthaltsdauer 3 Nächte, in der Nebensaison 2 Nächte. Für längere Aufenthalte gewähren wir gerne Rabatte.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Hier findest du Antworten auf die wichtigsten Fragen rund um deinen Aufenthalt
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-vineyard-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-wine-700 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="px-6 pb-4 text-slate-600 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Weitere Fragen?{" "}
            <a href="#kontakt" className="text-wine-700 font-semibold hover:text-wine-800">
              Kontaktiere uns direkt
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
