# Brand assets

## Already in place
| Path | Used for |
|---|---|
| `/assets/logo-mark.png` | The "ML" monogram — nav badge, footer badge, favicon |
| `/assets/logo-full.png` | Full lockup (monogram + wordmark), transparent background |
| `/assets/logo-lockup.jpg` | Original logo file as provided, white background |
| `/assets/favicon.ico`, `/assets/apple-touch-icon.png` | Generated from the monogram |
| `/assets/og-image.jpg` | Social share preview, generated from the logo on a plum background |
| `/assets/events/*.jpg` | 9 real event photos — titles/captions/`featured` flag live in `lib/data.ts` (`portfolioItems`) |

Until a real hero video is added, the Hero section uses one of the event
photos (`event-01-hall-reception.jpg`) with a slow cinematic zoom — never a
placeholder graphic. The Our Story section similarly uses a real event photo
rather than an unfilled "founder portrait" box.

## Optional upgrades — add the real file at the exact path and it swaps in automatically
| Path | Used for |
|---|---|
| `/assets/hero-video.mp4` | Replaces the photo fallback in the Hero section |
| `/assets/hero-poster.jpg` | Hero video poster frame (shown while the video loads) |

To use a real founder portrait instead of the current stand-in photo, swap
the `src` in `components/OurStory.tsx`.

## Sections that hide themselves until there's real content
Testimonials and Journal don't render at all right now — no "coming soon"
placeholder, just absent — since there's no real content for either yet.
Add entries to `testimonials` / `journalPosts` in `lib/data.ts` and each
section reappears automatically. When that happens, also add their nav
links back in `navLinks` (see the comment above that array).

All copy — services, values, testimonials, portfolio items, journal
posts, contact details — lives in `lib/data.ts`, separate from the UI
components, so content can be updated without touching layout code.
