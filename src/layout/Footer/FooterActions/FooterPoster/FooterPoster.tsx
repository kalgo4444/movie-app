import { memo } from "react";
import footerLogo from "../../../../shared/assets/images/footerLogo.png";
import footerPoster1 from "../../../../shared/assets/images/footerPoster.png";
import footerPoster2 from "../../../../shared/assets/images/footerPoster2.png";
import { Link } from "react-router-dom";

const FooterPoster = () => {
  return (
    <div className="flexColStart">
      <Link to={"/"} onClick={() => scrollTo(0, 0)}>
        <img src={footerLogo} alt="Footer Logo" />
      </Link>
      <div className="mt-16">
        <a href="#">
          <img src={footerPoster1} alt="Footer Poster 1" className="" />
        </a>
        <a href="#">
          <img src={footerPoster2} alt="Footer Poster 2" className="mt-2" />
        </a>
      </div>
    </div>
  );
};

export default memo(FooterPoster);
