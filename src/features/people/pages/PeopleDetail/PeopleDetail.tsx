import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePeopleAPI } from "../../service/usePeopleAPI";
import { IMAGE_URL } from "../../../../shared/static";
import ImgaeCoruselPeople from "../../components/ImgaeCoruselPeople/ImgaeCoruselPeople";
import type { IPeopleResopnse } from "../../../../shared/types";
import SwiperCarts from "../../../../shared/components/swiperCarts/SwiperCarts";

const PeopleDetail = () => {
  const [loading, setLodaing] = useState<boolean>(true);
  const { id } = useParams();
  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);
  const { getPeopleById, getPeopleItem } = usePeopleAPI();
  const { data: peopleData, isFetching: peopleFetching } = getPeopleById(id);
  const { data: peopleCastData } = getPeopleItem<IPeopleResopnse>(
    id,
    "movie_credits"
  );

  return (
    <section className="mt-20">
      <title>Movie | People</title>
      <div className="container">
        {peopleFetching ? (
          <ImgaeCoruselPeople />
        ) : (
          <div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-2/5 lg:w-3/12">
                <div>
                  <div>
                    {!peopleData?.profile_path ? (
                      <div className="text-center mx-auto flexItemCenter rounded-mainRadius w-full h-[400px] bg-neutral-900 ">
                        User not found
                      </div>
                    ) : (
                      <div>
                        <img
                          onLoad={() => setLodaing(false)}
                          src={`${IMAGE_URL}${peopleData?.profile_path}`}
                          alt={peopleData?.name}
                          className="block mx-auto rounded-mainRadius w-[200px] md:w-[300px] lg:w-[350px]"
                        />
                        {loading && (
                          <div className="block mx-auto w-[200px] md:w-[300px] lg:w-[350px] h-[400px] bg-neutral-700 animate-pulse"></div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="my-4">
                    <p>{peopleData?.birthday}</p>
                    <p>{peopleData?.place_of_birth}</p>
                    <p>
                      <b>Role:</b>{" "}
                      <span>{peopleData?.known_for_department}</span>
                    </p>
                    <p>
                      <b>Rating:</b> <span>{peopleData?.popularity}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5 lg:w-3/4">
                <h2 className="text-3xl font-semibold">{peopleData?.name}</h2>
                <div className="my-2">
                  {peopleData?.biography ? (
                    <p>{peopleData.biography}</p>
                  ) : (
                    <p>User biography not found</p>
                  )}
                </div>
              </div>
            </div>
            {peopleCastData?.cast ? (
              <SwiperCarts data={peopleCastData?.cast} title="Титры фильма" />
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(PeopleDetail);
