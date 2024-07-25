import { atom } from "@mongez/react-atom";
import { GenericObject } from "@mongez/reinforcements";
import { type Product } from "apps/front-office/utils/types";

export type TabCategory = {
  id: number;
  name: string;
  products: Product[];
};

type popularProductsAtomOptions = {
  activeTab: number;
  tabs: TabCategory[];
  products: Product[];
  activeProducts: Product[];
};

const collectTabsData = (products: Product[]) => {
  const categories: GenericObject = {};

  for (const product of products) {
    if (!categories[product.category.id]) {
      categories[product.category.id] = {
        id: product.category.id,
        name: product.category.name,
        products: [],
      };
    }

    categories[product.category.id].products.push(product);
  }

  return Object.values(categories) as TabCategory[];
};

export const popularProductsAtom = atom<popularProductsAtomOptions>({
  key: "popularProducts",
  beforeUpdate(data) {
    if (data.tabs.length === 0) {
      data.tabs = collectTabsData(data.products);
    }

    if (data.activeTab === 0) {
      data.activeProducts = data.products;
    } else {
      data.activeProducts =
        data.tabs.find(tab => tab.id === data.activeTab)?.products ?? [];
    }

    return data;
  },
  default: {
    activeTab: 0, // all categories
    tabs: [],
    products: [],
    activeProducts: [],
  },
});
