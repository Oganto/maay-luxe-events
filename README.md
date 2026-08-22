<!-- deploy trigger: confirming Vercel Git integration -->

# Maay Luxe Events — Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lenis smooth scroll.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        Fonts (Fraunces + Manrope), SEO metadata, smooth scroll wrapper
  page.tsx           Assembles every section in order
  globals.css         Base styles, focus states, reduced-motion, shared editorial utilities
  api/contact/route.ts  Handles the inquiry form submission (see below)
components/           One component per section — Navbar, Hero, About, OurStory,
                       StorySignature, CoreValues, VisionMission, Services, Portfolio,
                       Experience, Testimonials, Journal, Contact, Footer
lib/data.ts            All copy and content — services, values, portfolio items,
                       testimonials, journal posts, contact details. Edit this file
                       to change content without touching any component code.
public/assets/          Where real brand assets go — see public/assets/README.md
```

## Adding real content

- **Copy & data** — everything editable lives in `lib/data.ts`.
- **Images/video** — see `public/assets/README.md` for the exact paths expected.
  Until a real asset is added, that spot shows a clearly marked placeholder
  instead of a broken image.
- **Portfolio** — add/edit objects in `portfolioItems` (in `lib/data.ts`); the
  gallery, filters, and lightbox pick them up automatically.
- **Testimonials / Journal** — both arrays start empty (no content was
  provided yet) and show an elegant "coming soon" state. Add objects to
  `testimonials` / `journalPosts` and the sections switch to displaying them.

## Contact form

`app/api/contact/route.ts` validates submissions and currently logs them —
no email service credentials were provided yet, so nothing is sent out.
The route has a ready-to-uncomment example for wiring up
[Resend](https://resend.com) (works well on Vercel). Swap in whatever
provider you prefer; the form itself doesn't need to change.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import it in Vercel — it will detect Next.js automatically, no config needed.
3. If you wire up the contact form to an email provider, add the relevant
   API key as an environment variable in the Vercel project settings.
4. Update `siteUrl` in `app/layout.tsx` to the real production domain once
   it's connected (used for SEO metadata).

## Notes

- Motion respects `prefers-reduced-motion` throughout (Lenis smooth scroll
  is skipped entirely, and CSS/Framer Motion transitions collapse to near-zero
  duration).
- The gallery uses a plain `<img>` (not `next/image`) since the photography
  is arbitrary client-supplied assets rather than fixed-dimension source images.
