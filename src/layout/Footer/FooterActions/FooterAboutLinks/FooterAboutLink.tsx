import { memo } from "react";
import { Link } from "react-router-dom";
import { CircleQuestionMark, FileText, Phone, Star } from "lucide-react";

const FooterAboutLink = () => {
  return (
    <ul>
      <h4 className="font-medium text-base">О нас</h4>
      <li className="flexCenter gap-2 mt-5">
        <FileText className="text-mainColor" />
        <Link
          className="text-base text-footerLinks hover:text-mainColor duration-200"
          to={"/"}
        >
          Публичная оферта
        </Link>
      </li>
      <li className="flexCenter gap-2 mt-5">
        <Star className="text-mainColor" />
        <Link
          className="text-base text-footerLinks hover:text-mainColor duration-200"
          to={"/"}
        >
          Реклама
        </Link>
      </li>
      <li className="flexCenter gap-2 mt-5">
        <CircleQuestionMark className="text-mainColor" />
        <Link
          className="text-base text-footerLinks hover:text-mainColor duration-200"
          to={"/"}
        >
          F.A.Q
        </Link>
      </li>
      <li className="flexCenter gap-2 mt-5">
        <Phone className="text-mainColor" />
        <Link
          className="text-base text-footerLinks hover:text-mainColor duration-200"
          to={"/"}
        >
          Контакты
        </Link>
      </li>
    </ul>
  );
};

export default memo(FooterAboutLink);
