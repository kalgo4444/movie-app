import { type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import type { IMovie } from "../../../features/movies/types";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SwiperSkeleton from "./skeleton/SwperSkeleton";

interface Props {
  data: IMovie[] | undefined;
}
const MainSwiper: FC<Props> = ({ data }) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const nav = useNavigate();

  return (
    <>
      {data === undefined ? (
        <SwiperSkeleton />
      ) : (
        <div className="w-full max-w-[1360px] mx-auto mb-[50px]">
          <Swiper
            modules={[Navigation, Thumbs, Autoplay]}
            navigation={true}
            // thumbs={{ swiper: thumbsSwiper }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // onSwiper={setThumbsSwiper}
            slidesPerView={1}
            spaceBetween={8}
            watchSlidesProgress
            className="rounded-xl overflow-hidden"
          >
            {data?.map((slide: IMovie) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="relative w-full h-[550px] md:h-[640px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original${slide.backdrop_path}")`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-10 left-[50%] -translate-x-1/2 text-white max-w-[200px] md:max-w-[380px] w-full">
                    <h2 className="font-semibold text-lg md:text-3xl leading-[125%] tracking-[0.01em] text-center mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-sm font-semibold leading-[125%] tracking-[0.01em] text-center mb-4">
                      {slide.release_date.split("-")[0]} •{" "}
                      {slide.original_language.toUpperCase()} •{" "}
                      {Number(slide.vote_average).toFixed(0)}
                    </p>
                    <button
                      onClick={() => nav(`/movie/${slide.id}`)}
                      className="mt-4 mx-auto flexItemCenter font-semibold w-full h-13.5 gap-2 text-center text-mainColor bg-white btnHover duration-200 rounded-mainRadius btn"
                    >
                      <Play />
                      Смотреть
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            // onSwiper={setThumbsSwiper}
            modules={[Navigation, Thumbs]}
            slidesPerView={7}
            spaceBetween={8}
            watchSlidesProgress
            className="mt-2"
          >
            {data?.map((slide: IMovie) => (
              <div className="max-w-[500px]">
                <SwiperSlide key={slide.id}>
                  <div
                    className="w-full h-[55px] bg-cover bg-center rounded-md border border-transparent hover:border-red-500 cursor-pointer transition-all duration-300"
                    style={{
                      backgroundImage: `url("https://image.tmdb.org/t/p/original${slide.backdrop_path}")`,
                    }}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default MainSwiper;
