import styles from "./LegalPage.module.css";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.updated}>Ultima actualizare: {updated}</p>
        <div className={styles.prose}>{children}</div>
      </div>
    </section>
  );
}
