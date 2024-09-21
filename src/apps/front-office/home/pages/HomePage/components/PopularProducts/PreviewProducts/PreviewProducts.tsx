import { Link } from "@mongez/react-router";
import CustomDialog from "apps/front-office/home/hooks/useModel";
import { Product } from "apps/front-office/shop/utils/types";
import { EyeIcon, HeartIcon, Link2Icon } from "lucide-react";
import PreviewProductDetails from "./PreviewProductDetails";

export type PreviewProductsProps = {
  product: Product;
};

export default function PreviewProducts({ product }: PreviewProductsProps) {
  return (
    <>
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-opacity-10 rounded-3xl transition-all duration-300 opacity-0 group-hover:opacity-100">
        <span className="flex items-center justify-center text-center rounded-md bg-white border border-[#BCE3C9] divide-x divide-[#BCE3C9]">
          <Link
            to="/"
            className="flex items-center justify-center text-center w-10 h-9">
            <HeartIcon size={20} color="#3BB77E" />
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center text-center w-10 h-9">
            <Link2Icon size={20} color="#3BB77E" />
          </Link>
          <span className="flex items-center justify-center text-center w-10 h-9">
            <CustomDialog icon={<EyeIcon size={20} color="#3BB77E" />}>
              <PreviewProductDetails product={product} />
            </CustomDialog>
          </span>
        </span>
      </div>
    </>
  );
}
