import { Product } from "@/components/Cards/CardArrays";
import CardsNavbar from "@/components/Cards/CardsNavbar";
import SingleProductList from "@/components/Cards/SingleProductList";
import CheckoutOptions from "./CheckoutOptions";

const CheckoutPage = () => {
  return (
    <div className="w-full">
      <CardsNavbar big={"Checkout"} small={"Checkout"} />
      <div className="flex flex-col md:flex-row gap-3">
        <div className="xl:max-w-[70%] w-full">
          {Product.map((list) => (
            <div key={list.id} className="px-3 py-3">
              {list.checkout && (
                <SingleProductList
                  by={list.by}
                  desc={list.desc}
                  img={list.img}
                  price={list.price}
                  rating={list.rating}
                  title={list.title}
                />
              )}
            </div>
          ))}
         
        </div>
        <div className="rounded-md shadow-navbar bg-contentBgColor py-3 px-3 w-full xl:max-w-[30%] h-80 mt-3">
            <CheckoutOptions />
          </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
