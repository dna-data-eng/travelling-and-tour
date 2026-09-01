# Akwantufuo Travel Consult — Website (Next.js)

A rebuild of the Akwantufuo Travel Consult site as a proper Next.js
project, so real business details can be dropped in through a `.env`
file instead of being hardcoded in the source.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev
```

Open http://localhost:3000 to view it.

## Filling in your real details

Every phone number, address, social link and map embed on the site
comes from environment variables — see `.env.example` for the full
list. Copy it to `.env.local` (already git-ignored, so real details
never get committed) and fill in the real values. Anything left blank
falls back to a clearly-marked placeholder like `[Phone number 1]` so
it's obvious what's still missing.

Key ones to set before launch:

- `NEXT_PUBLIC_PHONE_PRIMARY`, `NEXT_PUBLIC_PHONE_SECONDARY`
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — digits only, country code first (e.g. `233241234567`)
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_ADDRESS_LINE1`, `NEXT_PUBLIC_DIGITAL_GPS`
- `NEXT_PUBLIC_FACEBOOK_URL` / `TIKTOK` / `LINKEDIN`
- `NEXT_PUBLIC_MAP_EMBED_URL` — from Google Maps → Share → Embed a map

## Other things to swap in before launch

- **Testimonials** — `lib/data.ts` → `testimonials` array currently has
  placeholder quotes. Replace with real client feedback once collected.
- **Photos** — all images are hotlinked from Unsplash for now
  (`lib/data.ts` and the component files). Swap the URLs for real photos
  of your office, team and clients when you have them — drop files in
  `public/images/` and reference them as `/images/your-file.jpg`.
- **Contact form** — the form on the Contact section needs a relay
  endpoint (e.g. [Formspree](https://formspree.io)) set via
  `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`. Until then it tells visitors to
  use WhatsApp instead, which always works.

## Motion & interactivity

Built with [Framer Motion](https://motion.dev) (the standard animation
library for React/Next.js — not Angular, which is a separate framework
and can't be mixed into this stack):

- **Hero** — one orchestrated entrance sequence (headline, copy, buttons
  and photo animate in as a set, once, on page load).
- **Destination cards** — 3D flip on hover/tap/keyboard, revealing the
  tagline and a WhatsApp CTA on the back face.
- **Service cards** — animate in/out when the category filter changes.
- **Section headers** — a gentle fade-up the first time each scrolls
  into view.
- **WhatsApp button** — soft pulsing ring plus a hover/tap bounce.

All motion respects `prefers-reduced-motion` automatically.

## Project structure

```
app/            Next.js App Router — layout, homepage, global styles
components/     One component per section (Header, Hero, Services, ...)
lib/data.ts     Editable content: services, destinations, FAQs, etc.
lib/site-config.ts   Reads business details from environment variables
```

## Deploying

Push this to GitHub and import it on [Vercel](https://vercel.com) (or
any Next.js host) — set the same environment variables there under
Project Settings → Environment Variables, matching `.env.example`.

## Build

```bash
npm run build
npm run start
```
