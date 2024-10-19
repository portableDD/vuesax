import SingleProductList from "@/components/Cards/SingleProductList";
import { useContext } from "react";
import AppState from "@/Features/AllContext";
import { toast } from "react-toastify";

const ProductListPage = () => {
  const { state, dispatch } = useContext(AppState);
  const { product, cart } = state;
  const AddToCart = (id) => {
    const cartProduct = product.filter((newProduct) => newProduct.id === id);
    const newProduct = cartProduct[0];
    const exists = cart.some((item) => item.id === newProduct.id);
    if (!exists) {
      dispatch({ type: "cart/updateCart", payload: newProduct });
      toast.success("Added to Cart Successfully");
    } else {
      toast.error("already in cart");
    }
  };
  return (
    <div className="w-full h-full">
      {product.map((list) => (
        <div key={list.id} className="px-3 py-3">
          <SingleProductList
            id={list.id}
            by={list.by}
            desc={list.desc}
            img={list.img}
            price={list.price}
            rating={list.rating}
            title={list.title}
            addToCart={AddToCart}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
