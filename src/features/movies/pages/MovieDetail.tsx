import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../service/useMovies";

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById } = useMovies();
  const { data } = getMovieById(id);
  console.log(data);
  return (
    <section>
      <div className="container">
        <h2>MovieDetail</h2>
      </div>
    </section>
  );
};

export default memo(MovieDetail);
