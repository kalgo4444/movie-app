import { memo } from "react";
const footerLogo = "../../../../shared/assets/images/footerLogo.png";
const footerPoster1 = "../../../../shared/assets/images/footerPoster.png";
const footerPoster2 = "../../../../shared/assets/images/footerPoster2.png";

const FooterPoster = () => {
  return (
    <div className="flexColStart">
      <img src={footerLogo} alt="Footer Logo" />
      <div className='mt-12'>
        <img src={footerPoster1} alt="Footer Poster 1" />
        <img src={footerPoster2} alt="Footer Poster 2" />
      </div>
    </div>
  );
};

export default memo(FooterPoster);
