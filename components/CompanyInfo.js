import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

export const CompanyInfo = () => {
  const [darkMode, setDarkMode] = useState(<MoonIcon className="w-5 h-5" />);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        setDarkMode(<SunIcon className="w-5 h-5" />);
      localStorage.theme = 'dark'
    } else {
        setDarkMode(<MoonIcon className="w-5 h-5" />);

      localStorage.theme = 'light'
    }
  }, []);

  const IsItDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
        setDarkMode(<SunIcon className="w-5 h-5" />);
    } else {
  
      setDarkMode(<MoonIcon className="w-5 h-5" />);

    }
  };

  return (
    <div className="flex items-center justify-between p-6 rounded-lg gap-y-6  bg-sky-300 dark:bg-gray-900 text-sky-100 dark-text-gray-500 ">
      <div className="flex items-center space-x-5">
        <img className="w-12 h-12" src="pizza.png" alt="" />

        <p className="font-semibold text-xl">Pizza Testa</p>
      </div>

      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          IsItDarkMode();
        }}
      >
        {darkMode}
      </button>
    </div>
  );
};
