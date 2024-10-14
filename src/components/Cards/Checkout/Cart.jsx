import { Product } from "../CardArrays"
import SingleProductList from "../SingleProductList"


const Cart = () => {
  return (
    <>
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
    </>
  )
}

export default Cart