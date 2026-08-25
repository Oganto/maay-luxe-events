import { brand, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-16 text-ivory md:py-20">
      <div className="container-editorial">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logo-mark.png"
                  alt="Maay Luxe Events monogram"
                  className="h-7 w-7 object-contain"
                />
              </span>
              <p className="font-display text-2xl tracking-wide2">{brand.name}</p>
            </div>
            <p className="mt-3 font-display italic text-ivory/75">{brand.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-4 md:flex md:flex-col md:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-ivory/85 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2">
            <a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="font-body text-sm text-ivory/85 hover:text-gold">
              Instagram
            </a>
            <a href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="font-body text-sm text-ivory/85 hover:text-gold">
              WhatsApp
            </a>
            <a href={`mailto:${brand.email}`} className="font-body text-sm text-ivory/85 hover:text-gold">
              {brand.email}
            </a>
            <p className="font-body text-sm text-ivory/65">{brand.location}</p>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/55">
          <span className="text-gold">✦</span>
          <p>© {year} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
