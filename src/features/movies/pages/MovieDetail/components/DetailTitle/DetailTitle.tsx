import { memo, type FC } from "react";
import type { IMovieDetail } from "../../../../types";

interface DetailTitleProps {
  data: IMovieDetail | undefined;
}

const DetailTitle: FC<DetailTitleProps> = ({ data }) => {
  return (
    <div>
      <h3 className="text-2xl max-sm:text-center md:text-3xl font-semibold my-2">{data?.original_title}</h3>
      <p className="text-base md:text-lg my-2">{data?.overview}</p>
    </div>
  );
};

export default memo(DetailTitle);
