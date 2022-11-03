import { NavLink, Outlet } from "react-router-dom";

import "./shop.css";

export default function Shop() {
  return (
    <div className="container">
      <nav
        aria-label="secondary navigation"
        className="category-tab-panel fw-800 no-list-style uppercase text-center"
      >
        <NavLink to="all" className="tab-item">
          All
        </NavLink>
        <NavLink to="men" className="tab-item">
          Men&apos;s Clothing
        </NavLink>
        <NavLink to="women" className="tab-item">
          Women&apos;s Clothing
        </NavLink>
        <NavLink to="jewellery" className="tab-item">
          Jewellery
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
