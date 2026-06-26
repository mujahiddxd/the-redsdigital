'use client';

import Image from 'next/image';

export default function DeviceShowcase() {
  return (
    <div className="relative w-full max-w-[1000px] mx-auto mt-16 md:mt-32 [perspective:2000px] group/showcase h-[400px] sm:h-[500px] md:h-[650px]">
      
      {/* Floating Badges */}
      <div className="hidden md:flex flex-col absolute top-[5%] left-[-2%] z-20 bg-surface-card border border-hairline-strong shadow-2xl rounded-xl px-4 py-4 items-center justify-center gap-2 animate-float-slow transition-transform hover:scale-105 w-[170px] text-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        </div>
        <span className="text-caption font-medium text-ink leading-tight">Business Websites &<br/>Corporate Websites</span>
      </div>

      <div className="hidden md:flex flex-col absolute top-[10%] right-[-2%] z-20 bg-surface-card border border-hairline-strong shadow-2xl rounded-xl px-4 py-4 items-center justify-center gap-2 animate-float-delayed transition-transform hover:scale-105 w-[170px] text-center">
        <div className="w-10 h-10 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center text-[var(--color-success)] mb-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        </div>
        <span className="text-caption font-medium text-ink leading-tight">eCommerce Website<br/>Development</span>
      </div>

      <div className="hidden md:flex flex-col absolute bottom-[15%] left-[0%] z-20 bg-surface-card border border-hairline-strong shadow-2xl rounded-xl px-4 py-4 items-center justify-center gap-2 animate-float transition-transform hover:scale-105 w-[160px] text-center">
        <div className="w-10 h-10 rounded-full bg-timeline-edit/20 flex items-center justify-center text-timeline-edit mb-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
        </div>
        <span className="text-caption font-medium text-ink leading-tight">Mobile App<br/>Development</span>
      </div>

      <div className="hidden md:flex flex-col absolute bottom-[20%] right-[0%] z-20 bg-surface-card border border-hairline-strong shadow-2xl rounded-xl px-4 py-4 items-center justify-center gap-2 animate-float-slow transition-transform hover:scale-105 w-[160px] text-center">
        <div className="w-10 h-10 rounded-full bg-timeline-grep/20 flex items-center justify-center text-timeline-grep mb-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
        </div>
        <span className="text-caption font-medium text-ink leading-tight">Web Application<br/>Development</span>
      </div>

      {/* Main Laptop Mockup */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] z-0">
        {/* Laptop Screen */}
        <div className="relative w-full aspect-[16/10] bg-surface rounded-t-xl md:rounded-t-2xl border-[6px] md:border-8 border-[#111] overflow-hidden shadow-2xl">

          
          <Image
            src="/peak-blush.jpg"
            alt="HazeHaus Platform Showcase"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        {/* Laptop Base */}
        <div className="relative w-[110%] -left-[5%] h-4 md:h-6 bg-[#111] rounded-b-2xl md:rounded-b-3xl shadow-xl flex justify-center">
          <div className="w-[15%] h-1.5 md:h-2 bg-white/10 rounded-b-sm"></div>
        </div>
      </div>

      {/* Left Mobile Phone Mockup */}
      <div className="absolute bottom-[-5%] left-[2%] md:left-[8%] w-[32%] md:w-[22%] z-10 shadow-2xl transition-all duration-700 ease-out hover:scale-[1.02] hover:z-30 [transform:rotateY(5deg)_rotateZ(2deg)] hover:[transform:rotateY(25deg)_rotateZ(5deg)_translateX(20px)_translateY(-10px)]">
        <div className="relative w-full aspect-[9/19.5] bg-surface rounded-[1rem] md:rounded-[1.25rem] border-[2px] md:border-[3px] border-[#111] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 flex flex-col">

          
          <Image
            src="/peaks-blush_mobileview1.jpeg"
            alt="HazeHaus Mobile View 1"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Right Mobile Phone Mockup */}
      <div className="absolute bottom-0 right-[2%] md:right-[8%] w-[32%] md:w-[22%] z-10 shadow-2xl transition-all duration-700 ease-out hover:scale-[1.02] hover:z-30 [transform:rotateY(-5deg)_rotateZ(-2deg)] hover:[transform:rotateY(-25deg)_rotateZ(-5deg)_translateX(-20px)_translateY(-10px)]">
        <div className="relative w-full aspect-[9/19.5] bg-surface rounded-[1rem] md:rounded-[1.25rem] border-[2px] md:border-[3px] border-[#111] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 flex flex-col">

          
          <Image
            src="/peaks-blush_mobileview2.jpeg"
            alt="HazeHaus Mobile View 2"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

    </div>
  );
}
