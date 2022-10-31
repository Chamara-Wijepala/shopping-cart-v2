import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { AiOutlineShop } from "react-icons/ai";

import SideMenu from "components/side-menu";

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

        <div className="header-items flex">
          <nav
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
              to="/shop"
              className="nav-item fw-800 clr-primary-100 uppercase"
            >
              Shop
            </NavLink>
          </nav>

          {/* cart menu btn */}
          <button
            type="button"
            className="btn-with-icon nav-item fw-800 clr-primary-100 flex align-center"
          >
            <span className="sr-only">cart</span>
            <BiShoppingBag className="icon-md" /> {itemCount}
            <span className="sr-only">items</span>
          </button>

          {/* side nav menu btn */}
          <button
            type="button"
            className="open-nav-btn nav-item clr-primary-100"
            onClick={() => setIsSideNavOpen(true)}
          >
            <GiHamburgerMenu className="icon-lg" />
          </button>
        </div>

        <SideMenu open={isSideNavOpen}>
          <div className="side-menu-nav-container clr-secondary-800 flex">
            <button
              type="button"
              className="clr-secondary-800"
              onClick={() => setIsSideNavOpen(false)}
            >
              <MdClose className="icon-lg" />
            </button>

            <nav className="side-menu-nav flex">
              <NavLink
                to="/"
                end
                className="nav-item fs-800 fw-800 uppercase flex align-center btn-with-icon"
              >
                Home <HiOutlineHomeModern />
              </NavLink>
              <NavLink
                to="/shop"
                className="nav-item fs-800 fw-800 uppercase flex align-center btn-with-icon"
              >
                Shop <AiOutlineShop />
              </NavLink>
            </nav>
          </div>
        </SideMenu>
      </div>
    </header>
  );
}
