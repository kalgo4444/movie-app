import { memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../../../service/useMovies";
import type { ICastMember, IMovieCreditsResponse } from "../../../types";
import notFound from "../../../../../shared/assets/images/notFoundUser.png";
import { IMAGE_URL } from "../../../../../shared/static";

const CastTab = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const { getMovieItem } = useMovies();
  const nav = useNavigate();
  const { data } = getMovieItem<IMovieCreditsResponse>(id, "credits");
  const obj: any | undefined = data?.cast;
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 py-3">
        {obj?.map((item: ICastMember, inx: number) => (
          <div
            onClick={() => nav(`/people/${item.id}`)}
            key={inx}
            className="w-[110px] cursor-pointer"
          >
            {!item?.profile_path ? (
              <img width={100} loading="lazy" src={notFound} alt="" />
            ) : (
              <div>
                <img
                  onLoad={() => setLoading(false)}
                  width={100}
                  loading="lazy"
                  src={`${IMAGE_URL}${item.profile_path}`}
                  alt={item.original_name}
                />
                {loading && (
                  <div className="w-[100px] h-[150px] bg-neutral-700 animate-pulse"></div>
                )}
              </div>
            )}
            <h2>{item.original_name}</h2>
            <b>{item.name}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(CastTab);
