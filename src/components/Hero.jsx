export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-canvas py-section"
    >
      <div className="max-w-[1200px] mx-auto px-lg">
        {/* Hero Content */}
        <div className="text-center max-w-[800px] mx-auto mb-xxl">
          <p className="text-caption-uppercase text-muted mb-base">
            Digital Agency
          </p>

          <h1 className="text-display-mega text-ink mb-lg">
            We build websites that convert visitors into customers
          </h1>

          <p className="text-body-md text-body max-w-[560px] mx-auto mb-xl">
            Yami is a premium digital agency crafting high-performance websites, 
            modern interfaces, and scalable web applications that drive real business growth.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center justify-center gap-base">
            <a
              href="#contact"
              className="text-button bg-primary text-on-primary px-[20px] py-[12px] rounded-md no-underline transition-colors duration-200 hover:bg-primary-active inline-flex items-center"
              style={{ height: '44px' }}
              id="hero-cta-primary"
            >
              Start a Project
            </a>
            <a
              href="#portfolio"
              className="text-button bg-surface-card text-ink px-[20px] py-[12px] rounded-md no-underline border border-hairline-strong transition-colors duration-200 hover:bg-surface-strong inline-flex items-center"
              style={{ height: '44px' }}
              id="hero-cta-secondary"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* IDE Mockup */}
        <div className="max-w-[960px] mx-auto">
          <IDEMockup />
        </div>
      </div>
    </section>
  );
}

/* ── Inline IDE Mockup Component ── */
function IDEMockup() {
  return (
    <div
      className="bg-surface-card rounded-lg border border-hairline overflow-hidden"
      id="ide-mockup"
    >
      {/* Title Bar */}
      <div className="flex items-center gap-xs px-base py-sm border-b border-hairline-soft">
        <div className="flex gap-[6px]">
          <span className="w-[12px] h-[12px] rounded-full bg-[var(--color-error)] opacity-70"></span>
          <span className="w-[12px] h-[12px] rounded-full bg-[var(--color-timeline-done)] opacity-70"></span>
          <span className="w-[12px] h-[12px] rounded-full bg-[var(--color-success)] opacity-70"></span>
        </div>
        <span className="text-caption text-muted ml-sm">index.jsx — Yami Project</span>
      </div>

      {/* Editor Panes */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="hidden lg:block w-[200px] bg-canvas-soft border-r border-hairline-soft p-base">
          <p className="text-caption-uppercase text-muted mb-sm">Explorer</p>
          <div className="flex flex-col gap-xxs">
            {['src/', '  components/', '    Hero.jsx', '    Navbar.jsx', '    Portfolio.jsx', '  app/', '    page.jsx', '    layout.jsx', '  styles/', '    globals.css'].map((file, i) => (
              <span
                key={i}
                className={`text-code ${file.includes('Hero') ? 'text-primary' : 'text-body'} ${file.startsWith('  ') ? 'pl-sm' : ''}`}
              >
                {file.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 bg-canvas-soft p-base min-h-[280px]">
          <div className="flex flex-col gap-[2px]">
            {[
              { num: '1', code: 'export default function Hero() {', color: 'text-ink' },
              { num: '2', code: '  return (', color: 'text-body' },
              { num: '3', code: '    <section className="hero">', color: 'text-body' },
              { num: '4', code: '      <h1>', color: 'text-body' },
              { num: '5', code: '        We build websites that', color: 'text-primary' },
              { num: '6', code: '        convert visitors into', color: 'text-primary' },
              { num: '7', code: '        customers', color: 'text-primary' },
              { num: '8', code: '      </h1>', color: 'text-body' },
              { num: '9', code: '      <Button label="Start" />', color: 'text-body' },
              { num: '10', code: '    </section>', color: 'text-body' },
              { num: '11', code: '  );', color: 'text-body' },
              { num: '12', code: '}', color: 'text-ink' },
            ].map((line) => (
              <div key={line.num} className="flex items-start gap-base">
                <span className="text-code text-muted-soft w-[28px] text-right select-none flex-shrink-0">
                  {line.num}
                </span>
                <span className={`text-code ${line.color}`}>{line.code}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Preview Pane */}
        <div className="hidden lg:flex w-[280px] bg-canvas-soft border-l border-hairline-soft p-base flex-col">
          <p className="text-caption-uppercase text-muted mb-sm">Preview</p>
          <div className="flex-1 rounded-md bg-surface-card border border-hairline p-base flex flex-col items-center justify-center gap-sm">
            <div className="w-full h-[8px] bg-surface-strong rounded-pill"></div>
            <div className="w-[80%] h-[8px] bg-surface-strong rounded-pill"></div>
            <div className="w-[60%] h-[6px] bg-primary rounded-pill opacity-60 mt-xs"></div>
            <div className="w-full h-[60px] bg-surface-strong rounded-md mt-sm opacity-40"></div>
            <div className="flex gap-xs mt-xs">
              <div className="w-[50px] h-[6px] bg-primary rounded-pill opacity-50"></div>
              <div className="w-[50px] h-[6px] bg-surface-strong rounded-pill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
