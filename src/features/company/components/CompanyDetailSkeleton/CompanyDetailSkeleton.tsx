import { memo } from "react";

const CompanyDetailSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <div className="w-full md:w-1/2 h-[30vh] md:h-[60vh] bg-neutral-700 animate-pulse rounded-mainRadius"></div>
      <div className="w-full md:w-1/2 h-[30vh] md:h-[60vh] bg-neutral-700 animate-pulse rounded-mainRadius"></div>
    </div>
  );
};

export default memo(CompanyDetailSkeleton);
