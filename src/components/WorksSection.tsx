'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

/* ── Project Data ── */
interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  category: string;
  screenshot: string;
  liveUrl: string;
  accentRgb: string;
}

const PROJECTS: Project[] = [
  {
    slug: 'ideora',
    title: 'Ideora',
    tagline: 'AI-powered meeting platform that delivers results.',
    description:
      'A next-generation collaborative meeting platform that transforms brainstorming sessions into structured action plans with automated minutes and smart task extraction.',
    challenge:
      'Traditional meetings produce mountains of unstructured notes that never get acted on. Teams needed a way to run meetings that automatically capture decisions, assign action items, and generate documentation — without disrupting natural conversation flow.',
    solution:
      'We built Ideora with structured idea boards, real-time collaboration, and an event-driven AI engine that handles documentation, task extraction, and follow-up preparation within controlled boundaries. The platform features guest access, workspace creation, and a four-step workflow: Initialize → Collaborate → Decide → Dispatch.',
    results: [
      'Instant meeting setup with zero friction',
      'Automated minutes generation',
      'Structured boards for idea categorization',
      'Smart AI-driven task extraction',
    ],
    tags: ['Next.js', 'TypeScript', 'AI/ML', 'Real-time'],
    category: 'SaaS Platform',
    screenshot: '/ideora.jpg',
    liveUrl: 'https://ideora-h6ou.vercel.app/',
    accentRgb: '99,102,241',
  },
  {
    slug: 'hazehaus',
    title: 'HazeHaus',
    tagline: 'Handmade crochet creations, crafted with love.',
    description:
      'A warm, inviting e-commerce platform for a mother-daughter duo selling handmade crochet plushies, apparel, and accessories — complete with product filtering, cart system, and beautiful storytelling.',
    challenge:
      'HazeHaus needed an online store that felt as personal and handcrafted as their products. Generic e-commerce templates couldn\'t capture the warmth and artisanal quality of their brand. They needed a custom experience with product filtering, a shopping cart, search, and a storytelling layer to connect with customers emotionally.',
    solution:
      'We designed and built a fully custom e-commerce experience with a cinematic needle-thread splash animation, product grid with category filtering, integrated cart sidebar, full-text search overlay, and dedicated creator story sections. The warm cream and burgundy palette mirrors the handmade aesthetic of their creations.',
    results: [
      'Custom splash animation with brand identity',
      'Product filtering by category',
      'Integrated cart and checkout flow',
      'Creator storytelling sections',
    ],
    tags: ['Next.js', 'Clerk Auth', 'E-Commerce', 'CSS Animations'],
    category: 'E-Commerce',
    screenshot: '/peak-blush.jpg',
    liveUrl: 'https://peaks-blush.vercel.app/',
    accentRgb: '139,69,69',
  },

  {
    slug: 'aeteesbakehouse',
    title: 'Aetee\'s Bakehouse',
    tagline: 'Artisanal baked goods and pastries.',
    description:
      'A beautiful and appetizing e-commerce and showcase website for an artisanal bakehouse, featuring an elegant design that highlights their delicious offerings.',
    challenge:
      'The bakehouse needed a digital presence that matched the quality and aesthetics of their physical products, with a focus on visual appeal and easy navigation for customers.',
    solution:
      'We designed a visually rich, mouth-watering website with a warm color palette, high-quality image galleries, and a smooth user experience that perfectly represents the brand.',
    results: [
      'Elegant and appetizing design',
      'Seamless user experience',
      'High-quality image galleries',
      'Increased online visibility',
    ],
    tags: ['Next.js', 'E-Commerce', 'Web Design'],
    category: 'E-Commerce',
    screenshot: '/aeteesbakehouse.png',
    liveUrl: 'https://aeteesbakehouse.com/',
    accentRgb: '210,105,30',
  },
  {
    slug: 'chimanlals',
    title: 'Chimanlals',
    tagline: 'Premium paper products and stationery.',
    description:
      'A digital storefront for a heritage brand specializing in handcrafted paper products, stationery, and bespoke designs.',
    challenge:
      'The client needed a modern e-commerce platform that preserves their rich heritage while providing a seamless, fast, and user-friendly shopping experience for a global audience.',
    solution:
      'We developed a custom e-commerce solution that balances traditional aesthetics with modern performance, featuring an intuitive product catalog, streamlined checkout, and mobile-responsive design.',
    results: [
      'Preserved brand heritage digitally',
      'Modern, performant e-commerce',
      'Intuitive product catalog',
      'Streamlined checkout process',
    ],
    tags: ['Next.js', 'E-Commerce', 'UI/UX'],
    category: 'E-Commerce',
    screenshot: '/chimanlals.png',
    liveUrl: 'https://chimanlals-dep.vercel.app/',
    accentRgb: '184,134,11',
  },
];


