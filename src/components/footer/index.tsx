/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="bg-secondary-800 clr-primary-100">
      <div className="footer-content container flex">
        <div className="flex">
          <h2 className="fs-600 fw-800">
            <Link to="/">
              fake<span className="clr-accent-400">store</span>
            </Link>
          </h2>

          <nav aria-label="footer navigation" className="footer-nav">
            <ul className="footer-list no-list-style fw-800 flex">
              <li className="uppercase">
                <Link to="/" className="nav-item">
                  Home
                </Link>
              </li>
              <li className="uppercase">
                <Link to="/shop" className="nav-item">
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="footer-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          incidunt, neque illum quis assumenda eligendi hic fugiat. Quasi alias
          autem, perspiciatis dolorem accusamus quidem atque corrupti harum
          nihil nobis explicabo labore praesentium perferendis natus corporis
          vel distinctio repudiandae cumque maiores? Adipisci aut voluptatem
          minima, accusantium illo itaque eaque id soluta?
        </p>

        <ul
          aria-label="social media"
          className="social-links footer-list flex no-list-style"
        >
          <li aria-label="facebook">
            <a href="#" className="nav-item fs-800">
              <FaFacebookSquare />
            </a>
          </li>
          <li aria-label="twitter">
            <a href="#" className="nav-item fs-800">
              <FaTwitter />
            </a>
          </li>
          <li aria-label="instagram">
            <a href="#" className="nav-item fs-800">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
