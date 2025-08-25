import { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";

const MovieDetailTabs = () => {
  return (
    <section className="mt-10">
      <ul className="w-full flex items-center gap-5 border-b border-neutral-700 h-13">
        <li>
          <NavLink
            className={`tabs__active text-base md:text-lg text-white dark:text-black py-3 px-1.5 rounded-t-mainRadius hover:bg-neutral-900 hover:dark:text-white duration-200 `}
            end={true}
            to={""}
          >
            Топовый состав
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              "tabs__active text-base md:text-lg text-white dark:text-black py-3 px-1.5 rounded-t-mainRadius hover:bg-neutral-900 hover:dark:text-white duration-200 "
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
