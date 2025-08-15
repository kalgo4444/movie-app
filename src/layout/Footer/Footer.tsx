import { memo } from "react";
import FooterPoster from "./FooterActions/FooterPoster/FooterPoster";
import FooterAboutLink from "./FooterActions/FooterAboutLinks/FooterAboutLink";
import FooterCategoryLink from './FooterActions/FooterCategoryLinks/FooterCategoryLink'
import FooterContact from './FooterActions/FooterContact/FooterContact'

const Footer = () => {
  return (
    <footer className='mb-20 md:mb-10 mt-25'>
      <div className="container">
        <div className="max-w-[1180px] bg-footerBg rounded-mainRadius mx-auto p-7.5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-5">
            <FooterPoster />
            <FooterAboutLink />
            <FooterCategoryLink/>
            <FooterContact/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
