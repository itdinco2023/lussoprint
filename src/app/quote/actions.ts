"use server";

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const messages = {
  ro: {
    missingFields: "Te rugăm să completezi numele, telefonul și emailul.",
    success: "Mulțumim pentru solicitare! Îți vom trimite o ofertă în cel mai scurt timp.",
  },
  en: {
    missingFields: "Please fill in your name, phone, and email.",
    success: "Thank you for your request! We'll send you a quote shortly.",
  },
};

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const lang = formData.get("lang")?.toString() === "en" ? "en" : "ro";

  if (!name || !phone || !email) {
    return { status: "error", message: messages[lang].missingFields };
  }

  // Categoriile selectate, dimensiunea, cantitatea, termenul dorit și
  // fișierul grafic atașat urmează să fie trimise prin serverul SMTP
  // propriu, la fel ca formularul de contact (vezi src/app/contact/actions.ts).

  return {
    status: "success",
    message: messages[lang].success,
  };
}
