import { memo, type FC } from "react";
import { useNavigate } from "react-router-dom";
import SwiperCart from "./swiperCart/SwiperCart";
import type { IMovie } from "../../../features/movies/types";
import SwiperCartsSkeleton from "./skeleton/SwiperCartsSkeleton";

interface Props {
  title: string;
  data: IMovie[] | undefined;
}

const SwiperCarts: FC<Props> = ({ title, data }) => {
  const nav = useNavigate();
  return (
    <section className="mt-12.5">
      <div className="container">
        <div className="flex items-center justify-between mb-5">
          <span className="text-lg font-medium">{title}</span>
          <span
            className="text-mainColor cursor-pointer"
            onClick={() => nav("/movies")}
          >
            Показать все {">"}{" "}
          </span>
        </div>
        {data === null ? <SwiperCartsSkeleton /> : <SwiperCart data={data} />}
      </div>
    </section>
  );
};

export default memo(SwiperCarts);
