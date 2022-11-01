import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { AiOutlineShop } from "react-icons/ai";

import SideMenu from "components/side-menu";

import "./header.css";

export default function Header({ itemCount }: { itemCount: number }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  /*
    The active class on the Shop NavLink doesn't work when visiting a dynamic
    route as it's set to direct to shop/all. This code gets the path name which
    is used to set the active class whenever user is in the shop page
  */
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <header className="bg-secondary-800">
      <div className="container flex align-center">
        <Link to="/">
          <h1 className="fs-900 fw-400 clr-primary-100">
            fake<span className="fw-800 clr-accent-400">store</span>
          </h1>
        </Link>

        <div className="header-items flex">
          {/*
            in order to add display: none at small screen sizes the nav doesn't
            have the flex utility class
          */}
          <nav
            aria-label="primary navigation"
            className={clsx(
              isSideNavOpen && "open",
              "primary-nav bg-secondary-800"
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
              to="/shop/all"
              className={clsx(
                path === "shop" && "active",
                "nav-item fw-800 clr-primary-100 uppercase"
              )}
            >
              Shop
            </NavLink>
          </nav>

          {/* open cart btn */}
          <button
            type="button"
            aria-label="open cart"
            className="btn-with-icon nav-item fw-800 clr-primary-100 flex align-center"
          >
            <BiShoppingBag aria-hidden className="icon-md" />
            <span aria-hidden>{itemCount}</span>
          </button>

          {/* open side nav btn */}
          <button
            type="button"
            aria-label="open navigation"
            className="open-nav-btn nav-item clr-primary-100"
            onClick={() => setIsSideNavOpen(true)}
          >
            <GiHamburgerMenu aria-hidden className="icon-lg" />
          </button>
        </div>

        <SideMenu open={isSideNavOpen}>
          <div className="side-menu-nav-container clr-secondary-800 flex">
            <button
              type="button"
              aria-label="close"
              className="clr-secondary-800"
              onClick={() => setIsSideNavOpen(false)}
            >
              <MdClose aria-hidden className="icon-lg" />
            </button>

            <nav aria-label="primary navigation" className="side-menu-nav flex">
              <NavLink
                to="/"
                end
                className="nav-item fs-800 fw-800 uppercase flex align-center btn-with-icon"
              >
                Home <GoHome aria-hidden />
              </NavLink>
              <NavLink
                to="/shop/all"
                className="nav-item fs-800 fw-800 uppercase flex align-center btn-with-icon"
              >
                Shop <AiOutlineShop aria-hidden />
              </NavLink>
            </nav>
          </div>
        </SideMenu>
      </div>
    </header>
  );
}
