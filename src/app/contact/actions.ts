"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Te rugăm să completezi toate câmpurile." };
  }

  // Trimiterea efectivă prin serverul SMTP propriu urmează să fie conectată aici.
  return {
    status: "success",
    message: "Mulțumim pentru mesaj! Te vom contacta în curând.",
  };
}
