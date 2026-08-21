import type { Metadata } from "next";
import Servicii from "@/components/Servicii";

export const metadata: Metadata = {
  title: "Servicii — Lusso Print",
  description:
    "Print digital, print offset, materiale publicitare, cărți de vizită și papetărie, ambalaje personalizate și print pe textile.",
};

export default function ServiciiPage() {
  return <Servicii />;
}
