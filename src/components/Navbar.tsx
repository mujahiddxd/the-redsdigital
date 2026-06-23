'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '/works' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '/contactUs' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      id="main-nav"
      className={`sticky top-0 z-50 bg-canvas border-b border-hairline transition-all duration-300 ${scrolled ? 'backdrop-blur-sm' : ''}`}
      style={{ height: '64px' }}
    >
      <div className="max-w-[1200px] mx-auto px-lg h-full flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="text-ink text-display-sm no-underline tracking-tight" id="nav-wordmark">
          Yami<span className="text-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-[32px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-nav-link text-body hover:text-ink transition-colors duration-200 no-underline px-[4px]"
              id={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-sm">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-[40px] h-[40px] flex items-center justify-center rounded-pill bg-transparent text-muted hover:text-ink hover:bg-surface-strong transition-all duration-200 cursor-pointer border-none"
              aria-label="Toggle theme"
              id="theme-toggle"
            >
              {resolvedTheme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}

          {/* Primary CTA */}
          <a
            href="#contact"
            className="text-button bg-primary text-on-primary px-[18px] py-[10px] rounded-md no-underline transition-colors duration-200 hover:bg-primary-active inline-flex items-center"
            style={{ height: '40px' }}
            id="nav-cta"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-xs">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-[40px] h-[40px] flex items-center justify-center rounded-pill bg-transparent text-muted hover:text-ink transition-colors duration-200 cursor-pointer border-none"
              aria-label="Toggle theme"
              id="theme-toggle-mobile"
            >
              {resolvedTheme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-[40px] h-[40px] flex items-center justify-center text-ink bg-transparent cursor-pointer border-none"
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden bg-canvas border-t border-hairline absolute top-[64px] left-0 right-0 z-40" id="mobile-menu">
          <div className="flex flex-col px-lg py-lg gap-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-nav-link text-body hover:text-ink transition-colors duration-200 no-underline py-xs"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-button bg-primary text-on-primary px-[18px] py-[10px] rounded-md no-underline transition-colors duration-200 hover:bg-primary-active text-center mt-xs"
              style={{ height: '40px' }}
              onClick={() => setMobileOpen(false)}
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
