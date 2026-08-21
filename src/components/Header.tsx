"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import logoCrest from "../../public/images/logo-crest.png";
import { siteLinks as links } from "@/lib/nav";
import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const lang = useLanguage();
  const nav = translations[lang].nav;

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        <Image src={logoCrest} alt="Lusso Print" width={52} height={52} className={styles.logo} priority />
        <span className={styles.wordmark}>LussoPrint</span>
      </Link>

      <div className={styles.actions}>
        <nav className={styles.nav}>
          {links.map((link) => (
            <Link key={link.key} href={link.href}>
              {nav[link.key]}
            </Link>
          ))}
        </nav>

        <LanguageToggle />
        <ThemeToggle />

        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${open ? styles.barOpenTop : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barOpenMid : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barOpenBottom : ""}`} />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
      >
        {links.map((link) => (
          <Link key={link.key} href={link.href} onClick={() => setOpen(false)}>
            {nav[link.key]}
          </Link>
        ))}
      </nav>
    </header>
  );
}
