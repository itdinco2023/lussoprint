"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const messages = {
  ro: {
    missingFields: "Te rugăm să completezi toate câmpurile.",
    success: "Mulțumim pentru mesaj! Te vom contacta în curând.",
  },
  en: {
    missingFields: "Please fill in all fields.",
    success: "Thank you for your message! We'll get back to you shortly.",
  },
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const lang = formData.get("lang")?.toString() === "en" ? "en" : "ro";

  if (!name || !email || !message) {
    return { status: "error", message: messages[lang].missingFields };
  }

  // Trimiterea efectivă prin serverul SMTP propriu urmează să fie conectată aici.
  return {
    status: "success",
    message: messages[lang].success,
  };
}
