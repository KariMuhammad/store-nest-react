import { useState } from "react";
import { Button } from "src/apps/front-office/design-system/components/ui/button";

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(1000);

  const minPriceCallback = e => {
    if (e.target.value < maxPrice) {
      setMinPrice(() => e.target.value);
    }

    if (e.target.value > maxPrice) {
      setMinPrice(() => maxPrice);
    }
  };

  const maxPriceCallback = e => {
    if (e.target.value > minPrice) {
      setMaxPrice(() => e.target.value);
    }

    if (e.target.value < minPrice) {
      setMaxPrice(() => minPrice);
    }
  };

  const submitHandler = () => e => {
    e.preventDefault();
    fetch(`minPrice=${minPrice}&maxPrice=${maxPrice}`);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Fill by price
      </h2>

      <form onSubmit={submitHandler()}>
        <div className="relative pt-1">
          <input
            type="range"
            min="0"
            max="2000"
            value={minPrice}
            onChange={minPriceCallback}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider-thumb-green"
          />
          <input
            type="range"
            min="0"
            max="2000"
            value={maxPrice}
            onChange={maxPriceCallback}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider-thumb-green"
          />
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-500">
            From: <span className="text-green-500">${minPrice}</span>
          </span>
          <span className="text-gray-500">
            To: <span className="text-green-500">${maxPrice}</span>
          </span>
        </div>

        <Button className="ml-auto block bg-primary text-white py-2 rounded-lg">
          Apply filter
        </Button>
      </form>
    </div>
  );
};

export default PriceRangeSlider;
