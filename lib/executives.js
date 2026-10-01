// The inaugurated executive council of NUESA, University of Uyo — The Resurgence.
// Order, names, reg. numbers and departments follow the official Faculty of
// Engineering Executive Council list (S/N 1–13).
export const EXECUTIVES = [
  {
    slug: "president",
    name: "Comr. Idongesit Friday Mark",
    office: "President",
    img: "/img/president-1.jpg",

    dept: "Chemical Engineering",
    mandate:
      "The Faculty President leads the Resurgence, setting its vision, chairing the Executive Council, and carrying the mandate of every engineering student. As the progenitor of the movement, the President turns the promise of resurgence into service, unity, and excellence.",
  },
  {
    slug: "vice-president",
    name: "Comr. Favour Ekereobong Udoudo",
    office: "Vice President",
    img: "/img/exec/vice-president.png",

    dept: "Computer Engineering",
    mandate:
      "Deputy to the Faculty President, the Vice President coordinates the Executive Council and stands at the centre of the Resurgence's day to day direction, ensuring every portfolio delivers on the collective mandate.",
  },
  {
    slug: "secretary-general",
    name: "Comr. Victor Friday Jackson",
    office: "Secretary General",
    img: "/img/exec/secretary-general.jpg",

    dept: "Mechanical & Aerospace Engineering",
    mandate:
      "Custodian of the association's records, correspondence and proceedings, the Secretary General keeps the machinery of governance moving — from council agendas to official communications.",
  },
  {
    slug: "assistant-secretary-general",
    name: "Comr. Eunice Nse Eka",
    office: "Assistant Secretary General",
    img: "/img/exec/assistant-secretary-general.jpg",

    dept: "Computer Engineering",
    mandate:
      "The Assistant Secretary General supports the Secretary General in keeping the association's records, correspondence and proceedings — ensuring the machinery of governance never misses a beat.",
  },
  {
    slug: "financial-secretary",
    name: "Comr. Favour Ntia Umoren",
    office: "Financial Secretary",
    img: "/img/exec/financial-secretary.jpg",

    dept: "Civil Engineering",
    mandate:
      "The Financial Secretary manages budgeting, accounting and financial documentation, working hand-in-hand with the Treasurer to keep the Resurgence accountable and audit-ready.",
  },
  {
    slug: "treasurer",
    name: "Comr. Precious Bassey Eyo",
    office: "Treasurer",
    img: "/img/exec/treasurer.jpg",

    dept: "Chemical Engineering",
    mandate:
      "The Treasurer safeguards the association's finances, overseeing dues, disbursements, and the transparent reporting of every naira entrusted to the council.",
  },
  {
    slug: "director-information",
    name: "Comr. Aniekan Ukpono Ekeruke",
    office: "Director of Information",
    img: "/img/exec/director-information.jpg",

    dept: "Computer Engineering ",
    mandate:
      "The Director of Information owns the association's voice, overseeing publicity, announcements, and the flow of accurate, timely information to every student.",
  },
  {
    slug: "director-academics",
    name: "Comr. Valour Itoro Usoh",
    office: "Director of Academics",
    img: "/img/exec/director-academics.jpg",

    dept: "Electrical & Electronics Engineering",
    mandate:
      "The Director of Academics champions the academic welfare of engineering students, overseeing tutorials, academic advocacy, and liaison with the faculty on all matters of learning.",
  },
  {
    slug: "director-social",
    name: "Comr. Abasiodiong Aniefiok Oyoh",
    office: "Director of Socials",
    img: "/img/exec/director-social.jpg",

    dept: "Mechanical & Aerospace Engineering",
    mandate:
      "The Director of Social curates the faculty's social calendar, overseeing events, celebrations, and engagements that bind the engineering community together.",
  },
  {
    slug: "director-sports",
    name: "Comr. Christian James Amah",
    office: "Director of Sports",
    img: "/img/exec/director-sports.jpg",

    dept: "Mechanical & Aerospace Engineering",
    mandate:
      "The Director of Sports drives the sporting life of the faculty, from interdepartmental competitions to faculty representation at university games.",
  },
  {
    slug: "director-transport",
    name: "Comr. Inimfon Ibanga Asanga",
    office: "Director of Transport",
    img: "/img/exec/director-transport.jpg",

    dept: "Electrical & Electronics Engineering",
    mandate:
      "The Director of Transport keeps the association moving, coordinating logistics and movement for council activities so that every NUESA engagement runs on time.",
  },
  {
    slug: "director-protocol",
    name: "Comr. Abasifreke Sunday",
    office: "Director of Protocols",
    img: "/img/exec/director-protocol.jpg",

    dept: "Electrical & Electronics Engineering",
    mandate:
      "The Director of Protocol upholds order, courtesy, and ceremony, ensuring every NUESA occasion is conducted with dignity and precision.",
  },
  {
    slug: "director-works",
    name: "Comr. Otobong Ekanem Dennis",
    office: "Director of Works & Maintenance",
    img: "/img/exec/director-works.jpg",

    dept: "Food Engineering ",
    mandate:
      "The The Director of Works and Maintenance oversees the association's projects and surroundings, from maintaining faculty facilities and workspaces to driving cleanliness and environmental upkeep across the engineering community.",
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
