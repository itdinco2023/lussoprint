import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — Lusso Print",
  description: "Contactează SC Lusso Print SRL din Slobozia, Ialomița.",
};

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <div className={styles.kicker}>Contact</div>
      <div className={styles.line}>office@lussoprint.com</div>
      <div className={styles.line}>0743.201.030</div>
      <div className={styles.hours}>Luni – Vineri, 08:00–17:00</div>
      <ContactForm />
    </section>
  );
}
