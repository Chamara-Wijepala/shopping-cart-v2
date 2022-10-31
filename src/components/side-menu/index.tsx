import clsx from "clsx";

import "./side-menu.css";

export default function SideMenu({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) {
  return (
    <div className={clsx(open && "open", "side-menu bg-secondary-200")}>
      {children}
    </div>
  );
}
