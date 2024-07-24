import { Link } from "@mongez/react-router";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { useWindowScroll } from "../../hooks";
import { bottomHeaderNavbarItems } from "./constant/bottomHeaderData";
import BrowseCatigoriesMenu from "./menu/BrowseCategoriesMenu";
import DropMegaMenu from "./menu/DropMegaMenu";

const BottomHeader = () => {
  const [openCategoriesMenu, setOpenCategoriesMenu] = useState(false);
  const windowScroll = useWindowScroll();

  // console.log(windowScroll);

  return (
    <div
      className={`container relative bg-white py-2 w-full hidden lg:flex justify-between items-center 
        ${windowScroll >= 150 && "sticky top-0 z-50"}`}>
      <div className="flex justify-between items-center gap-x-8">
        <Button
          className="bg-main-500 hover:bg-main-700 active:bg-main-700 border-none outline-none focus-visible:ring-0"
          onClick={() => setOpenCategoriesMenu(!openCategoriesMenu)}>
          <i className="bx bx-category"></i>
          <span className="mx-2">Browse All Categories</span>
          {openCategoriesMenu ? (
            <i className="bx bx-chevron-up"></i>
          ) : (
            <i className="bx bx-chevron-down"></i>
          )}
        </Button>
        {openCategoriesMenu && <BrowseCatigoriesMenu />}
        <ul className="flex items-center gap-x-6 xl:gap-x-8">
          <li className="text-base font-bold hover:text-main-700 cursor-pointer">
            <i className="bx bxs-hot text-main-500"></i>
            <span className="ml-2 mr-2 xl:mr-8">Deals</span>
          </li>
          {bottomHeaderNavbarItems.map(item => (
            <li
              key={item.label}
              className="text-base font-bold hover:text-main-700 cursor-pointer group py-5">
              {item.label === "Mega menu" ? (
                <div className="">
                  <span>{item.label}</span>
                  <i className="bx bx-chevron-down"></i>
                  <DropMegaMenu />
                </div>
              ) : (
                <Link to={item.link}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <div className="hidden 2xl:flex items-center gap-x-3">
          <i className="bx bx-headphone text-4xl"></i>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-main-500">
              1900 - 888
            </span>
            <span className="text-xs font-serif">24/7 Support Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
