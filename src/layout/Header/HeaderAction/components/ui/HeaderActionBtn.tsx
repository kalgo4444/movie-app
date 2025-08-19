import { memo } from "react";
import { useNavigate } from "react-router-dom";

const HeaderActionBtn = ({ text }: { text: string }) => {
  const nav = useNavigate();
  return (
    <button
      onClick={() => nav("/login")}
      className="btn bg-mainColor text-mainText font-medium py-2.5 sm:py-3 md:py-3.5 px-8 sm:px-12 md:px-16 rounded-mainRadius btnHover btnActive duration-200"
    >
      {text}
    </button>
  );
};

export default memo(HeaderActionBtn);
