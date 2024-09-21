import ProductCard from "src/apps/front-office/home/pages/HomePage/components/PopularProducts/ProductCard";
import { Product } from "src/apps/front-office/shop/utils";

function Items({ currentItems }) {
  return (
    <div className="grid grid-cols-1 flex-wrap sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 pt-6 pb-20 justify-items-center">
      {currentItems &&
        currentItems.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}

function PaginatedItems({ products }: { products: Product[] }) {
  return (
    <>
      <Items currentItems={products} />
    </>
  );
}

export default PaginatedItems;
