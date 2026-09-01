"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site-config";

const goals = ["Study Abroad", "Work Abroad", "Visit / Tourism", "Business Trip"];
const destinations = ["UK", "Canada", "USA", "Turkey", "Europe", "Other"];

export default function EligibilityQuiz() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [destination, setDestination] = useState("");

  function reset() {
    setStep(1);
    setGoal("");
    setDestination("");
  }

  return (
    <section className="section quiz-section" style={{ background: "var(--paper-alt)" }}>
      <div className="container">
        <div className="quiz-card">
          {step === 1 && (
            <div className="quiz-step is-active">
              <span className="kicker">Quick Check — Step 1 of 3</span>
              <h3>What are you planning?</h3>
              <div className="quiz-options">
                {goals.map((g) => (
                  <button
                    key={g}
                    className="quiz-opt"
                    onClick={() => {
                      setGoal(g);
                      setStep(2);
                    }}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="quiz-step is-active">
              <span className="kicker">Quick Check — Step 2 of 3</span>
              <h3>Which destination?</h3>
              <div className="quiz-options">
                {destinations.map((d) => (
                  <button
                    key={d}
                    className="quiz-opt"
                    onClick={() => {
                      setDestination(d);
                      setStep(3);
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="quiz-step is-active quiz-result">
              <div className="quiz-result-mark">✓</div>
              <h3>You&apos;re a fit for our consultancy support</h3>
              <p>
                Based on your goal ({goal}) for {destination}, one of our
                consultants can walk you through exactly what&apos;s needed —
                no guesswork.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  className="btn"
                  href={whatsappLink(
                    `Hello Akwantufuo Travel Consult, I took your website quiz. I am interested in ${goal} for ${destination}. Please guide me on the next steps.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Continue On WhatsApp
                </a>
                <button className="btn btn--ghost" onClick={reset}>
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
