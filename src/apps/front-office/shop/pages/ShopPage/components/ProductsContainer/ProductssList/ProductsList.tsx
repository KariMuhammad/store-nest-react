import { Product } from "apps/front-office/shop/utils/types";
import ListProductCard from "../ListProductCard";

export type ProductsListProps = {
  products: Product[];
};

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="flex flex-col">
      {products.map(product => {
        return <ListProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
