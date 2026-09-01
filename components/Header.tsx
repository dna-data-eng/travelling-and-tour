"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#process", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-contacts">
            <span>☎ {siteConfig.phonePrimary}</span>
            <span className="hide-mobile">✉ {siteConfig.email}</span>
          </div>
          <div className="topbar-meta">
            <a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={siteConfig.tiktokUrl} target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <nav>
            <a href="#top" className="brand">
              <span className="brand-mark">AT</span>
              <span className="brand-name">
                {siteConfig.name}
                <span>It&apos;s Your Time To Travel</span>
              </span>
            </a>

            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <a href="#contact" className="btn hide-mobile">
                Plan My Trip
              </a>
              <button
                className="nav-toggle"
                aria-label="Toggle navigation menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span style={{ fontSize: "1.4rem" }}>{open ? "✕" : "☰"}</span>
              </button>
            </div>
          </nav>

          {open && (
            <ul
              className="nav-links"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 4,
                paddingBottom: 18,
              }}
            >
              {navItems.map((item) => (
                <li key={item.href} style={{ width: "100%" }}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{ display: "block", padding: "10px 0" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li style={{ width: "100%", paddingTop: 8 }}>
                <a href="#contact" className="btn" onClick={() => setOpen(false)}>
                  Plan My Trip
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}
