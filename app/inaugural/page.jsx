import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";

const PROTOCOLS =
    "The Vice Chancellor, University of Uyo, ably represented; the Dean, Faculty of Engineering; distinguished lecturers and members of staff; leaders of the Students' Union Government; NUESA leadership; past and present student leaders; distinguished guests; great students of the Faculty of Engineering; ladies and gentlemen.";

const COMMITMENTS = [
    "Encourage academic support, mentorship, research, innovation and opportunities for professional growth.",
    "Strengthen student representation and communication.",
    "Promote entrepreneurship and skill development, because engineering must extend beyond the classroom.",
    "Encourage professional exposure, networking and platforms that allow students to develop and showcase their abilities.",
    "Promote environmental responsibility, proper waste management and the protection of our shared facilities.",
];

const APPOINTEES = [
    { name: "Hon. Progress Akanimo James", role: "Chief of Staff" },
    { name: "Comr. Etim, Uwem Nkereuwem", role: "Clerk, NUESA House of Assembly" },
    { name: "Comr. Mmekobong Uwem Ebong", role: "Chief Protocol Officer" },
    { name: "Comr. Okon Bright", role: "Chief Press Secretary" },
    { name: "Comr. Favour Emmanuel Isaiah", role: "Special Adviser on Academic Matters" },
    { name: "Comr. Mfoniso Nsenam Udoka", role: "Special Adviser on Publicity and Media" },
    { name: "Comr. Ephraim Udoh", role: "Special Adviser on Christian Religious Affairs" },
    { name: "Comr. Okon, Precious Daniel", role: "Women Leader, Faculty of Engineering" },
    { name: "Comr. Favour Anthony Etim", role: "Special Adviser on Innovation, Technology and Skill Development" },
    { name: "Comr. Abasifreke Basil", role: "Community Manager, Resurgence" },
    { name: "Comr. Ibanga Faithful Essien", role: "Special Adviser on Welfare" },
    { name: "Comr. Charles Wisdom", role: "Special Adviser to the President on Pageantry" },
    { name: "Hon. Victor Wilson", role: "Special Adviser on Social Activities and Events" },
];

const COMPLIANCE_UNIT = [
    { name: "Hon. Robinson Ekemini Kenneth", role: "Head" },
    { name: "Mbong Edidiong Bassey", role: "Member" },
    { name: "Michael Benjamin Iniobong", role: "Member" },
    { name: "Nsenno Christopher", role: "Member" },
    { name: "Ekemini Sampson", role: "Member" },
    { name: "Imo-owo Daniel Mboho", role: "Member" },
    { name: "Victor Daniel Effiong", role: "Member" },
    { name: "Hanson V.", role: "Member" },
];

const PROMISES = [
    { not: "I will not promise perfection.", yes: "I promise commitment." },
    { not: "I will not promise that every challenge will disappear.", yes: "I promise that we will confront them." },
    {
        not: "I will not promise that every decision will satisfy everyone.",
        yes: "But I promise that this administration will remain guided by integrity, accountability, service and dedication.",
    },
];

const CLOSING_CHEERS = [
    "Long live the Faculty of Engineering!",
    "Long live NUESA!",
    "Long live the Resurgence!",
];

