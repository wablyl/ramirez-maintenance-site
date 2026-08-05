# Ramirez Maintenance & Service — Website

A 4-page static site (Home, Services, Our Story, Get a Quote) built with plain
HTML/CSS/JS. No build tools, no framework, no dependencies — just open
`index.html` in a browser or use a live-reload extension in VS Code.

## Getting started

1. Open this folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.
4. Edit files, save, and the browser refreshes automatically.

## File structure

```
cleaning-website/
├── index.html       Homepage
├── services.html     Full services list
├── about.html        Our Story / About page
├── quote.html         Quote request form
├── css/style.css      All styling (design tokens at the top)
├── js/main.js          Mobile nav toggle + form submission logic
└── images/               Add your photos here
```

## What's already filled in

- Business name: Ramirez Maintenance & Service, LLC
- Phone: (415) 716-4758
- Email: abnerderas@gmail.com
- Service area: Bay Area, CA
- 25+ years of experience, 24/7 availability, in-person quotes
- Full service list (from the business's Facebook page)

## What's confirmed on insurance

- Confirmed via certificate of insurance: $1M/$2M general liability,
  $5M umbrella policy, $100,000 janitorial fidelity bond, workers'
  compensation, and contractors errors & omissions coverage. Added as
  real numbers to `about.html` and the homepage trust strip
  ("Licensed, Bonded & Insured").
- The certificate lists Coverall North America Inc as an additional
  insured/certificate holder — meaning this policy is tied to the
  Coverall contractor relationship. Worth confirming with the insurance
  agent (Escobedo Insurance Agency, Janette Rios, 951-213-4860) that the
  same policy covers independent clients too, separate from the website.
- Policy renewal dates to track: GL/auto/workers' comp/E&O renew
  03/31/2026, umbrella/bond renew 04/18/2026.

## Still open — confirm with your dad

- [ ] **Whether to name "Coverall" directly** — the certificate confirms
      the past employer was Coverall, but that doesn't tell us if his
      contractor agreement restricts naming them publicly on a competing
      business's site. Check that agreement before changing the generic
      wording in `about.html`.
- [ ] **Photos** — team, equipment, before/after shots, or completed jobs
      for `images/`.
- [ ] **Logo** — there isn't one yet, so the site uses a text wordmark
      ("RAMIREZ" / "Maintenance & Service") in the header and footer,
      styled to resemble the existing Facebook page branding. Works fine
      as-is; swap in a real logo image later if one gets made.

## Setting up the quote form (no backend needed)

The form in `quote.html` posts to [Formspree](https://formspree.io), a free
service that forwards form submissions to an email inbox.

1. Create a free account at formspree.io using **abnerderas@gmail.com**
   and make a new form.
2. Copy the endpoint URL they give you (looks like
   `https://formspree.io/f/abcd1234`).
3. In `quote.html`, replace `YOUR_FORM_ID` in the `<form action="...">`
   attribute with your real endpoint.
4. Test it — submit the form and confirm the email arrives.

## Basic SEO

- Each page already has a real `<title>` and `<meta name="description">`.
- Set up a free
  [Google Business Profile](https://www.google.com/business/) — this
  matters more for local search ("office cleaning near me," "commercial
  cleaning Bay Area") than almost anything else on the site.
- Add the site to
  [Google Search Console](https://search.google.com/search-console) after
  deploying.

## Deployment (free options)

- **[Netlify](https://netlify.com)** — drag-and-drop the folder, or connect
  a GitHub repo for automatic redeploys on push.
- **[Vercel](https://vercel.com)** — similar, GitHub-connected.
- **[GitHub Pages](https://pages.github.com)** — free if this is already in
  a GitHub repo (recommended anyway, for version history).

All three support a custom domain (e.g. `ramirezmaintenance.com`) for free
or close to it — you just need to buy the domain (~$12/year from a
registrar like Namecheap or Google Domains).

## After launch — tracking (for your resume, too)

Add [Google Analytics](https://analytics.google.com) once it's live.
That's how you'll get real numbers later — traffic, quote form
submissions, etc. — which turns "I built a website" into "I built and
maintained a website that generated X leads over Y months," a much
stronger resume line.