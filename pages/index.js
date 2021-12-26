import Head from "next/head";
import { CompanyInfo } from "../components/CompanyInfo";
import { MostOrdered } from "../components/MostOrdered";
import { MostTypeOfOrder } from "../components/MostTypeOfOrder";
import { OrderReport } from "../components/OrderReport";
import Sidebar from "../components/Sidebar";
import { StatsCard } from "../components/StatsCard";

export default function Home() {
  const today = new Date()
  return (
    <div className="flex w-full min-h-screen font-sans dark:bg-gray-800 bg-sky-200">
      <Sidebar />
      <main className="flex flex-col flex-1 gap-6 p-4">
        <header>
          <h1 className="text-3xl font-semibold leading-loose text-sky-500 dark:text-white">
            Dashboard
          </h1>
          <div className="dark:text-gray-200">{today.toLocaleDateString()}</div>
        </header>
        <hr className="border-sky-100 dark:border-gray-700" />
        <StatsCard />
        <OrderReport />
      </main>
      <aside className="flex flex-col gap-y-6 pt-6 pr-6 w-96">
        <CompanyInfo />
        <MostOrdered />
        <MostTypeOfOrder />
      </aside>
    </div>
  );
}
