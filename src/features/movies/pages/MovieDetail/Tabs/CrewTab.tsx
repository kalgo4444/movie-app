import { memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../../../service/useMovies";
import type { CrewMember, IMovieCreditsResponse } from "../../../types";
import notFound from "../../../../../shared/assets/images/notFoundUser.png";
import { IMAGE_URL } from "../../../../../shared/static";

const CrewTab = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  const { id } = useParams();
  const { getMovieItem } = useMovies();
  const nav = useNavigate();
  const { data } = getMovieItem<IMovieCreditsResponse>(id, "credits");
  const obj: any | undefined = data?.crew;
  const newData = show ? obj : obj?.slice(0, 11);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 py-3">
        {newData?.map((item: CrewMember, index: number) => (
          <div
            onClick={() => nav(`/people/${item.id}`)}
            key={index}
            className="w-[110px] cursor-pointer"
          >
            {!item?.profile_path ? (
              <div className="w-[100px] h-[150px] flex items-center">
                <img
                  loading="lazy"
                  src={notFound}
                  alt="Not found people image"
                />
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
            <b>{item.job}</b>
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

export default memo(CrewTab);
