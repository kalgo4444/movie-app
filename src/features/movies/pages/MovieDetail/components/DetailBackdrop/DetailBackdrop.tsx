import { memo, useState, type FC } from "react";
import type { IMovieDetail } from "../../../../types";
import { IMAGE_URL } from "../../../../../../shared/static";

interface DetailBackdropProps {
  data: IMovieDetail | undefined;
}

const DetailBackdrop: FC<DetailBackdropProps> = ({ data }) => {
  const [lodaing, setLodaing] = useState<boolean>(true);
  return (
    <div className="relative hidden md:block">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      {!data?.backdrop_path ? (
        <div className="w-full h-[35vh] md:h-[50vh] lg:h-[80vh] bg-neutral-900 flex items-center justify-center">
          Image not found
        </div>
      ) : (
        <div>
          <img
            loading="lazy"
            onLoad={() => setLodaing(false)}
            src={`${IMAGE_URL}${data?.backdrop_path}`}
            alt={data.original_title}
            className="w-full h-[35vh] md:h-[50vh] lg:h-[80vh] object-cover rounded-mainRadius"
          />
          {lodaing && (
            <div className="w-full h-[35vh] md:h-[50vh] lg:h-[80vh] bg-neutral-700 animate-pulse"></div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(DetailBackdrop);
