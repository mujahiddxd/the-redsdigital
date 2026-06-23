'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

/* ── Team Members ── */
interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    name: 'Sabrae',
    role: 'Founder & Lead Developer',
    initials: 'S',
    bio: 'Full-stack architect with a passion for crafting performant, beautiful digital experiences. Obsessed with clean code and pixel-perfect interfaces.',
  },
];


export default function StudioPage() {
  const [activeStep, setActiveStep] = useState(0);

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
          id="studio-hero"
          className="relative z-10 pt-[120px] pb-[60px] max-w-[1200px] mx-auto px-lg"
        >
          {/* Eyebrow */}
          {/* <div className="flex items-center gap-sm mb-lg">
            <div className="w-10 h-[1px] bg-primary" />
            <span className="text-caption-uppercase text-primary tracking-[0.25em]">
              The Studio
            </span>
          </div> */}

          {/* Headline */}
          <h1 className="text-display-mega text-ink mb-lg leading-tight max-w-[800px]">
            How we turn ideas into{' '}
            <span className="text-primary italic">digital reality.</span>
          </h1>

          {/* Subhead */}
          <p className="text-body-md text-body max-w-[600px]">
            We&apos;re a small, focused team that believes in doing fewer things
            exceptionally well. Our process is deliberate, our craft is
            meticulous, and our partnerships are built to last.
          </p>
        </section>



        {/* ══════════════════════════════════════════
            Section 3 — Process
        ══════════════════════════════════════════ */}
        <section
          id="studio-process"
          className="relative z-10 max-w-[1200px] mx-auto px-lg pb-section"
        >
          {/* Section Header */}
          <div className="mb-xxl">
            <div className="flex items-center gap-sm mb-lg">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-caption-uppercase text-primary tracking-[0.25em]">
                Our Process
              </span>
            </div>
            <h2 className="text-display-lg text-ink mb-base max-w-[600px]">
              Six deliberate steps from concept to continuous growth.
            </h2>
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
                        <h3 className="text-display-md text-ink mb-sm">
                          {step.title}
                        </h3>
                        <p className="text-body-md text-body leading-relaxed max-w-[600px]">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Right side: Deliverables */}
                      <div className="xl:w-[280px] flex-shrink-0 pt-lg xl:pt-0 xl:border-l border-hairline xl:pl-lg">
                        <h4 className="text-caption-uppercase text-muted mb-sm tracking-[0.15em]">
                          Key Deliverables
                        </h4>
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
        </section>

        {/* ══════════════════════════════════════════
            Section 4 — Team
        ══════════════════════════════════════════ */}
        <section
          id="studio-team"
          className="relative z-10 max-w-[1200px] mx-auto px-lg pb-section"
        >
          {/* Section Header */}
          <div className="mb-xxl">
            <div className="flex items-center gap-sm mb-lg">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-caption-uppercase text-primary tracking-[0.25em]">
                The Team
              </span>
            </div>
            <h2 className="text-display-lg text-ink mb-base max-w-[600px]">
              Small team. Big ambitions.
            </h2>
            <p className="text-body-md text-body max-w-[500px]">
              We believe in staying lean and focused. Every person on our team
              is a craftsperson who cares deeply about quality.
            </p>
          </div>

          {/* Team Grid */}
          <div className="flex flex-wrap justify-center gap-xl" id="team-grid">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col items-center text-center w-[280px]"
                id={`team-${member.name.toLowerCase()}`}
              >
                {/* Avatar */}
                <div className="w-[200px] h-[200px] rounded-full border border-hairline bg-surface-card flex items-center justify-center mb-lg relative overflow-hidden transition-all duration-500 group-hover:border-primary/50">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-[64px] text-muted group-hover:text-primary transition-colors duration-500 relative z-10 font-light">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-display-sm text-ink mb-xs">
                  {member.name}
                </h3>
                <p className="text-caption-uppercase text-primary mb-base tracking-[0.1em]">
                  {member.role}
                </p>
                <p className="text-body-sm text-body">
                  {member.bio}
                </p>
              </div>
            ))}

            {/* "We're hiring / growing" placeholder card */}
            <div
              className="group flex flex-col items-center text-center w-[280px]"
            >
              <div className="w-[200px] h-[200px] rounded-full border border-dashed border-hairline-strong bg-transparent flex items-center justify-center mb-lg transition-all duration-500 group-hover:border-primary/50 group-hover:bg-surface-card/30">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted group-hover:text-primary transition-colors duration-500"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <p className="text-display-sm text-ink mb-xs">Your name here?</p>
              <p className="text-body-sm text-muted">
                We&apos;re always looking for exceptional talent.
              </p>
              <a
                href="/contactUs"
                className="text-caption-uppercase text-primary mt-base no-underline hover:underline tracking-[0.1em]"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            Section 5 — CTA Band
        ══════════════════════════════════════════ */}
        <section
          id="studio-cta"
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
              Ready to work together?
            </h2>
            <p className="text-body-md text-body max-w-[520px] mx-auto mb-xl">
              Now that you know how we work, let&apos;s talk about what we can
              build for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-base">
              <a
                href="/contactUs"
                className="text-button bg-ink text-canvas px-xl py-base rounded-md no-underline transition-all duration-500 hover:bg-primary hover:text-on-primary inline-flex items-center justify-center tracking-wider"
                style={{ height: '52px' }}
                id="studio-cta-contact"
              >
                Start a Project
              </a>
              <a
                href="/works"
                className="text-button border border-hairline-strong text-ink px-xl py-base rounded-md no-underline transition-all duration-500 hover:border-primary hover:text-primary inline-flex items-center justify-center tracking-wider backdrop-blur-sm"
                style={{ height: '52px', background: 'transparent' }}
                id="studio-cta-works"
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
