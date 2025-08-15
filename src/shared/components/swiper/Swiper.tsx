import { type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { IMovie } from "../../../features/movies/types";
import SwiperSkeleton from "./skeleton/SwperSkeleton";
import { Play } from "lucide-react";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

interface Props {
  data: IMovie[] | undefined;
}
const MainSwiper: FC<Props> = ({ data }) => {
  const swiperData: IMovie[] | undefined = data?.slice(0, 5);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {data === undefined ? (
        <SwiperSkeleton />
      ) : (
        <>
          <Swiper
            spaceBetween={10}
            navigation={false}
            // thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {swiperData?.map((item: IMovie) => (
              <SwiperSlide key={item.id}>
                <div className="max-w-[1360px] mx-auto rounded-mainRadius overflow-hidden relative">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt=""
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[380px] w-full flex flex-col items-center my-6">
                    <h2 className="text-3xl font-medium mb-4">
                      {item.original_title}
                    </h2>
                    <div className="flex items-center gap-2 justify-center mb-4">
                      <span>{item.release_date.split("-")[0].toString()}</span>•
                      <span>{item.vote_count}</span>•
                      <span>{item.original_language.toLocaleUpperCase()}</span>•
                      <span>{item.adult == true ? "20+" : "6+"}</span>
                    </div>
                    <button className="w-full h-13 bg-white text-mainColor text-xl font-medium rounded-mainRadius flex items-center justify-center gap-2 btn">
                      <span>
                        <Play />
                      </span>
                      <span>Play</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            // onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-1"
          >
            {swiperData?.map((item: IMovie) => (
              <SwiperSlide
                className="max-w-27 h-16 w-full cursor-pointer rounded-mainRadius overflow-hidden"
                key={item.id}
              >
                <img
                  className="w-full h-full bg-cover"
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
};

export default MainSwiper;
