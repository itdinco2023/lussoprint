import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import logoCrest from "../../public/images/logo-crest.png";
import { siteLinks, legalLinks } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.brand}>
            <Image src={logoCrest} alt="Lusso Print" width={36} height={36} className={styles.logo} />
            <span className={styles.wordmark}>LUSSO PRINT</span>
          </div>
          <address className={styles.address}>
            SC LUSSO PRINT SRL
            <br />
            J2026033005005/2026 · CUI 54724789
            <br />
            Aleea Nordului, nr. 16, Slobozia, Ialomița
          </address>
          <a href="mailto:office@lussoprint.com" className={styles.contactLine}>
            office@lussoprint.com
          </a>
          <a href="tel:+40743201030" className={styles.contactLine}>
            0743.201.030
          </a>
        </div>

        <div className={styles.column}>
          <div className={styles.heading}>Meniu</div>
          <nav className={styles.linkList}>
            {siteLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.column}>
          <div className={styles.heading}>Legal</div>
          <nav className={styles.linkList}>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.bottomBar}>
        © {year} SC Lusso Print SRL. Toate drepturile rezervate. · Dezvoltat de{" "}
        <a href="https://netzone.ro" target="_blank" rel="noopener noreferrer">
          Netzone
        </a>
      </div>
    </footer>
  );
}
