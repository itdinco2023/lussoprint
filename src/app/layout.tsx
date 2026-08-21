import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const eastside = localFont({
  src: "../../public/fonts/EastSideRegular.ttf",
  variable: "--font-eastside",
  weight: "400",
});

const cinzel = localFont({
  src: [
    { path: "../../public/fonts/CinzelRegular.ttf", weight: "400" },
    { path: "../../public/fonts/CinzelBold.ttf", weight: "700" },
  ],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Lusso Print — Print de excepție pentru branduri care nu fac compromisuri",
  description:
    "SC Lusso Print SRL este un atelier de print și materiale publicitare din Slobozia, Ialomița. Print digital, print offset, materiale publicitare, cărți de vizită, ambalaje personalizate și print pe textile.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${playfair.variable} ${cormorant.variable} ${eastside.variable} ${cinzel.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              var saved = localStorage.getItem('theme');
              var theme = saved || 'dark';
              document.documentElement.setAttribute('data-theme', theme);
            })();
          `}
        </Script>
        <Script id="lang-init" strategy="beforeInteractive">
          {`
            (function () {
              var saved = localStorage.getItem('lang');
              var lang = saved === 'en' ? 'en' : 'ro';
              document.documentElement.setAttribute('data-lang', lang);
            })();
          `}
        </Script>
        <Script id="cookie-consent-init" strategy="beforeInteractive">
          {`
            (function () {
              var saved = localStorage.getItem('cookie-consent');
              if (saved === 'accepted' || saved === 'necessary-only') {
                document.documentElement.setAttribute('data-cookie-consent', saved);
              }
            })();
          `}
        </Script>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
