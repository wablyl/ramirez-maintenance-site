# Ramirez Maintenance & Service — Website

**Live site:** [ramirez-maintenance.com](https://ramirez-maintenance.com)

A marketing and lead-generation website for Ramirez Maintenance & Service,
LLC, a Bay Area commercial and residential cleaning business. Built from
scratch, deployed to a custom domain, and instrumented with analytics —
designed, built, and maintained end-to-end.

## What this is

The business previously had no web presence beyond a Facebook page. This
site gives it:

- A professional home on the web with a real, owned domain
- A structured overview of all 10 services offered (office, medical,
  property management, residential, and more)
- A lead-capture quote request form that emails submissions directly
- Analytics to track real traffic and lead volume over time

## Tech stack

Deliberately framework-free: a 4-page brochure site doesn't need React or
a build pipeline, and static HTML loads faster and ranks better for local
SEO than a client-rendered SPA would.

- **HTML / CSS / vanilla JavaScript** — no framework, no build step
- **Formspree** — serverless form handling for the quote request form
  (no backend to host or maintain)
- **Google Analytics (GA4)** — traffic and lead tracking
- **GitHub Pages** — hosting, deployed straight from this repo
- **Cloudflare** — domain registration and DNS

## Architecture / how it's deployed

```
Push to main
      │
      ▼
GitHub Actions (pages-build-deployment)
      │
      ▼
GitHub Pages  ──HTTPS──▶  ramirez-maintenance.com
                          (Cloudflare DNS: 4× A records → GitHub Pages IPs,
                           CNAME for www)
```

Every push to `main` triggers an automatic rebuild and redeploy — no
manual upload step. SSL/TLS is provisioned and renewed automatically by
GitHub Pages via Let's Encrypt.

## File structure

```
cleaning-website/
├── index.html        Homepage
├── services.html      Full services list (10 services)
├── about.html          Our Story / About page
├── quote.html            Quote request form
├── css/style.css          All styling (design tokens at the top)
├── js/main.js              Mobile nav toggle + form submission logic
├── images/                   Photos (currently placeholder)
└── CNAME                       Custom domain config for GitHub Pages
```

## Design notes

The homepage hero and "How It Works" section lean on a simple visual
idea instead of a generic template: cleaning is a service people only
notice when it's *not* done, so the copy and structure emphasize
reliability and flexibility ("whenever you need it," 24/7 availability,
in-person quoting) rather than generic marketing language. Typography is
Space Grotesk (headings) paired with Inter (body) and IBM Plex Mono for
labels/eyebrows, on a cool-white/teal/deep-navy palette — chosen to avoid
the generic AI-generated-site look (warm cream + terracotta, or dark mode
with one neon accent) in favor of something a real service business would
plausibly commission.

## Local development

No build tools required.

1. Clone the repo and open the folder in VS Code (or any editor).
2. Install the **Live Server** VS Code extension for auto-refresh on save,
   or just open `index.html` directly in a browser.
3. Edit, save, refresh.

## Deployment

Already configured — pushing to `main` is the entire deploy process:

```bash
git add .
git commit -m "your change"
git push
```

GitHub Pages rebuilds automatically (check the **Actions** tab for status)
and the live site updates within a minute or two.

## Content status — what's real vs. placeholder

Business details (name, phone, email, service area, 25+ years of
experience, licensing/insurance figures) are real and sourced directly
from the business owner. Two things are still open:

- [ ] **Formspree endpoint not yet connected** — `quote.html` currently
      points at a placeholder form ID. Create a form at
      [formspree.io](https://formspree.io) and swap in the real endpoint
      before the quote form will actually deliver submissions by email.
- [ ] **Photos** — `images/` is currently empty. Team, equipment, and
      completed-job photos would replace the current text-only sections.

Two smaller open questions, more business decisions than technical ones:

- Whether to name the owner's former employer (a national cleaning
  franchise) directly in the "Our Story" copy, currently left generic
  pending a check of the old contractor agreement.
- Confirming with the insurance agent that the existing general liability
  policy (currently listed as an additional insured to the former
  employer) also covers independent client work.

## Author

Built by [Abner Ramirez Palacios](https://github.com/wablyl) as a freelance
project for a family business.