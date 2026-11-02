# Static Site Upgrade Record

The attached update request was incorporated into `site/`.

The prototype now includes a favicon, original simple promotional SVG artwork, lightweight animation, an infinitely looping header ticker, responsive layout, HTML success/cancellation/support destinations, a parent/guardian age gate before payment controls, and Cloudflare Pages-compatible `_headers` and `_redirects` files.

The final hardening pass adds two more comic-style promotional illustrations and a `404.html` fallback so both GitHub Pages and Cloudflare Pages have an HTML destination when a route is missing.

The Ko-fi floating widget was removed. A dedicated `site/discord.html` page now contains the centered Discord widget, animated server buttons, and an age gate for the supplied 18+ destination. WhatsApp, SMS, and other messaging integrations remain test-later and are not advertised.

The supplied PayPal subscription and Stripe buy-button snippets are included in the homepage. Payment activation still requires production billing review, server-side confirmation/webhooks, legal text, and an approved parental-consent implementation.
