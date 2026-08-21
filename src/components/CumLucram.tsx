"use client";

import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import Divider from "./Divider";
import styles from "./CumLucram.module.css";

export default function CumLucram() {
  const lang = useLanguage();
  const t = translations[lang].cumLucram;

  return (
    <section id="cum-lucram" className={styles.section}>
      <div className={styles.kicker}>{t.title}</div>

      <h3 className={styles.stepsKicker}>{t.stepsKicker}</h3>
      <div className={styles.steps}>
        {t.steps.map((step) => (
          <div className={styles.step} key={step.number}>
            <span className={styles.stepNumber}>{step.number}</span>
            <div>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDescription}>{step.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dividerWrap}>
        <Divider />
      </div>

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
    </section>
  );
}
