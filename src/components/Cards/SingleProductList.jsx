import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Counter from "./Counter";

const SingleProductList = ({ rating, price, img, title, by, desc }) => {
  const location = useLocation();

  const checkLocation = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="w-full bg-contentBgColor rounded-md shadow-navbar">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* img and desc */}
        <div className="w-full flex justify-center item-center flex-col lg:flex-row gap-5 py-3 px-3 lg:border-r border-[#DADADA80] xl:max-w-[80%]">
          <div className="flex justify-center item-center py-3 px-3 h-52 xl:h-auto ">
            <img src={img} alt="img" />
          </div>
          <div className="flex flex-col gap-3 w-full py-3 px-3">
            <p className="flex flex-col gap-1">
              <span className="font-semibold text-medium">{title}</span>
              <span className="text-xs">
                By <span className="text-[#6F64F8]">{by}</span>
              </span>
            </p>
            {checkLocation("/electronics/list") ? (
              <div className="text-xs w-full xl:max-w-[80%]">{desc}</div>
            ) : (
             <div className="text-xs w-ful flex flex-col gap-5">
                <p className="text-[#2DCD7A]">in stock</p>
                <div>
                  <p>Quantity</p>
                  <Counter />
                </div>
                <div>
                  <p className="text-[#999999]">Delivery by, Sat Mar 23</p>
                  <p className="text-[#2DCD7A]">17%  Off 4 Offers Available</p>
                </div>
             </div>
            )}
          </div>
        </div>
        {/* move to cart and wishlist, ratings too */}
        <div className="flex flex-col items-center gap-3 py-3 px-3 xl:w-full xl:max-w-[20%]">
          {/* rating prices and free shipping */}
          <div className="text-center w-full ">
            <p className="flex justify-end">
              <span className="bg-[#6F64F8] px-1.5 py-1 flex items-center gap-2 text-[13px] rounded">
                {rating} <FaRegStar />
              </span>
            </p>
            <p className="font-medium mt-2">&#x24;{price}</p>
            {checkLocation("/electronics/list") ? (
              <div className="text-xs flex justify-center items-center gap-2">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-3 w-3  rounded border-white"
                />
                <span>Free Shipping</span>
              </div>
            ) : (
              <div className="text-xs flex justify-center items-center gap-2 text-[#999999]">
                <FiShoppingCart />
                <span>Free Shipping</span>
              </div>
            )}
          </div>
          {/* wishlist */}
          <button className="w-full py-3 px-3 bg-[#B8C2CC] text-[#2C2C20] text-center rounded-md uppercase text-xs font-medium">
            {checkLocation("/electronics/list") ? (
              <Link to={'/wishlist'}>
                <FaRegHeart className="inline" />
                <span className="pl-2">wishlist</span>
              </Link>
            ) : (
              <>
                <RxCross2 className="inline" />
                <span className="pl-2">Remove</span>
              </>
            )}
          </button>
          {/* add to cart */}
          <button className="w-full py-3 px-3 bg-[#6F64F8] text-center rounded-md uppercase text-xs font-medium">
            {checkLocation("/electronics/list") ? (
              <Link to={'/checkout'}>
                 <FiShoppingBag className="inline" />
                 <span className="pl-2">add to cart</span>
              </Link>
            ) : (
              <Link to={'/wishlist'}>
                <FaRegHeart className="inline" />
                <span className="pl-2 text-xs">Move To wishlist</span>
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductList;
