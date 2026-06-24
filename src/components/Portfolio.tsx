'use client';

import { useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Ideora',
    description: 'A next-generation collaborative meeting platform that transforms brainstorming sessions into structured action plans with automated minutes and smart task extraction.',
    tags: ['Next.js', 'TypeScript', 'AI/ML', 'Real-time'],
    category: 'SaaS Platform',
  },
  {
    title: 'HazeHaus',
    description: 'A warm, inviting e-commerce platform for a mother-daughter duo selling handmade crochet plushies, apparel, and accessories — complete with product filtering, cart system, and beautiful storytelling.',
    tags: ['Next.js', 'Clerk Auth', 'E-Commerce', 'CSS Animations'],
    category: 'E-Commerce',
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
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <ScrollReveal delay={`${index * 100}ms`} className="h-full">
      <article
        className="bg-surface-card rounded-lg border border-hairline p-lg flex flex-col transition-all duration-300 hover:border-hairline-strong group h-full"
        id={`portfolio-card-${index}`}
      >
        {/* Project Image Placeholder */}
        <div 
          className="w-full h-[180px] rounded-md bg-canvas-soft border border-hairline-soft mb-base overflow-hidden flex items-center justify-center relative cursor-none"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        {/* Magnetic Blob */}
        <div 
          className="absolute pointer-events-none rounded-full bg-primary flex items-center justify-center z-50"
          style={{
            width: '80px',
            height: '80px',
            left: 0,
            top: 0,
            transform: `translate(${mousePos.x - 40}px, ${mousePos.y - 40}px) scale(${isHovered ? 1 : 0.5})`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease, transform 0.1s ease-out, scale 0.3s ease',
            willChange: 'transform, opacity'
          }}
        >
          <span className="text-on-primary text-code font-medium tracking-wider">VIEW</span>
        </div>

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
      <h3 className="text-title-md text-ink mb-xs group-hover:text-primary transition-colors duration-300">
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
    </ScrollReveal>
  );
}
