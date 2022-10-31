import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import "./header.css";

export default function Header({ itemCount }: { itemCount: number }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <header className="bg-secondary-800">
      <div className="container flex align-center">
        <Link to="/">
          <h1 className="fs-900 fw-400 clr-primary-100">
            fake<span className="fw-800 clr-accent-400">store</span>
          </h1>
        </Link>

        <nav
          className={clsx(
            isSideNavOpen && "open",
            "primary-nav bg-secondary-800 flex"
          )}
        >
          <NavLink
            to="/"
            end
            className="nav-item fw-800 clr-primary-100 uppercase"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="nav-item fw-800 clr-primary-100 uppercase"
          >
            Shop
          </NavLink>
        </nav>

        <button
          type="button"
          className="nav-item cart-btn fw-800 clr-primary-100 flex align-center"
        >
          <span className="sr-only">cart</span>
          <BiShoppingBag className="cart-icon" /> {itemCount}
          <span className="sr-only">items</span>
        </button>

        <button
          type="button"
          className="toggle-nav-btn nav-item clr-primary-100"
          onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        >
          {isSideNavOpen ? (
            <MdClose className="toggle-nav-icon" />
          ) : (
            <GiHamburgerMenu className="toggle-nav-icon" />
          )}
        </button>
      </div>
    </header>
  );
}
