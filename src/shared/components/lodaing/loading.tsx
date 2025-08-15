import { memo } from "react";
import { Popcorn } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <span className="font-semibold text-7xl text-mainColor">
        <Popcorn size={102} />
      </span>
    </div>
  );
};

export default memo(Loading);
