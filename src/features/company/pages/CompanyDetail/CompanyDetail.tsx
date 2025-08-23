import { memo } from "react";
import { useParams } from "react-router-dom";
import { useCompanyAPI } from "../../service/useCompanyAPI";
import { IMAGE_URL } from "../../../../shared/static";
import CompanyDetailSkeleton from "../../components/CompanyDetailSkeleton/CompanyDetailSkeleton";

const CompanyDetail = () => {
  scrollTo(0, 0);
  const { id } = useParams();
  const { getCompanyById, getCompanyItem } = useCompanyAPI();
  const { data, isFetching } = getCompanyById(id);
  const { data: imageData, isFetching: imageFetching } = getCompanyItem(
    id,
    "images"
  );
  console.log(data);
  console.log(imageData);
  return (
    <section className="mt-10">
      <title>Movie | Company</title>
      <div className="container">
        {isFetching ? (
          <CompanyDetailSkeleton />
        ) : (
          <div>
            <div className="min-h-[50vh] flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2 ">
                {!data?.logo_path ? (
                  <div className="w-1/2 min-h-[400px] bg-neutral-700 animate-pulse"></div>
                ) : (
                  <img
                    src={`${IMAGE_URL}${data?.logo_path}`}
                    alt={data?.name}
                    width={500}
                    className="block mx-auto"
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
            <section>
              <h2 className='text-lg md:text-3xl font-semibold'>Company Images</h2>
              <div className="mt-10 flex gap-5 overflow-x-auto">
                {!imageData?.logos ? (
                  <div className="min-h-[40vh] flexItemCenter">
                    Image not found
                  </div>
                ) : (
                  <>
                    {imageData?.logos.map((item: any) => (
                      <div
                        className="bg-neutral-900 rounded-mainRadius p-5"
                        key={item.id}
                      >
                        <img
                          className="w-[400px]"
                          src={`${IMAGE_URL}${item.file_path}`}
                          alt={item.id}
                        />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(CompanyDetail);
