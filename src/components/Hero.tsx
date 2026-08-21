"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import { openQuoteModal } from "@/lib/quoteModal";
import styles from "./Hero.module.css";
import bannerSite from "../../public/images/banner-site.png";

export default function Hero() {
  const lang = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className={styles.hero}>
      <Image
        src={bannerSite}
        alt="Lusso Print"
        fill
        className={styles.image}
        priority
        sizes="100vw"
      />
      <div className={styles.overlayFlat} />
      <div className={styles.overlayGradient} />
      <div className={styles.content}>
        <p className={styles.tagline}>{t.tagline}</p>
        <div className={styles.buttons}>
          <button type="button" onClick={() => openQuoteModal()} className={styles.buttonSolid}>
            {t.ctaPrimary}
          </button>
          <a href="#contact" className={styles.buttonOutline}>
            {t.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
