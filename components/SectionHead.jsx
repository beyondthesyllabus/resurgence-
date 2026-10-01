import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, blackletter, lede, align = "left", dark = false }) {
  return (
    <Reveal className={`sectionhead ${align === "center" ? "sectionhead--center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {blackletter ? (
        <h2 className="title-blackletter h2">{blackletter}</h2>
      ) : (
        <h2 className={`title-serif h2 ${dark ? "gold-text" : ""}`}>{title}</h2>
      )}
      {lede && <p className="lede">{lede}</p>}
    </Reveal>
  );
}
