// Import images
import image1 from "assets/images/shop-category/category-1.svg";
import image2 from "assets/images/shop-category/category-2.svg";
import image3 from "assets/images/shop-category/category-3.svg";
import image4 from "assets/images/shop-category/category-4.svg";
import image5 from "assets/images/shop-category/category-5.svg";
import useFetchShopCategories from "shared/hooks/useFetchShopCategories";
import CategoryItem from "./CategoryItem";

export default function CategorySidebar() {
  const categoryImages = [image1, image2, image3, image4, image5];

  const { categories, isLoading, error } = useFetchShopCategories();
  const categoriesItems = categories.slice(3, 8);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-w-[250px] p-7 rounded-lg flex flex-col relative border border-solid shadow-gray-300">
      <h5 className="mb-8 border-b font-bold border-[#ececec] text-[24px] pb-6 relative after:content-[''] after:bg-[#BCE3C9] after:h-0.5 after:w-20 after:absolute after:left-0 after:rtl:right-0 after:bottom-0">
        Category
      </h5>
      <ul className="group">
        {categoriesItems.map((item, index) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            img={categoryImages[index]}
          />
        ))}
      </ul>
    </div>
  );
}
