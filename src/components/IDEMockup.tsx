'use client';

import { useState, useEffect } from 'react';

interface CodeLine {
  num: string;
  code: string;
  color: string;
}

export default function IDEMockup() {
  const codeLines: CodeLine[] = [
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
  ];

  const explorerFiles: string[] = [
    'src/', '  components/', '    Hero.jsx', '    Navbar.jsx', '    Portfolio.jsx',
    '  app/', '    page.jsx', '    layout.jsx', '  styles/', '    globals.css',
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < codeLines.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 250);
    return () => clearInterval(timer);
  }, [codeLines.length]);

  return (
    <div
      className="bg-surface-card rounded-lg border border-hairline overflow-hidden w-full"
      id="ide-mockup"
    >
      {/* Title Bar */}
      <div className="flex items-center gap-xs px-base py-sm border-b border-hairline-soft">
        <div className="flex gap-[6px]">
          <span className="w-[12px] h-[12px] rounded-full bg-[var(--color-error)] opacity-70"></span>
          <span className="w-[12px] h-[12px] rounded-full bg-[var(--color-timeline-done)] opacity-70"></span>
          <span className="w-[12px] h-[12px] rounded-full bg-[var(--color-success)] opacity-70"></span>
        </div>
        <span className="text-caption text-muted ml-sm">index.jsx — Euphatics Project</span>
      </div>

      {/* Editor Panes */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="hidden lg:block w-[180px] bg-canvas-soft border-r border-hairline-soft p-base">
          <p className="text-caption-uppercase text-muted mb-sm">Explorer</p>
          <div className="flex flex-col gap-xxs">
            {explorerFiles.map((file, i) => (
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
        <div className="flex-1 bg-canvas-soft p-base min-h-[260px]">
          <div className="flex flex-col gap-[2px]">
            {codeLines.map((line, idx) => (
              <div 
                key={line.num} 
                className="flex items-start gap-base transition-opacity duration-200"
                style={{ opacity: idx < visibleLines ? 1 : 0 }}
              >
                <span className="text-code text-muted-soft w-[28px] text-right select-none flex-shrink-0">
                  {line.num}
                </span>
                <span className={`text-code ${line.color}`}>{line.code}</span>
              </div>
            ))}
            {/* Blinking Cursor */}
            {visibleLines < codeLines.length && (
              <div className="flex items-start gap-base">
                <span className="text-code text-muted-soft w-[28px] text-right select-none flex-shrink-0">{visibleLines + 1}</span>
                <span className="w-[8px] h-[16px] bg-primary animate-pulse ml-xs mt-[2px]"></span>
              </div>
            )}
          </div>
        </div>

        {/* Preview Pane */}
        <div className="hidden lg:flex w-[200px] bg-canvas-soft border-l border-hairline-soft p-base flex-col">
          <p className="text-caption-uppercase text-muted mb-sm">Preview</p>
          <div className="flex-1 rounded-md bg-surface-card border border-hairline p-base flex flex-col items-center justify-center gap-sm relative overflow-hidden">
            <div className={`w-full h-[8px] bg-surface-strong rounded-pill transition-all duration-500 ${visibleLines > 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}></div>
            <div className={`w-[80%] h-[8px] bg-surface-strong rounded-pill transition-all duration-500 delay-100 ${visibleLines > 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}></div>
            <div className={`w-[60%] h-[6px] bg-primary rounded-pill mt-xs transition-all duration-500 delay-200 ${visibleLines > 4 ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'}`}></div>
            <div className={`w-full h-[60px] bg-surface-strong rounded-md mt-sm transition-all duration-500 ${visibleLines > 5 ? 'opacity-40 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}></div>
            <div className={`flex gap-xs mt-xs transition-all duration-500 ${visibleLines > 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-[50px] h-[6px] bg-primary rounded-pill opacity-50"></div>
              <div className="w-[50px] h-[6px] bg-surface-strong rounded-pill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
