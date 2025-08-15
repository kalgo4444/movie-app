import { memo } from "react";

const SwiperSkeleton = () => {
  return (
    <>
      <div className="max-w-[1360px] mx-auto min-h-[760px] rounded-mainRadius overflow-hidden bg-neutral-700 animate-pulse"></div>
      <div className="w-full">
        <div className="max-w-lg w-full h-18 bg-neutral-700 animate-pulse mt-1 mx-auto rounded-mainRadius"></div>
      </div>
    </>
  );
};

export default memo(SwiperSkeleton);
