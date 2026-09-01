"use client";

import { useState } from "react";
import { estimatorOptions } from "@/lib/data";
import Reveal from "@/components/Reveal";

const speeds = [
  { id: "standard", label: "Standard" },
  { id: "express", label: "Express" },
] as const;

export default function Estimator() {
  const [service, setService] = useState("visa");
  const [speed, setSpeed] = useState<"standard" | "express">("standard");

  const option = estimatorOptions[service];
  const result = option[speed];

  return (
    <section className="section section--ink">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Plan Ahead</span>
            <h2>How long will it take?</h2>
            <p>Pick a service and pace to see a realistic processing window.</p>
          </div>
        </Reveal>

        <div className="estimator-layout">
          <div>
            <div className="estimator-field">
              <label htmlFor="estService">Service</label>
              <select
                id="estService"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {Object.entries(estimatorOptions).map(([id, opt]) => (
                  <option key={id} value={id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="estimator-field">
              <label htmlFor="estSpeed">Processing Speed</label>
              <select
                id="estSpeed"
                value={speed}
                onChange={(e) => setSpeed(e.target.value as "standard" | "express")}
              >
                {speeds.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="roadmap-card">
            <h3>{option.label}</h3>
            <div className="time-tag">{result.time}</div>
            <p>{result.description}</p>
          </div>
        </div>

        <div className="referral-grid">
          <div className="referral-card">
            <div className="service-icon">🤝</div>
            <h4>One consultant, start to finish</h4>
            <p>
              The person who takes your first call is the same person who
              files your documents — nothing gets handed off and lost.
            </p>
          </div>
          <div className="referral-card">
            <div className="service-icon">🏛️</div>
            <h4>Direct embassy & airline experience</h4>
            <p>
              Years of filing with the same consulates and carriers means we
              know exactly what each application needs before you submit it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
