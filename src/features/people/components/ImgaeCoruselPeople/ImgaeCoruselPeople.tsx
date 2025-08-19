import { memo } from "react";

const ImgaeCoruselPeople = () => {
  return (
    <div>
      <div className="flex gap-10 items-center flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-neutral-700 animate-pulse rounded-mainRadius min-h-[60vh]"></div>
        <div className="w-full md:w-1/2 bg-neutral-700 animate-pulse rounded-mainRadius min-h-[60vh]"></div>
      </div>
      <div className="my-4">
        <div className="w-4/5 h-10 rounded-mainRadius bg-neutral-700 animate-pulse my-4"></div>
        <div className="w-4/5 h-10 rounded-mainRadius bg-neutral-700 animate-pulse my-4"></div>
        <div className="w-4/5 h-10 rounded-mainRadius bg-neutral-700 animate-pulse my-4"></div>
        <div className="w-4/5 h-10 rounded-mainRadius bg-neutral-700 animate-pulse my-4"></div>
      </div>
    </div>
  );
};

export default memo(ImgaeCoruselPeople);
