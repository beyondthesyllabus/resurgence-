import Link from "next/link";
import Reveal from "../../components/Reveal";
import { EXECUTIVES, execLabel } from "../../lib/executives";

export const metadata = {
  title: "The Executive Council | The Resurgence — NUESA UNIUYO",
  description:
    "Meet the inaugurated executive council of the Nigerian Universities Engineering Students' Association, University of Uyo — The Resurgence.",
};

export default function ExecutivesIndex() {
  return (
    <>
      <section className="pagehero">
        <div className="container">
          <Reveal>
            {/* <span className="eyebrow">The Inaugurated Council</span>*/}
            <h1 className="title-blackletter pagehero__title">The Executives</h1>
            <p className="lede">
              The officers of the Resurgence, each entrusted with a portfolio and accountable to the engineering students they serve. Select any officer to read their mandate.

            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="execgrid">
            {EXECUTIVES.map((e, i) => {
              const L = execLabel(e);
              return (
                <Reveal key={e.slug} delay={Math.min(i * 70, 280)}>
                  <Link href={`/executives/${e.slug}`} className="execcard">
                    <div className="execcard__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={e.img} alt={L.aria} loading="lazy" />
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
