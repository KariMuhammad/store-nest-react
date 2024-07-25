import { Link } from "@mongez/react-router";
import Stars from "apps/front-office/design-system/components/Stars";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Product } from "apps/front-office/utils/types";
import { ShoppingCart } from "lucide-react";
export type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  const isOnSale = product.salePrice ? true : false;
  return (
    <>
      <div className="p-3 group rounded-[1rem] border relative hover:border-primary-default transition duration-500">
        <div className="absolute z-10 top-0 left-0 font-bold bg-primary-default text-[#fff] rounded-tl-lg rounded-br-lg py-2 px-5 text-[13px] leading-none">
          New
        </div>
        <Link
          to={"/"}
          className="h-64 relative overflow-hidden flex items-center justify-center cursor-pointer rounded-3xl">
          <img
            src={product.image.url + "?w=200&h=200"}
            alt={product.name}
            width={200}
            height={200}
            className="group-hover:scale-110 z-10 rounded-full transition ease-in duration-500"
          />
        </Link>
        <div className="mt-6 space-y-2 m-3">
          {/* Starts */}
          <span className="text-[#adadad] text-[12px] ">
            {product.category.name}
          </span>
          <Stars ratings={product.rating} />
          <Link
            to={"/"}
            className="font-bold text-base inline-block hover:text-primary-default transition duration-500">
            {product.name}
          </Link>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center justify-center gap-2">
              {isOnSale && (
                <span className="inline-block self-start text-primary-default font-bold text-lg">
                  ${product.salePrice}
                </span>
              )}
              <span
                className={`font-bold ${
                  isOnSale
                    ? "text-[#adadad] line-through text-sm"
                    : "text-primary-default text-xl"
                }`}>
                ${product.totalPrice}
              </span>
            </div>
            <Button
              title="Add"
              className="bg-primary-light flex justify-center items-baseline gap-2 hover:bg-primary-default scale-y-105">
              <ShoppingCart size={15}></ShoppingCart>
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
