import Image from 'next/image';
import Navbar from '@/components/Navbar';

import Testimonials from '@/components/Testimonials';
import ScrollReveal from '@/components/ScrollReveal';
import Footer from '@/components/Footer';
import DeviceShowcase from '@/components/DeviceShowcase';
import WorksSection from '@/components/WorksSection';
import ServicesSection from '@/components/ServicesSection';
import StudioSection from '@/components/StudioSection';
import ContactSection from '@/components/ContactSection';



export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative overflow-x-hidden">
        {/* ── Ambient Background Glow ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(245,78,0,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(192,168,221,0.05) 0%, transparent 60%)',
          }}
        />

        {/* ══════════════════════════════════════════
            Section 1 — Hero
        ══════════════════════════════════════════ */}
        <section
          id="hero"
          className="relative z-10 pt-[120px] pb-[60px] max-w-[1200px] mx-auto px-lg"
        >
          <div className="flex flex-col items-center text-center gap-xl">
            {/* Text Content */}
            <div className="max-w-[800px] flex flex-col items-center">
              {/* Eyebrow */}
              {/* <div className="flex items-center gap-sm mb-lg">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-caption-uppercase text-primary tracking-[0.25em]">
                  Digital Agency
                </span>
                <div className="w-12 h-[1px] bg-primary" />
              </div> */}

              {/* Headline */}
              <h1 className="text-[48px] lg:text-[64px] xl:text-[72px] font-bold leading-[1.1] tracking-[-0.03em] text-ink mb-lg">
                Hi, I'm Mujahid,<br />
                <span className="text-primary">Welcome To My Portfolio.</span>
              </h1>

              {/* Subhead */}
              <p className="text-body-md text-body max-w-[560px] mx-auto mb-xl">
                I am a passionate developer crafting high-performance websites,
                modern interfaces, and scalable web applications that bring ideas to life.
              </p>

              {/* CTA Group */}
              <div className="flex flex-wrap items-center justify-center gap-base">
                <a
                  href="https://wa.me/918097077235"
                  className="text-button bg-primary text-on-primary px-[20px] py-[12px] rounded-md no-underline transition-colors duration-200 hover:bg-primary-active inline-flex items-center"
                  style={{ height: '44px' }}
                  id="hero-cta-primary"
                >
                  Start a Project
                </a>
                <a
                  href="#works"
                  className="text-button bg-surface-card text-ink px-[20px] py-[12px] rounded-md no-underline border border-hairline-strong transition-colors duration-200 hover:bg-surface-strong inline-flex items-center"
                  style={{ height: '44px' }}
                  id="hero-cta-secondary"
                >
                  View My Work
                </a>
              </div>
            </div>
            
            {/* Hero Graphic */}
            <div className="w-full mt-xl relative">
              <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full scale-110 pointer-events-none" />
              <div className="relative z-10 w-full flex justify-center">
                <DeviceShowcase />
              </div>
            </div>
          </div>
        </section>

        {/* {/* ══════════════════════════════════════════
            Section 2 — Trusted By
        ══════════════════════════════════════════ */}
        {/* <section className="relative z-10 max-w-[1200px] mx-auto px-lg py-xl border-t border-hairline mt-xl md:mt-2xl">
          <div className="text-center mb-xl">
            <h3 className="text-display-sm text-ink max-w-[700px] mx-auto leading-snug">
              Trusted by businesses across Retail, Automotive, Banking, Manufacturing, and eCommerce.
            </h3>
          </div>
          
          {/* Logo Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-md max-w-[900px] mx-auto opacity-70 hover:opacity-100 transition-opacity duration-500">
             {['Wasan Toyota', 'Infinity Cars', 'Hub Sports', 'Odra', 'Twentyci', 'FiunEx', 'Unitherm', 'Ohm'].map((brand, i) => (
                <div key={i} className="flex items-center justify-center py-6 px-4 bg-surface rounded-lg border border-hairline transition-all duration-300 hover:bg-surface-card hover:border-hairline-strong hover:shadow-md cursor-pointer grayscale hover:grayscale-0">
                  <span className="text-body-sm font-semibold text-muted tracking-wide text-center">{brand}</span>
                </div>
             ))}
          </div>
        </section>  */}


        {/* ══════════════════════════════════════════
            Imported Full Page Sections
        ══════════════════════════════════════════ */}
        <WorksSection />
        <ServicesSection />
        <StudioSection />
        
        {/* ══════════════════════════════════════════
            Section 6 — Testimonials
        ══════════════════════════════════════════ */}
        <div className="relative z-10 border-t border-hairline">
          <Testimonials />
        </div>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
