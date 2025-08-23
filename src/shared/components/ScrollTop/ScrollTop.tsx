import { CircleChevronUp } from "lucide-react";
import { memo, useState } from "react";

const ScrollTop = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 420) setScroll(true);
    else setScroll(false);
  });
  if (scroll)
    return (
      <div
        onClick={() => scrollTo(0, 0)}
        className="size-12 bg-mainColor cursor-pointer rounded-full fixed bottom-34 md:bottom-26 right-6 md:right-10 flexItemCenter"
      >
        <CircleChevronUp />
      </div>
    );
  return;
};

export default memo(ScrollTop);
