import { steps } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Steps() {
  return (
    <section className="section section--tight" id="process" style={{ background: "var(--paper-alt)" }}>
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="kicker" style={{ justifyContent: "center" }}>
              How It Works
            </span>
            <h2>From first enquiry to takeoff</h2>
          </div>
        </Reveal>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">
                {String(step.number).padStart(2, "0")}
              </div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
