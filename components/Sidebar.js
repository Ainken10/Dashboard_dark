import {
  BellIcon,
  ChartPieIcon,
  ChatAltIcon,
  CogIcon,
  HomeIcon,
  LogoutIcon,
  MenuAlt2Icon,
  TableIcon,
} from "@heroicons/react/outline";
import React from "react";

function Sidebar() {
  let activeMenu = "Dashboard";
  const menus = [
    { name: "Dashboard", icon: <HomeIcon className="h-6 w-6" /> },
    { name: "Table", icon: <TableIcon className="h-6 w-6" /> },
    { name: "Menu", icon: <MenuAlt2Icon className="h-6 w-6" /> },
    { name: "Graph", icon: <ChartPieIcon className="h-6 w-6" /> },
    { name: "Notifications", icon: <BellIcon className="h-6 w-6" /> },
    { name: "Settings", icon: <CogIcon className="h-6 w-6" /> },
    { name: "Logout", icon: <LogoutIcon className="h-6 w-6" /> },
  ];

  //   https://github.com/tailwindcollections/tailwind-pos-dark/blob/main/src/components/Sidebar.vue
  return (
    <div className="flex flex-col gap-y-4 items-center py-8 w-24 bg-sky-300 dark:bg-gray-900">

      {/* <p className="bg-white dark:bg-black">Hi there</p> */}
      <img className="w-20" src="pizza.png" alt="" />
      <div className="flex flex-col gap-y-4 items-end self-end">
        {menus.map((menu, i) => {
          return (
            <div
              key={i}
              className={
                activeMenu === menu.name
                  ? "bg-sky-200 dark:bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom "
                  : " "
              }
            >
          
              <button
                className={
                  activeMenu === menu.name
                    ? "p-4 my-4 mr-4 ml-3 rounded-xl  shadow-white bg-sky-300 dark:bg-orange-300 text-white dark:text-orange-700 "
                    : "p-4 my-4 mr-4 ml-3 rounded-xl text-white hover:text-sky-200 dark:hover:text-orange-700"
                }
              >
                {menu.icon}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
