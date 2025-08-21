import { memo, type FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SwiperCart from "./swiperCart/SwiperCart";
import SwiperCartsSkeleton from "./skeleton/SwiperCartsSkeleton";

interface Props {
  title: string;
  data: any | undefined;
}

const SwiperCarts: FC<Props> = ({ title, data }) => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  return (
    <section className="mt-12.5">
      <div className="container">
        {data ? (
          <>
            {pathname == "/movies" ? (
              <></>
            ) : (
              <div className="flex items-center justify-between mb-5">
                <span className="text-lg font-medium">{title}</span>
                <span
                  className="text-mainColor cursor-pointer"
                  onClick={() => nav("/movies")}
                >
                  Показать все {">"}{" "}
                </span>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
        {data === null ? (
          <SwiperCartsSkeleton />
        ) : (
          <SwiperCart data={data} />
        )}
      </div>
    </section>
  );
};

export default memo(SwiperCarts);
