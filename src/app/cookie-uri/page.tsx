import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politica de cookie-uri — Lusso Print",
  description: "Cum folosește SC Lusso Print SRL cookie-urile pe acest site.",
};

export default function CookiePage() {
  return (
    <LegalPage title="Politica de cookie-uri" updated="21 august 2026">
      <h2>1. Ce sunt cookie-urile</h2>
      <p>
        Cookie-urile sunt fișiere text de mici dimensiuni pe care browserul
        tău le stochează atunci când vizitezi un site web. Ele ajută site-ul
        să funcționeze corect și, în unele cazuri, să rețină preferințele
        tale.
      </p>

      <h2>2. Ce cookie-uri folosim</h2>
      <p>Site-ul lussoprint.ro folosește:</p>
      <ul>
        <li>
          <strong>Cookie-uri strict necesare</strong> — esențiale pentru
          funcționarea corectă a site-ului (de exemplu, pentru încărcarea
          paginilor și afișarea corectă a conținutului). Acestea nu pot fi
          dezactivate.
        </li>
        <li>
          <strong>Cookie-uri de analiză</strong> — pot fi folosite pentru a
          înțelege modul în care vizitatorii folosesc site-ul, în scopul
          îmbunătățirii acestuia. Sunt activate doar dacă îți exprimi
          acordul.
        </li>
      </ul>

      <h2>3. Cum poți controla cookie-urile</h2>
      <p>
        Poți gestiona sau șterge cookie-urile direct din setările
        browserului tău (Chrome, Firefox, Safari, Edge etc.). Dezactivarea
        cookie-urilor strict necesare poate afecta funcționarea corectă a
        site-ului.
      </p>

      <h2>4. Contact</h2>
      <p>
        Pentru orice întrebare legată de utilizarea cookie-urilor pe acest
        site, ne poți scrie la{" "}
        <a href="mailto:contact@lussoprint.com">contact@lussoprint.com</a>.
      </p>
    </LegalPage>
  );
}
