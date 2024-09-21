import { Column } from "src/apps/front-office/home/utils/types";
import TopSelling from "./TopSelling";

type DealsDayTwoPropsType = {
  columns: Column[];
};

export default function DealsDayTwo({ columns }: DealsDayTwoPropsType) {
  return (
    <section className="container my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {columns.map(column => (
        <TopSelling
          key={column.id}
          moduleName={column.module.name}
          products={column.module.products}
        />
      ))}
    </section>
  );
}
