import { Navbar } from "./CardArrays";
import Rating from "./Rating";
import SingleRange from "./Range";
import SingleCatergoryBrands from "./SingleCatergoryBrands";
// import Slider from "./Slider";

const ProductSidebar = () => {
  const { range, catergory, brand } = Navbar;
  return (
    <div className="hidden w-full lg:w-72 xl:w-[25%] lg:block  ">
      <div className="w-full flex flex-col gap-3.5">
        <p className="text-[13px] font-semibold mt-1">Filters</p>
        <div className="px-6 py-3 bg-contentBgColor rounded-md flex flex-col gap-3 ">
          {/* range */}
          <div className="border-b border-[#D6D6D6] ">
            <p className="font-semibold">Multi Range</p>
            <div className="pt-3 pb-5 text-[13px]">
              {range.map((range, index) => (
                <div key={index} className="mt-2">
                  <SingleRange isChecked={range.checked} text={range.text} />
                </div>
              ))}
            </div>
          </div>
          {/* slider */}
          <div className="border-b border-[#D6D6D6] ">
            <p className="w-full font-semibold flex justify-between item-center">
              <span>Slider</span>
              <span>1.99 - 4098</span>
            </p>
            <div className="pt-3 pb-5 text-[13px]">
              <div className="bg-white rounded-full mt-1.5">
                <div className="bg-[#6F64F8] w-[73%] rounded-full py-0.5"></div>
              </div>
              {/* <Slider /> */}
            </div>
          </div>
          {/* category */}
          <div className="border-b border-[#D6D6D6] ">
            <p className="font-semibold">Catergory</p>
            <div className="pt-3 pb-5 text-[13px]">
              {catergory.map((range) => (
                <div key={range.id} className="mt-2">
                  <SingleCatergoryBrands title={range.title} num={range.num} />
                </div>
              ))}
            </div>
          </div>
          {/* brands */}
          <div className="border-b border-[#D6D6D6] ">
            <p className="font-semibold">Brands</p>
            <div className="pt-3 pb-5 text-[13px]">
              {brand.map((range) => (
                <div key={range.id} className="mt-2">
                  <SingleCatergoryBrands title={range.title} num={range.num} />
                </div>
              ))}
            </div>
          </div>
          {/* rating */}
          <div>
            <p className="font-semibold">Rating</p>
            <Rating />
          </div>
        </div>
      </div>
      <button className="font-semibold w-full py-3 bg-logoColor rounded-md mt-5">
        CLEAR ALL FILTERS
      </button>
    </div>
  );
};

export default ProductSidebar;
