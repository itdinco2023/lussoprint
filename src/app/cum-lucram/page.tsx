import type { Metadata } from "next";
import CumLucram from "@/components/CumLucram";

export const metadata: Metadata = {
  title: "Cum lucrăm — Lusso Print",
  description:
    "Procesul de lucru Lusso Print, de la cerere la livrare, și motivele pentru care clienții aleg atelierul nostru.",
};

export default function CumLucramPage() {
  return <CumLucram />;
}
