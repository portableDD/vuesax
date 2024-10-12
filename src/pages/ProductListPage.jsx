import { Product } from "@/components/Cards/CardArrays";
import SingleProductList from "@/components/Cards/SingleProductList";

const ProductListPage = () => {
  return (
    <div className="w-full h-full">
      {Product.map((list) => (
        <div key={list.id} className="px-3 py-3">
          {list.list && (
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
  );
};

export default ProductListPage;
