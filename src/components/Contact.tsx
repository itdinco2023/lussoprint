import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.kicker}>Contact</div>
      <div className={styles.line}>office@lussoprint.com</div>
      <div className={styles.line}>0743.201.030</div>
      <div className={styles.hours}>Luni – Vineri, 08:00–17:00</div>
      <a href="mailto:office@lussoprint.com" className={styles.button}>
        Trimite un mesaj
      </a>
    </section>
  );
}