/* ── Filter categories ── */
const CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

/* ── Work Page Testimonials ── */
const WORKS_TESTIMONIALS = [
  {
    quote: "Euphatics took our vision for an AI-powered meeting platform and turned it into a reality. The automated minutes and smart task extraction they built are incredible. Our users love the structured idea boards.",
    name: "Alex Mercer",
    role: "Co-Founder",
    company: "Ideora",
    initials: "AM",
  },
  {
    quote: "The e-commerce experience Euphatics crafted for us is so warm and inviting. The custom animations and storytelling layer truly capture the handmade essence of our crochet creations.",
    name: "Clara & Hazel",
    role: "Founders",
    company: "Peak Blush",
    initials: "CH",
  }
];

export default function WorksSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  /* ── Open modal ── */
  const openProject = useCallback((project: Project) => {
    setSelectedProject(project);
    requestAnimationFrame(() => setIsModalAnimating(true));
    document.body.style.overflow = 'hidden';
  }, []);

  /* ── Close modal ── */
  const closeProject = useCallback(() => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = '';
    }, 400);
  }, []);

  /* ── Escape key handler ── */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) closeProject();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedProject, closeProject]);

  return (
    <section id="works" className="relative w-full">
      {/* ══════════════════════════════════════════
          Section 1 — Header
      ══════════════════════════════════════════ */}
      <div className="relative z-10 pt-[120px] pb-[60px] max-w-[1200px] mx-auto px-lg">
        {/* Eyebrow */}
        <div className="flex items-center gap-sm mb-lg">
          <div className="w-10 h-[1px] bg-primary" />
          <span className="text-caption-uppercase text-primary tracking-[0.25em]">
            Selected Work
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-display-mega text-ink mb-lg leading-tight max-w-4xl">
          Projects that{' '}
          <span className="text-primary italic">speak volumes.</span>
        </h2>

        {/* Subhead */}
        <p className="text-body-md text-body max-w-2xl mb-xl">
          Every project is a story of challenges conquered and visions realized.
          Here&apos;s a selection of our recent work — click any project to
          explore the full case study.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-xs" id="works-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="text-caption-uppercase px-base py-xs rounded-pill border cursor-pointer transition-all duration-300"
              style={{
                backgroundColor:
                  activeFilter === cat
                    ? 'var(--color-primary)'
                    : 'transparent',
                color:
                  activeFilter === cat
                    ? 'var(--color-on-primary)'
                    : 'var(--color-muted)',
                borderColor:
                  activeFilter === cat
                    ? 'var(--color-primary)'
                    : 'var(--color-hairline)',
              }}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          Section 2 — Project Grid (2 columns)
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-lg pb-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl" id="works-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group cursor-pointer rounded-lg border border-hairline overflow-hidden transition-all duration-500 md:hover:border-hairline-strong"
              style={{
                background: 'var(--color-surface-card)',
              }}
              onClick={() => openProject(project)}
              id={`work-card-${project.slug}`}
            >
              {/* Screenshot Area */}
              <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
                <Image
                  src={project.screenshot}
                  alt={`${project.title} — ${project.tagline}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 md:group-hover:scale-105"
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
                {/* Hover overlay CTA */}
                <div className="absolute inset-0 z-20 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span
                    className="text-button bg-ink/70 text-canvas px-lg py-sm rounded-pill backdrop-blur-md border border-white/10 inline-flex items-center gap-xs"
                  >
                    View Case Study
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-lg pb-lg pt-sm">
                <h3 className="text-display-sm text-ink mb-xxs md:group-hover:text-primary transition-colors duration-300">
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
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-xxl">
            <p className="text-body-md text-muted">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════
          Expanded Project Modal
      ══════════════════════════════════════════ */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center"
          onClick={closeProject}
          id="works-modal-overlay"
        >
          {/* Blurred page backdrop */}
          <div
            className="absolute inset-0 z-0 transition-opacity duration-500"
            style={{
              opacity: isModalAnimating ? 1 : 0,
              backdropFilter: 'blur(20px) saturate(1.2)',
              WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
              backgroundColor: 'rgba(0,0,0,0.15)',
            }}
          />

          {/* Modal Card */}
          <div
            className="relative z-10 w-full max-w-[900px] mx-lg my-[80px] rounded-lg border border-hairline/30 overflow-y-auto"
            style={{
              background: 'var(--color-surface-card)',
              maxHeight: 'calc(100vh - 120px)',
              transform: isModalAnimating
                ? 'translateY(0) scale(1)'
                : 'translateY(40px) scale(0.96)',
              opacity: isModalAnimating ? 1 : 0,
              transition:
                'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
            }}
            onClick={(e) => e.stopPropagation()}
            id="works-modal-card"
          >
            {/* Close button */}
            <button
              onClick={closeProject}
              className="fixed top-[24px] right-[24px] z-50 w-10 h-10 rounded-pill border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/20"
              aria-label="Close project detail"
              id="works-modal-close"
              style={{ color: '#fff' }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Hero Image */}
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
              <Image
                src={selectedProject.screenshot}
                alt={selectedProject.title}
                fill
                className="object-cover object-top"
                sizes="900px"
              />
              {/* Gradient fade */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 40%, var(--color-surface-card) 100%)',
                }}
              />
              {/* Category + Live link */}
              <div className="absolute top-[20px] left-[20px] z-20 flex items-center gap-sm">
                <span
                  className="inline-flex items-center px-sm py-xxs rounded-pill text-caption-uppercase border border-white/20 backdrop-blur-md"
                  style={{
                    color: '#fff',
                    backgroundColor: `rgba(${selectedProject.accentRgb},0.5)`,
                  }}
                >
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="px-xl md:px-xxl pb-xxl -mt-[60px] relative z-20">
              {/* Title row */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-base mb-xl">
                <div>
                  <h3 className="text-display-lg text-ink mb-xxs">
                    {selectedProject.title}
                  </h3>
                  <p className="text-body-md text-primary">
                    {selectedProject.tagline}
                  </p>
                </div>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-button bg-primary text-on-primary px-lg py-sm rounded-md no-underline transition-all duration-300 hover:bg-primary-active inline-flex items-center gap-xs self-start md:self-auto flex-shrink-0"
                  id={`modal-visit-${selectedProject.slug}`}
                >
                  Visit Live Site
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              {/* Description */}
              <p className="text-body-md text-body mb-xl leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xl">
                <div>
                  <h4 className="text-caption-uppercase text-primary mb-sm tracking-[0.15em]">
                    The Challenge
                  </h4>
                  <p className="text-body-sm text-body leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-caption-uppercase text-primary mb-sm tracking-[0.15em]">
                    Our Solution
                  </h4>
                  <p className="text-body-sm text-body leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-xl">
                <h4 className="text-caption-uppercase text-primary mb-base tracking-[0.15em]">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                  {selectedProject.results.map((result, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-sm p-base border border-hairline rounded-md"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary flex-shrink-0 mt-[2px]"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span className="text-body-sm text-body">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="border-t border-hairline pt-lg">
                <h4 className="text-caption-uppercase text-muted mb-sm tracking-[0.15em]">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-xs">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-caption text-body bg-canvas px-sm py-xxs rounded-pill border border-hairline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
