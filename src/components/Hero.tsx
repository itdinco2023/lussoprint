import Image from "next/image";
import styles from "./Hero.module.css";
import bannerHero from "../../public/images/banner-hero.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src={bannerHero}
        alt="Lusso Print"
        fill
        className={styles.image}
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.plate}>
          <div className={styles.rule} />
          <p className={styles.tagline}>
            Print de excepție pentru branduri care nu fac compromisuri.
          </p>
          <div className={`${styles.rule} ${styles.ruleBottom}`} />
        </div>
        <div className={styles.buttons}>
          <a href="#contact" className={styles.buttonSolid}>
            Solicită ofertă
          </a>
          <a href="#contact" className={styles.buttonOutline}>
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
