import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { shopDisplayModeAtom } from "apps/front-office/shop/atoms/shop-display-mode-atom";
import { FilterIcon, Grid2X2, List } from "lucide-react";

export default function ViewDisplayMode() {
  const displayMode = shopDisplayModeAtom.useValue();

  return (
    <div className="flex justify-between items-center">
      <div className="md:hidden">
        <Button className="bg-primary-main hover:bg-primary-hover py-1 px-2">
          <p className="rtl:pl-1 ltr:pr-1">{trans("filter")}</p>
          <FilterIcon />
        </Button>
      </div>
      <div className=" text-[#7E7E7E] font-normal leading-6">
        {trans("found")} <span>{trans("products")}</span> {trans("itemsForYou")}
      </div>
      <div className="flex flex-row gap-3 items-center">
        <button onClick={() => shopDisplayModeAtom.update("grid")}>
          {displayMode === "grid" ? (
            <Grid2X2 className="text-xl mt-0.5" />
          ) : (
            <Grid2X2 className="text-xl text-gray-500" />
          )}
        </button>
        <button onClick={() => shopDisplayModeAtom.update("list")}>
          {displayMode === "list" ? (
            <List className="text-2xl font-black" />
          ) : (
            <List className="text-2xl text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
}
