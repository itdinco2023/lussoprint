import styles from "./Despre.module.css";

export default function Despre() {
  return (
    <section id="despre" className={styles.section}>
      <div className={styles.text}>
        <p>
          Lusso Print este atelierul de print și materiale publicitare din
          Slobozia, Ialomița, unde fiecare proiect pornește de la o singură
          prioritate: calitatea. Lucrăm cu hârtii premium, textile și
          suporturi rezistente pentru print digital, print offset, cărți de
          vizită, ambalaje personalizate și materiale publicitare — de la
          roll-up-uri și bannere, la papetărie corporate și print pe
          textile.
        </p>
        <p>
          Colaborăm cu companii, agenții și antreprenori din toată țara care
          își doresc ca fiecare material tipărit să reflecte fidel
          identitatea brandului lor, indiferent de tiraj. Investim în
          echipamente moderne și finisaje atente la detaliu, astfel încât
          rezultatul final să arate exact așa cum a fost gândit — de la
          prima schiță până la produsul finit.
        </p>
      </div>
    </section>
  );
}
