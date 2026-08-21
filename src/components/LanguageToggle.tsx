"use client";

import { useLanguage, setLanguage } from "@/lib/language";
import styles from "./LanguageToggle.module.css";

export default function LanguageToggle() {
  const lang = useLanguage();
  const next = lang === "ro" ? "en" : "ro";

  return (
    <button
      type="button"
      onClick={() => setLanguage(next)}
      className={styles.toggle}
      aria-label={next === "en" ? "Switch to English" : "Comută la română"}
    >
      {next.toUpperCase()}
    </button>
  );
}
