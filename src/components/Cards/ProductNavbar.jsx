import { FiSearch } from "react-icons/fi";
import { MdOutlineGridView, MdOutlineShoppingCart } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppState from "@/Features/AllContext";

const ProductNavbar = () => {
  const { state } = useContext(AppState);
  const { cart } = state;
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex justify-between items-end">
        <p className="text-xs font-semibold">7,618 results found in 5ms</p>
        <div className="text-black flex gap-2">
          <select
            name="select"
            id="select"
            className="bg-white px-2 py-1 rounded-md text-xs outline-none shadow-navbar hidden md:block "
          >
            <option value="default">Default</option>
            <option value="grid">Grid</option>
            <option value="list">List</option>
          </select>
          <Link
            to={"/layouts/electronics"}
            className="bg-white px-1.5 py-1 rounded-md shadow-navbar "
          >
            <MdOutlineGridView className="text-base" />
          </Link>
          <Link
            to={"/layouts/electronics/list"}
            className="bg-white px-1.5 py-1 rounded-lg shadow-navbar "
          >
            <BsList className="text-base" />
          </Link>
          <Link
            to={"/layouts/checkout"}
            className="bg-white px-1.5 py-1 rounded-lg shadow-navbar z-10"
          >
            <MdOutlineShoppingCart className="text-base" />
          </Link>
          {cart.length > 0 && (
            <div className="flex items-center justify-center text-white font-semibold w-3 h-3 bg-red-500 text-[8px] rounded-full -ml-3 -mt-0.5">
              {cart.length}
            </div>
          )}
        </div>
      </div>
      <div className="relative w-full rounded-md shadow-sm">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <FiSearch />
        </div>
        <input
          type="text"
          name="text"
          id="text"
          className="bg-contentBgColor w-full rounded-md  outline-none py-2 pr-10 px-2 shadow-navbar placeholder:text-xs  placeholder:text-[#999999]  sm:text-sm"
          placeholder="Search Here"
        />
      </div>
    </div>
  );
};

export default ProductNavbar;
