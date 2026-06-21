'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ── Service Data ── */
interface ServiceSlide {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  accentColor: string;
  glowBg: string;
}

const SERVICES: ServiceSlide[] = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Scalable, secure, and blazingly fast architectures. We build bespoke web experiences that perform under pressure.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    image: '/services-web-dev.jpg',
    accentColor: 'var(--color-primary)',
    glowBg: 'radial-gradient(circle at center, rgba(245,78,0,0.12) 0%, transparent 70%)',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description:
      'Intuitive interfaces forged through rigorous research. We design for frictionless human-computer interaction.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    image: '/services-ui-ux.jpg',
    accentColor: 'var(--color-timeline-edit)',
    glowBg: 'radial-gradient(circle at center, rgba(192,168,221,0.12) 0%, transparent 70%)',
  },
  {
    number: '03',
    title: 'SEO Strategy',
    description:
      'Data-driven visibility. Technical optimization meets authoritative content architecture for maximum reach.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    accentColor: 'var(--color-timeline-grep)',
    glowBg: 'radial-gradient(circle at center, rgba(159,201,162,0.12) 0%, transparent 70%)',
  },
  {
    number: '04',
    title: 'Motion & Video',
    description:
      'Cinematic storytelling. High-end post-production and dynamic motion graphics that captivate audiences.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
        <line x1="17" y1="17" x2="22" y2="17" />
      </svg>
    ),
    accentColor: 'var(--color-timeline-read)',
    glowBg: 'radial-gradient(circle at center, rgba(159,187,224,0.12) 0%, transparent 70%)',
  },
  {
    number: '05',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform applications built for performance, engagement, and seamless user experiences.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    accentColor: 'var(--color-timeline-thinking)',
    glowBg: 'radial-gradient(circle at center, rgba(223,168,143,0.12) 0%, transparent 70%)',
  },
];

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dynamicBg, setDynamicBg] = useState(SERVICES[0].glowBg);
  const [isDesktop, setIsDesktop] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationRef = useRef<number>(0);

  /* ── Responsive check ── */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Measure slide width for centering ── */
  const measureAndCenter = useCallback(
    (index: number) => {
      if (!trackRef.current || !containerRef.current) return;
      const slides = Array.from(trackRef.current.children) as HTMLElement[];
      if (slides.length === 0) return;

      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const activeSlide = slides[index];
      const activeWidth = activeSlide.getBoundingClientRect().width;
      setSlideWidth(activeWidth);

      // Calculate offset: sum of all slide widths before active, then offset to center
      let offsetLeft = 0;
      for (let i = 0; i < index; i++) {
        offsetLeft += slides[i].getBoundingClientRect().width;
      }

      const centerOffset = (containerWidth - activeWidth) / 2;
      const translateX = -offsetLeft + centerOffset;

      currentTranslate.current = translateX;
      prevTranslate.current = translateX;

      trackRef.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
      trackRef.current.style.transform = `translateX(${translateX}px)`;
    },
    []
  );

  /* ── Update carousel ── */
  const updateCarousel = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setDynamicBg(SERVICES[index].glowBg);
      // Use requestAnimationFrame to ensure DOM has updated before measuring
      requestAnimationFrame(() => measureAndCenter(index));
    },
    [measureAndCenter]
  );

  useEffect(() => {
    // Delay initial measurement to ensure layout is settled
    const timer = setTimeout(() => updateCarousel(0), 50);
    const handleResize = () => measureAndCenter(currentIndex);
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Navigation ── */
  const goTo = (index: number) => {
    if (index >= 0 && index < SERVICES.length) {
      updateCarousel(index);
    }
  };

  /* ── Drag / Touch ── */
  const getPositionX = (e: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in e) return e.touches[0].clientX;
    return e.pageX;
  };

  const dragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    startPos.current = getPositionX(e);
    if (trackRef.current) trackRef.current.style.transition = 'none';
    animationRef.current = requestAnimationFrame(animateTrack);
  };

  const dragAction = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const pos = getPositionX(e);
    currentTranslate.current = prevTranslate.current + pos - startPos.current;
  };

  const dragEnd = () => {
    isDragging.current = false;
    cancelAnimationFrame(animationRef.current);

    const movedBy = currentTranslate.current - prevTranslate.current;
    let newIndex = currentIndex;

    // Swipe left (drag left = negative) → next slide
    if (movedBy < -50 && currentIndex < SERVICES.length - 1) {
      newIndex = currentIndex + 1;
    }
    // Swipe right (drag right = positive) → prev slide
    else if (movedBy > 50 && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }

    updateCarousel(newIndex);
  };

  const animateTrack = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
    if (isDragging.current) {
      animationRef.current = requestAnimationFrame(animateTrack);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 relative overflow-x-hidden">
        {/* Dynamic ambient glow behind content */}
        <div
          className="fixed inset-0 pointer-events-none transition-all duration-700 z-0"
          style={{ background: dynamicBg }}
        />

        {/* ── Header Section ── */}
        <section
          id="services-hero"
          className="relative z-10 pt-[120px] pb-[80px] max-w-[1200px] mx-auto px-lg text-center"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-sm mb-lg">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-caption-uppercase text-primary tracking-[0.2em]">
              Capabilities
            </span>
            <div className="w-12 h-[1px] bg-primary" />
          </div>

          {/* Headline */}
          <h1 className="text-display-mega text-ink mb-lg leading-tight">
            Digital excellence
            <br />
            <span className="text-muted italic">engineered for impact.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-body-md text-body max-w-2xl mx-auto">
            We specialize in transforming complex challenges into elegant, high-performance
            digital ecosystems. Our multidisciplinary approach ensures every touchpoint is
            optimized for aesthetic brilliance and functional superiority.
          </p>
        </section>

        {/* ── Carousel Section ── */}
        <section
          id="services-carousel"
          ref={containerRef}
          className="relative z-10 w-full overflow-hidden py-[48px]"
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="flex will-change-transform select-none"
            style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
            onMouseDown={dragStart}
            onMouseMove={dragAction}
            onMouseUp={dragEnd}
            onMouseLeave={() => { if (isDragging.current) dragEnd(); }}
            onTouchStart={dragStart}
            onTouchMove={dragAction}
            onTouchEnd={dragEnd}
          >
            {SERVICES.map((service, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={service.number}
                  className="flex-shrink-0 px-base transition-all duration-500"
                  style={{
                    flexBasis: isDesktop ? '60%' : '100%',
                    opacity: isActive ? 1 : 0.4,
                    transform: isActive ? 'scale(1)' : 'scale(0.92)',
                  }}
                >
                  {/* Bento Card */}
                  <div
                    className="relative w-full h-[420px] md:h-[450px] bg-surface-card border border-hairline rounded-lg overflow-hidden group flex flex-col justify-end p-lg md:p-xl transition-all duration-400 hover:border-primary/30"
                    style={{
                      boxShadow: isActive
                        ? `0 0 60px ${service.accentColor}15`
                        : 'none',
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/50 to-transparent z-10" />

                    {/* Curtain-reveal background image */}
                    {service.image && (
                      <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-600"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-20 flex flex-col h-full">
                      {/* Top row: Number badge + Icon */}
                      <div className="flex justify-between items-start">
                        <span
                          className="inline-flex items-center px-base py-xs rounded-pill text-caption-uppercase border border-hairline bg-surface-card/50 backdrop-blur-md"
                          style={{ color: service.accentColor }}
                        >
                          {service.number}
                        </span>
                        <span
                          className="opacity-30 group-hover:opacity-80 transition-opacity duration-300"
                          style={{ color: service.accentColor }}
                        >
                          {service.icon}
                        </span>
                      </div>

                      {/* Bottom: Title + Description */}
                      <div className="mt-auto">
                        <h2 className="text-display-sm text-ink mb-xs">
                          {service.title}
                        </h2>
                        <p className="text-body-md text-body md:w-2/3">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-base mt-xl">
            <button
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-pill border border-hairline flex items-center justify-center transition-all duration-200 hover:bg-surface-strong disabled:opacity-30 disabled:cursor-not-allowed bg-transparent text-ink cursor-pointer"
              aria-label="Previous service"
              id="services-prev"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex === SERVICES.length - 1}
              className="w-12 h-12 rounded-pill border border-hairline flex items-center justify-center transition-all duration-200 hover:bg-surface-strong disabled:opacity-30 disabled:cursor-not-allowed bg-transparent text-ink cursor-pointer"
              aria-label="Next service"
              id="services-next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-xs mt-lg">
            {SERVICES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="border-none bg-transparent cursor-pointer p-xxs"
                aria-label={`Go to service ${i + 1}`}
              >
                <div
                  className="rounded-pill transition-all duration-300"
                  style={{
                    width: i === currentIndex ? '24px' : '8px',
                    height: '8px',
                    backgroundColor:
                      i === currentIndex
                        ? 'var(--color-primary)'
                        : 'var(--color-hairline)',
                  }}
                />
              </button>
            ))}
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section
          id="services-cta"
          className="relative z-10 py-section max-w-[1200px] mx-auto px-lg text-center"
        >
          <h2 className="text-display-lg text-ink mb-[24px]">
            Ready to start your project?
          </h2>
          <p className="text-body-md text-body max-w-[576px] mx-auto mb-[32px]">
            Let&apos;s discuss how we can transform your vision into a
            high-performance digital experience.
          </p>
          <a
            href="/contactUs"
            className="text-button bg-primary text-on-primary px-[24px] py-[14px] rounded-md no-underline transition-colors duration-200 hover:bg-primary-active inline-flex items-center"
            style={{ height: '48px' }}
            id="services-cta-btn"
          >
            Start a Project
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
