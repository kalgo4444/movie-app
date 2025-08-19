import { memo, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../../static";
interface Props {
  data: any | undefined;
}
const SwiperCart: FC<Props> = ({ data }) => {
  const [loading, setLodaing] = useState<boolean>(true);
  const newData = data?.slice(0, 8);
  const nav = useNavigate();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {newData?.map((item: any) => (
        <div className="bg-neutral-900 rounded-mainRadius pb-5" key={item.id}>
          <div
            onClick={() => nav(`/movie/${item.id}`)}
            className="overflow-hidden rounded-mainRadius cursor-pointer"
          >
            <div>
              {!item.poster_path ? (
                <div className="h-[400px] flex items-center justify-center bg-neutral-900">
                  Image not Found
                </div>
              ) : (
                <div>
                  <img
                    onLoad={() => setLodaing(false)}
                    src={`${IMAGE_URL}${item.poster_path}`}
                    alt={item.title}
                  />
                  {loading && (
                    <div className="h-[400px] bg-neutral-700 animate-pulse rounded-mainRadius"></div>
                  )}
                </div>
              )}
            </div>
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
            <button className="bg-mainColor text-xs sm:text-sm md:text-base font-medium w-full py-3 rounded-mainRadius btn btnHover btnActive">
              Добавить в закладки
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(SwiperCart);
