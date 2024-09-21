import { Product } from "apps/front-office/shop/utils/types";
import PaginatedItems from "src/apps/front-office/design-system/components/PaginatedItems";

export type ProductGridProps = {
  products: Product[];
};

export default function ProductsGrid({ products }: ProductGridProps) {
  return (
    <>
      <PaginatedItems products={products} />
    </>
  );
}

// [karim]
{
  /* <div className="flex flex-wrap"> */
}

// [abdelrady] grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 pt-6 pb-20 justify-items-center
