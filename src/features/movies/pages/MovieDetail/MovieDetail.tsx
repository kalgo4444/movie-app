import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../../service/useMovies";
import MovieDetailSkeleton from "../../components/MovieDetailSkeleton/MovieDetailSkeleton";
import DetailBackdrop from "./components/DetailBackdrop/DetailBackdrop";
import DetailPoster from "./components/DetailPoster/DetailPoster";
import DetailTitle from "./components/DetailTitle/DetailTitle";
import DetailInfoRight from "./components/DetailInfoRight/DetailInfoRight";
import DetailInfoLeft from "./components/DetailInfoLeft/DetailInfoLeft";
import DetailGenres from "./components/DetailGenres/DetailGenres";
import DetailProductionComponies from "./components/DetailProductionComponies/DetailProductionComponies";

const MovieDetail = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { getMovieById } = useMovies();
  const { data, isLoading } = getMovieById(id);
  return (
    <>
      {isLoading ? (
        <MovieDetailSkeleton />
      ) : (
        <section>
          <DetailBackdrop data={data} />
          <div className="container flex flex-col md:flex-row gap-3 md:gap-8 mt-10">
            <DetailPoster data={data} />
            <div className="w-full md:w-1/2">
              <DetailTitle data={data} />
              <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-5 mt-8 md:mt-14">
                <DetailInfoRight data={data} />
                <DetailInfoLeft data={data} />
              </div>
              <DetailGenres data={data} />
              <DetailProductionComponies data={data} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default memo(MovieDetail);
