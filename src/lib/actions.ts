"use server";

import { z } from "zod";

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  dates: z.string().min(1, "Bitte geben Sie einen Wunschzeitraum an"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    dates?: string[];
    message?: string[];
  };
};

// Validation schema for booking form
const bookingFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(5, "Bitte geben Sie eine gültige Telefonnummer an"),
  checkIn: z.string().min(1, "Bitte wählen Sie ein Check-in Datum"),
  checkOut: z.string().min(1, "Bitte wählen Sie ein Check-out Datum"),
  guests: z.string().min(1, "Bitte wählen Sie die Anzahl der Gäste"),
  message: z.string().optional(),
});

export type BookingFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    checkIn?: string[];
    checkOut?: string[];
    guests?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // Extract form data
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    dates: formData.get("dates"),
    message: formData.get("message"),
  };

  // Validate form data
  const validatedFields = contactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Bitte überprüfen Sie Ihre Eingaben.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, dates, message } = validatedFields.data;

  try {
    // TODO: In production, replace this with actual email sending
    // Example: Using Resend, Nodemailer, SendGrid, etc.

    // For now, we'll simulate sending email
    console.log("Contact form submission:", {
      name,
      email,
      dates,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In production, you would send an email like this:
    /*
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Ferienwohnung Website <noreply@ferienwohnung-unterm-schloss.de>",
        to: ["eva.dirion@gmx.net"],
        subject: `Neue Anfrage von ${name}`,
        html: `
          <h2>Neue Buchungsanfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Wunschzeitraum:</strong> ${dates}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Email could not be sent");
    }
    */

    return {
      success: true,
      message: "Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message:
        "Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
    };
  }
}

export async function submitBookingRequest(
  prevState: BookingFormState | null,
  formData: FormData
): Promise<BookingFormState> {
  // Extract form data
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    checkIn: formData.get("checkIn"),
    checkOut: formData.get("checkOut"),
    guests: formData.get("guests"),
    message: formData.get("message") || "",
  };

  // Validate form data
  const validatedFields = bookingFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Bitte überprüfen Sie Ihre Eingaben.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, checkIn, checkOut, guests, message } = validatedFields.data;

  try {
    // Calculate nights
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));

    // TODO: In production, replace this with actual email sending
    // For now, we'll log the booking request
    console.log("Booking request received:", {
      name,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      nights,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In production, you would send an email like this:
    /*
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Ferienwohnung Website <noreply@ferienwohnung-unterm-schloss.de>",
        to: ["eva.dirion@gmx.net"],
        subject: `Neue Buchungsanfrage von ${name}`,
        html: `
          <h2>🏠 Neue Buchungsanfrage</h2>
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h3>Gästedaten:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Anzahl Gäste:</strong> ${guests}</p>

            <h3>Buchungsdetails:</h3>
            <p><strong>Check-in:</strong> ${checkInDate.toLocaleDateString("de-DE")}</p>
            <p><strong>Check-out:</strong> ${checkOutDate.toLocaleDateString("de-DE")}</p>
            <p><strong>Anzahl Nächte:</strong> ${nights}</p>

            ${message ? `<h3>Nachricht:</h3><p>${message}</p>` : ""}

            <hr style="margin: 20px 0;">
            <p style="color: #666; font-size: 14px;">
              <strong>Wichtig:</strong> Bitte in Booking.com die Daten ${checkInDate.toLocaleDateString("de-DE")} - ${checkOutDate.toLocaleDateString("de-DE")} sperren!
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Email could not be sent");
    }
    */

    return {
      success: true,
      message: `Vielen Dank für Ihre Buchungsanfrage! Wir haben Ihre Anfrage für ${nights} Nacht${nights > 1 ? "e" : ""} erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.`,
    };
  } catch (error) {
    console.error("Error submitting booking request:", error);
    return {
      success: false,
      message:
        "Es gab einen Fehler beim Senden Ihrer Buchungsanfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
    };
  }
}
