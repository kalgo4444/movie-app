import { memo, type FC } from "react";
import type { IMovie } from "../../../../features/movies/types";
import { useNavigate } from "react-router-dom";
import LoadingImage from "./components/LoadingImage/LoadingImage";
interface Props {
  data: IMovie[] | undefined;
}
const SwiperCart: FC<Props> = ({ data }) => {
  const newData = data?.slice(0, 8);
  const nav = useNavigate();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {newData?.map((item: IMovie) => (
        <div className="bg-neutral-900 rounded-mainRadius pb-5" key={item.id}>
          <div
            onClick={() => nav(`/movie/${item.id}`)}
            className="overflow-hidden rounded-mainRadius cursor-pointer"
          >
            <LoadingImage src={item.poster_path} alt={item.original_title} />
          </div>
          <div className="pl-3 pr-5 mt-3">
            <h3
              onClick={() => nav(`/movie/${item.id}`)}
              className="text-base md:text-2xl line-clamp-1 cursor-pointer"
              title={item.original_title}
            >
              {item.title}
            </h3>
            <p className="text-sm md:text-lg text-secondText mb-3">
              {item.original_language.toUpperCase()}
            </p>
            <button
              className="bg-mainColor text-xs sm:text-sm md:text-base font-medium w-full py-3 rounded-mainRadius btn btnHover btnActive"
            >
              Добавить в закладки
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(SwiperCart);
