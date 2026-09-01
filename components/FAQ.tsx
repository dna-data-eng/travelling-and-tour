"use client";

import { useState, useRef } from "react";
import { faqs } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="section section--tight" id="faq" style={{ background: "var(--paper-alt)" }}>
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="kicker" style={{ justifyContent: "center" }}>
              Common Questions
            </span>
            <h2>Frequently asked questions</h2>
          </div>
        </Reveal>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div className="faq-item" key={i}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <span className="faq-mark">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className="faq-answer"
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  style={{
                    maxHeight: isOpen
                      ? `${refs.current[i]?.scrollHeight ?? 200}px`
                      : "0px",
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
