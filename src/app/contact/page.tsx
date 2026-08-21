import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — Lusso Print",
  description: "Contactează SC Lusso Print SRL din Slobozia, Ialomița.",
};

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <ContactInfo />
      <ContactForm />
    </section>
  );
}
