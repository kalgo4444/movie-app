import { memo, type FC } from "react";
import type { IMovie } from "../../types";

interface MovieViewProps {
  data: IMovie[] | undefined;
}

const MovieView: FC<MovieViewProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {data?.map((item: IMovie) => (
        <div key={item.id}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.title}
              loading="lazy"
            />
          </div>
          <div className='p-2'>
            <h3 className="font-black line-clamp-1" title={item.title}>
              {item.title}
            </h3>
            <p>{item.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(MovieView);
