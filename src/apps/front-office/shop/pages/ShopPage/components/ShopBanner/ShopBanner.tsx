import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";

export default function ShopBanner() {
  return (
    <>
      <div className="rounded-lg mt-10 mb-14 py-10 md:py-16 lg:py-20 px-5 md:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-center bg-[url('https://nest-frontend-v6.netlify.app/assets/imgs/blog/header-bg.png')] bg-cover bg-center">
        <Breadcrumb
          title={trans("shop")}
          navItems={[{ name: trans("shop") }]}
        />
        <div className="hidden lg:flex">
          <ul className="flex flex-wrap items-center space-x-4 mt-4 lg:mt-0">
            <li className="hover:translate-y-[-3px] duration-300 cursor-pointer">
              <Link className="bg-[#fff] rounded-3xl px-4 py-2 font-bold text-[17px] text-[#3BB77E] hover:text-[#fd7e14]">
                Cabbage
              </Link>
            </li>
            <li className="hover:translate-y-[-3px] duration-300 cursor-pointer">
              <Link className="bg-[#fff] rounded-3xl px-4 py-2 font-bold text-[17px] text-[#3BB77E] hover:text-[#fd7e14]">
                Broccoli
              </Link>
            </li>
            <li className="hover:translate-y-[-3px] duration-300 cursor-pointer">
              <Link className="bg-[#fff] rounded-3xl px-4 py-2 font-bold text-[17px] text-[#3BB77E] hover:text-[#fd7e14]">
                Artichoke
              </Link>
            </li>
            <li className="hover:translate-y-[-3px] duration-300 cursor-pointer">
              <Link className="bg-[#fff] rounded-3xl px-4 py-2 font-bold text-[17px] text-[#3BB77E] hover:text-[#fd7e14]">
                Celery
              </Link>
            </li>
            <li className="hover:translate-y-[-3px] duration-300 cursor-pointer">
              <Link className="bg-[#fff] rounded-3xl px-4 py-2 font-bold text-[17px] text-[#3BB77E] hover:text-[#fd7e14]">
                Spinach
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
