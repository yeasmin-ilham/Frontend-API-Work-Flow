
import { Loader2, Trash2 } from "lucide-react";
import { useProducts } from "../hooks/useProducts";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

export function ProductList() {

  const { data: products, isPending, isError, error } = useProducts();
  const {mutate , isPending: deletePending} = useDeleteProduct();

  if (isPending) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <Loader2 className="size-4 animate-spin" />
        Loading products...
      </div>
    );
  }

  if (isError) {
    return <p className="text-red-500">{error.message}</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      
        <li
          key={products.id}
          className="rounded-lg border border-border p-4 shadow-sm"
        >
          <h3 className="font-semibold">{products.name}</h3>
          <p className="text-sm text-muted-foreground">
            ${products.price} • {products.stock} in stock
          </p>
          <button
            onClick={() => mutate(products.id)}
            disabled={deletePending}
            className="mt-2 inline-flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
          >
            <Trash2 className="size-4" />
            Delete
          </button>
        </li>
      
    </ul>
  );
}