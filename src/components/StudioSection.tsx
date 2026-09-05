'use client';

import { useState } from 'react';

/* ── Process Steps ── */
interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  accentRgb: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by listening. Deep-dive conversations to understand your business, audience, goals, and constraints. No assumptions — just clarity.',
    deliverables: ['Stakeholder interviews', 'Competitive audit', 'Goal alignment brief'],
    accentRgb: '245,78,0',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Insights become architecture. We map user journeys, define content hierarchy, and establish a technical blueprint before a single pixel is placed.',
    deliverables: ['Information architecture', 'User flow diagrams', 'Technical specification'],
    accentRgb: '192,168,221',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Wireframes evolve into high-fidelity prototypes. Every interaction, every micro-animation, every typographic choice is deliberate and purposeful.',
    deliverables: ['Wireframes & prototypes', 'Visual design system', 'Interactive mockups'],
    accentRgb: '159,201,162',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Develop',
    description:
      'Clean, performant code built on modern frameworks. We engineer for speed, accessibility, and scalability — no shortcuts, no tech debt.',
    deliverables: ['Frontend & backend build', 'API integrations', 'Performance optimization'],
    accentRgb: '159,187,224',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Rigorous QA, staging review, and a seamless deployment. We don\'t just push to production — we orchestrate a launch that\'s rock-solid.',
    deliverables: ['Cross-browser QA', 'Staging environment review', 'Production deployment'],
    accentRgb: '223,168,143',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Evolve',
    description:
      'Post-launch isn\'t post-care. We monitor, iterate, and optimize based on real user data. Your product keeps getting better.',
    deliverables: ['Analytics setup', 'A/B testing', 'Continuous iteration'],
    accentRgb: '192,133,50',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

