import Hero from "@/components/Hero";
import Despre from "@/components/Despre";
import Servicii from "@/components/Servicii";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Despre />
      <Divider />
      <Servicii />
      <Contact />
    </>
  );
}
