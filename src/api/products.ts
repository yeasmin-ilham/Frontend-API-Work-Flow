
// READ

import type {  CreateProductPayload, Product, UpdateProductPayload  } from "./types";

export async function getProducts(): Promise<Product> {
  const response = await fetch("/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message ?? "Failed to fetch products");
  }

  return response.json();
  
}


// READ (Single)

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`/api/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message ?? "Failed to fetch product");
  }

  return response.json();

}


// CREATE

export async function createProduct(payload: CreateProductPayload): Promise<Product> {
  const response = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message ?? "Failed to create product");
  }

 return response.json();
  
}


// UPDATE

export async function updateProduct(id: string, payload: UpdateProductPayload): Promise<Product> {
  const response = await fetch(`/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message ?? "Failed to update product");
  }

 return response.json();
  
}


// DELETE

export async function deleteProduct(id: string): Promise<void> {
  const response = await fetch(`/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message ?? "Failed to delete product");
  }
}