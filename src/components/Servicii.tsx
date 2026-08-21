import Image, { type StaticImageData } from "next/image";
import styles from "./Servicii.module.css";
import printDigital from "../../public/images/service-print-digital.png";
import printOffset from "../../public/images/service-print-offset.png";
import materialePublicitare from "../../public/images/service-materiale-publicitare.png";
import cartiVizita from "../../public/images/service-carti-vizita-papetarie.png";
import ambalaje from "../../public/images/service-ambalaje-personalizate.png";
import printTextile from "../../public/images/service-print-textile.png";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

const servicii: { title: string; description: string; image: StaticImageData }[] = [
  {
    title: "Print digital",
    description: "Tiraje mici, calitate constantă",
    image: printDigital,
  },
  {
    title: "Print offset",
    description: "Tiraje mari, cost optimizat",
    image: printOffset,
  },
  {
    title: "Materiale publicitare",
    description: "Bannere, roll-up, panouri",
    image: materialePublicitare,
  },
  {
    title: "Cărți de vizită & papetărie",
    description: "Hârtii premium, finisaje fine",
    image: cartiVizita,
  },
  {
    title: "Ambalaje personalizate",
    description: "Cutii, pungi, etichete",
    image: ambalaje,
  },
  {
    title: "Print pe textile",
    description: "Tricouri, materiale promoționale",
    image: printTextile,
  },
];

export default function Servicii() {
  return (
    <section id="servicii" className={styles.section}>
      <div className={styles.kicker}>Servicii</div>
      <div className={styles.grid}>
        {servicii.map((item, index) => (
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
            <div>
              <span className={styles.numeral}>{romanNumerals[index]}</span>
              <span className={styles.title}>{item.title}</span>
            </div>
            <div className={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
