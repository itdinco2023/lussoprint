import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import logoCrest from "../../public/images/logo-crest.png";
import anpcSal from "../../public/images/anpc-sal.png";
import anpcSol from "../../public/images/anpc-sol.png";
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

        <div className={styles.column}>
          <div className={styles.heading}>ANPC</div>
          <div className={styles.anpcBadges}>
            <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">
              <Image
                src={anpcSal}
                alt="ANPC - Soluționarea Alternativă a Litigiilor"
                className={styles.anpcBadge}
              />
            </a>
            <a
              href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={anpcSol}
                alt="Soluționarea Online a Litigiilor"
                className={styles.anpcBadge}
              />
            </a>
          </div>
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
