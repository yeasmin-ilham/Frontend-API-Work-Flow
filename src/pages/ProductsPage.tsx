// pages/ProductsPage.tsx

import { ProductForm } from "../components/ProductForm";
import { ProductList } from "../components/ProductList";


export function ProductsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold">Products</h1>
      <p className="mt-1 text-muted-foreground">
        Manage your product inventory.
      </p>

      <section className="mt-6 rounded-lg border border-border p-4">
        <h2 className="mb-3 font-semibold">Add a new product</h2>
        <ProductForm />
      </section>

      <section className="mt-8">
        <ProductList />
      </section>
    </div>
  );
}