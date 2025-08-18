import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../../../service/useMovies";
import type { CrewMember, IMovieCreditsResponse } from "../../../types";
import notFound from "../../../../../shared/assets/images/notFoundUser.png";
import { IMAGE_URL } from "../../../../../shared/static";

const CrewTab = () => {
  const { id } = useParams();
  const { getMovieItem } = useMovies();
  const nav = useNavigate();
  const { data } = getMovieItem<IMovieCreditsResponse>(id, "credits");
  const obj: any | undefined = data?.crew;
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 py-3">
        {obj?.map((item: CrewMember, index: number) => (
          <div
            onClick={() => nav(`/people/${item.id}`)}
            key={index}
            className="w-[110px] cursor-pointer"
          >
            {!item?.profile_path ? (
              <img width={100} loading="lazy" src={notFound} alt="" />
            ) : (
              <img
                width={100}
                loading="lazy"
                src={`${IMAGE_URL}${item.profile_path}`}
                alt={item.original_name}
              />
            )}
            <h2>{item.original_name}</h2>
            <b>{item.name}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(CrewTab);
