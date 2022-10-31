import { Link } from "react-router-dom";

import "./home.css";

export default function Home() {
  return (
    <>
      <div className="hero-section clr-primary-100">
        <div className="hero-text container flex">
          <h2 className="fw-800 fs-900 uppercase">Best of the best</h2>

          <p>
            On the hunt for some new fashionable clothes? Or some new pieces of
            jewellery to show off to your friends? We will not let you down.
          </p>

          <Link to="/shop">
            <button type="button" className="uppercase">
              Shop now
            </button>
          </Link>
        </div>
      </div>

      <div className="container">home</div>
    </>
  );
}
