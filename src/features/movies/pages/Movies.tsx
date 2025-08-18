import { memo, useEffect } from "react";

const Movies = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="Movies">
      <h2>Movies</h2>
    </div>
  );
};

export default memo(Movies);
