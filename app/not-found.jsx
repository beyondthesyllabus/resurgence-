import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pagehero" style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Page Not Found
        </span>
        <h1 className="title-blackletter pagehero__title">404</h1>
        <p className="lede" style={{ margin: "0 auto 28px" }}>
          The page you are looking for has moved or never existed. Return to the inauguration home to continue.
        </p>
        <Link href="/" className="btn btn--gold">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
