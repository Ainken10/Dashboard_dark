import React from "react";

function Sidebar() {
  let activeMenu = "Dashboard";
  const menus = [
    { name: "Dashboard", icon: "HomeIcon" },
    { name: "Discounts", icon: "DiscountIcon" },
    { name: "Graph", icon: "GraphIcon" },
    { name: "Messages", icon: "MessageIcon" },
    { name: "Notifications", icon: "NotificationIcon" },
    { name: "Settings", icon: "SettingsIcon" },
    { name: "Logout", icon: "LogoutIcon" },
  ];
//   https://github.com/tailwindcollections/tailwind-pos-dark/blob/main/src/components/Sidebar.vue
  return (
    <div className="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
      <button className="p-2 bg-opacity-20 rounded-xl bg-primary">STORE</button>
      <div className="flex flex-col gap-y-4 items-end self-end">
        {menus.map((menu) => {
          return (
            <div className={activeMenu === menu.name ? "bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom ": " a"}>

              <button className={activeMenu === menu.name ? "p-4 my-4 mr-4 ml-3 rounded-xl text-white shadow-sm shadow-white bg-orange-400" :"p-4 my-4 mr-4 ml-3 rounded-xl text-white"}>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current"><path d="M9.73 2.788a3.633 3.633 0 0 1 4.36-.12l.16.12 6.09 4.871a2.999 2.999 0 0 1 1.15 2.13l.01.2v8.11c0 2.09-1.65 3.79-3.72 3.9h-1.99a1.83 1.83 0 0 1-1.79-1.69l-.01-.14v-2.86a.635.635 0 0 0-.54-.62l-.09-.01h-2.67a.635.635 0 0 0-.62.54l-.01.09v2.85c0 .06-.01.13-.02.18l-.01.02-.01.07a1.822 1.822 0 0 1-1.69 1.56L8.2 22H6.41c-2.09 0-3.8-1.64-3.91-3.7v-8.31a2.967 2.967 0 0 1 1-2.19l6.23-5.01Zm3.65 1.09a2.256 2.256 0 0 0-2.64-.11l-.15.11L4.51 8.78a1.55 1.55 0 0 0-.61 1.06l-.01.16v8.1c0 1.33 1.04 2.42 2.36 2.5H8.2c.22 0 .41-.15.44-.36l.02-.18.01-.05v-2.7c0-1.07.82-1.94 1.87-2.02h2.82c1.07 0 1.94.82 2.02 1.87v3.01c0 .21.15.39.35.43h1.86a2.5 2.5 0 0 0 2.51-2.34l.01-.16v-8.1a1.62 1.62 0 0 0-.5-1.13l-.13-.11-6.1-4.88Z"></path></svg>
              </button>
              
            </div>

          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;