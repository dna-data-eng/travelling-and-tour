"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";
import { whatsappLink } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

const filters = [
  { id: "all", label: "All Services" },
  { id: "travel", label: "Travel" },
  { id: "study", label: "Study & Work" },
  { id: "docs", label: "Documentation" },
] as const;

export default function Services() {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");

  const visible =
    active === "all" ? services : services.filter((s) => s.category === active);

  return (
    <section className="section" id="services" style={{ background: "var(--paper-alt)" }}>
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="kicker" style={{ justifyContent: "center" }}>
              What We Handle
            </span>
            <h2>Eighteen services, four desks, one consultant</h2>
            <p>
              Every service below is handled in-house by a named consultant —
              not outsourced to a call centre. Filter by what you need next.
            </p>
          </div>
        </Reveal>

        <div className="filter-row" style={{ justifyContent: "center" }}>
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filter-btn${active === f.id ? " is-active" : ""}`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="services-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((service) => (
              <motion.a
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="service-card"
                href={whatsappLink(
                  `Hello Akwantufuo Travel Consult, I'm interested in ${service.title}. Please guide me on the requirements.`
                )}
                target="_blank"
                rel="noreferrer"
              >
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
