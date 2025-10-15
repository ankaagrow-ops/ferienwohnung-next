"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/actions";
import type { ContactFormState } from "@/lib/actions";

export function ContactSection() {
  const [state, setState] = useState<ContactFormState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(null, formData);

    setState(result);
    setIsSubmitting(false);

    if (result.success) {
      event.currentTarget.reset();
    }
  }

  return (
    <section
      id="kontakt"
      className="bg-gradient-to-r from-rose-700 via-rose-600 to-rose-800"
      aria-labelledby="section-contact"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 text-white sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-xl space-y-4">
          <h2 id="section-contact" className="text-3xl font-bold sm:text-4xl">
            Bereit für eure Auszeit in Hambach?
          </h2>
          <p className="text-rose-100">
            Schick uns deine Anfrage – wir melden uns mit Verfügbarkeit, Preisen ab 189 € pro Nacht
            und persönlichen Tipps.
          </p>
          <ul className="space-y-2 text-sm text-rose-50">
            <li>✓ Direkter Kontakt zu Eva &amp; Jon</li>
            <li>✓ Transparente Preise ohne versteckte Gebühren</li>
            <li>✓ Hunde willkommen (10 € pro Tag und Hund)</li>
          </ul>
          <p className="pt-2 text-sm text-rose-100">
            Telefon: <strong>0172 804 9269</strong> · E-Mail: <strong>eva.dirion@gmx.net</strong>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 rounded-3xl bg-white/15 p-6 shadow-xl backdrop-blur"
        >
          {state?.success && (
            <div className="rounded-xl bg-green-500/20 border border-green-400/30 p-4 text-sm text-white">
              ✓ {state.message}
            </div>
          )}
          {state?.success === false && (
            <div className="rounded-xl bg-red-500/20 border border-red-400/30 p-4 text-sm text-white">
              ✗ {state.message}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-white">
              Name
              <input
                type="text"
                name="name"
                required
                className="mt-1 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-rose-100 focus:border-white focus:outline-none"
                placeholder="Max Mustermann"
              />
              {state?.errors?.name && (
                <span className="mt-1 text-xs text-red-300">{state.errors.name[0]}</span>
              )}
            </label>
            <label className="flex flex-col text-sm font-medium text-white">
              E-Mail
              <input
                type="email"
                name="email"
                required
                className="mt-1 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-rose-100 focus:border-white focus:outline-none"
                placeholder="name@mail.de"
              />
              {state?.errors?.email && (
                <span className="mt-1 text-xs text-red-300">{state.errors.email[0]}</span>
              )}
            </label>
          </div>
          <label className="flex flex-col text-sm font-medium text-white">
            Wunschzeitraum
            <input
              type="text"
              name="dates"
              required
              className="mt-1 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-rose-100 focus:border-white focus:outline-none"
              placeholder="z. B. 12.–16. September"
            />
            {state?.errors?.dates && (
              <span className="mt-1 text-xs text-red-300">{state.errors.dates[0]}</span>
            )}
          </label>
          <label className="flex flex-col text-sm font-medium text-white">
            Nachricht
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-rose-100 focus:border-white focus:outline-none"
              placeholder="Wie können wir euren Aufenthalt besonders machen?"
            />
            {state?.errors?.message && (
              <span className="mt-1 text-xs text-red-300">{state.errors.message[0]}</span>
            )}
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-rose-600 shadow-lg shadow-rose-900/30 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
          </button>
          <p className="text-xs text-rose-100/80">
            Wir melden uns in der Regel innerhalb von 24 Stunden mit allen Details zu Aufenthalt und
            Buchung.
          </p>
        </form>
      </div>
    </section>
  );
}
