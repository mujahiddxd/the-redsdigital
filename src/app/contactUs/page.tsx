'use client';

import { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ── Form Data ── */
interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

const SERVICE_OPTIONS = [
  'Select a service',
  'Web Development',
  'UI/UX Design',
  'SEO Strategy',
  'Motion & Video',
  'Mobile App Development',
];

const BUDGET_OPTIONS = [
  'Budget range',
  '$5k – $15k',
  '$15k – $40k',
  '$40k – $100k',
  '$100k+',
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 relative overflow-x-hidden">
        {/* ── Ambient Background Glow ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(245,78,0,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(192,168,221,0.05) 0%, transparent 60%)',
          }}
        />

        {/* ══════════════════════════════════════════
            Section 1 — Hero
        ══════════════════════════════════════════ */}
        <section
          id="contact-hero"
          className="relative z-10 pt-[120px] pb-[60px] max-w-[1200px] mx-auto px-lg"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-sm mb-lg">
            <div className="w-10 h-[1px] bg-primary" />
            <span className="text-caption-uppercase text-primary tracking-[0.25em]">
              Get In Touch
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-display-mega text-ink mb-lg leading-tight max-w-3xl">
            Let&apos;s Build the{' '}
            <span className="text-primary italic">Future.</span>
          </h1>

          {/* Subhead */}
          <p className="text-body-md text-body max-w-2xl">
            We partner with visionaries to create digital experiences that defy the
            ordinary. Tell us about your ambitions, and we&apos;ll engineer the
            reality.
          </p>
        </section>

        {/* ══════════════════════════════════════════
            Section 2 — Form + Sidebar
        ══════════════════════════════════════════ */}
        <section
          id="contact-form-section"
          className="relative z-10 max-w-[1200px] mx-auto px-lg pb-section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            {/* ── Contact Form (8 cols) ── */}
            <div className="lg:col-span-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-surface-card border border-hairline rounded-lg p-xl md:p-xxl flex flex-col gap-xl backdrop-blur-sm"
                style={{ backdropFilter: 'blur(12px)' }}
                id="contact-form"
              >
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      required
                      className="peer w-full bg-transparent border-0 border-b border-hairline-strong py-base text-ink transition-colors duration-300 focus:outline-none focus:border-primary text-body-md"
                      style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}
                    />
                    <label
                      htmlFor="contact-name"
                      className="absolute left-0 top-base text-caption-uppercase text-muted pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-primary"
                    >
                      Full Name
                    </label>
                    {/* Focus underline animation */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ease-out"
                      style={{ width: focusedField === 'name' ? '100%' : '0%' }}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      required
                      className="peer w-full bg-transparent border-0 border-b border-hairline-strong py-base text-ink transition-colors duration-300 focus:outline-none focus:border-primary text-body-md"
                      style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}
                    />
                    <label
                      htmlFor="contact-email"
                      className="absolute left-0 top-base text-caption-uppercase text-muted pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-primary"
                    >
                      Email Address
                    </label>
                    <div
                      className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ease-out"
                      style={{ width: focusedField === 'email' ? '100%' : '0%' }}
                    />
                  </div>
                </div>

                {/* Row 2: Service + Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                  {/* Service */}
                  <div className="relative">
                    <label
                      htmlFor="contact-service"
                      className="text-caption-uppercase text-primary mb-xs block"
                      style={{ fontSize: '9px', letterSpacing: '0.1em' }}
                    >
                      Service Interest
                    </label>
                    <div className="relative">
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-hairline-strong py-base text-ink text-body-md appearance-none cursor-pointer focus:outline-none focus:border-primary transition-colors duration-300"
                        style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt === 'Select a service' ? '' : opt} style={{ background: 'var(--color-surface-card)', color: 'var(--color-ink)' }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {/* Chevron icon */}
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  {/* Budget
                  <div className="relative">
                    <label
                      htmlFor="contact-budget"
                      className="text-caption-uppercase text-primary mb-xs block"
                      style={{ fontSize: '9px', letterSpacing: '0.1em' }}
                    >
                      Investment
                    </label>
                    <div className="relative">
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-hairline-strong py-base text-ink text-body-md appearance-none cursor-pointer focus:outline-none focus:border-primary transition-colors duration-300"
                        style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}
                      >
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt === 'Budget range' ? '' : opt} style={{ background: 'var(--color-surface-card)', color: 'var(--color-ink)' }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div> */}
                </div> 

                {/* Row 3: Message */}
                <div className="relative">
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    rows={4}
                    required
                    className="peer w-full bg-transparent border-0 border-b border-hairline-strong py-base text-ink transition-colors duration-300 focus:outline-none focus:border-primary text-body-md resize-none"
                    style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}
                  />
                  <label
                    htmlFor="contact-message"
                    className="absolute left-0 top-base text-caption-uppercase text-muted pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-primary"
                  >
                    The Brief / Your Vision
                  </label>
                  <div
                    className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ease-out"
                    style={{ width: focusedField === 'message' ? '100%' : '0%' }}
                  />
                </div>

                {/* Submit Row */}
                <div className="flex items-center justify-between mt-xs">
                  {submitted && (
                    <p className="text-body-sm text-primary flex items-center gap-xs animate-pulse">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Request transmitted successfully
                    </p>
                  )}
                  <div className={submitted ? '' : 'ml-auto'}>
                    <button
                      type="submit"
                      className="group text-button bg-primary text-on-primary px-[28px] py-[16px] rounded-md border-none cursor-pointer transition-all duration-300 hover:bg-primary-active inline-flex items-center gap-sm tracking-wider"
                      style={{ height: '52px' }}
                      id="contact-submit"
                    >
                      <span>Transmit Request</span>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* ── Sidebar (4 cols) ── */}
            <div className="lg:col-span-4 flex flex-col gap-xl">
              {/* Direct Channels */}
              <div>
                <h3 className="text-caption-uppercase text-primary mb-lg tracking-[0.2em]">
                  Direct Channels
                </h3>
                <div className="flex flex-col gap-sm">
                  {/* Email */}
                  <a
                    href="mailto:hello@yami.agency"
                    className="group flex items-center gap-base p-base border border-hairline rounded-md hover:border-primary/40 transition-all duration-300 no-underline"
                    id="contact-email-link"
                  >
                    <svg
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      className="text-primary flex-shrink-0"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                    </svg>
                    <span className="text-body-sm text-body group-hover:text-ink transition-colors duration-200" style={{ fontFamily: 'var(--font-mono)' }}>
                      hello@yami.agency
                    </span>
                  </a>

                  {/* Phone */}
                  <div className="flex items-center gap-base p-base border border-hairline rounded-md">
                    <svg
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      className="text-primary flex-shrink-0"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-body-sm text-body" style={{ fontFamily: 'var(--font-mono)' }}>
                      +1 (555) 123-4567
                    </span>
                  </div>
                </div>
              </div>

              {/* Global Locations */}
              {/* <div>
                <h3 className="text-caption-uppercase text-primary mb-lg tracking-[0.2em]">
                  Global Nodes
                </h3>
                <div className="flex flex-col gap-lg">
                  {[
                    { city: 'London', address: '22 Shoreditch High St, E1 6JJ' },
                    { city: 'New York', address: '405 W 14th St, NY 10014' },
                    { city: 'Singapore', address: '71 Robinson Rd, 068895' },
                  ].map((loc) => (
                    <div key={loc.city} className="group cursor-default">
                      <p className="text-display-sm text-ink group-hover:text-primary transition-colors duration-300 mb-xxs">
                        {loc.city}
                      </p>
                      <p className="text-body-sm text-muted">
                        {loc.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Social Network */}
              <div>
                <h3 className="text-caption-uppercase text-primary mb-lg tracking-[0.2em]">
                  Network
                </h3>
                <div className="flex flex-wrap gap-base">
                  {['Instagram', 'LinkedIn', 'Behance', 'Dribbble'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-caption-uppercase text-muted hover:text-primary transition-colors duration-300 no-underline"
                      id={`contact-social-${social.toLowerCase()}`}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            Section 3 — CTA Band
        ══════════════════════════════════════════ */}
        <section
          id="contact-cta"
          className="relative z-10 overflow-hidden"
          style={{ height: '500px' }}
        >
          {/* Background gradient overlay (since we don't have the specific image) */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(245,78,0,0.08) 0%, rgba(192,168,221,0.06) 50%, rgba(159,187,224,0.08) 100%)',
            }}
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(ellipse at center bottom, rgba(245,78,0,0.12) 0%, transparent 60%)',
            }}
          />
          {/* Top border */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-hairline" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-lg">
            <h2 className="text-display-lg text-ink mb-xl">
              Ready to begin?
            </h2>
            <div className="flex flex-col sm:flex-row gap-base">
              <a
                href="mailto:hello@yami.agency"
                className="text-button bg-ink text-canvas px-xl py-base rounded-md no-underline transition-all duration-500 hover:bg-primary hover:text-on-primary inline-flex items-center justify-center tracking-wider"
                style={{ height: '52px' }}
                id="contact-cta-call"
              >
                Schedule a Call
              </a>
              <a
                href="/services"
                className="text-button border border-hairline-strong text-ink px-xl py-base rounded-md no-underline transition-all duration-500 hover:border-primary hover:text-primary inline-flex items-center justify-center tracking-wider backdrop-blur-sm"
                style={{ height: '52px', background: 'transparent' }}
                id="contact-cta-process"
              >
                View Our Process
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
