import SingleProductGrid from "@/components/Cards/SingleProductGrid";
import { useContext } from "react";
import AppState from "@/Context/AllContext";
import { toast } from "react-toastify";

const ProductGridPage = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 gap-3">
      {product.map((items) => (
        <SingleProductGrid
          key={items.id}
          id={items.id}
          img={items.img}
          price={items.price}
          rating={items.rating}
          subtitle={items.subtitle}
          title={items.title}
          addToCart={AddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGridPage;
