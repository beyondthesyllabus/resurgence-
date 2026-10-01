import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";

const ACHIEVEMENTS = [
  "Recipient of several Noble Prizes in Mathematics Competitions, Debates, and Essay Writing Competitions.",
  "Recognized with an Award of Honour for outstanding contributions to Community Development.",
  "Certified Aluminium Fabricator, demonstrating technical competence and entrepreneurial excellence.",
  "Successfully founded and continues to lead multiple business ventures under the Stylerprofiles brand.",
  "Earned the confidence of peers through various leadership roles and impactful service within the University and beyond.",
];

const VALUES = ["Integrity", "Accountability", "Excellence", "Service", "Resilience", "Humility"];

export default function President() {
  return (
    <>
      <section className="pagehero">
        <div className="container">
          <Reveal>
            {/* <span className="eyebrow">The Incoming Leadership</span> */}
            <h1 className="title-blackletter pagehero__title">President-Elect</h1>
            <p className="lede">
              More than a name. More than a candidate. A story of purpose, service, and the unwavering commitment to
              lead with integrity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Who is Idongesit Mark ---------------- */}
      <section className="section">
        <div className="container">
          <div className="profile">
            <Reveal variant="left" className="profile__media">
              <div className="profile__frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/president-1.jpg" alt="Official portrait of Comr. Idongesit Mark" />
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
                <span className="chip">#TheMastermind</span>
                <span className="chip chip--dark">#ForThePeople</span>
              </div>
            </Reveal>

            <Reveal variant="right" className="profile__bio">
              <h2 className="profile__name">Who is Idongesit Mark?</h2>
              <p className="profile__role">Faculty President-Elect · NUESA, University of Uyo</p>
              <p>
                I am Idongesit Mark and this is the story of my journey; from humble beginnings, through the classrooms
                and corridors of the University of Uyo, to a life dedicated to purposeful leadership, selfless service,
                and the pursuit of excellence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Early Life & Educational Journey ---------------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="Origins"
            title="Early Life & Educational Journey"
            lede="The values, the classroom and the corridors that shaped the leader."
          />
          <div className="story">
            <Reveal className="story__block">
              <h3>Early Life &amp; Background</h3>
              <p>
                Born on 10 December 1999, I am a proud native of Ikot Obong Edong Village, Ikot Ekpene Local Government
                Area, and the son of Mr. and Mrs. Friday Mark Umoh. Raised alongside my two siblings, I was brought up
                in a home that instilled the values of integrity, discipline, faith, humility, and hard work.
              </p>
              <p>
                These early lessons shaped my character, strengthened my commitment to service, and laid the foundation
                for the leader I continue to become.
              </p>
            </Reveal>
            <Reveal delay={120} className="story__block">
              <h3>Educational Journey</h3>
              <p>
                My academic journey began at Holy Child International Nursery/Primary School, Ikot Ekpene where I
                obtained my First School Leaving Certificate (FSLC). I later attended Independence High School, Ukana
                for my secondary education, where I built the foundation for my academic and leadership aspirations.
              </p>
              <p>
                Today, I am a proud Chemical Engineering student at the University of Uyo. Beyond the classroom, my
                time here has shaped my character, strengthened my leadership capacity, and deepened my commitment to
                serving the Engineering community with excellence and integrity.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Leadership & Beyond ---------------- */}
      <section className="section">
        <div className="container">
          <SectionHead

            title="Leadership & Beyond"
            lede="A life of service in the classroom, in the community, and in enterprise."
          />
          <div className="story">
            <Reveal className="story__block">
              <h3>Leadership Journey</h3>
              <p>
                My leadership journey began in secondary school, where I had the privilege of serving as Senior Prefect
                (Head Boy) and Choir Director at Independence High School. These early opportunities taught me the
                values of responsibility, teamwork, and leading by example.
              </p>
              <p>
                My passion for service continued in my hometown, where I served as Choir Director of my local church
                (MCN), further developing my ability to inspire, coordinate, and serve others. At the University of
                Uyo, I have served as Class Representative of Chemical Engineering, Chief Press Secretary to the
                President, Faculty of Engineering and have actively coordinated class picnics, events, and student
                engagements. Every role has strengthened my belief that leadership is not about titles, rather it is
                about service, impact, and leaving every community better than you met it.
              </p>
            </Reveal>
            <Reveal delay={120} className="story__block">
              <h3>Beyond Leadership</h3>
              <p>
                Beyond leadership, I am an entrepreneur, creative, and innovator with a passion for building ideas that
                create value and opportunities. I founded Stylerprofiles, a growing brand with interests in aluminium
                fabrication, StylerTeez (fashion), StylerFragrance (perfumes), StylerExchange (cryptocurrency services)
                and Styler Data Services.
              </p>
              <p>
                Outside business, I have a deep passion for music and the creative arts, particularly as a
                percussionist and drummer. I also enjoy event planning and coordination, where I bring people, ideas,
                and execution together to create memorable experiences.
              </p>
              <p>
                I believe that true leadership extends beyond public office. It is reflected in enterprise,
                creativity, and the ability to positively influence lives in every sphere.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Values & Philosophy ---------------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="The Compass"
            title="Values, Principles & Personal Philosophy"
          />
          <div className="values">
            {VALUES.map((v, i) => (
              <Reveal key={v} delay={i * 70}>
                <span className="chip chip--dark">{v}</span>
              </Reveal>
            ))}
          </div>
          <div className="story story--centered">
            <Reveal className="story__block">
              <p>
                My life is founded upon timeless values: Integrity, Accountability, Excellence, Service, Resilience,
                and Humility. These are not merely ideals I admire, but principles I strive to embody in every
                responsibility I undertake.
              </p>
              <p>
                I believe that leadership is a sacred trust. It is one that demands character before competence,
                service before status, and purpose before personal interest. True leadership is measured not by the
                authority one holds, but by the legacy one leaves behind.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Achievements ---------------- */}
      <section className="section">
        <div className="container">
          <SectionHead

            title="Achievements & Contributions"
            lede="These achievements reflect not only a pursuit of excellence but a lifelong commitment to learning, leadership, innovation, and service."
          />
          <ul className="achievements">
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={i} delay={i * 80} as="li" className="achievements__item">
                {a}
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <p className="achievements__note">
              Leadership is about accepting responsibility, inspiring confidence, and leaving people better than you
              met them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- In portrait ---------------- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead

            title="The Face of the Resurgence"
            lede="Official portraits of the Faculty President-Elect, Comr. Idongesit Mark."
          />
          <div className="gallery">
            <Reveal className="gallery__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/president-1.jpg" alt="Comr. Idongesit Mark, seated official portrait" />
              <span className="gallery__label">The President-Elect</span>
            </Reveal>
            <Reveal delay={100} className="gallery__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/president-2.jpg" alt="Comr. Idongesit Mark in champagne-gold ceremonial suit" />
              <span className="gallery__label">Ceremonial Portrait</span>
            </Reveal>
            <Reveal delay={200} className="gallery__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/president-3.jpg" alt="Comr. Idongesit Mark, official portrait" />
              <span className="gallery__label">The Mastermind</span>
            </Reveal>
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
              True leadership is measured not by the authority one holds, but by the legacy one leaves behind.
            </blockquote>
            <cite>I am Comr. Idongesit Mark — The Progenitor, Resurgence Movement</cite>
          </Reveal>
        </div>
      </section>
    </>
  );
}
