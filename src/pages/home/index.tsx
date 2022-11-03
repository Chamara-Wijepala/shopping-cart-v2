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
        <ul aria-label="categories" className="category-list">
          <li>
            <Link to="shop/men" className="nav-item">
              <div className="category-card flex align-center">
                <img
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  alt=""
                  aria-hidden
                  className="category-card__image"
                />
                <p className="fw-800 uppercase">Men&apos;s Clothing</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="women" className="nav-item">
              <div className="category-card flex align-center">
                <img
                  src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
                  alt=""
                  aria-hidden
                  className="category-card__image"
                />
                <p className="fw-800 uppercase">Women&apos;s Clothing</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="jewellery" className="nav-item">
              <div className="category-card flex align-center">
                <img
                  src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                  alt=""
                  aria-hidden
                  className="category-card__image"
                />
                <p className="fw-800 uppercase">Jewellery</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
