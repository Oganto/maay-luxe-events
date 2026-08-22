import { brand, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-16 text-ivory md:py-20">
      <div className="container-editorial">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-wide2">{brand.name}</p>
            <p className="mt-2 font-display italic text-ivory/60">{brand.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-4 md:flex md:flex-col md:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2">
            <a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="font-body text-sm text-ivory/70 hover:text-ivory">
              Instagram
            </a>
            <a href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="font-body text-sm text-ivory/70 hover:text-ivory">
              WhatsApp
            </a>
            <a href={`mailto:${brand.email}`} className="font-body text-sm text-ivory/70 hover:text-ivory">
              {brand.email}
            </a>
            <p className="font-body text-sm text-ivory/50">{brand.location}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/10 pt-6 text-xs text-ivory/40">
          <p>© {year} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
