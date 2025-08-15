import { memo } from "react";
import HeaderAction from "./HeaderAction/HeaderAction";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = () => {
  return (
    <header className="w-full h-20 sticky z-50 top-0 left-0 bg-black">
      <nav className="container h-full flexCenterBetween">
        <HeaderLogo />
        <HeaderLinks />
        <HeaderAction />
      </nav>
    </header>
  );
};

export default memo(Header);
