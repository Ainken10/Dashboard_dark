import React from "react";
import {
  TrendingUpIcon,
  TrendingDownIcon,
  CurrencyDollarIcon,
  UsersIcon,
  GiftIcon
} from "@heroicons/react/outline";

export const StatsCard = () => {
  const stats = [
    {
      title: "Total Revenue",
      percentage: "+32.40%",
      value: "$10,243.00",
      status: "up",
      icon: <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />,
    },
    {
      title: "Total Dish Ordered",
      percentage: "-12.40%",
      value: "23,456",
      status: "down",
      icon: <GiftIcon className="h-5 w-5 text-gray-400" />,
    },
    {
      title: "Total Customer",
      percentage: "+2.40%",
      value: "1,234",
      status: "up",
      icon: <UsersIcon className="h-5 w-5 text-gray-400" />,
    },
  ];

  return (
    <div className="flex gap-6">
      {stats.map((stat, i) => {
        return (
          <div
            key={i}
            className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3"
          >
            <div className="flex items-center gap-x-3">
              <div className="p-1 bg-gray-800 rounded-lg">{stat.icon}</div>
              <span
                className={`text-xs font-medium ${
                  stat.status === "up" ? "text-green-700" : "text-red-500"
                }`}
              >
                {stat.percentage}
              </span>
              <div
                className={`p-0.5 rounded-full ${
                  stat.status === "up" ? "" : ""
                }`}
              >
                {stat.status === "up" ? (
                  <TrendingUpIcon className="fill-current w-4 h-4 text-green-900" />
                ) : (
                  <TrendingDownIcon className="fill-current w-4 h-4 text-red-600" />
                )}
                {/* <ArrowUpIcon
                  v-if="stat.status === 'up'"
                  className="fill-current text-accent-green"
                />
                <ArrowDownIcon v-else className="fill-current text-accent-red" /> */}
              </div>
            </div>
            <div className="text-3xl font-semibold text-white">
              {stat.value}
            </div>
            <div className="text-sm tracking-wide text-gray-500">
              {stat.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};
