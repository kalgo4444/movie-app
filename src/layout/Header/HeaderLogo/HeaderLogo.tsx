import { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../../shared/assets/images/logo.svg";

const HeaderLogo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="Header Logo" />
    </Link>
  );
};

export default memo(HeaderLogo);
