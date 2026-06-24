export default function Marquee() {
  const stack = [
    "NEXT.JS 15",
    "TAILWIND V4",
    "TYPESCRIPT",
    "REACT 19",
    "NODE.JS",
    "POSTGRESQL",
    "GRAPHQL",
    "AWS"
  ];

  // Repeat to ensure seamless scrolling
  const marqueeItems = [...stack, ...stack, ...stack, ...stack];

  return (
    <div className="w-full overflow-hidden bg-canvas border-y border-hairline-soft py-xs flex whitespace-nowrap">
      <div className="flex animate-marquee">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-code text-muted uppercase tracking-widest px-md">
              {`/* ${item} */`}
            </span>
            <span className="text-muted-soft opacity-30">—</span>
          </div>
        ))}
      </div>
    </div>
  );
}
