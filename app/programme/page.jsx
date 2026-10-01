import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";

const ORDER = [
  {
    time: "09:15",
    title: "Arrival & Seating of Guests",
    body: "Ushers receive invited guests, faculty members, alumni and delegations. Background music by the departmental choir sets the tone.",
  },
  {
    time: "09:45",
    title: "Procession of Officers-Elect",
    body: "The Executives and Parliamentarians-elect process into the hall in ceremonial order, led by the Sergeant-at-Arms.",
  },
  {
    time: "10:00",
    title: "Opening & Call to Order",
    body: "The Master of Ceremonies opens the ceremony. The congregation stands for the National Anthem and the NUESA anthem.",
  },
  {
    time: "10:10",
    title: "Opening Prayer & Welcome Address",
    body: "A brief invocation, followed by the welcome address of the outgoing Faculty President on behalf of the transition committee.",
  },
  {
    time: "10:25",
    title: "Reading of the Electoral Mandate",
    body: "The Electoral Commission presents the certified results of the election and formally hands the mandate to the officers-elect.",
  },
  {
    time: "10:40",
    title: "Oath of Allegiance & Office",
    body: "The swearing-in of the Faculty President-Elect, Comr. Idongesit Mark, followed by the collective oath of the Executives and Parliamentarians.",
  },
  {
    time: "11:05",
    title: "Investiture & Presentation of Symbols",
    body: "The chain of office, staff and seal of the association are presented — the visible passing of authority to the new administration.",
  },
  {
    time: "11:25",
    title: "Charging & Goodwill Messages",
    body: "The Faculty Adviser and distinguished guests charge the new officers; goodwill messages from sister associations and alumni follow.",
  },
  {
    time: "11:50",
    title: "Acceptance & Inaugural Address",
    body: "The inaugurated Faculty President delivers the inaugural address — the first public statement of the Resurgence mandate.",
  },
  {
    time: "12:15",
    title: "Presentation of Executives & Photographs",
    body: "The full council is presented to the congregation; official photographs of the administration are taken on stage.",
  },
  {
    time: "12:35",
    title: "Vote of Thanks & Closing",
    body: "The incoming Vice-President offers the vote of thanks. The ceremony closes with the NUESA anthem and recessional music.",
  },
  {
    time: "12:50",
    title: "Reception & Refreshments",
    body: "Guests and officers mingle at the reception. Light refreshments are served in the hall foyer.",
  },
];

export default function Programme() {
  return (
    <>
      <section className="pagehero">
        <div className="container">
          <Reveal>

            <h1 className="title-blackletter pagehero__title">Programme of Events</h1>
            <p className="lede">
              The ceremony holds on the 2nd of October, 2026, commencing promptly at 10:00 AM (WAT) at the 250
              Capacity TETFUND Hall, Faculty of Engineering, University of Uyo. Below is the full order of the
              morning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            align="center"

            title="Order of the Ceremony"
            lede="Guests are kindly requested to be seated before the procession begins at 9:45 AM."
          />
          <div className="timeline">
            {ORDER.map((o, i) => (
              <Reveal key={o.time} delay={Math.min(i * 60, 240)} className="titem">
                <span className="titem__time">{o.time}</span>
                <span className="titem__dot" aria-hidden="true" />
                <div className="titem__body">
                  <h3>{o.title}</h3>
                  <p>{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
