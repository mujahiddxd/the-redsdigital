import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden relative">
        {/* ── Ambient Background Glow ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(245,78,0,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(192,168,221,0.05) 0%, transparent 60%)',
          }}
        />
        
        <Hero />
        <Marquee />
        <Process />
        <Portfolio />
        <Testimonials />
        <Contact />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
