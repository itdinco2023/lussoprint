"use client";

import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import styles from "./Despre.module.css";

export default function Despre() {
  const lang = useLanguage();
  const t = translations[lang].despre;

  return (
    <section id="despre" className={styles.section}>
      <div className={styles.text}>
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.why}>
        <h3 className={styles.whyTitle}>{t.whyTitle}</h3>
        <div className={styles.whyGrid}>
          {t.whyItems.map((item) => (
            <div className={styles.whyItem} key={item.title}>
              <span className={styles.whyCheck} aria-hidden>
                ✓
              </span>
              <div>
                <div className={styles.whyItemTitle}>{item.title}</div>
                <div className={styles.whyItemDescription}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
