import TopSellingCard from "apps/front-office/design-system/components/TopSelling/TopSellingCard";
import TopSellingHead from "apps/front-office/design-system/components/TopSelling/TopSellingHead";
import { Product } from "src/apps/front-office/shop/utils/types";

type TopSellingPropsType = {
  moduleName: string;
  products: Product[];
};

export default function TopSelling({
  moduleName,
  products,
}: TopSellingPropsType) {
  // const [productData, setProductData] = useState<Product | any>([]);
  // const [productTitle, setProductTitle] = useState<string | any>({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getTopsellingHttpsList();
  //       for (const row of res.rows) {
  //         for (const column of row.columns) {
  //           if (column.module.name === moduleName) {
  //             const data = column.module.products;
  //             // const title = column.module.title;
  //             setProductData(data);
  //             // setProductTitle(title);
  //             return;
  //           }
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching ", error);
  //     }
  //   };
  //   fetchData();
  // }, [moduleName]);

  return (
    <div>
      <div>
        <TopSellingHead productTitle={moduleName} />
      </div>
      <div>
        {products.map(el => {
          return (
            <div key={el.id}>
              <TopSellingCard
                productImageTop={el.images[0].url}
                productName={el.name}
                salePrice={el.salePrice}
                priceOld={el.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
