import TopSelling from "../pages/HomePage/sections/DealsDayTwo/TopSelling";
import { Module } from "../utils/types";

type TopProductsModuleProps = {
  module: Module;
};

export default function TopProductsModule({ module }: TopProductsModuleProps) {
  if (!module?.products && module.name == "") return null;

  return <TopSelling moduleName={module.name} products={module.products} />;
}
