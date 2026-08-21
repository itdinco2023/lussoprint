import Image, { type StaticImageData } from "next/image";
import styles from "./Servicii.module.css";
import publicitateOutdoor from "../../public/images/publicitate-outdoor.png";
import sistemeDeExpunere from "../../public/images/sisteme-de-expunere.png";
import caseteLuminoase from "../../public/images/casete-luminoase.png";
import eticheteSiStickere from "../../public/images/etichete-si-stickere.png";
import obiecteSiTextilePersonalizate from "../../public/images/obiecte-si-textile-personalizate.png";
import printDigital from "../../public/images/print-digital.png";

const servicii: { title: string; description: string; image: StaticImageData }[] = [
  {
    title: "Publicitate outdoor",
    description: "Bannere, colantări pentru vitrine, geamuri și autovehicule profesionale",
    image: publicitateOutdoor,
  },
  {
    title: "Sisteme de expunere",
    description: "Steaguri de eveniment, structuri pop-up și roll-up",
    image: sistemeDeExpunere,
  },
  {
    title: "Casete luminoase",
    description: "Interior și exterior, în variante textil sau plexi",
    image: caseteLuminoase,
  },
  {
    title: "Etichete și stickere",
    description: "Soluții personalizate pentru companii și antreprenori",
    image: eticheteSiStickere,
  },
  {
    title: "Obiecte și textile personalizate",
    description: "Tricouri, echipamente de lucru, șepci, pixuri, sacoșe, agende",
    image: obiecteSiTextilePersonalizate,
  },
  {
    title: "Print digital",
    description: "Broșuri, flyere, postere și cărți de vizită, calitate constantă indiferent de tiraj",
    image: printDigital,
  },
];

export default function Servicii() {
  return (
    <section id="servicii" className={styles.section}>
      <div className={styles.kicker}>Servicii</div>
      <div className={styles.grid}>
        {servicii.map((item) => (
          <div className={styles.card} key={item.title}>
            <div className={styles.imageWrap}>
              <Image
                src={item.image}
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