export default function InauguralAddress() {
    return (
        <>
            <section className="pagehero">
                <div className="container">
                    <Reveal>
                        <h1 className="title-blackletter pagehero__title">Inaugural Address</h1>
                        <p className="lede">
                            Delivered by Comr. Idongesit Mark, President, Faculty of Engineering, University of Uyo.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Protocols & Opening ---------------- */}
            <section className="section">
                <div className="container">
                    <Reveal>
                        <div className="sectionhead sectionhead--center">
                            <span className="eyebrow">Opening Address</span>
                            <h2 className="profile__name">A New Chapter of Service</h2>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <article className="speech">
                            <div className="speech__protocols">
                                <span className="speech__label">Protocols</span>
                                <p>{PROTOCOLS}</p>
                            </div>

                            <div className="speech__body">
                                <p>
                                    It is with profound gratitude to God Almighty and a deep sense of responsibility that I stand
                                    before you today.
                                </p>
                                <p>
                                    Today marks the beginning of a new chapter of service, responsibility and collective action in the
                                    Faculty of Engineering.
                                </p>
                                <p>
                                    I appreciate every student who believed in this journey, supported it and entrusted me with the
                                    privilege to serve.
                                </p>
                                <p>
                                    My journey to this moment has been shaped by service, representation, discipline and the
                                    conviction that student leadership can be better.
                                </p>
                                <p>Today, I accept this office with humility and with one clear understanding:</p>
                                <blockquote className="speech__pull">
                                    &ldquo;The office belongs to the students; I am only its steward.&rdquo;
                                </blockquote>
                            </div>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Resurgence ---------------- */}
            <section className="section section--alt">
                <div className="container">
                    <Reveal>
                        <div className="sectionhead sectionhead--center">
                            <span className="eyebrow">The Philosophy</span>
                            <h2 className="profile__name">Resurgence</h2>
                            <p className="lede">More than a name. A call to rise, rebuild and move forward.</p>
                        </div>
                    </Reveal>

                    <div className="philo">
                        <Reveal>
                            <div className="philo__card">
                                <span className="philo__num">01</span>
                                <h3>Renewal, Restoration, Reformation</h3>
                                <p>
                                    Our University speaks Volume of Renewal and Restoration. The Students&rsquo; Union carries the
                                    responsibility of Reformation.
                                </p>
                                <p>
                                    And for the Faculty of Engineering, this administration comes with a defining philosophy:
                                    RESURGENCE. Resurgence is more than a name. It is a call to rise, rebuild and move forward.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={120}>
                            <div className="philo__card">
                                <span className="philo__num">02</span>
                                <h3>Our Vision</h3>
                                <p>
                                    A united, innovative and student-centred Faculty where academic excellence, professional
                                    development, entrepreneurship and welfare are given the attention they deserve.
                                </p>
                                <p>
                                    Our administration will be guided by three simple words, and we shall listen to our students, learn
                                    from experience and lead with purpose.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={200}>
                        <div className="llt">
                            <div className="llt__item">
                                <span className="llt__word">Listen</span>
                                <span className="llt__sub">To our students</span>
                            </div>
                            <div className="llt__item">
                                <span className="llt__word">Learn</span>
                                <span className="llt__sub">From experience</span>
                            </div>
                            <div className="llt__item">
                                <span className="llt__word">Lead</span>
                                <span className="llt__sub">With purpose</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Appointees ---------------- */}
            <section className="section section--alt">
                <div className="container">
                    <SectionHead
                        eyebrow="The Team"
                        title="Members of the Resurgence Administration"
                        lede="“Your office is not a badge of status; it is a mandate to serve.”"
                    />
                    <div className="execgrid">
                        {APPOINTEES.map((a, i) => (
                            <Reveal key={a.name} delay={(i % 3) * 90}>
                                <div className="execcard">
                                    <div className="execcard__body">
                                        <span className="execcard__office">{a.role}</span>
                                        <span className="execcard__name">{a.name}</span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={120}>
                        <p className="achievements__note">
                            To all the appointees, congratulations! I expect integrity, competence, discipline, accessibility and
                            accountability. In the Resurgence Administration, offices shall not exist for titles; they shall exist
                            for service and impact.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Compliance Unit ---------------- */}
            <section className="section">
                <div className="container">
                    <Reveal>
                        <div className="sectionhead sectionhead--center">
                            <span className="eyebrow">Responsibility</span>
                            <h2 className="profile__name">NUESA Compliance and Protection Unit</h2>
                            <p className="lede">
                                A structure for responsibility, compliance and protection of our facilities, not for intimidation.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <article className="speech speech--narrow" style={{ marginBottom: 48 }}>
                            <div className="speech__body">
                                <p>
                                    A great Faculty must also be a responsible Faculty. Our manifesto made a commitment to promote
                                    discipline, proper waste management and the protection of NUESA facilities.
                                </p>
                                <p>
                                    In fulfilment of that commitment, and in recognition of the Executive and Legislative structure of
                                    NUESA, we shall establish this Unit to promote responsible conduct, proper waste management,
                                    environmental consciousness and the protection of NUESA properties and facilities.
                                </p>
                                <blockquote className="speech__pull">
                                    It shall not be a structure for intimidation. It shall be a structure for responsibility,
                                    compliance and protection of our facilities.
                                </blockquote>
                            </div>
                            <div className="speech__focus">
                                <span className="chip chip--dark">Responsible Conduct</span>
                                <span className="chip chip--dark">Waste Management</span>
                                <span className="chip chip--dark">Environmental Consciousness</span>
                                <span className="chip chip--dark">Protection of Facilities</span>
                            </div>
                        </article>
                    </Reveal>

                    <div className="execgrid">
                        {COMPLIANCE_UNIT.map((m, i) => (
                            <Reveal key={m.name} delay={(i % 3) * 90}>
                                <div className="execcard">
                                    <div className="execcard__body">
                                        <span className="execcard__office">{m.role}</span>
                                        <span className="execcard__name">{m.name}</span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={120}>
                        <p className="achievements__note">
                            Your responsibility is not to police people for the sake of power, but to help protect the standards and
                            shared resources of our Faculty. Let compliance be guided by fairness. Let protection be guided by
                            responsibility. And let every action uphold the dignity of NUESA.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Promise ---------------- */}
            <section className="section section--alt">
                <div className="container">
                    <Reveal>
                        <div className="sectionhead sectionhead--center">
                            <span className="eyebrow">The Pledge</span>
                            <h2 className="profile__name">Commitment Over Perfection</h2>
                            <p className="lede">Vision without action remains an idea. That is why we must work together.</p>
                        </div>
                    </Reveal>

                    <div className="pledge">
                        {PROMISES.map((p, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="pledge__card">
                                    <p className="pledge__not">{p.not}</p>
                                    <div className="pledge__divider" aria-hidden="true">
                                        <span />
                                    </div>
                                    <p className="pledge__yes">{p.yes}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={150}>
                        <article className="speech speech--narrow" style={{ marginTop: 48 }}>
                            <div className="speech__body">
                                <p>
                                    My dear colleagues, I envision a Faculty where academic excellence is encouraged, talents are
                                    developed, skills are acquired, businesses are supported, ideas are welcomed, students are heard,
                                    facilities are protected and every student knows that their future matters.
                                </p>
                                <p>
                                    Let this administration be remembered not merely by the positions we occupied, but by the impact we
                                    created.
                                </p>
                                <blockquote className="speech__pull">
                                    Resurgence has left the table behind. It has become a movement of evolution.
                                </blockquote>
                            </div>
                        </article>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="llt">
                            <div className="llt__item">
                                <span className="llt__word">An Administration</span>
                                <span className="llt__sub">It is</span>
                            </div>
                            <div className="llt__item">
                                <span className="llt__word">A Responsibility</span>
                                <span className="llt__sub">It is</span>
                            </div>
                            <div className="llt__item">
                                <span className="llt__word">A Collective Journey</span>
                                <span className="llt__sub">And it is</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            {/* ---------------- Closing ---------------- */}
            <section className="section">
                <div className="container">
                    <SectionHead
                        eyebrow="Closing"
                        title="The Journey Begins Now"
                        lede="Great Students of the Faculty of Engineering, the responsibility is ours."
                    />
                    <div className="values">
                        {["Renew", "Restore", "Reform", "Resurge"].map((v, i) => (
                            <Reveal key={v} delay={i * 70}>
                                <span className="chip chip--dark">Let us {v}!</span>
                            </Reveal>
                        ))}
                    </div>
                    {CLOSING_CHEERS.map((c, i) => (
                        <Reveal key={c} delay={i * 100}>
                            <p className="achievements__note" style={{ margin: "14px auto", textTransform: "uppercase" }}>
                                {c}
                            </p>
                        </Reveal>
                    ))}
                    <Reveal delay={300}>
                        <p className="achievements__note">Thank you, and God bless you all.</p>
                    </Reveal>
                </div>
            </section>

            <section className="quote">
                <div className="container">
                    <Reveal>
                        <div className="quote__mark" aria-hidden="true">
                            &ldquo;
                        </div>
                        <blockquote>The office belongs to the students; I am only its steward.</blockquote>
                        <cite>
                            His Excellency, Comr. Idongesit Mark (SMNSE, GCON, OTR) — President, Faculty of Engineering
                        </cite>
                    </Reveal>
                </div>
            </section>
        </>
    );
}