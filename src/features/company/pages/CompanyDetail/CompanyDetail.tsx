import { memo } from "react";
import { useParams } from "react-router-dom";
import { useCompanyAPI } from "../../service/useCompanyAPI";
import { IMAGE_URL } from "../../../../shared/static";
import CompanyDetailSkeleton from "../../components/CompanyDetailSkeleton/CompanyDetailSkeleton";

const CompanyDetail = () => {
  scrollTo(0, 0);
  const { id } = useParams();
  const { getCompanyById } = useCompanyAPI();
  const { data, isFetching } = getCompanyById(id);
  console.log(data);
  return (
    <section className="mt-10">
      <title>Movie | Company</title>
      <div className="container">
        {isFetching ? (
          <CompanyDetailSkeleton />
        ) : (
          <div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2 ">
                {!data?.logo_path ? (
                  <div className="w-1/2 min-h-[400px] bg-neutral-700 animate-pulse"></div>
                ) : (
                  <img
                    src={`${IMAGE_URL}${data?.logo_path}`}
                    alt={data?.name}
                  />
                )}
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-semibold">{data?.name}</h2>
                <p className="text-lg font-medium">
                  Headquarters: {data?.headquarters}
                </p>
                <p className="text-lg font-medium">
                  Country: {data?.origin_country}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(CompanyDetail);
