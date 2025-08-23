import "../style/Search.css";
import { Empty, Input, type InputRef } from "antd";
import { memo, useEffect, useRef, useState } from "react";
import { useSearch } from "../services/useSearch";
import SwiperCarts from "../../../shared/components/swiperCarts/SwiperCarts";
import { useDebounce } from "../../../shared/hooks/useDebounce";

const Search = () => {
  useEffect(() => {
    scrollTo(0, 0);
    focusRef.current?.focus();
  }, []);
  const focusRef = useRef<InputRef>(null);
  const [value, setValue] = useState("");
  const { getMovieBySearch } = useSearch();
  const searchValue = useDebounce<string>(value, 1200);
  const { data: searchData } = getMovieBySearch({ query: searchValue });
  return (
    <section>
      <title>Movie | Search</title>
      <div className="container">
        <div className="max-w-lg block mx-auto mt-4">
          <Input
            ref={focusRef}
            type="text"
            className="h-12"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Поиск"
          />
        </div>
        {searchData?.results.length > 0 ? (
          <SwiperCarts data={searchData?.results} title="Поиск" />
        ) : (
          <div className="h-[60vh] flexItemCenter flex-col">
            <Empty />
            <p className="text-4xl font-semibold">Поиск</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Search);
