import { queryString } from "@mongez/react-router";
import { Product } from "apps/front-office/shop/utils/types";
import { useEffect, useState } from "react";
import { getProducts } from "../../home/services/home-service";

export default function useFetchShopData(currentPage: number) {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<any>({});
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    setIsLoading(true);
    getProducts({
      page: currentPage,
      limit: 20,
      ...queryString.all(),
    })
      .then(response => {
        setProducts(response.data.products);
        setPagination(response.data.paginationInfo);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, [currentPage]);
  return { loading, error, products, pagination };
}
