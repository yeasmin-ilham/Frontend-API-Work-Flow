// components/products/ProductCard.tsx
import { Link } from "react-router-dom";
import { Trash2, Pencil } from "lucide-react";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import type { Product } from "../api/types";


interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {

  const {mutate, isPending } = useDeleteProduct();

  function handleDelete() {
    const confirmed = window.confirm(`Delete "${product.name}"?`);
    if (!confirmed) return;

    mutate(product.id);
  }

  return (
    <li className="rounded-lg border border-border p-4 shadow-sm transition hover:shadow-md">
      <Link to={`/products/${product.id}`} className="block">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground">
          ${product.price} • {product.stock} in stock
        </p>
        <span className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-xs">
          {product.category}
        </span>
      </Link>

      <div className="mt-3 flex gap-3">
        <Link
          to={`/products/${product.id}/edit`}
          className="inline-flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600"
        >
          <Pencil className="size-4" />
          Edit
        </Link>

        <button
          onClick={handleDelete}
          disabled={isPending}
          className="inline-flex items-center gap-1 text-sm text-red-500 hover:text-red-600 disabled:opacity-50"
        >
          <Trash2 className="size-4" />
          {isPending ? "Deleting..." : "Delete"}
        </button>
      </div>
    </li>
  );
}