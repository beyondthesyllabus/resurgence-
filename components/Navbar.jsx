"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The Resurgence" },
  { href: "/executives", label: "Executives" },
  { href: "/programme", label: "Programme" },
  { href: "/president", label: "President" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}>
      <div className="container nav__inner">
        <Link href="/" className="nav__brand" aria-label="The Resurgence — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand__crest" src="/img/logo-nuesa.png" alt="NUESA crest" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand__wordmark" src="/img/logo-resurgence.png" alt="The Resurgence" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href} className={`nav__link ${active ? "is-active" : ""}`}>
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/*   <Link href="/executives" className="btn btn--gold nav__cta">
          Meet the Executives
        </Link>*/}

        <button
          type="button"
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="nav__mobile">
        {LINKS.map((l) => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link key={l.href} href={l.href} className={`nav__mobilelink ${active ? "is-active" : ""}`}>
              {l.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
