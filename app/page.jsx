import Link from "next/link";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import Countdown from "../components/Countdown";
import { EXECUTIVES, execLabel } from "../lib/executives";

const PILLARS = [
  {
    title: "Service",
    body: "Leadership as stewardship. Every policy and programme of this administration is measured by one question: does it make the life of the average engineering student better?",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    ),
  },
  {
    title: "Unity",
    body: "One faculty, one voice. The Resurgence bridges departments and levels, turning a collection of courses into a single, purposeful engineering community.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    body: "A return to rigour and pride in our craft: academic excellence, professional conduct, and representation worthy of a University of Uyo engineer.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    body: "Modern tools, transparent communication, and data driven welfare: a students' association built for the decade ahead, not the one behind.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
];

const STATS = [
  { num: "02", label: "October 2026" },
  { num: "10:00", label: "AM (WAT)" },
  { num: "250", label: "Seat Capacity" },
  { num: "1", label: "New Chapter" },
];

const MARQUEE = [
  "The Resurgence",
  "#TheMastermind",
  "#ForThePeople",
  "NUESA · University of Uyo",
  "Inauguration Ceremony",
  "Service · Unity · Excellence",
];

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="hero__sunburst" aria-hidden="true" />
        <div className="container hero__grid">
          <div>
            <Reveal>
              <p className="hero__kicker">Executives &amp; Parliamentarians</p>
              <h1 className="title-blackletter hero__title">Inauguration Ceremony</h1>
              {/*<p className="hero__theme">— The Resurgence —</p>*/}
            </Reveal>

            <Reveal delay={120}>
              <p className="lede">
                You are welcome to the formal inauguration of the NUESA Executives and Parliamentarians, University of Uyo, a solemn passing of the torch and the opening of a new era of service for the Faculty of Engineering.
              </p>
              <div className="hero__meta">
                {/* <span className="chip">2nd October 2026</span>*/}
                {/* <span className="chip chip--dark">10:00 AM (WAT)</span>*/}
                {/* <span className="chip">250 Capacity TETFUND Hall</span>*/}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="hero__actions">
                <Link href="/programme" className="btn btn--gold">
                  View Programme
                </Link>
                <Link href="/president" className="btn btn--ghost">
                  Meet the President
                </Link>
              </div>
              <Countdown />
            </Reveal>
          </div>

          <Reveal variant="right" className="hero__portrait">
            <div className="hero__portraitframe">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/president-1.jpg" alt="Comr. Idongesit Mark, Faculty President-Elect, NUESA UNIUYO" />
            </div>
            <div className="hero__portraitring" aria-hidden="true" />
            <div className="hero__badge">
              <strong>Comr. Idongesit Mark</strong>
              <span>Faculty President · NUESA, UNIUYO</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Marquee ---------------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span className="marquee__item" key={i}>
              {m} <span className="marquee__dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- Faces of the Executives ---------------- */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead
            dark
            align="center"
            eyebrow="The Incoming Council"
            title="Faces of the Resurgence"
            lede="Today, we inaugurate the new executives of the Faculty of Engineering, each entrusted with a portfolio and together entrusted with the leadership of the Faculty."

          />
          <div className="faces">
            {EXECUTIVES.map((e, i) => {
              const L = execLabel(e);
              return (
                <Reveal key={e.slug} delay={(i % 5) * 80} className="face">
                  <Link href={`/executives/${e.slug}`} aria-label={L.aria}>
                    <span className="face__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={e.img} alt={L.aria} />
                    </span>
                    <span className="face__office">{L.kicker}</span>
                    <span className="face__name">{L.title}</span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={120}>
            <div className="faces__cta">
              <Link href="/executives" className="btn btn--gold">
                Meet the Full Council
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- At a glance ---------------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            align="center"
            eyebrow="At a Glance"
            blackletter="The Occasion"
            lede="Every detail of the morning, arranged for a ceremony worthy of the office it honours."
          />
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="stat">
                <span className="stat__num">{s.num}</span>
                <span className="stat__label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Pillars ---------------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="The Mandate"
            title="Four Pillars of the Resurgence"
            lede="The incoming administration rises on four commitments, the promises it will be inaugurated to keep.
"
          />
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="card pillar">
                <div className="pillar__icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Quote ---------------- */}
      <section className="quote">
        <div className="container">
          <Reveal align="center">
            <div className="quote__mark" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote>
              We do not inherit this faculty; we borrow it from every engineer who will walk these corridors after us.
              The Resurgence is our promise to return it stronger.
            </blockquote>
            <cite>Comr. Idongesit Mark · Faculty President</cite>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="ctaband">
            <h2>Be Part of the Resurgence</h2>
            <p>
              Join students, faculty, alumni, and guests today, October 2nd, 2026, as we inaugurate a new leadership for the Faculty of Engineering, University of Uyo.

            </p>
            <div className="hero__actions" style={{ justifyContent: "center", marginBottom: 0 }}>
              <Link href="/executives" className="btn btn--gold">
                Meet the Executives
              </Link>
              <Link href="/about" className="btn btn--ghost">
                About the Theme
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
