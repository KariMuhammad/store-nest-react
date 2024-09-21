"use client";

import CategorySidebar from "src/apps/front-office/shop/pages/ShopPage/components/CategorySidebar";
import SearchInput from "../../components/SearchInput";
import Content from "./Content";

export default function PrivacyPage() {
  return (
    <div className="flex justify-center pt-[50px] gap-[54px] w-[1610px]">
      <div className="w-[980px]">
        <Content />
      </div>
      <div className="w-[311px]">
        <div className="flex flex-col !w-[311px]">
          <SearchInput />
          <CategorySidebar />
          <div className="sticky">{/* <TrendingProducts /> */}</div>
          {/* <image src={productImg12} width={500} alt='product'/> */}
        </div>
      </div>
    </div>
  );
}
