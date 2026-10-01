import Link from "next/link";

const WHATSAPP_NUMBER = "2349168721123"; // 09168721123 in international format (Nigeria +234)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__sunburst" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand__wordmark brand__wordmark--footer" src="/img/logo-resurgence.png" alt="The Resurgence" />
          <p className="footer__tag">
            Nigerian Universities Engineering Students&apos; Association, University of Uyo, inaugurating a new
            chapter of service, unity and excellence.
          </p>
          <div className="footer__chips">
            <span className="chip">#TheMastermind</span>
            <span className="chip chip--dark">#ForThePeople</span>
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link href="/about">The Resurgence</Link>
          <Link href="/executives">The Executives</Link>
          <Link href="/programme">Programme of Events</Link>
          <Link href="/president">President-Elect</Link>
          <Link href="/gallery">Gallery</Link>
        </div>

        <div className="footer__col">
          <h4>The Ceremony</h4>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="footer__seal" src="/img/logo-nuesa.png" alt="NUESA crest" />
          <p>
            250 Capacity TETFUND Hall,
            <br />
            Faculty of Engineering,
            <br />
            University of Uyo.
          </p>
        </div>

        <div className="footer__col">
          <h4>Connect</h4>
          <a href="https://x.com/FavourToni" target="_blank" rel="noopener noreferrer">
            X (Twitter)
          </a>
          <a
            href="https://www.linkedin.com/in/favour-tony-91b858301/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61587445967838"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: 09168721123
          </a>
        </div>
      </div>

      <div className="footer__base">
        <div className="container footer__baseinner">
          <span>© {new Date().getFullYear()} NUESA, University of Uyo. All rights reserved.</span>
          <span className="footer__made">The Resurgence · Inauguration Ceremony</span>
          <span className="footer__credit">Design &amp; developed by Toni Dev</span>
        </div>
      </div>
    </footer>
  );
}