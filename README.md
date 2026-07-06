# Chrome Showcase Pro

A production-ready, single-page motorcycle dealership template built with pure HTML5, CSS3, and vanilla JavaScript. Zero build tools, zero dependencies. Ready to deploy to GitHub Pages.

## Folder Structure

```
chrome-showcase-pro/
├── index.html          ← Homepage
├── 404.html            ← Custom 404 page
├── README.md
├── favicon.ico
├── .nojekyll           ← Tells GitHub Pages to serve files as-is
│
├── css/
│   ├── style.css       ← Main stylesheet
│   └── responsive.css  ← (Optional) responsive overrides
│
├── js/
│   ├── config.js       ← Edit this to rebrand
│   └── script.js       ← App logic
│
├── images/             ← logo.png, hero.jpg, bike1..6.jpg
├── fonts/              ← Custom web fonts (optional)
└── assets/             ← Extra static assets (videos, docs, etc.)
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository (contents at the repo root, or inside `/docs`).
2. Go to **Settings → Pages**.
3. Under **Source**, select the branch (e.g. `main`) and folder (`/root` or `/docs`).
4. Save. Your site will be live at `https://<username>.github.io/<repo>/` in a minute.

The included `.nojekyll` file prevents GitHub from processing files through Jekyll, so all paths (including underscore-prefixed folders) are served as-is.

## Run Locally

Just open `index.html` in a browser, or run any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Rebrand in 60 Seconds

1. Edit `js/config.js` — company info, phone, colors, hero copy, bikes, testimonials, FAQs, social links.
2. Replace files in `images/` (`logo.png`, `hero.jpg`, `bike1.jpg` … `bike6.jpg`).
3. Done. No HTML edits required.

## Features

Sticky nav · Hero · Featured bikes · Spec table · Gallery + lightbox · Animated counters · Services · Live EMI calculator · Auto-rotating testimonial slider · FAQ accordion · Validated contact form · Embedded map · Floating WhatsApp/Call/Scroll-to-top · Scroll progress bar · Scroll reveal · Lazy-loaded images · Mobile menu · Fully responsive dark theme with glassmorphism.
