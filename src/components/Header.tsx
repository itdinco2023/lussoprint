import Image from "next/image";
import styles from "./Header.module.css";
import logoCrest from "../../public/images/logo-crest.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Image src={logoCrest} alt="Lusso Print" width={52} height={52} className={styles.logo} priority />
        <span className={styles.wordmark}>LUSSO PRINT</span>
      </div>
      <nav className={styles.nav}>
        <a href="#">Prima pagină</a>
        <a href="#despre">Despre noi</a>
        <a href="#servicii">Servicii</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
