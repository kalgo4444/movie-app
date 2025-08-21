import "./HeaderLinks.css";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Clapperboard, House, Search, Bookmark } from "lucide-react";
import { useSelector } from "react-redux";

const HeaderLinks = () => {
  const obj = useSelector((state: any) => state.bookmark.data);
  return (
    <ul className="flexCenter max-md:bg-black z-50 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full max-md:border-t max-md:py-3 max-md:border-headerLinkTopBorder max-md:flex max-md:justify-evenly">
      <li className="w-20 h-12 flexItemCenter linkBgHover linkBgActive duration-200 rounded-mainRadius">
        <NavLink
          className={"link_active text-secondText text-sm font-medium"}
          to={"/"}
        >
          <div className="flexColCenter">
            <span>
              <House />
            </span>
            <span>{"Главный"}</span>
          </div>
        </NavLink>
      </li>
      <li className="w-20 h-12  flexItemCenter linkBgHover linkBgActive duration-200 rounded-mainRadius">
        <NavLink
          className={"link_active text-secondText text-sm font-medium"}
          to={"/movies"}
        >
          <div className="flexColCenter">
            <span>
              <Clapperboard />
            </span>
            <span>Кино</span>
          </div>
        </NavLink>
      </li>
      <li className="w-20 h-12 relative flexItemCenter linkBgHover linkBgActive duration-200 rounded-mainRadius">
        {obj?.length ? (
          <div className="absolute top-0 right-0 bg-mainColor text-white w-4 h-4 rounded-full text-sm flex items-center justify-center">{obj?.length}</div>
        ) : (
          <></>
        )}
        <NavLink
          className={"link_active text-secondText text-sm font-medium"}
          to={"/bookmark"}
        >
          <div className="flexColCenter">
            <span>
              <Bookmark />
            </span>
            <span>Закладки</span>
          </div>
        </NavLink>
      </li>
      <li className="w-20 h-12 flexItemCenter linkBgHover linkBgActive duration-200 rounded-mainRadius">
        <NavLink
          className={"link_active text-secondText text-sm font-medium"}
          to={"/search"}
        >
          <div className="flexColCenter">
            <span>
              <Search />
            </span>
            <span>Поиск</span>
          </div>
        </NavLink>
      </li>
    </ul>
  );
};

export default memo(HeaderLinks);
