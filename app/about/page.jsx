import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";

const VALUES = [
  {
    title: "Integrity",
    body: "Open books, open doors. The Resurgence commits to transparent stewardship of every mandate, naira and decision entrusted to it.",
  },
  {
    title: "Representation",
    body: "Every department, every level, every voice. Parliamentarians carry the voice of the faculty, not the whisper of a few.",
  },
  {
    title: "Welfare",
    body: "From lecture halls to laboratory benches, the administration exists to remove friction from the student experience.",
  },
  {
    title: "Legacy",
    body: "Institutions outlive individuals. Every initiative is designed to outlast the tenure that begins it.",
  },
];

export default function About() {
  return (
    <>
      <section className="pagehero">
        <div className="container">
          <Reveal>
            {/* <span className="eyebrow">About the Theme</span>*/}
            <h1 className="title-blackletter pagehero__title">The Resurgence</h1>
            <p className="lede">
              A resurgence is not a beginning from nothing. It is a rising again. It is the moment a people remember who they are and decide, together, to be more.
              For the Faculty of Engineering, University of Uyo, the 2026 inauguration is that moment.

            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal>
            <h2 className="title-serif h3">Why &ldquo;The Resurgence&rdquo;?</h2>
            <p>
              Great institutions move in seasons. There are seasons of building, seasons of resting, and seasons of waking. The Resurgence names the season the Faculty of Engineering now enters: a deliberate, collective return to the values that made Nigerian engineering education formidable: rigour, brotherhood, service, and pride in craft.
            </p>
            <p>
              The theme was chosen by the incoming administration of the Nigerian Universities Engineering Students&apos; Association (NUESA), University of Uyo chapter, to describe not merely a change of leadership but a renewal of purpose. It honours what past administrations built, acknowledges what recent years tested, and commits the new Executives and Parliamentarians to leaving the faculty visibly stronger than they met it.
            </p>
            <p>
              On the 2nd of October, 2026, that commitment becomes formal. Before colleagues, faculty members, alumni, and guests, the elected officers take their oath, and the Resurgence moves from slogan to mandate.
            </p>

          </Reveal>

          <hr className="rule" style={{ margin: "48px 0" }} />

          <Reveal>
            <h2 className="title-serif h3">About NUESA, University of Uyo</h2>
            <p>
              The Nigerian Universities Engineering Students&apos; Association (NUESA) is the umbrella body of
              engineering students in Nigerian universities. The University of Uyo chapter unites students across the
              faculty&apos;s departments, advocating for their welfare, coordinating professional and social
              development, and representing the student voice to faculty and university leadership.
            </p>
            <p>
              Its Executives administer the association&apos;s day-to-day life; its Parliamentarians deliberate,
              legislate and hold leadership to account. Together they form the governance this ceremony inaugurates,
              the engine of student life in the Faculty of Engineering.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead

            title="The Values We Are Sworn To"
            lede="Four values frame every decision the incoming officers will make, serving as the compass of the Resurgence."
          />
          <div className="pillars">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="card pillar">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="container">
          <Reveal>
            <div className="quote__mark" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote>
              A resurgence begins the day we stop waiting for someone else to fix what we love and start fixing it together.

            </blockquote>
            <cite>From the inauguration theme address</cite>
          </Reveal>
        </div>
      </section>
    </>
  );
}
