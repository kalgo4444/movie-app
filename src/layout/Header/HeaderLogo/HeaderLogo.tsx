import { memo } from "react";
import { Link } from "react-router-dom";
const logo = "../../../shared/assets/images/logo.png";

const HeaderLogo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="Header Logo" />
    </Link>
  );
};

export default memo(HeaderLogo);
