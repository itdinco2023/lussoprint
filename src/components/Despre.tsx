"use client";

import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import styles from "./Despre.module.css";

export default function Despre() {
  const lang = useLanguage();
  const paragraphs = translations[lang].despre.paragraphs;

  return (
    <section id="despre" className={styles.section}>
      <div className={styles.text}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
