import { memo } from "react";

const MovieDetailSkeleton = () => {
  return (
    <>
      <section className="max-w-5/6 w-full mx-auto h-[45vh] md:h-[70vh] bg-neutral-700 animate-pulse rounded-mainRadius"></section>
      <div className="container flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="w-full md:w-1/2">
          <div className="md:max-w-1/2 w-full h-[30vh] md:h-[60vh] bg-neutral-700 animate-pulse rounded-mainRadius mx-auto"></div>
        </div>
        <div className="w-full md:w-1/2 h-[30vh] flex flex-col gap-10">
          <div className="w-full md:w-2/3 h-10 rounded-mainRadius bg-neutral-700 animate-pulse"></div>
          <div className="w-full md:w-2/3 h-10 rounded-mainRadius bg-neutral-700 animate-pulse"></div>
          <div className="w-full md:w-2/3 h-10 rounded-mainRadius bg-neutral-700 animate-pulse"></div>
          <div className="w-full md:w-2/3 h-10 rounded-mainRadius bg-neutral-700 animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default memo(MovieDetailSkeleton);
