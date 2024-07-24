/**********************************************************/
/**************** Custom Hook *****************************/
/**********************************************************/

import { useEffect, useState } from "react";

export function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return scrollPosition;
}
