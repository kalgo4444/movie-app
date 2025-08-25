import { memo } from "react";
import logo from "../../shared/assets/images/logo.svg";
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const nav = useNavigate()
  return (
    <div className="w-full h-screen bg-neutral-950 dark:bg-neutral-100 flexItemCenter">
      <div className="max-w-xl w-full min-h-[400px] rounded-mainRadius border-2 border-mainColor p-5 flex flex-col justify-between">
        <div>
          <img src={logo} alt="Logo" className='my-3' width={150} />
          <b className="text-mainColor text-3xl">404 Error</b>
          <p className="text-mainColor text-xl">
            Yeah... I'm gonna need you to go ahead and find another page.
          </p>
        </div>
        <div className='flex items-center gap-5'>
          <button onClick={() => nav('/')} className='w-1/2 bg-mainColor h-12 text-xl font-semibold rounded-mainRadius btn btnHover btnActive duration-200'>Go Home</button>
          <button onClick={() => nav(-1)} className='w-1/2 bg-mainColor h-12 text-xl font-semibold rounded-mainRadius btn btnHover btnActive duration-200'>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default memo(NotFound);
