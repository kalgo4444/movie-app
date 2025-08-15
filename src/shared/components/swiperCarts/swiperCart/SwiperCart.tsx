import { memo, type FC } from "react";
import type { IMovie } from "../../../../features/movies/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'

import "swiper/css";
// import "swiper/css/navigation";

interface Props {
  data: IMovie[] | undefined;
}

const SwiperCart: FC<Props> = ({ data }) => {
    const nav = useNavigate()
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map((item: IMovie) => (
          <SwiperSlide onClick={() => nav(`/movie/${item.id}`)} key={item.id} className='cursor-pointer'>
            <div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.original_title}
                  className='rounded-mainRadius'
                />
              </div>
              <div>
                <h3 className='text-2xl font-medium line-clamp-1' title={item.original_title}>{item.title}</h3>
                <p>{item.release_date.split('-')[0].toString()}</p>
                <p className='text-secondText'>{item.original_language.toUpperCase()}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(SwiperCart);
