import { CogIcon } from '@heroicons/react/outline';
import React from 'react'

export const OrderReport = () => {
    const orders = [
        {
          avatar: "avatar-1.png",
          name: "Eren Jaegar",
          menu: "Spicy seasoned seafood noodles",
          total: "$125",
          status: "completed",
        },
        {
          avatar: "avatar-2.png",
          name: "Reiner Braunn",
          menu: "Salted Pasta with mushroom sauce",
          total: "$145",
          status: "preparing",
        },
        {
          avatar: "avatar-3.png",
          name: "Levi Ackerman",
          menu: "Beef dumpling in hot and sour soup",
          total: "$105",
          status: "pending",
        },
        {
          avatar: "avatar-4.png",
          name: "Historia Reiss",
          menu: "Hot spicy fried rice with omelet",
          total: "$45",
          status: "completed",
        },
        {
          avatar: "avatar-5.png",
          name: "Armin Arlert",
          menu: "Spicy seasoned seafood noodles",
          total: "$125",
          status: "completed",
        },
        {
          avatar: "avatar-6.png",
          name: "Hanji Zoe",
          menu: "Hot spicy fried rice with omelet",
          total: "$245",
          status: "completed",
        },
      ];
    return (
        <div className="p-6 bg-sky-300 dark:bg-gray-900 rounded-lg">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-xl font-semibold leading-loose text-white">Order Report</h2>
          <button className="flex py-3 px-4 rounded-lg border dark:border-gray-700 gap-x-2.5 items-center text-sky-100 dark:text-gray-400">
            <CogIcon className=' h-4 w-4' />
            <span className="text-sm ">Filter order</span>
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-sm font-semibold text-white">
              <td className="py-4 border-b dark:border-gray-700">Customer</td>
              <td className="py-4 border-b dark:border-gray-700">Menu</td>
              <td className="py-4 border-b dark:border-gray-700 text-right">Total Payment</td>
              <td className="py-4 border-b dark:border-gray-700 text-center">Status</td>
            </tr>
          </thead>
          <tbody>
             { orders.map( (order,i) => {
                  return (
                    <tr key={i} v-for="order in orders" className=" text-sky-100 dark:text-gray-500">
                    <td className="py-4">
                      <div className="flex gap-4 items-center">
                        {/* <img width="32" src="" alt="" /> */}
                        <div  className={`flex justify-center items-center rounded-full  w-7 h-7 ${
                           order.status ==="completed" 
                           ? "bg-green-300 text-green-700"   
                           :  order.status ==="pending" 
                           ? "bg-purple-300 text-purple-700" 
                           : "bg-orange-300 text-orange-700"
                        }`}>
                            {order.name.split(" ").map((n)=>n[0]).join("")}</div>
                        <span> { order.name } </span>
                      </div>
                    </td>
                    <td className="py-4">{ order.menu }</td>
                    <td className="py-4 tabular-nums text-right">{ order.total }</td>
                    <td className="py-4 flex justify-center">
                      <span

                        className={`flex justify-center py-1 w-24 font-medium capitalize rounded-full ${
                           order.status ==="completed" 
                           ? "bg-green-300 text-green-700"   
                           :  order.status ==="pending" 
                           ? "bg-purple-300 text-purple-700" 
                           : "bg-orange-300 text-orange-700"
                        }`}
              
                      >
                        { order.status }
                      </span>
                    </td>
                  </tr>
                  )
              })}
         
          </tbody>
        </table>
      </div>
    )
}
