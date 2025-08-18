import { memo, type FC } from "react";
import type { IMovieDetail } from "../../../../types";
import { IMAGE_URL } from '../../../../../../shared/static'

interface DetailPosterProps {
  data: IMovieDetail | undefined;
}

const DetailPoster: FC<DetailPosterProps> = ({ data }) => {
  return (
    <div className="w-full md:w-2/5">
      <div className="overflow-hidden">
        <img
          src={`${IMAGE_URL}${data?.poster_path}`}
          alt={data?.original_title}
          className="max-w-3/5 mx-auto rounded-mainRadius"
        />
      </div>
    </div>
  );
};

export default memo(DetailPoster);
