import ScrollReveal from './ScrollReveal';

export default function Process() {
  const steps = [
    {
      pill: 'DISCOVERY',
      colorVar: 'var(--color-timeline-thinking)',
      title: 'Discovery',
      description: 'We start by listening. Deep-dive conversations to understand your business, audience, goals, and constraints. No assumptions — just clarity.'
    },
    {
      pill: 'STRATEGY',
      colorVar: 'var(--color-timeline-grep)',
      title: 'Strategy',
      description: 'Insights become architecture. We map user journeys, define content hierarchy, and establish a technical blueprint before a single pixel is placed.'
    },
    {
      pill: 'DESIGN',
      colorVar: 'var(--color-timeline-read)',
      title: 'Design',
      description: 'Wireframes evolve into high-fidelity prototypes. Every interaction, every micro-animation, every typographic choice is deliberate and purposeful.'
    },
    {
      pill: 'DEVELOP',
      colorVar: 'var(--color-timeline-edit)',
      title: 'Develop',
      description: 'Clean, performant code built on modern frameworks. We engineer for speed, accessibility, and scalability — no shortcuts, no tech debt.'
    },
    {
      pill: 'LAUNCH',
      colorVar: 'var(--color-timeline-done)',
      title: 'Launch',
      description: 'Rigorous QA, staging review, and a seamless deployment. We don\'t just push to production — we orchestrate a launch that\'s rock-solid.'
    },
    {
      pill: 'EVOLVE',
      colorVar: 'var(--color-timeline-grep)',
      title: 'Evolve',
      description: 'Post-launch isn\'t post-care. We monitor, iterate, and optimize based on real user data. Your product keeps getting better.'
    }
  ];

  return (
    <section id="process" className="bg-canvas py-section border-t border-hairline">
      <div className="max-w-[1200px] mx-auto px-lg">
        <div className="text-center mb-xxl">
          <p className="text-caption-uppercase text-muted mb-sm">
            How We Ship
          </p>
          <h2 className="text-display-lg text-ink mb-base">
            Methodical execution
          </h2>
          <p className="text-body-md text-body max-w-[520px] mx-auto">
            From initial concept to final deployment, our process is designed for precision, speed, and scale.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto relative">
          {/* Vertical Hairline Tracker */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-hairline-soft transform md:-translate-x-1/2 hidden sm:block"></div>

          <div className="flex flex-col gap-lg">
            {steps.map((step, index) => (
              <ScrollReveal key={step.pill} delay={`${index * 150}ms`}>
                <div className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-md ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Pill Center Marker */}
                  <div className={`hidden sm:flex absolute left-[24px] md:left-1/2 top-0 sm:top-1/2 transform sm:-translate-y-1/2 md:-translate-x-1/2 z-10 bg-canvas py-xxs ${index % 2 === 0 ? 'pr-sm' : 'pl-sm'}`}>
                  <span 
                    className="text-caption-uppercase px-[10px] py-[4px] rounded-pill text-ink"
                    style={{ backgroundColor: step.colorVar, color: step.pill === 'SHIPPED' ? 'var(--color-on-primary)' : 'var(--color-ink)' }}
                  >
                    {step.pill}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-[calc(100%-60px)] md:w-1/2 ${index % 2 === 0 ? 'md:pl-xl' : 'md:pr-xl text-left md:text-right'} sm:pl-[60px] md:pl-0`}>
                  {/* Mobile Pill (Visible only on very small screens where relative positioning breaks) */}
                  <span 
                    className="sm:hidden inline-block text-caption-uppercase px-[10px] py-[4px] rounded-pill mb-sm"
                    style={{ backgroundColor: step.colorVar, color: step.pill === 'SHIPPED' ? 'var(--color-on-primary)' : 'var(--color-ink)' }}
                  >
                    {step.pill}
                  </span>
                  
                  <div className="bg-surface-card rounded-lg border border-hairline p-lg transition-colors hover:border-hairline-strong">
                    <h3 className="text-title-md text-ink mb-xs">{step.title}</h3>
                    <p className="text-body-sm text-body">{step.description}</p>
                  </div>
                </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
