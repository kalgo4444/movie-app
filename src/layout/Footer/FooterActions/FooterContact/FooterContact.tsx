import { memo } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const FooterContact = () => {
  return (
    <div className="FooterContact">
      <div>
        <h4 className="text-base font-medium mb-5">Связаться с нами</h4>
        <a href="tel:+998331663033" className="text-mainColor text-xl">
          +998 (33) 166-30-33
        </a>
      </div>
      <div>
        <div className="mt-8 md:mt-13.5">
          <h4 className="text-base font-medium">Социальные сети</h4>
          <div className="text-mainColor flexCenter gap-5 mt-5">
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FooterContact);
