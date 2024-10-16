import { FaRegStar, FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";


const SingleProductGrid = ({ img, rating, price, title, subtitle, addToCart, id }) => {
  
  return (
    <div className="w-full bg-contentBgColor rounded-md shadow-navbar ">
      {/* img and detaios div */}
      <div className="py-3 px-3">
        {/* img */}
        <div className="flex justify-center item-center h-52 pt-5">
          <img src={img} alt="img" />
        </div>
        {/* details */}
        <div className="w-full py-3">
          <p className="w-full flex justify-between item-center mt-3">
            <span className="bg-[#6F64F8] px-1.5 py-1 flex items-center gap-2 text-[13px] rounded">
              {rating} <FaRegStar />
            </span>
            <span className="font-medium">&#x24;{price}</span>
          </p>
          <p className="mt-3 w-full flex flex-col gap-2">
            <span className="font-semibold">{title}</span>
            <span className="text-xs">{subtitle}</span>
          </p>
        </div>
      </div>
      {/* add to cart and move to wishlist */}
      <div className="w-full flex justify-between uppercase text-xs font-medium">
        <button className="w-full py-3 px-3 bg-[#B8C2CC] text-[#2C2C20] text-center rounded-es-md uppercase text-xs font-medium">
          <Link to={"/wishlist"}>
            <FaRegHeart className="inline" />
            <span className="pl-2">wishlist</span>
          </Link>
        </button>
        <button className="w-full py-3 px-3 bg-[#6F64F8] text-center rounded-ee-md uppercase text-xs font-medium" onClick={() => addToCart(id)}>
            <FiShoppingBag className="inline" />
            <span className="pl-2">add to cart</span>

        </button>
      </div>
    </div>
  );
};

export default SingleProductGrid;
