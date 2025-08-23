import { useNetworkState } from "@uidotdev/usehooks";
import { memo } from "react";

const NetWorkStatus = () => {
  const net = useNetworkState();

  if (net.online) {
    return;
  } else {
    return (
      <section className="bg-mainColor text-white">
        <div className="container">
          <div className="w-full h-12 flexItemCenter">
            <p className="text-2xl font-semibold text-center">
              проблема с сетью
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default memo(NetWorkStatus);
