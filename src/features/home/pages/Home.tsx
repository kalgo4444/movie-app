import { memo } from "react";
import MainSwiper from "../../../shared/components/swiper/Swiper";
import { useMovies } from "../../movies/service/useMovies";
import SwiperCarts from "../../../shared/components/swiperCarts/SwiperCarts";

const Home = () => {
  const { getMovies, getMoviesByUrl } = useMovies();
  const { data } = getMovies();
  getMoviesByUrl("/movie/now_playing");
  console.log();
  return (
    <section>
      <MainSwiper data={data?.results} />
      <SwiperCarts title={"На неделе"} data={data?.results} />
    </section>
  );
};

export default memo(Home);
