import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import SwiperCarts from "../../../shared/components/swiperCarts/SwiperCarts";

const Bookmark = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const obj = useSelector((state: any) => state.bookmark.data);
  return (
    <div className="Bookmark">
      <title>Movie | Bookmark</title>
      <div className="container">
        {
          obj?.length ? <SwiperCarts data={obj} title="На неделе" /> : (
            <div className='h-[50vh]'></div>
          )
        }
      </div>
    </div>
  );
};

export default memo(Bookmark);
