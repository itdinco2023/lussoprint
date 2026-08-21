"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import styles from "./ContactForm.module.css";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const lang = useLanguage();
  const t = translations[lang].contactForm;

  return (
    <form action={formAction} className={styles.form}>
      <input type="hidden" name="lang" value={lang} />
      <div className={styles.field}>
        <label htmlFor="name">{t.nameLabel}</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">{t.emailLabel}</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">{t.messageLabel}</label>
        <textarea id="message" name="message" rows={6} required />
      </div>
      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? t.submitPending : t.submitLabel}
      </button>
      {state.status !== "idle" && (
        <p
          role="status"
          className={state.status === "success" ? styles.success : styles.error}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
