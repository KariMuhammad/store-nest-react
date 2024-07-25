import { useEvent } from "@mongez/react-hooks";
import { popularProductsAtom } from "apps/front-office/home/atoms/popular-products-atom";
import { products } from "apps/front-office/utils/data";
import { Product, ProductCategory } from "apps/front-office/utils/types";
import { useState } from "react";

export type PopularProductsTabsProps = {
  children: React.ReactNode;
};

export default function PopularProductsTabs() {
  const categoryTabs: ProductCategory[] = [
    {
      id: 1,
      name: "Milks & Dairies",
    },
    {
      id: 2,
      name: "Coffes & Teas",
    },
    {
      id: 34,
      name: "Pet Foods",
    },
    {
      id: 4,
      name: "Meats",
    },
    {
      id: 5,
      name: "Vegetables",
    },
    {
      id: 6,
      name: "Fruits",
    },
  ];

  const tabs = categoryTabs.map(tab => ({
    id: tab.id,
    name: tab.name,
    products: products.filter(product => product.category.id === tab.id),
  }));
  return (
    <>
      <div className="container py-3 px-0 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-3xl text-[#253D4E]">
            Popular Products
          </h3>
        </div>
        <div>
          <ul className="flex items-center gap-3">
            <Tab
              tab={{
                id: 0,
                name: "All",
              }}
            />
            {tabs.map(tab => (
              <Tab key={tab.id} tab={tab} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
type TabProps = {
  tab: {
    id: number;
    name: string;
    products?: Product[];
  };
};
function Tab({ tab }: TabProps) {
  const [activeTab, setIsActiveTab] = useState(
    tab.id === popularProductsAtom.get("activeTab"),
  );

  useEvent(() =>
    popularProductsAtom.onChange((value, oldValue) => {
      if (value.activeTab === tab.id) {
        setIsActiveTab(true);
      } else if (oldValue.activeTab === tab.id) {
        setIsActiveTab(false);
      }
    }),
  );

  return (
    <li
      className={
        activeTab
          ? "text-primary-default font-bold hover:-translate-y-0.5 transition  duration-300"
          : "font-bold  text-[#253D4E]"
      }
      role="button"
      onClick={() => popularProductsAtom.change("activeTab", tab.id)}>
      {tab.name}
    </li>
  );
}
