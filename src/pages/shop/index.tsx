import { NavLink, Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <nav>
        <NavLink to="all">All</NavLink>
        <NavLink to="men">Men&apos;s Clothing</NavLink>
        <NavLink to="women">Women&apos;s Clothing</NavLink>
        <NavLink to="jewellery">Jewellery</NavLink>
      </nav>

      <Outlet />
    </>
  );
}
