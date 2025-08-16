import { memo, type FC } from "react";
import type { IMovieDetail } from "../../../../types";

interface DetailPosterProps {
  data: IMovieDetail | undefined;
}

const DetailPoster: FC<DetailPosterProps> = ({ data }) => {
  return (
    <div className="w-full md:w-2/5">
      <div className="overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
          alt={data?.original_title}
          className="max-w-3/5 mx-auto rounded-mainRadius"
        />
      </div>
    </div>
  );
};

export default memo(DetailPoster);
