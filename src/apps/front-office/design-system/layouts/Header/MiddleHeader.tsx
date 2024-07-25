import { Link } from "@mongez/react-router";
// import { useState } from "react";
import { useState } from "react";
import logo from "shared/assets/images/logo.svg";

import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { useWindowScroll } from "../../hooks";
import {
  MiddleHeaderInputPlacholder,
  MiddleHeaderSelectPlacholder,
  middleHeaderActions,
  middleHeaderCategories,
  navbarIcons,
} from "./constant/middleHeaderData";
import AccountMenu from "./menu/AccountMenu";
import CartMenu from "./menu/CartMenu";
import NavigationMenu from "./menu/NavigationMenu";

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const MiddleHeader = () => {
  const windowScroll = useWindowScroll();
  const [openNavMenu, setOpenNavMenu] = useState(false);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setOpenNavMenu(!openNavMenu);
  };

  return (
    <div
      className={`container bg-white w-full flex justify-between items-center py-3 lg:py-7 ${windowScroll >= 25 && "sticky top-0 z-50 lg:relative lg:top-auto lg:z-0"}`}>
      <div className="block lg:hidden text-6xl" onClick={() => toggleSidebar()}>
        <i className="bx bx-menu"></i>
      </div>
      <div>
        <img
          src={logo}
          alt="nest logo"
          className="w-[150px] sm:min-w-[180px] h-[45px] sm:h-[55px]"
        />
      </div>
      <div className="hidden lg:flex  items-center border border-main-500 rounded-lg p-2">
        <Select>
          <SelectTrigger className="hidden xl:block xl:w-[180px] font-bold border-none shadow-none focus:ring-0">
            <SelectValue placeholder={MiddleHeaderSelectPlacholder} />
          </SelectTrigger>
          <SelectContent className="hidden xl:block xl:w-[180px] max-h-[250px] bg-white">
            <Input className="my-1 mx-2 w-[90px] xl:w-[150px] focus-visible:ring-0" />
            {middleHeaderCategories.map((category, index) => (
              <SelectItem value={category} key={category + index}>
                {/* {category.charAt(0).toUpperCase() + category.slice(1)} */}
                {capitalize(category)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="h-5" />
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder={MiddleHeaderInputPlacholder}
            className="3xl:w-[600px] w-[400px] text-lg placeholder:text-slate-500 border-none shadow-none focus-visible:ring-0"
          />
          <div className="absolute right-4 text-2xl text-slate-500">
            <i className="bx bx-search"></i>
          </div>
        </div>
      </div>
      <ul className="hidden lg:flex items-center gap-x-2 lx:gap-x-4">
        {middleHeaderActions.map(action => {
          return (
            <li key={action.name} className="relative pb-4  group">
              {action.name === "Account" && <AccountMenu />}
              {action.name === "Cart" && <CartMenu />}
              {action.name !== "Account" && (
                <span className="w-5 h-5 flex items-center justify-center absolute -top-1 left-3 bg-main-500 text-white text-xs font-bold rounded-full">
                  5
                </span>
              )}
              <i className={`bx bx-${action.iconName} text-2xl`}></i>
              <Link
                to={action.href}
                className="ml-1 text-slate-500 hover:text-black">
                {action.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="lg:hidden flex justify-center items-center gap-x-5">
        {navbarIcons.map(icon => (
          <li key={icon.icon}>
            <Link to={icon.link} className="relative">
              <span className="w-5 h-5 flex items-center justify-center absolute -top-5 left-5 bg-main-500 text-white text-xs font-bold rounded-full">
                5
              </span>
              <i className={`bx bx-${icon.icon} text-4xl`}></i>
            </Link>
          </li>
        ))}
      </ul>

      {openNavMenu && <NavigationMenu toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default MiddleHeader;
