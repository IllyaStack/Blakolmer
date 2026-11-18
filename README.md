# Blakolmer — Hair & Skincrafts Website Concept

**Responsive salon website redesign prototype** for Blakolmer Hair & Skincrafts in Vienna. The visual direction highlights salon services, atmosphere and a direct route to appointment booking.

[Source code](https://github.com/IllyaStack/Blakolmer)

> **Status:** Independent design/development concept; not a claim of an official contract or a deployed replacement for the business website.

## Features

- Editorial-style landing page and salon/service sections.
- Mobile-friendly navigation with accessible menu state (`aria-expanded`) and Escape-key support.
- External booking links to Treatwell.
- Scroll-triggered reveal animations implemented with `IntersectionObserver`.
- Optional parallax effects with consideration for `prefers-reduced-motion`.
- Integrated location map and contact information.

## Stack

- HTML5 for semantic content
- CSS3 for responsive presentation
- Vanilla JavaScript for navigation, animations and scroll behaviour

## Structure

```text
index.html   Markup and content
style.css    Layout, typography and responsive styling
main.js      Menu interactions, reveal effects and parallax
img/         Local images and assets
```

## Run locally

```bash
python3 -m http.server 8000
```

Then visit **http://localhost:8000**.

## Screenshots

Add your own screenshots after verifying the current desktop and mobile appearance.

<!-- Example after creating files:
![Desktop landing page](docs/screenshots/desktop.png)
![Mobile layout](docs/screenshots/mobile.png)
-->

## Publishing considerations

Before production use, verify consent to use the business's branding/images and recheck external booking destinations and business details.

**Developed by:** [Illia Sobotovych](https://github.com/IllyaStack) · [Site For You](https://siteforyou.at)
