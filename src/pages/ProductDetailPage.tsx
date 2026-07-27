// pages/ProductDetailPage.tsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader2, ArrowLeft } from "lucide-react";
import { useProduct } from "../hooks/useProduct";
import { useUpdateProduct } from "../hooks/useUpdateProduct";


export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: product, isPending, isError, error } = useProduct(id ?? "");
  const updateProductMutation = useUpdateProduct();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  // Sync local form state once the product loads


  function handleSave() {
    if (!id) return;

    updateProductMutation.mutate({
      id,
      payload: {
        name,
        price: Number(price),
        stock: Number(stock),
      },
    });
  }

  if (isPending) {
    return (
      <div className="flex items-center gap-2 p-8 text-muted-foreground">
        <Loader2 className="size-4 animate-spin" />
        Loading product...
      </div>
    );
  }

  if (isError) {
    return <p className="p-8 text-red-500">{error.message}</p>;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <button
        onClick={() => navigate("/products")}
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to products
      </button>

      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-sm text-muted-foreground">
        Created {new Date(product.createdAt).toLocaleDateString()}
      </p>

      <div className="mt-6 space-y-3">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 w-full rounded border border-border px-3 py-1.5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            className="mt-1 w-full rounded border border-border px-3 py-1.5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Stock</label>
          <input
            value={stock}
            onChange={(event) => setStock(event.target.value)}
            type="number"
            className="mt-1 w-full rounded border border-border px-3 py-1.5"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={updateProductMutation.isPending}
          className="rounded bg-primary px-4 py-1.5 text-white disabled:opacity-50"
        >
          {updateProductMutation.isPending ? "Saving..." : "Save changes"}
        </button>

        {updateProductMutation.isError && (
          <p className="text-sm text-red-500">
            {updateProductMutation.error.message}
          </p>
        )}
      </div>
    </div>
  );
}