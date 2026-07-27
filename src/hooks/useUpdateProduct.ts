
// hooks/products/useUpdateProduct.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Product, UpdateProductPayload } from "../api/types";
import { updateProduct } from "../api/products";
import { productKeys } from "../lib/querykeys";


interface UpdateProductArgs {
  id: string;
  payload: UpdateProductPayload;
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: UpdateProductArgs) =>
      updateProduct(id, payload),

    onMutate: async ({ id, payload }) => {
      await queryClient.cancelQueries({ queryKey: productKeys.detail(id) });

      const previousProduct = queryClient.getQueryData<Product>(
        productKeys.detail(id)
      );

      if (previousProduct) {
        queryClient.setQueryData<Product>(productKeys.detail(id), {
          ...previousProduct,
          ...payload,
        });
      }

      return { previousProduct };
    },

    onError: (_error, variables, context) => {
      if (context?.previousProduct) {
        queryClient.setQueryData(
          productKeys.detail(variables.id),
          context.previousProduct
        );
      }
    },

    onSettled: (_data, _error, variables) => {
      queryClient.invalidateQueries({
        queryKey: productKeys.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
}