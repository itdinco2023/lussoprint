"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import { useCookieConsent, setCookieConsent } from "@/lib/cookieConsent";
import styles from "./CookieConsent.module.css";

export default function CookieConsent() {
  const lang = useLanguage();
  const consent = useCookieConsent();
  const t = translations[lang].cookieConsent;

  if (consent !== null) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label={t.linkLabel}>
      <p className={styles.text}>
        {t.text} <Link href="/cookie-uri">{t.linkLabel}</Link>
      </p>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.secondary}
          onClick={() => setCookieConsent("necessary-only")}
        >
          {t.necessaryOnly}
        </button>
        <button
          type="button"
          className={styles.primary}
          onClick={() => setCookieConsent("accepted")}
        >
          {t.acceptAll}
        </button>
      </div>
    </div>
  );
}
