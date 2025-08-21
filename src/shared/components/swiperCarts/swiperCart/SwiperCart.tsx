import { memo, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../../static";
import { Bookmark } from "lucide-react";
interface Props {
  data: any | undefined;
}
const SwiperCart: FC<Props> = ({ data }) => {
  const [loading, setLodaing] = useState<boolean>(true);
  const nav = useNavigate();
  return (
    <div className="grid max-[380px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {data?.map((item: any) => (
        <div
          className="bg-neutral-900 rounded-mainRadius pb-2 md:pb-5"
          key={item.id}
        >
          <div
            onClick={() => nav(`/movie/${item.id}`)}
            className="overflow-hidden rounded-mainRadius cursor-pointer"
          >
            <div>
              {!item.poster_path ? (
                <div className=" h-[190px] sm:h-[430px] md:h-[340px] xl:h-[400px] flex items-center justify-center bg-neutral-900">
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
          <div className="pl-3 pr-5 mt-1 md:mt-3">
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
            <div className="flex items-center justify-end">
              <button className="bg-mainColor text-xs sm:text-sm md:text-base font-medium w-1/2 py-2 md:py-3 rounded-mainRadius flexItemCenter btn btnHover btnActive">
                <Bookmark />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(SwiperCart);
