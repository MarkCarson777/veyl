# Veyl MVP Specification

This document defines exactly what is included in the MVP.

## One-line definition

**Veyl v1 is a hand-curated, filterable, mapped directory of independent British drink producers, with a producer-listing intake form and a newsletter signup.**

That's it. Discovery first. Everything else is Phase 2 or later.

## The three things v1 has to do

1. **Look like an established and trustworthy place.** Considered and cohesive design, on-brand, mobile-first(?). A consumer landing on the homepage should immediately understand what Veyl is and want to explore.
2. **Make producers discoverable.** Browse, filter, map. Every producer presented in the same consistent format. Curation does the heavy lifting that Google can't.
3. **Capture interest.** Newsletter signup is the single conversion goal for consumers (How to motivate users to sign up?). "Get listed" form is the single conversion goal for producers.

## User stories

### Consumers can

- Land on the homepage and understand what Veyl is in five seconds.
- Browse all producers as a grid.
- Switch to a map view of all producers.
- Filter producers by type (winery, brewery, distillery, vermouth, cider, mead, bottled cocktail, other).
- Filter producers by region (English regions, Scotland, Wales).
- Search producers by name.
- View a producer's information: Imagery/logo, story, location, what they make, links to their own site and socials.
- Sign up to the bi-weekly newsletter.
- Read the About page and the For Producers page.

**No consumer accounts. No follows. No saved producers. No on-site events.**

### Producers can

- Visit a public For Producers page that explains what Veyl is, the beta terms, and how to get listed.
- Submit a "Get listed" form with their details (name, type, region, contact, links, short description, image links or upload).

**No producer auth. No producer dashboard. No event submission. No self-serve profile editing in v1.**

After submission, the Veyl team reviews the request, contacts the producer for assets and copy if needed, and creates the profile manually.

### Veyl team can

- Add and edit producers via direct DB access (or simple admin route, gated to a single email)
- Update the homepage featured producer slot weekly
- Update the homepage editorial blurb weekly or bi-weekly
- Export newsletter signups for sending via the chosen ESP

No production admin UI is required for v1. Producer records can be managed manually.

## Explicitly out of v1

Do not build these. They are Phase 2 and/or later.

- Consumer accounts, follows, favourites
- Producer auth and dashboard
- Producer self-serve profile editing
- Events (browsing, listing, creating, ticketing)
- Stripe Connect / payments / ticketing of any kind
- Producer posts and updates
- Editorial collections, trails, regional guides as separate routes
- Reviews and ratings
- Product marketplace (resolves the open Products-nav scope question: drop the Products nav item, Shop panel, and cart icon entirely from the homepage build)
- Native mobile app
- Producer analytics

## Sitemap

### Public routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage. Hero, featured producer of the week, short editorial blurb, newsletter signup, light "for producers" CTA, footer. |
| `/producers` | Browse all producers. Grid view + map view toggle. Filters: type, region, search. |
| `/producers/[slug]` | Producer profile. Logo, imagery, story, type, region, location, what they make, travel and features information, links out to website and socials. |
| `/about` | About Veyl. Mission, three pillars, who's behind it. |
| `/for-producers` | Marketing page aimed at producers. What Veyl is, what's included in the beta, what's coming, link to the Get Listed form. |
| `/for-producers/apply` | The "Get listed" form. Submits to Veyl team for manual review. |
| `/contact` | Simple contact details / form. |
| `/privacy` | Privacy policy. |
| `/terms` | Terms of service. |


### Routes explicitly NOT in v1

These appear in older drafts of the architecture doc. They are deferred.

- `/events`, `/events/[id]`
- `/stories`, `/stories/[slug]`
- `/collections`, `/collections/[slug]`
- `/trails`, `/trails/[slug]`
- `/regions/[region]`
- `/dashboard` and all children
- `/auth/login`, `/auth/register` (no public auth in v1)

## Homepage structure

Top to bottom on mobile (the canonical layout):

