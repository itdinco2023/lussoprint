import Hero from "@/components/Hero";
import Despre from "@/components/Despre";
import CumLucram from "@/components/CumLucram";
import Servicii from "@/components/Servicii";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Despre />
      <Divider />
      <CumLucram />
      <Divider />
      <Servicii />
      <Divider />
      <Faq />
      <Contact />
    </>
  );
}
