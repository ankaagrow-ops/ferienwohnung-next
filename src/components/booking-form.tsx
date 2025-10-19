"use client";

import { useState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { BookingCalendar } from "./booking-calendar";
import { submitBookingRequest, type BookingFormState } from "@/lib/actions";

type BookingFormProps = {
  blockedDates: string[];
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`
        w-full py-4 px-6 rounded-lg font-semibold text-white
        transition-all duration-200 transform
        ${
          pending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95"
        }
      `}
    >
      {pending ? "Wird gesendet..." : "Buchungsanfrage senden"}
    </button>
  );
}

export function BookingForm({ blockedDates }: BookingFormProps) {
  const [state, formAction] = useFormState<BookingFormState | null, FormData>(
    submitBookingRequest,
    null
  );

  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");

  const handleDateSelect = (checkIn: string, checkOut: string) => {
    setCheckInDate(checkIn);
    setCheckOutDate(checkOut);
  };

  // Reset form on success
  useEffect(() => {
    if (state?.success) {
      setCheckInDate("");
      setCheckOutDate("");
    }
  }, [state?.success]);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calendar */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Verfügbarkeit prüfen</h3>
        <BookingCalendar blockedDates={blockedDates} onDateSelect={handleDateSelect} />
      </div>

      {/* Booking Form */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Buchungsanfrage</h3>

        <form action={formAction} className="space-y-6">
          {/* Check-in and Check-out (hidden fields, set by calendar) */}
          <input type="hidden" name="checkIn" value={checkInDate} />
          <input type="hidden" name="checkOut" value={checkOutDate} />

          {/* Date Display */}
          <div className="p-4 bg-blue-50 rounded-lg">
            {checkInDate && checkOutDate ? (
              <div className="text-sm">
                <p className="font-medium text-blue-900">
                  Check-in: <span className="font-bold">{new Date(checkInDate).toLocaleDateString("de-DE")}</span>
                </p>
                <p className="font-medium text-blue-900 mt-1">
                  Check-out: <span className="font-bold">{new Date(checkOutDate).toLocaleDateString("de-DE")}</span>
                </p>
                <p className="text-blue-700 mt-2">
                  {calculateNights(checkInDate, checkOutDate)} Nächte
                </p>
              </div>
            ) : (
              <p className="text-sm text-blue-700">
                Bitte wählen Sie im Kalender Check-in und Check-out Datum
              </p>
            )}
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ihr vollständiger Name"
            />
            {state?.errors?.name && (
              <p className="text-red-600 text-sm mt-1">{state.errors.name[0]}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="ihre@email.de"
            />
            {state?.errors?.email && (
              <p className="text-red-600 text-sm mt-1">{state.errors.email[0]}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+49 123 456789"
            />
            {state?.errors?.phone && (
              <p className="text-red-600 text-sm mt-1">{state.errors.phone[0]}</p>
            )}
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="guests" className="block text-sm font-medium mb-2">
              Anzahl Gäste *
            </label>
            <select
              id="guests"
              name="guests"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Bitte wählen</option>
              <option value="1">1 Person</option>
              <option value="2">2 Personen</option>
              <option value="3">3 Personen</option>
              <option value="4">4 Personen</option>
            </select>
            {state?.errors?.guests && (
              <p className="text-red-600 text-sm mt-1">{state.errors.guests[0]}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Nachricht (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Haben Sie besondere Wünsche oder Fragen?"
            />
          </div>

          {/* Success/Error Messages */}
          {state?.message && (
            <div
              className={`p-4 rounded-lg ${
                state.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
              }`}
            >
              <p className="font-medium">{state.message}</p>
            </div>
          )}

          {/* Submit Button */}
          <SubmitButton />

          <p className="text-sm text-gray-600 text-center">
            * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
          </p>
        </form>
      </div>
    </div>
  );
}

function calculateNights(checkIn: string, checkOut: string): number {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
