# Akwantufuo Travel Consult — Website (Plain HTML/CSS/JS)

No build step, no npm, no framework — just HTML, CSS and vanilla
JavaScript. Deploy it by uploading the files as-is.

## Files

```
index.html      Homepage — all sections
terms.html      Terms & Conditions (placeholder — see note below)
privacy.html    Privacy Policy (placeholder)
refund.html     Refund Policy (placeholder)
styles.css      All styling (design tokens, layout, components)
main.js         All interactivity (nav, filters, flip cards, quiz,
                estimator, FAQ accordion, contact form, WhatsApp
                links, activity toast, scroll-reveal animation)
```

Everything sits in **one flat folder** — no subfolders. Keep all
seven files together in the same place, however you move or upload
them, and it'll always work.

## Running it locally

You don't need a server for basic viewing — double-click `index.html`.
For the contact form and any relative-path quirks to behave exactly
like production, serve it locally instead:

```bash
# Python (already on most machines)
python3 -m http.server 8000

# or Node, if you have it
npx serve .
```

Then open http://localhost:8000.

## Deploying

Any static host works — pick whichever is easiest for you:

- **Netlify** — drag the whole folder onto https://app.netlify.com/drop
- **GitHub Pages** — push this folder to a repo, enable Pages in repo
  Settings → Pages, pointing at the branch/folder
- **cPanel / shared hosting** — upload the contents of this folder into
  `public_html` (or your domain's web root) via FTP or File Manager

No environment variables, no build command, no `node_modules` — the
files here are the actual site.

## Business details

Real Akwantufuo Travel Consult details are already in the HTML:

- Address: 3 Police Station Road, Opposite ECG, Agona Swedru, Central
  Region, Ghana (Digital GPS: CO-0007-2404)
- Phone: +233 33 209 7330 / +233 50 928 1975
- Email: akwantufuo@outlook.com
- Working hours: Mon–Fri 8am–5pm, Sat 9am–2pm, Sun closed

To change any of these, use your editor's find-and-replace across all
four `.html` files — there's no central config file in a plain-HTML
site, so each mention is written out directly.

**WhatsApp number**: set once, near the top of `main.js`:

```js
const WHATSAPP_NUMBER = "233509281975"; // digits only, country code first
```

Every "Chat on WhatsApp" / "Ask about [destination]" link on the site
builds its link from this one constant.

## Things to still swap in

- **Testimonials** — search `index.html` for `[Client testimonial goes
  here` and replace the three placeholder cards with real client quotes
  once collected.
- **Photos** — all images are hotlinked from Unsplash for now. To use
  your own, save them somewhere (e.g. an `images/` folder next to this
  README) and swap the `src="..."` values in `index.html`.
- **Contact form** — currently posts to a placeholder Formspree URL.
  Sign up at https://formspree.io, create a form, and replace
  `REPLACE_WITH_YOUR_FORM_ID` in the `<form action="...">` line inside
  `index.html` with your real form ID. Until then, the form tells
  visitors it isn't connected and points them to WhatsApp instead.
- **Social links** — Facebook/TikTok/LinkedIn links currently point at
  generic homepages. Search and replace with your real profile URLs
  (they appear in the top bar and the footer).
- **Legal pages** — `terms.html`, `privacy.html`, `refund.html` have
  starter wording, clearly marked as a placeholder. Have a lawyer
  review before relying on it.

## Browser support

Built with standard CSS custom properties, `IntersectionObserver` and
`fetch` — works in all current browsers (Chrome, Safari, Firefox,
Edge). No polyfills needed for anything released in the last several
years.
