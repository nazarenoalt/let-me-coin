import { Outlet } from "react-router";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";

export const MobileLayout = () => {
  return (
    <div className="mobile-layout">
      <main>
        <Outlet />
      </main>
      <header>
        <NavbarMobile />
      </header>
    </div>
  );
};