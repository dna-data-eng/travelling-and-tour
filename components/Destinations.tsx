"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { destinations } from "@/lib/data";
import { whatsappLink } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

function FlipCard({ d }: { d: (typeof destinations)[number] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card${flipped ? " is-flipped" : ""}`}
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((v) => !v);
        }
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-face flip-card-front">
          <Image
            src={d.image}
            alt={`${d.name} destination`}
            fill
            sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 33vw"
          />
          <div className="flip-card-front-label">
            <h4>{d.name}</h4>
            <span>Tap or hover for details</span>
          </div>
        </div>

        <div className="flip-card-face flip-card-back">
          <h4>{d.name}</h4>
          <p>{d.tagline}</p>
          <a
            className="btn btn--on-ink"
            href={whatsappLink(
              `Hello Akwantufuo Travel Consult, I am interested in travel and visa support for ${d.name}. Please guide me on the requirements.`
            )}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Ask about {d.name} →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <section className="section" id="destinations">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Where Clients Are Headed</span>
            <h2>Six corridors we handle end to end</h2>
            <p>
              These are the destinations we file the most applications for —
              beyond this list, ask us: most corridors are still workable.
            </p>
          </div>
        </Reveal>

        <div className="destinations-grid">
          {destinations.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <FlipCard d={d} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
