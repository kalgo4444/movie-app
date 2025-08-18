import { memo, useEffect } from "react";
import MainSwiper from "../../../shared/components/swiper/Swiper";
import { useMovies } from "../../movies/service/useMovies";
import SwiperCarts from "../../../shared/components/swiperCarts/SwiperCarts";

const Home = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const { getMovies } = useMovies();
  const { data } = getMovies({ page: 1 });
  return (
    <section>
      <MainSwiper data={data?.results} />
      <SwiperCarts title={"На неделе"} data={data?.results} />
    </section>
  );
};

export default memo(Home);
