import { memo, type FC } from "react";
import type { IMovieDetail } from "../../../../types";

interface DetailInfoRightProps {
  data: IMovieDetail | undefined;
}

const DetailInfoRight: FC<DetailInfoRightProps> = ({ data }) => {
  return (
    <div className="w-full md:w-1/2  flex flex-col gap-4">
      {data?.budget === 0 ? (
        <></>
      ) : (
        <div>
          <b>Budget: </b>
          <span>{Number(data?.budget).toLocaleString('en-US')}$</span>
        </div>
      )}
      <div>
        <b>Country: </b>
        <span></span>
        {data?.origin_country.toString().toUpperCase()}
      </div>
      <div>
        <b>Language: </b>
        <span></span>
        {data?.original_language}
      </div>
      <div>
        <b>Release: </b>
        <span></span>
        {data?.release_date}
      </div>
      <div>
        <b>Status: </b>
        <span></span>
        {data?.status}
      </div>
    </div>
  );
};

export default memo(DetailInfoRight);