1. **Header.** Wordmark left, menu right. No cart, no Products link, no account icon.
2. **Hero.** Hero tagline ("Discover independent craft drink producers and experiences across the UK"), supporting line, primary CTA "Explore producers" with simple filter bar, secondary newsletter signup?
3. **Featured producer of the week.** One large card. Image, name, region, one-line story, link through to the profile.
4. **Editorial blurb.** 150 to 250 words, hand-written, refreshed weekly or bi-weekly. Examples: "What we're drinking in May", "Three wineries worth a detour this summer".
5. **Recently added.** Three to six producers added in the last few weeks. Auto-sorted by `createdAt`.
6. **Browse by type / browse by region.** Visual entry points into the filtered `/producers` views.
7. **For producers strip.** One-line pitch plus CTA to `/for-producers`.
8. **Newsletter signup band.** Bi-weekly newsletter. Email input + button. Copy makes the cadence clear ("Every other Sunday").
9. **Footer.** Wordmark, baseline ("veyl.co.uk · EST. 2024 · INDEPENDENT BY NATURE"), nav, social.

## Producer profile structure

Top to bottom:

1. Hero image (full-bleed)
2. Logo + name + type + region
3. Short tagline / "what they make"
4. Long-form description / story / information (dog friendly, nearby station etc)
5. Location block (address, link to map, opening hours if relevant)
6. Links out: website, Instagram, other socials
7. "More producers in [region]" or "More [type] producers" related strip

## Producer onboarding flow (manual)

1. Producer lands on `/for-producers`, reads the pitch, clicks "Get listed".
2. Fills out `/for-producers/apply` form: name, type, region, email, website, Instagram, short description, contact name, link to imagery or upload.
3. Submission lands in Veyl team's inbox (and ideally a queue table in the DB).
4. Veyl team reviews, follows up by email if needed, gathers final assets and copy.
5. Veyl team creates the Producer record in Supabase. Producer goes live.
6. Veyl team emails the producer a link to their live profile and the beta terms.

The form is the only producer-facing input surface in v1. There is deliberately no login.

## Launch roadmap

1. **Build v1.** Target: a few weeks of focused work. Use the build order in [CLAUDE.md](../CLAUDE.md), updated for the stripped scope (Tailwind tokens → Prisma schema for Producer + NewsletterSignup + ListingApplication only → homepage → `/producers` grid + map → `/producers/[slug]` → `/for-producers` + apply form → marketing pages).
2. **Recruit producers privately.** Reach out to 50 to 100 producers. Pitch honestly: beta, free, more features coming, here's your beautiful page in exchange for being early. Onboard them by hand.
3. **Public launch** when the directory has weight. New Instagram account. Press outreach to British food/drink writers. Word of mouth. Positioning: *the definitive discovery platform for independent British craft drink*.
4. **Bi-weekly newsletter** from launch onward. Featured producer, new producers added, what's on (curated by hand pre-events feature), one editorial theme, one link out.
5. **Homepage editorial refresh** on the off-week so the site has a weekly heartbeat even when the newsletter is fortnightly.
6. **Begin Phase 2** (events + producer auth + dashboard) once the consumer signal is real.

## Phase 2 (next, not now)

Listed for context only. None of this is in v1.

- Producer auth and dashboard
- Producer self-serve profile editing
- Events: producer-created listings, browse, event detail page
- Editorial pages: `/collections`, `/trails`, regional guides

## Phase 3 and beyond

- Ticketing via Stripe Connect
- Consumer accounts + follow mechanic
- Producer posts and updates
- Reviews
- Product marketplace (if validated)

## Open questions to resolve during build

- Incentive for consumers to sign up to Newsletter.
- Newsletter ESP choice (Resend campaigns? Buttondown? Beehiiv?). Decision before launch, not before build.
- Map provider (Mapbox vs MapLibre). Decision during the `/producers` map view build.
- Image hosting strategy for producer hero images (Supabase Storage defaults likely fine for v1).
- Admin surface: Supabase Studio only, or build a minimal `/admin` for producer CRUD. Decide once seeding the first ten producers and seeing what's painful.
