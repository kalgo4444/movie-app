import { memo } from "react";
import HeaderActionBtn from "./components/ui/HeaderActionBtn";
import ThemeBtn from "../../../shared/components/ui/ThemeBtn/ThemeBtn";

const HeaderAction = () => {
  return (
    <div className='flex items-center gap-5'>
      <ThemeBtn />
      <HeaderActionBtn text={"Войти"} />
    </div>
  );
};

export default memo(HeaderAction);
