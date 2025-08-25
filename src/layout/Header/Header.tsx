import { memo, useEffect, useState } from "react";
import HeaderAction from "./HeaderAction/HeaderAction";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 0) setIsScroll(true);
      else setIsScroll(false);
    });
  }, []);
  return (
    <header
      className={`w-full sticky z-50 top-0 left-0 bg-black dark:bg-white border-b border-neutral-800 dark:border-0 duration-200 ${
        isScroll ? "h-16" : "h-20"
      }`}
    >
      <nav className="container h-full flexCenterBetween relative">
        <HeaderLogo />
        <HeaderLinks />
        <HeaderAction />
      </nav>
    </header>
  );
};

export default memo(Header);
