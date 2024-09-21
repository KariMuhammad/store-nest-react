import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import Stars from "apps/front-office/design-system/components/Stars";
import { Product } from "apps/front-office/shop/utils/types";
import { ShoppingBag } from "lucide-react";

export type ListProductCardProps = {
  product: Product;
};

export default function ListProductCard({ product }: ListProductCardProps) {
  const isOnSale = product.salePrice ? true : false;

  return (
    <div className="relative flex md:flex-row flex-col md:h-60 md:ml-10 p-4 mt-6 border-2 rounded-2xl">
      <div className="basis-1/4 h-full flex items-center justify-center">
        <Link to={"/"}>
          <img
            style={{ margin: "18px auto" }}
            src={product.images[0].url}
            width={200}
            height={200}
            alt={"product"}
            className="rounded-full w-[200px] h-[200px]"
          />
        </Link>
      </div>
      <div className="basis-3/4 pt-8 relative">
        <Link to={"/"}>
          <h2 className="font-bold">{product.name}</h2>
        </Link>
        <Stars ratings={product.rating} />
        <p className="font-light mt-1 line-clamp-3">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-start gap-2">
          {isOnSale && (
            <span className="inline-block self-start text-primary font-bold text-lg">
              ${product.salePrice}
            </span>
          )}
          <span
            className={`font-bold ${
              isOnSale
                ? "text-[#adadad] line-through text-sm"
                : "text-primary text-xl"
            }`}>
            ${product.price}
          </span>
        </div>
        <button
          title={trans("addToCart")}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary absolute md:bottom-2 md:right-4 top-[-230px] left-1 md:left-[unset] md:top-[unset]">
          <ShoppingBag className="text-lg text-light" />
        </button>
      </div>
    </div>
  );
}
