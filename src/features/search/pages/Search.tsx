import "../style/Search.css";
import { Input } from "antd";
import { memo } from "react";

const Search = () => {
  const handleSearch = (value: string) => {
    console.log(value);
  };
  return (
    <section>
      <div className="container">
        <div className="max-w-lg block mx-auto mt-4">
          <Input
            type="text"
            className="h-12"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Поиск"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(Search);
