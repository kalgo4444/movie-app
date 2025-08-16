import { memo, type FC } from "react";
import type { IMovieDetail } from "../../../../types";

interface DetailInfoLeftProps {
  data: IMovieDetail | undefined;
}

const DetailInfoLeft: FC<DetailInfoLeftProps> = ({ data }) => {
  return (
    <div className="w-full md:w-1/2  flex flex-col gap-4">
      <div>
        <b>Adult: </b>
        <span>{data?.adult ? "18+" : "6+"}</span>
      </div>
      <div>
        <b>Popularity: </b>
        <span>{data?.popularity.toFixed()}</span>
      </div>
      <div>
        <b>Average: </b>
        <span>{data?.vote_average} IMDB Rating</span>
      </div>
      <div>
        <b>Vote Count: </b>
        <span>{data?.vote_count}</span>
      </div>
    </div>
  );
};

export default memo(DetailInfoLeft);
