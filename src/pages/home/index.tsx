import { Link } from "react-router-dom";

import "./home.css";

export default function Home() {
  return (
    <>
      <div className="hero-section clr-primary-100 fade-in-1">
        <div className="hero-text container flex">
          <h2 className="fw-800 fs-900 uppercase">Best of the best</h2>

          <p>
            On the hunt for some new fashionable clothes? Or some new pieces of
            jewellery to show off to your friends? We will not let you down.
          </p>

          <Link to="/shop/all">
            <button
              type="button"
              className="btn btn--accent fs-300 fw-800 uppercase"
            >
              Shop now
            </button>
          </Link>
        </div>
      </div>

      <div className="container">
        <nav aria-label="secondary navigation">
          <Link to="/shop/men">Men&apos;s Clothing</Link>
          <Link to="/shop/women">Women&apos;s Clothing</Link>
          <Link to="/shop/jewellery">Jewellery</Link>
        </nav>
      </div>
    </>
  );
}
