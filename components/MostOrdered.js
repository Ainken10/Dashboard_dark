import { ChevronDownIcon } from '@heroicons/react/outline';
import React from 'react'

export const MostOrdered = () => {
    const mostOrdered = [
        {
          name: "Spicy seasoned seafood noodles",
          image: "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2020/07/Korean-Spicy-Garlic-Seafood-Noodles-17-MINI.jpg?fit=1000%2C667&ssl=1",
          count: 200,
        },
        {
          name: "Salted pasta with mushroom sauce",
          image: "https://www.recipetineats.com/wp-content/uploads/2016/10/Mushroom-Pasta_6.jpg?resize=650,910",
          count: 120,
        },
        {
          name: "Beef dumpling in hot and sour soup",
          image: "https://i.pinimg.com/564x/42/5a/82/425a82cd057d388dea15a8cc979e0b9c.jpg",
          count: 80,
        },
      ];
    return (
        <div className="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold leading-loose text-white">Most Ordered</h2>
          <button className="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
            <ChevronDownIcon />
            <span className="text-sm text-white">Today</span>
          </button>
        </div>
        <hr className="border-gray-700" />
        <div className="flex flex-col gap-y-4">
       { mostOrdered.map((order,i) => {
           return (
            <div key={i} className="flex gap-x-4 items-center">
            <img className="w-14 h-14" src={order.image} alt="" />
            <div className="flex flex-col gap-y-0.5">
              <div className="text-sm font-medium text-white">{ order.name }</div>
              <div className="text-xs text-gray-500">{ order.count } dishes ordered</div>
            </div>
          </div>
           )
       } )  }
        </div>
        <button
          className="py-3.5 rounded-lg w-full border border-primary text-primary text-sm font-semibold"
        >
          View all
        </button>
      </div>
    )
}
