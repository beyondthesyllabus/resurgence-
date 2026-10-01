import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import { EXECUTIVES, getExecutive, execLabel } from "../../../lib/executives";

export function generateStaticParams() {
  return EXECUTIVES.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }) {
  const e = getExecutive(params.slug);
  if (!e) return { title: "Officer Not Found | The Resurgence" };
  return {
    title: `${e.office} | The Resurgence — NUESA UNIUYO`,
    description: e.mandate,
  };
}

export default function ExecutivePage({ params }) {
  const e = getExecutive(params.slug);
  if (!e) notFound();

  const L = execLabel(e);
  const others = EXECUTIVES.filter((x) => x.slug !== e.slug).slice(0, 3);

  return (
    <>
      <section className="pagehero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">The Executive Council</span>
            <h1 className="title-blackletter pagehero__title">{e.office}</h1>
            <p className="lede">{e.name ? e.name : "Office of the " + e.office + " · NUESA, University of Uyo"}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="profile">
            <Reveal variant="left" className="profile__media">
              <div className="profile__frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={e.img} alt={L.aria} />
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
                <span className="chip">{e.office}</span>
                <span className="chip chip--dark">#ForThePeople</span>
              </div>
            </Reveal>

            <Reveal variant="right" className="profile__bio">
              <h2 className="profile__name">{e.name || "Office of the " + e.office}</h2>
              <p className="profile__role">{e.office} · NUESA, University of Uyo</p>
              <p>{e.mandate}</p>
              <p>
                As part of the Resurgence executive council, the {e.office} is inaugurated on the 2nd of October, 2026
                at the 250 Capacity TETFUND Hall, Faculty of Engineering, University of Uyo — joining colleagues sworn
                to a single promise: to leave the faculty stronger than they met it.
              </p>
              <p>
                The office works under the leadership of the Faculty President, Comr. Idongesit Mark, and reports to
                the student body through the association&apos;s parliament — carrying the portfolio from mandate to
                measurable outcome.
              </p>
              <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/executives" className="btn btn--ghost">
                  All Executives
                </Link>
                <Link href="/president" className="btn btn--gold">
                  The President-Elect
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="sectionhead">
            <span className="eyebrow">The Council</span>
            <h2 className="title-serif h2">Fellow Officers</h2>
          </Reveal>
          <div className="execgrid">
            {others.map((o, i) => {
              const L = execLabel(o);
              return (
                <Reveal key={o.slug} delay={i * 80}>
                  <Link href={`/executives/${o.slug}`} className="execcard">
                    <div className="execcard__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={o.img} alt={L.aria} loading="lazy" />
                    </div>
                    <div className="execcard__body">
                      <span className="execcard__office">{L.kicker}</span>
                      <strong className="execcard__name">{L.title}</strong>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
