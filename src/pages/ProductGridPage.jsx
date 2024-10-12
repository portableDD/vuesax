import { Product } from "@/components/Cards/CardArrays";
import SingleProductGrid from "@/components/Cards/SingleProductGrid";

const ProductGridPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 gap-3">
      {Product.map((items) => (
        <SingleProductGrid
          key={items.id}
          img={items.img}
          price={items.price}
          rating={items.rating}
          subtitle={items.subtitle}
          title={items.title}
        />
      ))}
    </div>
  );
};

export default ProductGridPage;
