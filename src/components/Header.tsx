"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import logoCrest from "../../public/images/logo-crest.png";

const links = [
  { href: "#", label: "Prima pagină" },
  { href: "#despre", label: "Despre noi" },
  { href: "#servicii", label: "Servicii" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Image src={logoCrest} alt="Lusso Print" width={52} height={52} className={styles.logo} priority />
        <span className={styles.wordmark}>LUSSO PRINT</span>
      </div>

      <nav className={styles.nav}>
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

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

      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
      >
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
