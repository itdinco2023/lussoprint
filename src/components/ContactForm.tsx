"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import styles from "./ContactForm.module.css";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name">Nume</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Mesaj</label>
        <textarea id="message" name="message" rows={6} required />
      </div>
      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? "Se trimite…" : "Trimite mesajul"}
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
