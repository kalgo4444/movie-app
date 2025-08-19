import { memo, useEffect } from "react";

const Movies = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <section>
      <title>Movie | Movies List</title>
    </section>
  );
};

export default memo(Movies);
