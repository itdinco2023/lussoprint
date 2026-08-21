import type { Metadata } from "next";
import Despre from "@/components/Despre";

export const metadata: Metadata = {
  title: "Despre noi — Lusso Print",
  description:
    "SC Lusso Print SRL este un atelier de print și materiale publicitare din Slobozia, Ialomița.",
};

export default function DesprePage() {
  return <Despre />;
}
