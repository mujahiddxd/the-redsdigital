'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      className="bg-canvas py-section"
    >
      <div className="max-w-[1200px] mx-auto px-lg">
        {/* Section Header */}
        <div className="text-center mb-xxl">
          <p className="text-caption-uppercase text-muted mb-sm">
            Get In Touch
          </p>
          <h2 className="text-display-lg text-ink mb-base">
            Let&apos;s build something great
          </h2>
          <p className="text-body-md text-body max-w-[520px] mx-auto">
            Tell us about your project. We&apos;ll get back to you within 24 hours with a tailored proposal.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-xl max-w-[960px] mx-auto">
          {/* Form — 3 columns */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-surface-card rounded-lg border border-hairline p-xl flex flex-col gap-md"
              id="contact-form"
            >
              {/* Name */}
              <div className="flex flex-col gap-xs">
                <label htmlFor="contact-name" className="text-title-sm text-ink">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="bg-canvas text-ink border border-hairline rounded-md px-base py-sm text-body-md transition-colors duration-200 focus:outline-none focus:border-primary placeholder:text-muted-soft"
                  style={{ height: '44px' }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-xs">
                <label htmlFor="contact-email" className="text-title-sm text-ink">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                  className="bg-canvas text-ink border border-hairline rounded-md px-base py-sm text-body-md transition-colors duration-200 focus:outline-none focus:border-primary placeholder:text-muted-soft"
                  style={{ height: '44px' }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-xs">
                <label htmlFor="contact-message" className="text-title-sm text-ink">
                  Project Description
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, and goals..."
                  rows={5}
                  required
                  className="bg-canvas text-ink border border-hairline rounded-md px-base py-sm text-body-md transition-colors duration-200 focus:outline-none focus:border-primary resize-y placeholder:text-muted-soft"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="text-button bg-primary text-on-primary px-[20px] py-[12px] rounded-md border-none cursor-pointer transition-colors duration-200 hover:bg-primary-active mt-xs"
                style={{ height: '44px' }}
                id="contact-submit"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Panel — 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-lg">
            {/* Response Time */}
            <div className="bg-surface-card rounded-lg border border-hairline p-lg">
              <div className="flex items-center gap-sm mb-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <h3 className="text-title-md text-ink">Quick Response</h3>
              </div>
              <p className="text-body-sm text-body">
                We respond to every inquiry within 24 hours. Most projects kick off within a week.
              </p>
            </div>

            {/* Process */}
            <div className="bg-surface-card rounded-lg border border-hairline p-lg">
              <div className="flex items-center gap-sm mb-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3 className="text-title-md text-ink">Our Process</h3>
              </div>
              <ul className="text-body-sm text-body flex flex-col gap-xs list-none p-0 m-0">
                <li className="flex items-start gap-xs">
                  <span className="text-muted-soft mt-[2px]">01</span>
                  <span>Discovery call & project brief</span>
                </li>
                <li className="flex items-start gap-xs">
                  <span className="text-muted-soft mt-[2px]">02</span>
                  <span>Design mockups & feedback</span>
                </li>
                <li className="flex items-start gap-xs">
                  <span className="text-muted-soft mt-[2px]">03</span>
                  <span>Development & iteration</span>
                </li>
                <li className="flex items-start gap-xs">
                  <span className="text-muted-soft mt-[2px]">04</span>
                  <span>Launch & ongoing support</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-surface-card rounded-lg border border-hairline p-lg">
              <h3 className="text-title-md text-ink mb-sm">Reach Us Directly</h3>
              <div className="flex flex-col gap-xs text-body-sm text-body">
                <span>hello@yami.agency</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
