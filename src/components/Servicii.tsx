"use client";

import Image, { type StaticImageData } from "next/image";
import { useLanguage } from "@/lib/language";
import { translations } from "@/lib/translations";
import styles from "./Servicii.module.css";
import publicitateOutdoor from "../../public/images/publicitate-outdoor.png";
import sistemeDeExpunere from "../../public/images/sisteme-de-expunere.png";
import caseteLuminoase from "../../public/images/casete-luminoase.png";
import eticheteSiStickere from "../../public/images/etichete-si-stickere.png";
import obiecteSiTextilePersonalizate from "../../public/images/obiecte-si-textile-personalizate.png";
import printDigital from "../../public/images/print-digital.png";

const images: StaticImageData[] = [
  publicitateOutdoor,
  sistemeDeExpunere,
  caseteLuminoase,
  eticheteSiStickere,
  obiecteSiTextilePersonalizate,
  printDigital,
];

export default function Servicii() {
  const lang = useLanguage();
  const t = translations[lang].servicii;

  return (
    <section id="servicii" className={styles.section}>
      <div className={styles.kicker}>{t.kicker}</div>
      <div className={styles.grid}>
        {t.items.map((item, index) => (
          <div className={styles.card} key={item.title}>
            <div className={styles.imageWrap}>
              <Image
                src={images[index]}
                alt={item.title}
                fill
                className={styles.image}
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
            </div>
            <span className={styles.title}>{item.title}</span>
            <div className={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
