import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";

const ORDER = [
  {
    time: "09:00",
    title: "Arrival & Registration",
    body: "Ushers receive and register invited guests, faculty members, alumni and delegations, and direct them to their seats.",
  },
  {
    time: "09:30",
    title: "Arrival of Dignitaries",
    body: "Distinguished guests and special invitees are received and ushered to the high table.",
  },
  {
    time: "10:00",
    title: "Opening Processional",
    body: "The Executives and Parliamentarians-elect process into the hall in ceremonial order to open the ceremony.",
  },
  {
    time: "10:05",
    title: "National Anthem",
    body: "The congregation stands for the National Anthem.",
  },
  {
    time: "10:10",
    title: "University Anthem",
    body: "The congregation stands for the University Anthem.",
  },
  {
    time: "10:15",
    title: "Opening Prayer",
    body: "A brief invocation to bless the ceremony and the new administration.",
  },
  {
    time: "10:20",
    title: "Welcome Address",
    body: "A warm welcome to all guests, dignitaries and members of the faculty on behalf of the transition committee.",
  },
  {
    time: "10:30",
    title: "Introduction of Dignitaries",
    body: "The dignitaries present are formally introduced to the congregation.",
  },
  {
    time: "10:40",
    title: "Presentation of the Newly Elected Executives/Parliamentarians",
    body: "The elected Executives and Parliamentarians are presented to the congregation, ahead of the swearing-in.",
  },
  {
    time: "10:55",
    title: "Oath of Office / Swearing-In",
    body: "The swearing-in of the Faculty President-Elect, Comr. Idongesit Mark, followed by the collective oath of the Executives and Parliamentarians.",
  },
  {
    time: "11:10",
    title: "Official Inauguration of the Executives",
    body: "The Executives are officially declared inaugurated, and the mandate passes to the new administration.",
  },
  {
    time: "11:20",
    title: "Decoration of the Faculty President",
    body: "The Student Union President decorates the Faculty President, the visible passing of authority.",
  },
  {
    time: "11:30",
    title: "Inaugural Address",
    body: "The President, Faculty of Engineering, delivers the inaugural address, the first public statement of the Resurgence mandate.",
  },
  {
    time: "11:50",
    title: "Presentation of the Administration's Vision & Agenda",
    body: "The new administration lays out its vision and agenda for the tenure ahead.",
  },
  {
    time: "12:10",
    title: "Goodwill Messages",
    body: "Goodwill messages from sister associations, alumni and well-wishers.",
  },
  {
    time: "12:25",
    title: "Remarks by Faculty Representative / Dean",
    body: "Remarks and charge to the new officers by the Faculty Representative or the Dean.",
  },
  {
    time: "12:40",
    title: "Remarks by Distinguished Guest / Keynote Speaker",
    body: "The distinguished guest or keynote speaker addresses the congregation.",
  },
  {
    time: "1:00",
    title: "Recognition of Special Guests",
    body: "Special guests are acknowledged and recognised for their presence and support.",
  },
  {
    time: "1:10",
    title: "Vote of Thanks",
    body: "Appreciation is extended to all guests, dignitaries, the faculty and everyone who made the ceremony possible.",
  },
  {
    time: "1:20",
    title: "Closing Prayer",
    body: "The ceremony is brought to a close with prayer.",
  },
  {
    time: "1:25",
    title: "Group Photograph",
    body: "Official group photographs of the administration with the dignitaries and guests.",
  },
  {
    time: "1:40",
    title: "Refreshments / Networking / Entertainment",
    body: "Guests and officers mingle over refreshments, with networking and entertainment.",
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
            lede="Guests are kindly requested to be seated before the processional begins at 10:00 AM."
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