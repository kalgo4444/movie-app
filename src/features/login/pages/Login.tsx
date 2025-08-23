import { ChevronLeft } from "lucide-react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  return (
    <section className="mt-16 md:mt-20">
      <title>Movie | Login</title>
      <button
        onClick={() => nav(-1)}
        className="fixed top-10 md:top-2/12 left-10 md:left-2/12 size-16 md:size-20 bg-neutral-900 rounded-mainRadius flexItemCenter btn btnHover btnActive"
      >
        <ChevronLeft className="text-mainColor" size={56} />
      </button>
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-medium">Регистрация</h2>
          <p className="mt-4 max-w-[300px] w-full block mx-auto text-center text-secondText text-base font-medium">
            Введите номер телефона для того чтобы войти или пройти регистрацию
          </p>
          <form className="mt-8 max-w-[380px] w-full block mx-auto h-[200px] bg-neutral-900 rounded-mainRadius">
            Form
          </form>
          <p className="text-center text-secondText my-6">или</p>
          <div className="max-w-[380px] w-full mx-auto flex items-center gap-2">
            <button className="w-full h-14  btn btnHover btnActive duration-200 bg-neutral-900 rounded-mainRadius">
              <span className="text-lg font-semibold">Google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Login);
