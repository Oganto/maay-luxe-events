# Brand assets

## Already in place
| Path | Used for |
|---|---|
| `/assets/logo-mark.png` | The "ML" monogram — nav badge, footer badge, favicon |
| `/assets/logo-full.png` | Full lockup (monogram + wordmark), transparent background |
| `/assets/logo-lockup.jpg` | Original logo file as provided, white background |
| `/assets/favicon.ico`, `/assets/apple-touch-icon.png` | Generated from the monogram |
| `/assets/og-image.jpg` | Social share preview, generated from the logo on a plum background |
| `/assets/events/*.jpg` | 9 real event photos — titles/categories/captions live in `lib/data.ts` (`portfolioItems`) |

## Still placeholders — add the real file at the exact path and it appears automatically, no code changes needed
| Path | Used for |
|---|---|
| `/assets/hero-video.mp4` | Hero background video |
| `/assets/hero-poster.jpg` | Hero video poster frame (shown while the video loads) |
| `/assets/images/founder.jpg` | Portrait in the Our Story section |
| `/assets/testimonials/*.jpg` | Optional client photos — add entries to `testimonials` in `lib/data.ts` |
| `/assets/journal/*.jpg` | Journal post cover images — add entries to `journalPosts` in `lib/data.ts` |

All copy — services, values, testimonials, portfolio items, journal
posts, contact details — lives in `lib/data.ts`, separate from the UI
components, so content can be updated without touching layout code.
