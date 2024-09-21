import { topSellingCardType } from "./TopSellingCard";

export default function TopSellingHead({ productTitle }: topSellingCardType) {
  return (
    <div className="relative mb-8 border-b border-[#ececec]">
      <h1
        className="text-[#253D4E] text-xl font-[700] pb-4
          after:content-[''] after:bg-[#BCE3C9] after:h-0.5 after:w-20 after:absolute after:left-0 after:rtl:right-0 after:bottom-0 ">
        {productTitle}
      </h1>
    </div>
  );
}
