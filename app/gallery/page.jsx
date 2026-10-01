import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";
import { EXECUTIVES } from "../../lib/executives";

const OFFICIAL = [
  { src: "/img/flyer.jpg", label: "Official Flyer", wide: true },
  { src: "/img/president-1.jpg", label: "The President-Elect", wide: false },
  { src: "/img/president-2.jpg", label: "Ceremonial Portrait", wide: false },
  { src: "/img/president-3.jpg", label: "The Mastermind", wide: false },
];

export default function Gallery() {
  return (
    <>
      <section className="pagehero">
        <div className="container">
          <Reveal>
            <h1 className="title-blackletter pagehero__title">Gallery</h1>
            <p className="lede">
              The official imagery of the Resurgence, the flyer, the portraits of the President-Elect, and the faces
              of the executive council to be inaugurated on the 2nd of October, 2026.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            align="center"
            eyebrow="The Occasion"
            title="Official Imagery"
            lede="The flyer and the portraits of the Faculty President-Elect."
          />
          <div className="gallery">
            {OFFICIAL.map((it, i) => (
              <Reveal
                key={it.src + i}
                delay={Math.min(i * 70, 280)}
                className={`gallery__item ${it.wide ? "gallery__item--wide" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} alt={it.label} loading="lazy" />
                <span className="gallery__label">{it.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            align="center"
            eyebrow="The Incoming Council"
            title="Faces of the Executives"
            lede="The executives to be inaugurated, the new leadership of the Faculty of Engineering."
          />
          <div className="gallery">
            {EXECUTIVES.map((e, i) => (
              <Reveal key={e.slug} delay={Math.min(i * 60, 280)} className="gallery__item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={e.img} alt={e.name || e.office} loading="lazy" />
                <span className="gallery__label">{e.name || e.office}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
