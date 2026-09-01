import { testimonials } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "var(--paper-alt)" }}>
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="kicker" style={{ justifyContent: "center" }}>
              Client Feedback
            </span>
            <h2>What travellers say</h2>
            <p>
              Testimonials below are placeholders — swap in real client quotes
              in lib/data.ts once you&apos;ve collected them.
            </p>
          </div>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="testimonial-card">
                <div className="testimonial-mark">&ldquo;</div>
                <p className="quote">{t.quote}</p>
                <h4>{t.name}</h4>
                <span>{t.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
