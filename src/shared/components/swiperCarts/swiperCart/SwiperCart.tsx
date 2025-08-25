import { memo, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../../static";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "../../../../features/bookmark/store/bookmarkSlice";
import { Bookmark } from "lucide-react";
interface Props {
  data: any | undefined;
  slice?: boolean;
}
const SwiperCart: FC<Props> = ({ data }) => {
  const [loading, setLodaing] = useState<boolean>(true);
  const nav = useNavigate();
  const dis = useDispatch();
  const obj = useSelector((state: any) => state.bookmark.data);
  return (
    <div className="grid max-[380px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {data?.map((item: any) => (
        <div
          className="rounded-mainRadius flex flex-col justify-between bg-neutral-950 dark:bg-white"
          key={item.id}
        >
          <div className="overflow-hidden rounded-mainRadius cursor-pointer">
            <div>
              {!item.poster_path ? (
                <div className=" h-[190px] sm:h-[430px] md:h-[340px] xl:h-[400px] flex items-center justify-center bg-neutral-900">
                  Image not Found
                </div>
              ) : (
                <div>
                  <div className="relative">
                    <img
                      onClick={() => nav(`/movie/${item.id}`)}
                      onLoad={() => setLodaing(false)}
                      src={`${IMAGE_URL}${item.poster_path}`}
                      alt={item.title}
                    />
                    <div
                      onClick={() => dis(toggleItem(item))}
                      className="absolute top-3 right-3 w-10 h-10 bg-neutral-900 dark:bg-neutral-300 rounded-mainRadius flexItemCenter"
                    >
                      {obj?.some((movie: any) => movie.id == item.id) ? (
                        <Bookmark
                          className="text-mainColor"
                          fill="currentColor"
                          size={30}
                        />
                      ) : (
                        <Bookmark className="text-mainColor" size={30} />
                      )}
                    </div>
                  </div>
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
            <div className="my-2 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <svg
                  className="inline-block"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                </svg>
                <span>{Number(item.vote_average).toFixed(0)}</span>
              </div>
              <span className="text-sm md:text-lg text-secondText mb-3">
                {item.release_date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(SwiperCart);
