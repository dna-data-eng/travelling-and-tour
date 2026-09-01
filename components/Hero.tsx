"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site-config";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div
        className="container hero-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero-copy">
          <motion.span className="kicker" variants={item}>
            Agona Swedru · Central Region, Ghana
          </motion.span>
          <motion.h1 variants={item}>
            Your travel documents, handled like they matter — because they
            do.
          </motion.h1>
          <motion.p variants={item}>
            Akwantufuo Travel Consult plans your flights, files your visa
            paperwork and gets your study or work abroad application
            boarding-ready — all from one office in Agona Swedru.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <a href="#services" className="btn">
              See All Services
            </a>
            <a
              href={whatsappLink(
                "Hello Akwantufuo Travel Consult, I'd like to talk to a travel consultant."
              )}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80"
            alt="Traveller checking in for a flight with a passport and boarding pass in hand"
            fill
            sizes="(max-width: 860px) 100vw, 45vw"
            priority
          />
          <span className="hero-photo-tag">Departures start here</span>
        </motion.div>
      </motion.div>

      <div className="hero-strip">
        <div className="container">
          <div className="hero-strip-item">
            <h5>500+</h5>
            <p>Travellers & students guided since opening</p>
          </div>
          <div className="hero-strip-item">
            <h5>6</h5>
            <p>Core destination corridors served</p>
          </div>
          <div className="hero-strip-item">
            <h5>18</h5>
            <p>Travel & documentation services under one roof</p>
          </div>
          <div className="hero-strip-item">
            <h5>2 – 6 wks</h5>
            <p>Typical visa processing turnaround</p>
          </div>
        </div>
      </div>
    </section>
  );
}
