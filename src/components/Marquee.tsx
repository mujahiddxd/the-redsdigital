export default function Marquee() {
  const stack = [
    "WEB DEVELOPMENT",
    "UI/UX DESIGN",
    "SEO STRATEGY",
    "MOBILE APPS",
    "E-COMMERCE",
    "BRAND IDENTITY",
    "GROWTH MARKETING"
  ];

  // Repeat to ensure seamless scrolling
  const marqueeItems = [...stack, ...stack, ...stack, ...stack];

  return (
    <div className="w-full overflow-hidden bg-surface-card border-y border-hairline-soft py-sm flex whitespace-nowrap">
      <div className="flex animate-marquee">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-caption-uppercase text-ink tracking-widest px-xl font-medium">
              {item}
            </span>
            <span className="text-primary opacity-50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
