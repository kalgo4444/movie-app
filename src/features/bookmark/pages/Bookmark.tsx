import { memo, useEffect } from "react";

const Bookmark = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="Bookmark">
      <title>Movie | Bookmark</title>
    </div>
  );
};

export default memo(Bookmark);
