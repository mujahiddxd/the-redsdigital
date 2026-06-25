import ScrollReveal from './ScrollReveal';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Euphatics took our vision for an AI-powered meeting platform and turned it into a reality. The automated minutes and smart task extraction they built are incredible. Our users love the structured idea boards.",
    name: "Alex Mercer",
    role: "Co-Founder",
    company: "Ideora",
    initials: "AM",
  },
  {
    quote: "The e-commerce experience Euphatics crafted for us is so warm and inviting. The custom animations and storytelling layer truly capture the handmade essence of our crochet creations.",
    name: "Clara & Hazel",
    role: "Founders",
    company: "Peak Blush",
    initials: "CH",
  }
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
            Don&apos;t take our word for it — hear from the founders, product leads, and marketing teams we&apos;ve partnered with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg" id="testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal 
              key={testimonial.name} 
              delay={`${index * 150}ms`} 
              className={index === 0 ? 'md:col-span-2' : ''}
            >
              <article
                className="bg-surface-card rounded-lg border border-hairline p-lg flex flex-col h-full"
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
