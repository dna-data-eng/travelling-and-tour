"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!siteConfig.contactFormEndpoint) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    try {
      const res = await fetch(siteConfig.contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Get In Touch</span>
            <h2>Ready to start your file?</h2>
          </div>
        </Reveal>

        <div className="contact-layout">
          <div>
            <div className="contact-note">
              Office address, phone numbers and email below are placeholders
              — set the real values as environment variables (see
              .env.example) before deploying.
            </div>

            <div className="contact-line">
              <strong>Office</strong>
              {siteConfig.addressLine1}, {siteConfig.addressLine2}
            </div>
            <div className="contact-line">
              <strong>Phone</strong>
              {siteConfig.phonePrimary} · {siteConfig.phoneSecondary}
            </div>
            <div className="contact-line">
              <strong>Email</strong>
              {siteConfig.email}
            </div>
            <div className="contact-line">
              <strong>Digital GPS</strong>
              {siteConfig.digitalGps}
            </div>

            {siteConfig.mapEmbedUrl && (
              <div className="footer-map" style={{ marginTop: 24 }}>
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  loading="lazy"
                  title="Office location map"
                />
              </div>
            )}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-field">
              <label htmlFor="service">Service interested in</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Flight Booking & Ticketing</option>
                <option>Visa Application Support</option>
                <option>Study Abroad Placement</option>
                <option>Work Abroad Program</option>
                <option>Passport Assistance</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required />
            </div>
            <button type="submit" className="btn">
              Send Enquiry
            </button>

            {status === "success" && (
              <p className="form-status is-success">
                Thanks — your enquiry has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="form-status is-error">
                {siteConfig.contactFormEndpoint
                  ? "Something went wrong — please try WhatsApp instead."
                  : "Form isn't connected yet — set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT, or use WhatsApp for now."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
