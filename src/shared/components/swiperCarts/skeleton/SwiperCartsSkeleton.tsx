import { memo } from 'react';

const SwiperCartsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div >
        <div className='min-h-[550px] bg-neutral-700 animate-pulse rounded-mainRadius'></div>
        <div className='mt-4 max-w-3/4 w-full h-6 bg-neutral-700 animate-pulse rounded-mainRadius'></div>
        <div className='mt-2 max-w-3/6 w-full h-4 bg-neutral-700 animate-pulse rounded-mainRadius'></div>
      </div>
    </div>
  );
};

export default memo(SwiperCartsSkeleton);