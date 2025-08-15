import { memo } from "react";
import logo from '../../assets/images/logo.svg'

const Loading = () => {
  return (
    <div className="w-full h-screen bg-black flexItemCenter">
      <img src={logo} alt="Logo" width={300} />
    </div>
  );
};

export default memo(Loading);
