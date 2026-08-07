interface FooterLink {
  label: string;
  href: string;
}

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Services: [
    { label: 'Web Development', href: '#' },
    { label: 'UI/UX Design', href: '#' },
    { label: 'E-Commerce', href: '#' },
    { label: 'SaaS Platforms', href: '#' },
  ],
  Resources: [
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Process', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  Connect: [
    { label: 'Twitter / X', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Dribbble', href: '#' },
  ],
  Contact: [
    { label: 'WhatsApp', href: 'https://wa.me/918097077235' },
    { label: 'Email Us', href: 'mailto:hello@euphatics.agency' },
    { label: '+91 80970 77235', href: 'https://wa.me/918097077235' },
  ],
};

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="bg-canvas pt-[120px] pb-lg overflow-hidden relative border-t border-hairline"
    >
      <div className="max-w-[1200px] mx-auto px-lg relative z-10">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-xl mb-[100px]">
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-caption-uppercase text-muted mb-md tracking-[0.1em]">
                {category}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-md text-ink hover:text-primary transition-colors duration-200 no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hairline-soft pt-lg flex flex-col md:flex-row items-center justify-between gap-base mb-[40px] md:mb-0">
          <p className="text-body-sm text-muted">
            &copy; {new Date().getFullYear()} Euphatics Agency. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-md">
            {/* Twitter / X */}
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Massive Background Wordmark */}
      <div className="absolute bottom-[-10%] md:bottom-[-20%] left-0 right-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[18vw] md:text-[22vw] leading-none font-bold text-surface-strong tracking-tighter whitespace-nowrap">
          EUPHATICS
        </h1>
      </div>
    </footer>
  );
}
