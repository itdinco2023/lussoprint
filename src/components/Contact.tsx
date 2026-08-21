"use client";

import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import ContactInfo from "./ContactInfo";
import styles from "./Contact.module.css";

export default function Contact() {
  const lang = useLanguage();
  const t = translations[lang].contact;

  return (
    <section id="contact" className={styles.section}>
      <ContactInfo />
      <a href="mailto:office@lussoprint.com" className={styles.button}>
        {t.cta}
      </a>
    </section>
  );
}
