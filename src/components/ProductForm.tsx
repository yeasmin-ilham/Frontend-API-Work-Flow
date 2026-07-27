// components/products/ProductForm.tsx
import { useState } from "react";
import { useCreateProduct } from "../hooks/useCreateProduct";


export function ProductForm() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const {mutate , isPending} = useCreateProduct();

  function handleSubmit() {

    mutate(
      { name, price: Number(price), stock: 0, category: "general" },
      {
        onSuccess: () => {
          setName("");
          setPrice("");
        },
      }
    );
  }

  return (
    <div className="flex gap-2">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Product name"
        className="rounded border border-border px-3 py-1.5"
      />
      <input
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        placeholder="Price"
        type="number"
        className="rounded border border-border px-3 py-1.5"
      />
      <button
        onClick={handleSubmit}
        disabled={isPending}
        className="rounded bg-primary px-4 py-1.5 text-white disabled:opacity-50"
      >
        {isPending ? "Adding..." : "Add product"}
      </button>
    </div>
  );
}