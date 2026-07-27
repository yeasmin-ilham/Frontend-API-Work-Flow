


import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/products";
import { productKeys } from "../lib/querykeys";


export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
}