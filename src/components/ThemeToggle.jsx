import { useEffect } from "react";
import { useState } from "react";
import iconSun from "../assets/icon-sun.svg";
import iconMoon from "../assets/icon-moon.svg";

function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  function handleToggleTheme() {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }

  return (
    <div
      className="flex cursor-pointer items-center gap-4 text-#4B6A9B transition-colors hover:text-[#222731] dark:text-white hover:dark:text-[#90A4D4]"
      onClick={handleToggleTheme}
    >
      <h3 className="text-[13px] font-bold leading-none tracking-[2.5px]">
        {theme === "dark" ? "LIGHT" : "DARK"}
      </h3>
      <img src={theme === "dark" ? iconSun : iconMoon} alt="icon" />
    </div>
  );
}
export default ThemeToggle;
