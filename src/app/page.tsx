import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Despre from "@/components/Despre";
import Servicii from "@/components/Servicii";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Divider />
      <Despre />
      <Divider />
      <Servicii />
      <Contact />
      <Footer />
    </>
  );
}
