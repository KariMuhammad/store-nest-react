import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { getHome } from "src/apps/front-office/home/services/home-service";

export const useSlider = () => {
  const [sliderData, setSliderData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  useOnce(() => {
    // setIsLoading(true);
    getHome()
      .then(rows => {
        console.log(rows[0].columns[0].module.slider);
        const sliderBanners = rows[0].columns[0].module.slider?.banners;
        // const processedData = sliderBanners?.map(banner => ({
        //   id: banner.id,
        //   image: banner.image[0].url || "",
        // }));
        setSliderData(sliderBanners!);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return { sliderData, isLoading, error };
};
