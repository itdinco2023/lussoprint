"use client";

import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import styles from "./Contact.module.css";

export default function ContactInfo() {
  const lang = useLanguage();
  const t = translations[lang].contact;

  return (
    <>
      <div className={styles.kicker}>{t.kicker}</div>
      <div className={styles.line}>office@lussoprint.com</div>
      <div className={styles.line}>0743.201.030</div>
      <div className={styles.hours}>{t.hours}</div>
    </>
  );
}
