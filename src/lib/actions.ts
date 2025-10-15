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
