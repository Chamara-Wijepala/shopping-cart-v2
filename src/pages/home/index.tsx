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
        <section className="category-section fade-in-1">
          <h2 className="homepage-heading fs-700 fw-800 uppercase">
            What we offer
          </h2>

          <ul
            aria-label="categories"
            className="category-list clr-primary-100 no-list-style uppercase"
          >
            <li>
              <Link to="shop/men">
                <div className="category-item category-item--men nav-item flex">
                  <h3 className="fs-800">Men&apos;s Clothing</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="shop/women">
                <div className="category-item category-item--women nav-item flex">
                  <h3 className="fs-800">Women&apos;s Clothing</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="shop/jewellery">
                <div className="category-item category-item--jewellery nav-item flex">
                  <h3 className="fs-800">Jewellery</h3>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <section className="about-section clr-primary-100 fade-in-1 flex">
        <h2 className="fs-900 uppercase">
          Our <span className="clr-accent-400">story</span>
        </h2>
        <p className="about-section__paragraph text-center fs-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          corporis enim placeat quia! Delectus tempore, officiis sint aliquid
          pariatur, soluta quos odio distinctio corrupti vitae laudantium, animi
          laboriosam dignissimos dolorum consequuntur! Minus sed eligendi
          nesciunt, velit adipisci voluptatibus eius ipsam!
        </p>
      </section>
    </>
  );
}
