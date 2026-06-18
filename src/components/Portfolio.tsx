interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
}

const PROJECTS: Project[] = [
  {
    title: 'NovaPay Dashboard',
    description: 'A real-time fintech analytics dashboard with dynamic data visualizations, multi-currency support, and enterprise-grade security integrations.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    category: 'Fintech',
  },
  {
    title: 'Bloom E-Commerce',
    description: 'Complete redesign and rebuild of a premium plant retailer\'s online store — boosting conversion rate by 47% through refined UX and mobile-first architecture.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'PostgreSQL'],
    category: 'E-Commerce',
  },
  {
    title: 'Meridian Health',
    description: 'HIPAA-compliant patient portal with telehealth scheduling, encrypted messaging, and seamless EHR integration for a 200+ provider network.',
    tags: ['React', 'AWS', 'GraphQL', 'Docker'],
    category: 'Healthcare',
  },
  {
    title: 'Arclight Studios',
    description: 'Portfolio and booking platform for a creative production studio, featuring immersive video backgrounds, project showcases, and real-time availability calendars.',
    tags: ['Next.js', 'Three.js', 'Prisma', 'Vercel'],
    category: 'Creative',
  },
  {
    title: 'Vertex SaaS Platform',
    description: 'End-to-end SaaS marketing site and application dashboard for a B2B workflow automation tool, including interactive product demos and billing integration.',
    tags: ['Vue.js', 'Nuxt', 'Stripe', 'Firebase'],
    category: 'SaaS',
  },
  {
    title: 'Nomad Travel App',
    description: 'Cross-platform travel planning web app with AI-powered itinerary generation, collaborative trip boards, and offline-first progressive web app architecture.',
    tags: ['React', 'PWA', 'OpenAI', 'MongoDB'],
    category: 'Travel',
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-canvas py-section"
    >
      <div className="max-w-[1200px] mx-auto px-lg">
        {/* Section Header */}
        <div className="text-center mb-xxl">
          <p className="text-caption-uppercase text-muted mb-sm">
            Our Work
          </p>
          <h2 className="text-display-lg text-ink mb-base">
            Projects that speak for themselves
          </h2>
          <p className="text-body-md text-body max-w-[520px] mx-auto">
            From fintech dashboards to creative portfolios — we craft tailored digital experiences across every industry.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg" id="portfolio-grid">
          {PROJECTS.map((project, index) => (
            <article
              key={project.title}
              className="bg-surface-card rounded-lg border border-hairline p-lg flex flex-col transition-all duration-300 hover:border-hairline-strong group"
              id={`portfolio-card-${index}`}
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-[180px] rounded-md bg-canvas-soft border border-hairline-soft mb-base overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-canvas-soft flex items-center justify-center">
                  {/* Abstract visual representation */}
                  <div className="flex flex-col items-center gap-xs opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    <div className="flex gap-xxs">
                      <div className="w-[32px] h-[32px] rounded-md bg-surface-strong"></div>
                      <div className="w-[52px] h-[32px] rounded-md bg-surface-strong"></div>
                    </div>
                    <div className="w-[88px] h-[6px] rounded-pill bg-surface-strong"></div>
                    <div className="w-[64px] h-[6px] rounded-pill bg-primary opacity-40"></div>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <span className="text-caption-uppercase bg-surface-strong text-ink px-[10px] py-[4px] rounded-pill self-start mb-sm">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-title-md text-ink mb-xs">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-body-sm text-body mb-base flex-1">
                {project.description}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
