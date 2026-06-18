export default function CTABand() {
  return (
    <section
      id="cta-band"
      className="bg-canvas border-t border-hairline"
      style={{ paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div className="max-w-[1200px] mx-auto px-lg text-center">
        <h2 className="text-display-lg text-ink mb-base">
          Ready to transform your digital presence?
        </h2>
        <p className="text-body-md text-body max-w-[480px] mx-auto mb-xl">
          Let&apos;s discuss your vision and build something that sets you apart from the competition.
        </p>
        <a
          href="#contact"
          className="text-button bg-primary text-on-primary px-[24px] py-[14px] rounded-md no-underline transition-colors duration-200 hover:bg-primary-active inline-flex items-center"
          style={{ height: '48px' }}
          id="cta-band-button"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}
