

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../api/products";
import { productKeys } from "../lib/querykeys";
import type { Product } from "../api/types";


export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),

    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: productKeys.lists() });

      const previousProducts = queryClient.getQueryData<Product[]>(
        productKeys.lists()
      );

      queryClient.setQueryData<Product[]>(productKeys.lists(), (old) =>
        old ? old.filter((product) => product.id !== id) : old
      );

      return { previousProducts };
    },

    onError: (_error, _id, context) => {
      if (context?.previousProducts) {
        queryClient.setQueryData(productKeys.lists(), context.previousProducts);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
}