


import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/products";
import { productKeys } from "../lib/querykeys";


export function useProduct(id: string) {
  return useQuery({
    queryKey:  productKeys.detail(id),
    queryFn: () => getProductById(id),
  });
}