import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Testimonials />
        <Contact />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
