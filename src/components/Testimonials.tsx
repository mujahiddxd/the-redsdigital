interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Yami completely transformed our online presence. Within three months of launch, our lead generation increased by 68%. Their attention to detail and understanding of user psychology is truly world-class.",
    name: "Sarah Chen",
    role: "VP of Marketing",
    company: "NovaPay",
    initials: "SC",
  },
  {
    quote: "We interviewed eight agencies before choosing Yami. They were the only team that asked the right questions about our customers before showing us a single mockup. The result speaks for itself — our bounce rate dropped by 42%.",
    name: "Marcus Rivera",
    role: "Founder & CEO",
    company: "Bloom Botanics",
    initials: "MR",
  },
  {
    quote: "The patient portal Yami built for us handles 15,000+ daily active users without breaking a sweat. Their engineering quality matched their design sensibility — rare combination in this industry.",
    name: "Dr. Amira Patel",
    role: "Chief Digital Officer",
    company: "Meridian Health Systems",
    initials: "AP",
  },
  {
    quote: "Working with Yami felt like having an in-house team that actually cared about our brand. They delivered on time, under budget, and the final product exceeded every expectation we had going in.",
    name: "James Thornton",
    role: "Creative Director",
    company: "Arclight Studios",
    initials: "JT",
  },
  {
    quote: "Our SaaS conversion funnel improved by 3.2x after Yami redesigned our marketing site and onboarding flow. They don't just build websites — they build growth engines.",
    name: "Elena Volkov",
    role: "Head of Product",
    company: "Vertex Automation",
    initials: "EV",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-canvas py-section"
    >
      <div className="max-w-[1200px] mx-auto px-lg">
        {/* Section Header */}
        <div className="text-center mb-xxl">
          <p className="text-caption-uppercase text-muted mb-sm">
            Client Testimonials
          </p>
          <h2 className="text-display-lg text-ink mb-base">
            Trusted by teams that ship
          </h2>
          <p className="text-body-md text-body max-w-[520px] mx-auto">
            Don't take our word for it — hear from the founders, product leads, and marketing teams we've partnered with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg" id="testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`bg-surface-card rounded-lg border border-hairline p-lg flex flex-col ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
              id={`testimonial-card-${index}`}
            >
              {/* Quote Mark */}
              <span
                className="text-primary text-[40px] leading-none mb-xs select-none opacity-60"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote Text */}
              <blockquote className="text-body-md text-body mb-lg flex-1">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-sm border-t border-hairline-soft pt-base">
                {/* Avatar */}
                <div className="w-[40px] h-[40px] rounded-full bg-surface-strong flex items-center justify-center flex-shrink-0">
                  <span className="text-caption text-muted font-medium">
                    {testimonial.initials}
                  </span>
                </div>

                <div>
                  <p className="text-title-sm text-ink">
                    {testimonial.name}
                  </p>
                  <p className="text-caption text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
