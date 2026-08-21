import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "GDPR — Politica de confidențialitate — Lusso Print",
  description:
    "Politica de confidențialitate și protecția datelor cu caracter personal la SC Lusso Print SRL.",
};

export default function GdprPage() {
  return (
    <LegalPage title="Politica de confidențialitate (GDPR)" updated="21 august 2026">
      <p>
        SC Lusso Print SRL, cu sediul în Aleea Nordului, nr. 16, Slobozia,
        Ialomița, înregistrată la Registrul Comerțului sub nr.
        J2026033005005/2026, CUI 54724789 (&bdquo;Lusso Print&rdquo;,
        &bdquo;noi&rdquo;), acordă o importanță deosebită protecției datelor
        cu caracter personal ale vizitatorilor și clienților săi, în
        conformitate cu Regulamentul (UE) 2016/679 (GDPR) și legislația
        română aplicabilă.
      </p>

      <h2>1. Operatorul de date</h2>
      <p>
        Operatorul de date cu caracter personal este SC Lusso Print SRL. Pentru
        orice întrebare legată de prelucrarea datelor tale, ne poți contacta
        la adresa{" "}
        <a href="mailto:contact@lussoprint.com">contact@lussoprint.com</a>.
      </p>

      <h2>2. Ce date colectăm</h2>
      <p>Colectăm date cu caracter personal în următoarele situații:</p>
      <ul>
        <li>
          Când completezi formularul de contact de pe site: nume, adresă de
          email și conținutul mesajului trimis.
        </li>
        <li>
          Când ne contactezi telefonic sau prin email: datele pe care ni le
          furnizezi în cadrul comunicării.
        </li>
        <li>
          Date tehnice colectate automat la navigarea pe site (adresă IP,
          tip de browser, pagini vizitate) — vezi și{" "}
          <a href="/cookie-uri">Politica de cookie-uri</a>.
        </li>
      </ul>

      <h2>3. Scopul prelucrării</h2>
      <p>Folosim datele tale pentru:</p>
      <ul>
        <li>A răspunde solicitărilor și mesajelor trimise prin formularul de contact;</li>
        <li>A pregăti oferte și a comunica în legătură cu proiectele solicitate;</li>
        <li>A asigura funcționarea corectă și securitatea site-ului.</li>
      </ul>

      <h2>4. Temeiul legal</h2>
      <p>
        Prelucrăm datele tale în baza consimțământului acordat (atunci când
        trimiți un mesaj prin formularul de contact) și, după caz, în baza
        interesului nostru legitim de a răspunde solicitărilor comerciale.
      </p>

      <h2>5. Durata stocării</h2>
      <p>
        Păstrăm datele colectate prin formularul de contact pe durata
        necesară soluționării solicitării și, ulterior, pentru o perioadă
        rezonabilă impusă de eventuale obligații legale sau de necesitatea
        de a putea răspunde unor solicitări ulterioare legate de aceeași
        colaborare.
      </p>

      <h2>6. Drepturile tale</h2>
      <p>În conformitate cu GDPR, ai următoarele drepturi:</p>
      <ul>
        <li>dreptul de acces la datele tale personale;</li>
        <li>dreptul la rectificarea datelor inexacte;</li>
        <li>dreptul la ștergerea datelor (&bdquo;dreptul de a fi uitat&rdquo;);</li>
        <li>dreptul la restricționarea prelucrării;</li>
        <li>dreptul la opoziție față de prelucrare;</li>
        <li>dreptul la portabilitatea datelor;</li>
        <li>
          dreptul de a depune o plângere la Autoritatea Națională de
          Supraveghere a Prelucrării Datelor cu Caracter Personal
          (ANSPDCP), dspd.ro.
        </li>
      </ul>
      <p>
        Pentru a-ți exercita oricare dintre aceste drepturi, scrie-ne la{" "}
        <a href="mailto:contact@lussoprint.com">contact@lussoprint.com</a>.
      </p>

      <h2>7. Destinatarii datelor</h2>
      <p>
        Datele tale nu sunt vândute sau închiriate către terți. Pot fi
        transmise unor furnizori de servicii tehnice (de exemplu, găzduire
        site sau serviciu de trimitere email) strict în măsura necesară
        funcționării site-ului și comunicării cu tine.
      </p>

      <h2>8. Securitatea datelor</h2>
      <p>
        Luăm măsuri tehnice și organizatorice rezonabile pentru a proteja
        datele tale împotriva accesului neautorizat, pierderii sau
        divulgării accidentale.
      </p>

      <h2>9. Modificări ale acestei politici</h2>
      <p>
        Putem actualiza periodic această politică de confidențialitate.
        Orice modificare va fi publicată pe această pagină, împreună cu data
        ultimei actualizări.
      </p>

      <h2>10. Contact</h2>
      <p>
        Pentru orice întrebare legată de protecția datelor cu caracter
        personal, ne poți scrie la{" "}
        <a href="mailto:contact@lussoprint.com">contact@lussoprint.com</a>.
      </p>
    </LegalPage>
  );
}
