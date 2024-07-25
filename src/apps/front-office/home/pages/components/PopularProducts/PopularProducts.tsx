import { popularProductsAtom } from "apps/front-office/home/atoms/popular-products-atom";
import PopularProductsTabs from "./PopularProductsTabs";
import ProductsGrid from "./ProductsGrid";

export type PopularProductsProps = {
  children: React.ReactNode;
};
export default function PopularProducts() {
  const product = popularProductsAtom.use("activeProducts");
  return (
    <div className="container mx-auto py-20">
      <PopularProductsTabs />
      <ProductsGrid products={product} />
    </div>
  );
}
