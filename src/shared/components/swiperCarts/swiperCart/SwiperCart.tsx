import { memo, type FC } from "react";
import type { IMovie } from "../../../../features/movies/types";
import { useNavigate } from "react-router-dom";
interface Props {
  data: IMovie[] | undefined;
}
const SwiperCart: FC<Props> = ({ data }) => {
  const newData = data?.slice(0, 8);
  const nav = useNavigate();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {newData?.map((item: IMovie) => (
        <div key={item.id}>
          <div
            onClick={() => nav(`/movie/:${item.id}`)}
            className="overflow-hidden rounded-mainRadius cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.original_title}
              className="hover:scale-105 duration-200"
            />
          </div>
          <div className="pl-1 pr-5 mt-3">
            <h3
              onClick={() => nav(`/movie/:${item.id}`)}
              className="text-base md:text-2xl line-clamp-1 cursor-pointer"
              title={item.original_title}
            >
              {item.title}
            </h3>
            <p className="text-sm md:text-lg text-secondText">
              {item.original_language.toUpperCase()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(SwiperCart);
