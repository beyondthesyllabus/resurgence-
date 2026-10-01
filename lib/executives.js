// The inaugurated executive council of NUESA, University of Uyo — The Resurgence.
// `name` is left empty where the candidate's name was not supplied; the office then leads.
export const EXECUTIVES = [
  {
    slug: "vice-president",
    name: "Comr. Favour Udoudo",
    office: "Vice President",
    img: "/img/exec/vice-president.png",
    mandate:
      "Deputy to the Faculty President, the Vice President coordinates the executive council and stands at the centre of the Resurgence's day-to-day direction — ensuring every portfolio delivers on the collective mandate.",
  },
  {
    slug: "secretary-general",
    name: "Comr. Jackson Victor",
    office: "Secretary General",
    img: "/img/exec/secretary-general.jpg",
    mandate:
      "Custodian of the association's records, correspondence and proceedings, the Secretary General keeps the machinery of governance moving — from council agendas to official communications.",
  },
  {
    slug: "treasurer",
    name: "",
    office: "Treasurer",
    img: "/img/exec/treasurer.jpg",
    mandate:
      "The Treasurer safeguards the association's finances — overseeing dues, disbursements and the transparent reporting of every naira entrusted to the council.",
  },
  {
    slug: "financial-secretary",
    name: "",
    office: "Financial Secretary",
    img: "/img/exec/financial-secretary.jpg",
    mandate:
      "The Financial Secretary manages budgeting, accounting and financial documentation, working hand-in-hand with the Treasurer to keep the Resurgence accountable and audit-ready.",
  },
  {
    slug: "director-academics",
    name: "Comr. Valour",
    office: "Director of Academics",
    img: "/img/exec/director-academics.jpg",
    mandate:
      "The Director of Academics champions the academic welfare of engineering students — tutorials, academic advocacy and liaison with the faculty on all matters of learning.",
  },
  {
    slug: "director-sports",
    name: "Comr. Amah Christain James",
    office: "Director of Sports",
    img: "/img/exec/director-sports.jpg",
    mandate:
      "The Director of Sports drives the sporting life of the faculty — from inter-departmental competitions to faculty representation at university games.",
  },
  {
    slug: "director-social",
    name: "",
    office: "Director of Social",
    img: "/img/exec/director-social.jpg",
    mandate:
      "The Director of Social curates the faculty's social calendar — events, celebrations and engagements that bind the engineering community together.",
  },
  {
    slug: "director-information",
    name: "",
    office: "Director of Information",
    img: "/img/exec/director-information.jpg",
    mandate:
      "The Director of Information owns the association's voice — publicity, announcements and the flow of accurate, timely information to every student.",
  },
  {
    slug: "director-protocol",
    name: "",
    office: "Director of Protocol",
    img: "/img/exec/director-protocol.jpg",
    mandate:
      "The Director of Protocol upholds order, courtesy and ceremony — ensuring every NUESA occasion is conducted with dignity and precision.",
  },
  {
    slug: "director-works",
    name: "Comr. Otobong Ekanem Dennis",
    office: "Director of Works & Environment",
    img: "/img/exec/director-works.jpg",
    mandate:
      "The Director of Works & Environment oversees the association's projects and surroundings — from maintaining faculty facilities and workspaces to driving cleanliness and environmental sustainability across the engineering community.",
  },
];

export function getExecutive(slug) {
  return EXECUTIVES.find((e) => e.slug === slug) || null;
}

// Consistent two-line label for every surface (home faces, council cards, fellow officers).
// Named officer  -> kicker: office,        title: name
// Unnamed office -> kicker: "Executive Council", title: office
export function execLabel(e) {
  return {
    kicker: e.name ? e.office : "Executive Council",
    title: e.name || e.office,
    aria: e.name ? `${e.name} — ${e.office}` : e.office,
  };
}
