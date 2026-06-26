'use client';

import { useState, useEffect } from 'react';

export default function AnalyticsMockup() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="bg-surface-card rounded-xl border border-hairline overflow-hidden shadow-2xl relative"
      id="analytics-mockup"
    >
      {/* Header */}
      <div className="px-lg py-md border-b border-hairline-soft flex items-center justify-between bg-canvas/30 backdrop-blur-sm">
        <div className="flex items-center gap-sm">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <h4 className="text-body-md font-medium text-ink leading-tight">Performance Overview</h4>
            <p className="text-caption text-muted">Last 30 days</p>
          </div>
        </div>
        <div className="px-sm py-xs bg-[var(--color-success)]/10 text-[var(--color-success)] rounded-md text-caption-uppercase font-bold">
          +24.5% Growth
        </div>
      </div>

      {/* Main Content */}
      <div className="p-lg">
        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-base mb-xl">
          {/* Stat Card 1 */}
          <div className="bg-canvas-soft rounded-lg p-base border border-hairline-soft transition-all duration-700 transform" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(10px)', transitionDelay: '100ms' }}>
            <p className="text-caption text-muted mb-xs">Total Conversions</p>
            <div className="flex items-end gap-sm">
              <span className="text-display-sm text-ink">4,289</span>
              <span className="text-caption text-[var(--color-success)] flex items-center mb-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-[2px]">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                12%
              </span>
            </div>
          </div>
          {/* Stat Card 2 */}
          <div className="bg-canvas-soft rounded-lg p-base border border-hairline-soft transition-all duration-700 transform" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(10px)', transitionDelay: '200ms' }}>
            <p className="text-caption text-muted mb-xs">Revenue Generated</p>
            <div className="flex items-end gap-sm">
              <span className="text-display-sm text-ink">$142k</span>
              <span className="text-caption text-[var(--color-success)] flex items-center mb-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-[2px]">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                18%
              </span>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="relative h-[200px] w-full mt-xl transition-all duration-1000 delay-300" style={{ opacity: mounted ? 1 : 0 }}>
          {/* Chart Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between z-0">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-full h-[1px] bg-hairline-soft" />
            ))}
          </div>
          
          {/* SVG Line Chart */}
          <svg className="absolute inset-0 w-full h-full z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0,80 C15,70 25,90 40,60 C55,30 70,50 85,20 C95,0 100,10 100,10 L100,100 L0,100 Z"
              fill="url(#chartGradient)"
              className="transition-all duration-1000 ease-out"
              style={{
                clipPath: mounted ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)'
              }}
            />
            <path
              d="M0,80 C15,70 25,90 40,60 C55,30 70,50 85,20 C95,0 100,10 100,10"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out delay-100"
              style={{
                strokeDasharray: '300',
                strokeDashoffset: mounted ? '0' : '300'
              }}
            />
          </svg>
          
          {/* Floating Data Points */}
          <div className="absolute top-[20%] left-[85%] w-3 h-3 bg-canvas rounded-full border-2 border-primary shadow-lg z-20 transition-all duration-500 delay-1000" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'scale(1)' : 'scale(0)' }} />
          <div className="absolute top-[60%] left-[40%] w-3 h-3 bg-canvas rounded-full border-2 border-primary shadow-lg z-20 transition-all duration-500 delay-[800ms]" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'scale(1)' : 'scale(0)' }} />
        </div>
      </div>
      
      {/* Floating Notification */}
      <div 
        className="absolute bottom-6 right-6 bg-surface-card border border-hairline-strong shadow-2xl rounded-lg p-sm flex items-center gap-sm transition-all duration-700 delay-700 z-30"
        style={{ 
          opacity: mounted ? 1 : 0, 
          transform: mounted ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)' 
        }}
      >
        <div className="w-8 h-8 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center text-primary font-bold text-caption">
          +
        </div>
        <div>
          <p className="text-caption font-medium text-ink">New Client Onboarded</p>
          <p className="text-[10px] text-muted">Just now</p>
        </div>
      </div>
    </div>
  );
}