/* ── Studio Pillars ── */
interface StudioPillar {
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

const PILLARS: StudioPillar[] = [
  {
    tag: '01 / Rigor',
    title: 'Engineering Rigor',
    description:
      'Zero bloated dependencies or shortcuts. We build fast, scalable, and secure web applications designed for long-term maintainability.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    tag: '02 / Design',
    title: 'User-Centric Craft',
    description:
      'Interfaces forged through research and taste. We combine crisp typography, smooth motion, and purposeful hierarchy to drive conversions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    tag: '03 / Agility',
    title: 'Direct Partnership',
    description:
      'No unnecessary layers, account managers, or bloated bureaucracy. You work directly with experienced practitioners who execute fast.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];


export default function StudioSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="studio" className="relative w-full">
      {/* ══════════════════════════════════════════
          Section 1 — Hero
      ══════════════════════════════════════════ */}
      <div className="relative z-10 pt-[120px] pb-[60px] max-w-[1200px] mx-auto px-lg">
        {/* Headline */}
        <h2 className="text-display-mega text-ink mb-lg leading-tight max-w-[800px]">
          How we turn ideas into{' '}
          <span className="text-primary italic">digital reality.</span>
        </h2>

        {/* Subhead */}
        <p className="text-body-md text-body max-w-[600px]">
          We&apos;re a small, focused team that believes in doing fewer things
          exceptionally well. Our process is deliberate, our craft is
          meticulous, and our partnerships are built to last.
        </p>
      </div>

      {/* ══════════════════════════════════════════
          Section 2 — Process
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-lg pb-section mt-xl">
        {/* Section Header */}
        <div className="mb-xxl">
          <div className="flex items-center gap-sm mb-lg">
            <div className="w-10 h-[1px] bg-primary" />
            <span className="text-caption-uppercase text-primary tracking-[0.25em]">
              Our Process
            </span>
          </div>
          <h3 className="text-display-lg text-ink mb-base max-w-[600px]">
            Six deliberate steps from concept to continuous growth.
          </h3>
          <p className="text-body-md text-body max-w-[500px]">
            Every project follows a proven framework — but the execution is
            always bespoke. Here&apos;s how we work.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Continuous vertical line */}
          <div className="absolute top-[40px] bottom-[40px] left-[27px] md:left-[39px] w-[2px] bg-hairline z-0" />

          <div className="flex flex-col gap-xl relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.number}
                className="group flex flex-row items-start gap-md md:gap-xl"
                id={`process-step-${step.number}`}
              >
                {/* Node & Icon */}
                <div className="flex-shrink-0 relative">
                  <div 
                    className="w-[56px] h-[56px] md:w-[80px] md:h-[80px] rounded-full bg-canvas border-2 border-hairline flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 relative z-10 shadow-[0_0_0_8px_var(--color-canvas)]"
                    style={{ color: `rgb(${step.accentRgb})` }}
                  >
                    <div className="transform scale-75 md:scale-100">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div 
                  className="flex-1 p-lg md:p-xl rounded-lg border border-hairline transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-sm" 
                  style={{ background: 'var(--color-surface-card)' }}
                >
                  <div className="flex flex-col xl:flex-row xl:items-start gap-lg xl:gap-xl">
                    {/* Left side: Description */}
                    <div className="flex-1">
                      <span
                        className="text-caption-uppercase mb-xxs block tracking-[0.15em] font-mono"
                        style={{ color: `rgb(${step.accentRgb})` }}
                      >
                        Phase {step.number}
                      </span>
                      <h4 className="text-display-md text-ink mb-sm">
                        {step.title}
                      </h4>
                      <p className="text-body-md text-body leading-relaxed max-w-[600px]">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Right side: Deliverables */}
                    <div className="xl:w-[280px] flex-shrink-0 pt-lg xl:pt-0 xl:border-l border-hairline xl:pl-lg">
                      <h5 className="text-caption-uppercase text-muted mb-sm tracking-[0.15em]">
                        Key Deliverables
                      </h5>
                      <div className="flex flex-col gap-xs">
                        {step.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-sm">
                            <div
                              className="w-[6px] h-[6px] rounded-full flex-shrink-0 opacity-80"
                              style={{ backgroundColor: `rgb(${step.accentRgb})` }}
                            />
                            <span className="text-body-sm text-body">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          Section 3 — About Euphatics
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-lg pb-section mt-xl">
        {/* Section Header */}
        <div className="mb-xxl">
          <div className="flex items-center gap-sm mb-lg">
            <div className="w-10 h-[1px] bg-primary" />
            <span className="text-caption-uppercase text-primary tracking-[0.25em]">
              About Euphatics
            </span>
          </div>
          <h3 className="text-display-lg text-ink mb-base max-w-[600px]">
            Crafting digital excellence with focus and precision.
          </h3>
          <p className="text-body-md text-body max-w-[540px]">
            We believe in staying lean, agile, and relentlessly focused on quality. At Euphatics, we partner with ambitious brands to design and engineer scalable digital products that deliver real business impact.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg" id="pillars-grid">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-lg md:p-xl rounded-lg border border-hairline bg-surface-card transition-all duration-300 hover:border-primary/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-caption-uppercase text-muted font-mono text-xs tracking-wider">
                    {pillar.tag}
                  </span>
                </div>
                <h4 className="text-display-sm text-ink mb-sm">
                  {pillar.title}
                </h4>
                <p className="text-body-sm text-body leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Careers CTA */}
        <div className="mt-xl p-lg md:p-xl rounded-lg border border-hairline bg-surface-card flex flex-col md:flex-row items-start md:items-center justify-between gap-lg">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-xs mb-xs">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-caption-uppercase text-primary tracking-[0.15em] font-mono text-xs">
                Careers at Euphatics
              </span>
            </div>
            <h4 className="text-display-sm text-ink mb-xs">
              We&apos;re always looking for exceptional talent.
            </h4>
            <p className="text-body-sm text-body">
              Engineers, designers, and digital strategists — if you care deeply about craft and performance, we&apos;d love to work with you.
            </p>
          </div>
          <a
            href="https://wa.me/918097077235"
            className="text-button bg-primary text-on-primary px-[20px] py-[10px] rounded-md no-underline transition-colors duration-200 hover:bg-primary-active inline-flex items-center gap-xs flex-shrink-0"
            style={{ height: '40px' }}
          >
            <span>Join Our Team</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
