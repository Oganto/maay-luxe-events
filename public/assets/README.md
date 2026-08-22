# Where to drop real brand assets

Every image/video below is currently shown as a tasteful placeholder in the
site. Add the real file at the exact path and it appears automatically —
no code changes needed.

| Path | Used for |
|---|---|
| `/assets/logo.svg` | Not yet wired to a component — nav currently uses the wordmark "MAAY LUXE". Add the file and swap it into `components/Navbar.tsx` when ready. |
| `/assets/hero-video.mp4` | Hero background video |
| `/assets/hero-poster.jpg` | Hero video poster frame (shown while the video loads) |
| `/assets/og-image.jpg` | Social share preview image, 1200×630 |
| `/assets/favicon.ico` | Browser tab icon |
| `/assets/images/founder.jpg` | Portrait in the Our Story section |
| `/assets/events/event-01.jpg` … `event-06.jpg` | Portfolio gallery — edit titles/categories in `lib/data.ts` (`portfolioItems`) |
| `/assets/testimonials/*.jpg` | Optional client photos — add entries to `testimonials` in `lib/data.ts` |
| `/assets/journal/*.jpg` | Journal post cover images — add entries to `journalPosts` in `lib/data.ts` |

All copy — services, values, testimonials, portfolio items, journal
posts, contact details — lives in `lib/data.ts`, separate from the UI
components, so content can be updated without touching layout code.
