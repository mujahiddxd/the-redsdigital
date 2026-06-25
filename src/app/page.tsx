import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Marquee from '@/components/Marquee';
import Testimonials from '@/components/Testimonials';
import ScrollReveal from '@/components/ScrollReveal';
import Footer from '@/components/Footer';
import IDEMockup from '@/components/IDEMockup';

/* ── Project Data (matches Works page) ── */
const PROJECTS = [
  {
    slug: 'ideora',
    title: 'Ideora',
    tagline: 'AI-powered meeting platform that delivers results.',
    tags: ['Next.js', 'TypeScript', 'AI/ML', 'Real-time'],
    category: 'SaaS Platform',
    screenshot: '/ideora.jpg',
    accentRgb: '99,102,241',
  },
  {
    slug: 'hazehaus',
    title: 'HazeHaus',
    tagline: 'Handmade crochet creations, crafted with love.',
    tags: ['Next.js', 'Clerk Auth', 'E-Commerce', 'CSS Animations'],
    category: 'E-Commerce',
    screenshot: '/peak-blush.jpg',
    accentRgb: '139,69,69',
  },
];

/* ── Services Data ── */
const SERVICES = [
  {
    title: 'Web Development',
    description:
      'Scalable, secure, and blazingly fast architectures built for performance under pressure.',
    accentColor: 'var(--color-primary)',
    accentRgb: '245,78,0',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'Intuitive interfaces forged through rigorous research and frictionless interaction design.',
    accentColor: 'var(--color-timeline-edit)',
    accentRgb: '192,168,221',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'SEO Strategy',
    description:
      'Data-driven visibility through technical optimization and authoritative content architecture.',
    accentColor: 'var(--color-timeline-grep)',
    accentRgb: '159,201,162',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Mobile Apps',
    description:
      'Native and cross-platform applications built for engagement and seamless user experiences.',
    accentColor: 'var(--color-timeline-thinking)',
    accentRgb: '223,168,143',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
];

/* ── Process Steps (condensed from Studio page) ── */
const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep-dive conversations to understand your business, audience, and goals.',
    accentRgb: '245,78,0',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We map user journeys and establish a technical blueprint before any design.',
    accentRgb: '192,168,221',
  },
  {
    number: '03',
    title: 'Design',
    description: 'High-fidelity prototypes where every interaction is deliberate and purposeful.',
    accentRgb: '159,201,162',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Clean, performant code on modern frameworks — no shortcuts, no tech debt.',
    accentRgb: '159,187,224',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Rigorous QA, staging review, and seamless production deployment.',
    accentRgb: '223,168,143',
  },
  {
    number: '06',
    title: 'Evolve',
    description: 'We monitor, iterate, and optimize based on real user data post-launch.',
    accentRgb: '192,133,50',
  },
];

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 text-left">
              {/* Eyebrow */}
              <div className="flex items-center gap-sm mb-lg">
                {/* <span className="text-caption-uppercase text-primary tracking-[0.25em]">
                  Digital Agency
                </span> */}
                {/* <div className="w-12 h-[1px] bg-primary" /> */}
              </div>

              {/* Headline */}
              <h1 className="text-[48px] lg:text-[54px] xl:text-[58px] font-normal leading-[1.1] tracking-[-0.03em] text-ink mb-lg">
                <span className="whitespace-nowrap">We build websites that</span>
                <br />
                <span className="whitespace-nowrap">convert visitors into</span>
                <br />
                <span className="text-primary italic">customers.</span>
              </h1>

              {/* Subhead */}
              <p className="text-body-md text-body max-w-[480px] mb-xl">
                Euphatics is a premium digital agency crafting high-performance websites,
                modern interfaces, and scalable web applications that drive real business growth.
              </p>

              {/* CTA Group */}
              <div className="flex flex-wrap items-center gap-base">
                <a
                  href="/contactUs"
                  className="text-button bg-primary text-on-primary px-[20px] py-[12px] rounded-md no-underline transition-colors duration-200 hover:bg-primary-active inline-flex items-center"
                  style={{ height: '44px' }}
                  id="hero-cta-primary"
                >
                  Start a Project
                </a>
                <a
                  href="/works"
                  className="text-button bg-surface-card text-ink px-[20px] py-[12px] rounded-md no-underline border border-hairline-strong transition-colors duration-200 hover:bg-surface-strong inline-flex items-center"
                  style={{ height: '44px' }}
                  id="hero-cta-secondary"
                >
                  View Our Work
                </a>
              </div>
            </div>
            
            {/* Right Column: IDE Mockup */}
            <div className="lg:col-span-6 mt-xl lg:mt-0 relative flex justify-end">
              {/* Decorative background glow for the IDE */}
              <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full scale-100 pointer-events-none" />
              <div className="relative z-10 w-full max-w-[600px]" style={{ transform: 'scale(0.95)', transformOrigin: 'center right' }}>
                <IDEMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            Section 2 — Tech Stack Marquee
        ══════════════════════════════════════════ */}
        <Marquee />

        {/* ══════════════════════════════════════════
            Section 3 — Services Preview
        ══════════════════════════════════════════ */}
        <section
          id="services"
          className="relative z-10 max-w-[1200px] mx-auto px-lg py-section"
        >
          {/* Section Header */}
          <div className="text-center mb-xxl">
            <div className="flex items-center justify-center gap-sm mb-lg">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-caption-uppercase text-primary tracking-[0.25em]">
                Capabilities
              </span>
              <div className="w-10 h-[1px] bg-primary" />
            </div>
            <h2 className="text-display-lg text-ink mb-base">
              What we do best
            </h2>
            <p className="text-body-md text-body max-w-[520px] mx-auto">
              We specialize in transforming complex challenges into elegant, high-performance digital experiences.
            </p>
          </div>

          {/* Services Hover Accordion */}
          <div className="max-w-[900px] mx-auto border-t border-hairline mt-xl" id="services-accordion">
            {SERVICES.map((service, index) => (
              <ScrollReveal key={service.title} delay={`${index * 80}ms`}>
                <div
                  className="group border-b border-hairline transition-colors duration-300 hover:bg-surface-card hover:border-hairline-strong overflow-hidden cursor-pointer"
                  id={`service-accordion-${index}`}
                >
                  <div className="w-full text-left py-lg px-base md:px-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-md md:gap-xl">
                        <span className="text-caption font-mono text-muted group-hover:text-primary transition-colors duration-300">
                          0{index + 1}
                        </span>
                        <h3 className="text-title-lg md:text-display-md text-ink group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <div 
                        className="w-[48px] h-[48px] flex-shrink-0 rounded-full border border-hairline flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0"
                        style={{ color: service.accentColor, borderColor: service.accentColor }}
                      >
                        {service.icon}
                      </div>
                    </div>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <div className="pt-md pb-xs md:pr-[120px] ml-[40px] md:ml-[72px]">
                          <p className="text-body-md text-body leading-relaxed">
                            {service.description}
                          </p>
                          <a href="/services" className="inline-flex mt-sm text-caption-uppercase text-primary hover:underline tracking-widest gap-xs items-center">
                            Explore Service
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Link to full services */}
          <div className="text-center mt-xl">
            <a
              href="/services"
              className="text-caption-uppercase text-primary no-underline hover:underline tracking-[0.15em] inline-flex items-center gap-xs"
              id="services-view-all"
            >
              View All Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            Section 4 — Selected Work / Portfolio
        ══════════════════════════════════════════ */}
        <div className="relative z-10 border-t border-hairline">
          <section
            id="portfolio"
            className="max-w-[1200px] mx-auto px-lg py-section"
          >
            {/* Section Header */}
            <div className="text-center mb-xxl">
              <div className="flex items-center justify-center gap-sm mb-lg">
                <div className="w-10 h-[1px] bg-primary" />
                <span className="text-caption-uppercase text-primary tracking-[0.25em]">
                  Selected Work
                </span>
                <div className="w-10 h-[1px] bg-primary" />
              </div>
              <h2 className="text-display-lg text-ink mb-base">
                Projects that speak{' '}
                <span className="text-primary italic">volumes.</span>
              </h2>
              <p className="text-body-md text-body max-w-[520px] mx-auto">
                Every project is a story of challenges conquered and visions realized.
                Here&apos;s a selection of our recent work.
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl" id="portfolio-grid">
              {PROJECTS.map((project, index) => (
                <ScrollReveal key={project.slug} delay={`${index * 150}ms`}>
                  <a
                    href="/works"
                    className="group block cursor-pointer rounded-lg border border-hairline overflow-hidden transition-all duration-500 hover:border-hairline-strong no-underline"
                    style={{ background: 'var(--color-surface-card)' }}
                    id={`portfolio-card-${project.slug}`}
                  >
                    {/* Screenshot Area */}
                    <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
                      <Image
                        src={project.screenshot}
                        alt={`${project.title} — ${project.tagline}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        priority={index < 2}
                      />
                      {/* Gradient fade */}
                      <div
                        className="absolute inset-0 z-10"
                        style={{
                          background:
                            'linear-gradient(to bottom, transparent 50%, var(--color-surface-card) 100%)',
                        }}
                      />
                      {/* Category badge */}
                      <span
                        className="absolute top-[16px] left-[16px] z-20 inline-flex items-center px-sm py-xxs rounded-pill text-caption-uppercase border border-white/20 backdrop-blur-md"
                        style={{
                          color: '#fff',
                          backgroundColor: `rgba(${project.accentRgb},0.5)`,
                        }}
                      >
                        {project.category}
                      </span>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-button bg-ink/70 text-canvas px-lg py-sm rounded-pill backdrop-blur-md border border-white/10 inline-flex items-center gap-xs">
                          View Case Study
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="px-lg pb-lg pt-sm">
                      <h3 className="text-display-sm text-ink mb-xxs group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-body-sm text-muted mb-base">
                        {project.tagline}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-xs">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-caption text-muted bg-canvas px-xs py-[2px] rounded-xs border border-hairline-soft"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Link to full works */}
            <div className="text-center mt-xl">
              <a
                href="/works"
                className="text-caption-uppercase text-primary no-underline hover:underline tracking-[0.15em] inline-flex items-center gap-xs"
                id="portfolio-view-all"
              >
                View All Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </section>
        </div>

        {/* ══════════════════════════════════════════
            Section 5 — Process Overview
        ══════════════════════════════════════════ */}
        <section
          id="process"
          className="relative z-10 max-w-[1200px] mx-auto px-lg py-section"
        >
          {/* Section Header */}
          <div className="text-center mb-xxl">
            <div className="flex items-center justify-center gap-sm mb-lg">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-caption-uppercase text-primary tracking-[0.25em]">
                Our Process
              </span>
              <div className="w-10 h-[1px] bg-primary" />
            </div>
            <h2 className="text-display-lg text-ink mb-base">
              From concept to{' '}
              <span className="text-primary italic">continuous growth.</span>
            </h2>
            <p className="text-body-md text-body max-w-[520px] mx-auto">
              Every project follows a proven framework — but the execution is always bespoke.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-lg" id="process-grid">
            {PROCESS_STEPS.map((step, index) => (
              <ScrollReveal key={step.number} delay={`${index * 80}ms`}>
                <div
                  className="group text-center flex flex-col items-center relative"
                  id={`process-step-${step.number}`}
                >
                  {/* Connecting Arrow (visible only on desktop grid) */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-[31px] left-[calc(50%+40px)] w-[calc(100%-40px)] h-[1px] bg-hairline-strong z-0 pointer-events-none">
                      <div className="absolute right-0 top-1/2 -translate-y-[1px] w-[6px] h-[6px] border-t border-r border-hairline-strong rotate-45"></div>
                    </div>
                  )}

                  {/* Number Circle */}
                  <div
                    className="relative z-10 w-[64px] h-[64px] rounded-full border-2 border-hairline flex items-center justify-center mb-base transition-all duration-500 group-hover:border-primary/50"
                    style={{ background: 'var(--color-canvas)' }}
                  >
                    <span
                      className="text-caption-uppercase font-mono tracking-wider"
                      style={{ color: `rgb(${step.accentRgb})` }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-title-sm text-ink mb-xs">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-caption text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Link to full process */}
          <div className="text-center mt-xl">
            <a
              href="/studio"
              className="text-caption-uppercase text-primary no-underline hover:underline tracking-[0.15em] inline-flex items-center gap-xs"
              id="process-view-all"
            >
              View Full Process
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            Section 6 — Testimonials
        ══════════════════════════════════════════ */}
        <div className="relative z-10 border-t border-hairline">
          <Testimonials />
        </div>

        {/* ══════════════════════════════════════════
            Section 7 — Cinematic CTA Band
        ══════════════════════════════════════════ */}
        <section
          id="cta-band"
          className="relative z-10 overflow-hidden"
          style={{ height: '500px' }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(245,78,0,0.08) 0%, rgba(192,168,221,0.06) 50%, rgba(159,187,224,0.08) 100%)',
            }}
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(ellipse at center bottom, rgba(245,78,0,0.12) 0%, transparent 60%)',
            }}
          />
          {/* Top border */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-hairline" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-lg">
            <h2 className="text-display-lg text-ink mb-xl">
              Ready to transform your digital presence?
            </h2>
            <p className="text-body-md text-body max-w-[520px] mx-auto mb-xl">
              Let&apos;s discuss your vision and build something that sets you apart
              from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-base">
              <a
                href="/contactUs"
                className="text-button bg-ink text-canvas px-xl py-base rounded-md no-underline transition-all duration-500 hover:bg-primary hover:text-on-primary inline-flex items-center justify-center tracking-wider"
                style={{ height: '52px' }}
                id="cta-band-contact"
              >
                Start a Conversation
              </a>
              <a
                href="/works"
                className="text-button border border-hairline-strong text-ink px-xl py-base rounded-md no-underline transition-all duration-500 hover:border-primary hover:text-primary inline-flex items-center justify-center tracking-wider backdrop-blur-sm"
                style={{ height: '52px', background: 'transparent' }}
                id="cta-band-works"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
