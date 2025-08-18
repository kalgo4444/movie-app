import { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../shared/assets/images/logo.svg";

const HeaderLogo = () => {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const handleCLick = (): void => {
    if (pathname === "/") scrollTo(0, 0);
    else nav("/");
  };
  return (
    <div onClick={handleCLick} className="cursor-pointer">
      <img src={logo} alt="Header Logo" />
    </div>
  );
};

export default memo(HeaderLogo);
