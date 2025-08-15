import "./HeaderLinks.css";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { AppWindow, Columns2, Search, TicketPlus } from "lucide-react";

const HeaderLinks = () => {
  return (
    <ul className="flexCenter max-md:bg-black z-50 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full max-md:border-t max-md:py-3 max-md:border-headerLinkTopBorder max-md:flex max-md:justify-evenly">
      <li className="w-20 h-12 flexItemCenter linkBgHover linkBgActive duration-200 rounded-mainRadius">
        <NavLink
          className={"link_active text-secondText text-sm font-medium"}
          to={"/"}
        >
          <div className="flexColCenter">
            <span>
              <AppWindow />
            </span>
            <span>Афиша</span>
          </div>
        </NavLink>
      </li>
      <li className="w-20 h-12 flexItemCenter linkBgHover linkBgActive duration-200 rounded-mainRadius">
        <NavLink
          className={"link_active text-secondText text-sm font-medium"}
          to={"/seasons"}
        >
          <div className="flexColCenter">
            <span>
              <Columns2 />
            </span>
            <span>Ceансы</span>
          </div>
        </NavLink>
      </li>
      <li className="w-20 h-12 flexItemCenter linkBgHover linkBgActive duration-200 rounded-mainRadius">
        <NavLink
          className={"link_active text-secondText text-sm font-medium"}
          to={"/tickets"}
        >
          <div className="flexColCenter">
            <span>
              <TicketPlus />
            </span>
            <span>Билеты</span>
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
