import { memo, type FC } from "react";
import type { IMovieDetail } from "../../../../types";

interface DetailGenresProps {
  data: IMovieDetail | undefined;
}
interface IMovieGenres {
  id: number;
  name: string;
}

const DetailGenres: FC<DetailGenresProps> = ({ data }) => {
  return (
    <div className="mt-8 md:mt-5">
      <b className="text-lg">Genres:</b>
      <div className="flex flex-wrap gap-10 my-2">
        {data?.genres?.map((item: IMovieGenres) => (
          <span
            className="underline hover:text-mainColor duration-200"
            key={item.id}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default memo(DetailGenres);
