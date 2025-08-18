import { memo } from "react";
import { useParams } from "react-router-dom";
import { usePeopleAPI } from "../../service/usePeopleAPI";
import { IMAGE_URL } from "../../../../shared/static";

const PeopleDetail = () => {
  const { id } = useParams();
  const { getPeopleById } = usePeopleAPI();
  const { data: peopleData } = getPeopleById(id);
  console.log(peopleData);
  return (
    <section className="mt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 border">
          <div className="w-full md:w-1/2 min-h-[40vh] border">
            <div>
              <img
                width={500}
                src={`${IMAGE_URL}${peopleData?.profile_path}`}
                alt={peopleData?.name}
                className="block mx-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 border"></div>
        </div>
      </div>
    </section>
  );
};

export default memo(PeopleDetail);
