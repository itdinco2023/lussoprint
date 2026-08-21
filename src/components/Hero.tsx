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
      <div className={styles.overlayFlat} />
      <div className={styles.overlayGradient} />
      <div className={styles.content}>
        <p className={styles.tagline}>
          Print de excepție pentru branduri care nu fac compromisuri.
        </p>
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
