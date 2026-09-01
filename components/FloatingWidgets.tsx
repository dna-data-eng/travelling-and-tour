"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site-config";

const toastItems = [
  {
    icon: "🇬🇧",
    title: "Booked from Agona Swedru",
    desc: "UK visa support started 6 minutes ago",
  },
  {
    icon: "🇨🇦",
    title: "Booked from Cape Coast",
    desc: "Canadian university admission guide secured",
  },
  {
    icon: "✈️",
    title: "Booked from Winneba",
    desc: "Flight tickets to London reserved",
  },
  {
    icon: "🎓",
    title: "Booked from Swedru",
    desc: "Study abroad counselling started today",
  },
];

export default function FloatingWidgets() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const showFirst = setTimeout(() => {
      setIndex(Math.floor(Math.random() * toastItems.length));
      setVisible(true);
    }, 6000);

    const interval = setInterval(() => {
      setIndex(Math.floor(Math.random() * toastItems.length));
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 14000);

    const hideFirst = setTimeout(() => setVisible(false), 11000);

    return () => {
      clearTimeout(showFirst);
      clearTimeout(hideFirst);
      clearInterval(interval);
    };
  }, []);

  const item = toastItems[index];

  return (
    <>
      <motion.a
        className="whatsapp-float"
        href={whatsappLink(
          "Hello Akwantufuo Travel Consult, I am interested in travel and visa support. Please guide me on the requirements."
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        💬
      </motion.a>

      <div className={`toast${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
        <span className="toast-icon">{item.icon}</span>
        <div>
          <h6>{item.title}</h6>
          <p>{item.desc}</p>
        </div>
      </div>
    </>
  );
}
