import { memo, type FC } from "react";
import type { IMovieDetail } from "../../../../types";
import { useNavigate } from "react-router-dom";

interface DetailProductionComponiesProps {
  data: IMovieDetail | undefined;
}

interface IProductionComponies {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

const DetailProductionComponies: FC<DetailProductionComponiesProps> = ({
  data,
}) => {
  const nav = useNavigate();
  return (
    <div className="mt-8 md:mt-5">
      <b>Production Companies:</b>
      <div className="flex max-md:flex-col flex-wrap gap-5 md:gap-10 my-2">
        {data?.production_companies?.map((item: IProductionComponies) => (
          <span
            key={item.id}
            onClick={() => nav(`/company/${item.id}`)}
            className="underline cursor-pointer hover:text-mainColor duration-200"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default memo(DetailProductionComponies);
