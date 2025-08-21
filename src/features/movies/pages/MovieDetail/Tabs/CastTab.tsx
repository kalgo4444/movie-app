import { memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../../../service/useMovies";
import type { ICastMember, IMovieCreditsResponse } from "../../../types";
import notFound from "../../../../../shared/assets/images/notFoundUser.png";
import { IMAGE_URL } from "../../../../../shared/static";

const CastTab = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const { id } = useParams();
  const { getMovieItem } = useMovies();
  const nav = useNavigate();
  const { data } = getMovieItem<IMovieCreditsResponse>(id, "credits");
  const obj: any | undefined = data?.cast;
  const newData = show ? obj : obj?.slice(0, 11);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 py-3">
        {newData?.map((item: ICastMember, inx: number) => (
          <div
            onClick={() => nav(`/people/${item.id}`)}
            key={inx}
            className="w-[110px] cursor-pointer"
          >
            {!item?.profile_path ? (
              <div className="w-[100px] h-[150px] flex items-center">
                <img loading="lazy" src={notFound} alt="Not found image" />
              </div>
            ) : (
              <div>
                <img
                  onLoad={() => setLoading(false)}
                  width={100}
                  loading="lazy"
                  src={`${IMAGE_URL}${item.profile_path}`}
                  alt={item.original_name}
                  className="rounded-mainRadius"
                />
                {loading && (
                  <div className="w-[100px] h-[150px] bg-neutral-700 animate-pulse"></div>
                )}
              </div>
            )}
            <h2>{item.original_name}</h2>
            <b className="block">{item.character}</b>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {obj?.length > 12 ? (
          <button
            onClick={() => setShow((p) => !p)}
            className="px-4 py-2 bg-mainColor text-lg font-semibold rounded-mainRadius block mx-auto btn btnHover btnActive"
          >
            {show ? "Show less" : "Show more"}
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default memo(CastTab);
