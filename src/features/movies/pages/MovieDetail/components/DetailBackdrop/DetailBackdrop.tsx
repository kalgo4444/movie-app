import { memo, type FC } from "react";
import type { IMovieDetail } from "../../../../types";

interface DetailBackdropProps {
  data: IMovieDetail | undefined;
}

const DetailBackdrop: FC<DetailBackdropProps> = ({ data }) => {
  return (
    <div className="relative hidden md:block">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <img
        src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
        alt=""
        className="w-full h-[35vh] md:h-[50vh] lg:h-[80vh] object-cover"
      />
    </div>
  );
};

export default memo(DetailBackdrop);
