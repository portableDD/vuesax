import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayouts() {
  return (
    <div className="w-full text-black dark:text-white text-sm font-Mont ">
      <div className="flex">
          <Sidebar />
        <main className="lg:ml-56 w-full bg-white dark:bg-mainBgColor py-1.5 px-2 md:py-3 md:px-6 shadow-navbar lg:overflow-x-hidden">
          <Navbar />
          <div className="mt-14">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
