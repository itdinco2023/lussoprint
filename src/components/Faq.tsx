"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import styles from "./Faq.module.css";

export default function Faq() {
  const lang = useLanguage();
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.kicker}>{t.kicker}</div>
      <div className={styles.list}>
        {t.items.map((item, index) => {
          const open = openIndex === index;
          return (
            <div className={styles.item} key={item.question}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <span className={styles.icon} aria-hidden>
                  {open ? "–" : "+"}
                </span>
              </button>
              {open && <p className={styles.answer}>{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
