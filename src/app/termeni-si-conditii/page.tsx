import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termeni și condiții — Lusso Print",
  description: "Termenii și condițiile de utilizare a site-ului SC Lusso Print SRL.",
};

export default function TermeniPage() {
  return (
    <LegalPage title="Termeni și condiții" updated="21 august 2026">
      <p>
        Acest site este operat de SC Lusso Print SRL, cu sediul în Aleea
        Nordului, nr. 16, Slobozia, Ialomița, înregistrată la Registrul
        Comerțului sub nr. J2026033005005/2026, CUI 54724789. Prin
        accesarea și utilizarea acestui site, ești de acord cu termenii și
        condițiile de mai jos.
      </p>

      <h2>1. Obiectul site-ului</h2>
      <p>
        Site-ul lussoprint.ro prezintă serviciile de print și materiale
        publicitare oferite de Lusso Print. Informațiile publicate au caracter
        general și nu constituie o ofertă fermă — pentru prețuri și termene
        exacte, te rugăm să ne contactezi direct.
      </p>

      <h2>2. Proprietate intelectuală</h2>
      <p>
        Conținutul acestui site (texte, imagini, logo, elemente grafice)
        este proprietatea SC Lusso Print SRL sau este utilizat cu drepturile
        aferente și este protejat de legislația privind drepturile de autor.
        Reproducerea sau utilizarea acestui conținut fără acordul nostru
        scris este interzisă.
      </p>

      <h2>3. Limitarea răspunderii</h2>
      <p>
        Depunem eforturi rezonabile pentru a menține informațiile de pe
        acest site actualizate și corecte, dar nu garantăm absența erorilor.
        SC Lusso Print SRL nu răspunde pentru eventuale prejudicii rezultate
        din utilizarea informațiilor publicate pe site.
      </p>

      <h2>4. Link-uri către alte site-uri</h2>
      <p>
        Site-ul poate conține link-uri către site-uri terțe. Nu suntem
        responsabili pentru conținutul sau politicile de confidențialitate
        ale acestor site-uri.
      </p>

      <h2>5. Legea aplicabilă</h2>
      <p>
        Acești termeni sunt guvernați de legislația română. Orice litigiu
        va fi soluționat pe cale amiabilă sau, dacă acest lucru nu este
        posibil, de instanțele competente din România.
      </p>

      <h2>6. Contact</h2>
      <p>
        Pentru orice întrebare legată de acești termeni, ne poți contacta la{" "}
        <a href="mailto:office@lussoprint.com">office@lussoprint.com</a> sau
        la telefon <a href="tel:+40743201030">0743.201.030</a>.
      </p>
    </LegalPage>
  );
}
