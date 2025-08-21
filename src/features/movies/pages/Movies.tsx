import { memo, useEffect } from "react";
import { useMovies } from "../service/useMovies";
import SwiperCarts from "../../../shared/components/swiperCarts/SwiperCarts";
import { Pagination, Select } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGenres } from "../service/useGenres";

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const page = params.get("page") || "1";
  const with_genres = params.get("genre") || "";
  const sort_by = params.get("sort") || "";
  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);
  const { getMovies } = useMovies();
  const { getGenres } = useGenres();
  const { data, isFetching } = getMovies({ page, with_genres, sort_by });
  const { data: genresData } = getGenres({ language: "ru" });
  const otta = Array.from({ length: 12 }).fill("");
  const handleChange = (value: number) => {
    params.set("page", value.toString());
    setParams(params);
  };
  const handleSelectChange = (value: string) => {
    params.set("genre", value);
    setParams(params);
  };
  const handleSortChnage = (value: string) => {
    params.set("sort", value);
    setParams(params);
  };
  const option = genresData?.genres.map(({ id, name }: any) => ({
    value: id.toString(),
    label: name.toUpperCase(),
  }));
  return (
    <section>
      <title>Movie | Movies List</title>
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-5">
          <Select
            onChange={handleSelectChange}
            className="max-w-[300px] w-full"
            placeholder={"Жанры"}
            options={option}
          ></Select>
          <Select
            onChange={handleSortChnage}
            className="max-w-[300px] w-full"
            placeholder={"Сортировать по"}
            options={[
              { label: "Сейчас смотрят", value: "popularity.desc" },
              { label: "Новые фильмы", value: "primary_release_data.acs" },
              { label: "Популярные", value: "vote_count.desc" },
              { label: "Средний рейтинг", value: "vote_average.desc" },
            ]}
          ></Select>
        </div>
        {isFetching ? (
          <div className="container my-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {otta?.map((_, inx: number) => (
              <div key={inx} className="h-[500px]">
                <div className="w-full h-[450px] bg-neutral-700 animate-pulse  rounded-mainRadius"></div>
                <div>
                  <div className="w-3/4 h-5 my-2 bg-neutral-700 animate-pulse  rounded-mainRadius"></div>
                  <div className="w-3/5 h-5 my-2 bg-neutral-700 animate-pulse  rounded-mainRadius"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <SwiperCarts data={data?.results} title={"Все"} />
            <div className="flex justify-center mt-10">
              <Pagination
                className='pagination_item'
                responsive={true}
                current={+page}
                onChange={handleChange}
                total={data?.total_pages}
                showSizeChanger={false}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default memo(Movies);
