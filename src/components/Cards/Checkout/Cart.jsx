import SingleProductList from "../SingleProductList";
import { useContext } from "react";
import AppState from "@/Features/AllContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { state, dispatch } = useContext(AppState);
  const { cart } = state;

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete??")) {
      const newfeed = cart.filter((item) => item.id !== id);
      dispatch({ type: "cart/removeCart", payload: newfeed });
    }
    toast.success("Product Remove!!");
  };

  const handleCountChange = (id, newCount) => {
    dispatch({
      type: "UPDATE_ITEM_COUNT",
      payload: { id, count: newCount },
    });
  };

  console.log(cart);
  return (
    <>
      {cart.map((list) => (
        <div key={list.id} className="px-3 py-3">
          <SingleProductList
            id={list.id}
            by={list.by}
            desc={list.desc}
            img={list.img}
            price={list.price}
            rating={list.rating}
            title={list.title}
            remove={deleteFeedback}
            count={list.count}
            handleChange={handleCountChange}
          />
        </div>
      ))}
    </>
  );
};

export default Cart;
