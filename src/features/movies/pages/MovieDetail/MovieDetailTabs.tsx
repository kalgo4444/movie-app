import { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";

const MovieDetailTabs = () => {
  return (
    <section className="mt-10">
      <ul className="w-full flex items-center gap-5 border-b border-neutral-700 h-15">
        <li>
          <NavLink
            className={`tabs__active text-base md:text-lg text-white py-3`}
            end={true}
            to={""}
          >
            Топовый состав
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              "tabs__active text-base md:text-lg text-white py-3"
            }
            to={"crew"}
          >
            Лучшая команда
          </NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default memo(MovieDetailTabs);
