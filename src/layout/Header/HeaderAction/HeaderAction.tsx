import { memo } from "react";
import HeaderActionBtn from "./components/ui/HeaderActionBtn";

const HeaderAction = () => {
  return <HeaderActionBtn text={"Войти"} />;
};

export default memo(HeaderAction);
