import ItemConditions from "./ItemConditions";
import PriceRangeSlider from "./PriceFilterRange";

export default function FilterSide() {
  return (
    <div className="my-10 relative bg-[url('https://nest-frontend-v6.netlify.app/assets/imgs/banner/fillter-widget-bg.png')] bg-no-repeat bg-right-bottom bg-[length:100px_100px]">
      <PriceRangeSlider />
      {/* Price */}
      {/* <ColorOptions /> */}
      {/* Color */}
      <ItemConditions />
      {/* Item Condition */}
    </div>
  );
}
