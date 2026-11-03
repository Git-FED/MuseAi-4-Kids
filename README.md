# Muse 4 Kids static site prototype

https://github.com/user-attachments/assets/00d40fbd-12a5-4aca-abe4-a5da9e4b3678

https://github.com/user-attachments/assets/4df46cfb-d894-41f7-a5e3-ab1db669ba73

This directory is a static HTML prototype for GitHub Pages or Cloudflare Pages/Workers static hosting.

## Included

- `index.html` with a parent/guardian age gate, animated looping ticker, responsive layout, favicon, promotional illustration, centered community section, and payment cards.
- `payment-success.html`, `payment-cancelled.html`, `support.html`, and `not-available.html` so buttons and routes land on HTML pages.
- `discord.html` with the centered Discord widget, server buttons, animated title, and an age gate for the 18+ destination. After confirmation, it asks the visitor to email `museai@fedpromptly.com`; it does not redirect directly to the invite.
- `styles.css` with responsive styling and lightweight animations.
- `app.js` with a session-only age-gate confirmation.
- `assets/favicon.svg` is an abstract spark-and-chat mark rather than a letter; `assets/promo-family-chat.svg` is a simple original SVG promotional asset.
- `assets/promo-parent-account.svg` and `assets/promo-muse-moderates.svg` as additional comic-style promotional assets.
- `404.html` as an HTML fallback for GitHub Pages and Cloudflare Pages.
- A consistent HTML footer on every page with the supplied Muse, Manus AI, and Teamily referral information.
- `_headers` and `_redirects` for Cloudflare Pages compatibility.

## Intentional decisions

The Ko-fi floating widget was not included because the earlier request asked to remove it. WhatsApp, SMS, and other external messaging integrations remain out of the advertised scope.

The supplied PayPal and Stripe embed identifiers are included as provided. Before production use, validate provider configuration, server-side entitlement confirmation, webhook handling, refund/cancellation behavior, legal text, and payment-provider policies. The age gate is a UX gate, not a substitute for legal age verification or parental consent requirements.

The Patreon URL was reduced to its public checkout path in the support page rather than copying the supplied OAuth state/query string into a static site.
