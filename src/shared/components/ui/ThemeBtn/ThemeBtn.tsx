import { MoonIcon, SunIcon } from "lucide-react";
import { memo, useEffect, useState } from "react";

const ThemeBtn = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  if (theme) localStorage.setItem("theme", theme);
  else localStorage.removeItem("theme");

  const toggle = (): void => {
    setTheme((p) => (p === "dark" ? null : "dark"));
  };
  return (
    <button
      className="p-2 bg-neutral-900 dark:bg-neutral-200 rounded-mainRadius cursor-pointer text-neutral-300"
      onClick={toggle}
    >
      {theme ? <MoonIcon className='text-black' /> : <SunIcon />}
    </button>
  );
};

export default memo(ThemeBtn);
