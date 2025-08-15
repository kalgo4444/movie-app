import { Drum, SquarePlay, Videotape, Volleyball } from 'lucide-react'
import { memo } from "react";
import { Link } from "react-router-dom";

const FooterCategoryLink = () => {
  return (
    <ul>
      <h4 className="font-medium text-base">Категории</h4>
      <li className="flexCenter gap-2 mt-5">
        <SquarePlay className="text-mainColor" />
        <Link
          className="text-base text-footerLinks hover:text-mainColor duration-200"
          to={"/"}
        >
          Кино
        </Link>
      </li>
      <li className="flexCenter gap-2 mt-5">
        <Videotape className="text-mainColor" />
        <Link
          className="text-base text-footerLinks hover:text-mainColor duration-200"
          to={"/"}
        >
          Театр
        </Link>
      </li>
      <li className="flexCenter gap-2 mt-5">
        <Drum className="text-mainColor" />
        <Link
          className="text-base text-footerLinks hover:text-mainColor duration-200"
          to={"/"}
        >
          Концерты
        </Link>
      </li>
      <li className="flexCenter gap-2 mt-5">
        <Volleyball className="text-mainColor" />
        <Link
          className="text-base text-footerLinks hover:text-mainColor duration-200"
          to={"/"}
        >
          Спорт
        </Link>
      </li>
    </ul>
  );
};

export default memo(FooterCategoryLink);
