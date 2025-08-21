import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import SwiperCarts from "../../../shared/components/swiperCarts/SwiperCarts";
import { Button, Empty } from "antd";
import { useNavigate } from 'react-router-dom'

const Bookmark = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const obj = useSelector((state: any) => state.bookmark.data);
  const nav = useNavigate()

  return (
    <div className="Bookmark">
      <title>Movie | Bookmark</title>
      <div className="container">
        {obj?.length ? (
          <SwiperCarts data={obj} title="На неделе" />
        ) : (
          <div className="h-[50vh] flex flex-col items-center justify-center">
            <Empty />
            <Button onClick={() => nav('/')} color="danger" variant="solid">
              Домой
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Bookmark);
