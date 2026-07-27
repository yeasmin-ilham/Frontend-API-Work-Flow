// types/product.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  createdAt: string;
}

export interface CreateProductPayload  {
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface UpdateProductPayload  {
  name?: string;
  price?: number;    //   ? means Optional. all value not mandatory. Update (PATCH) করার সময় সব field পাঠাতে হয় না। যেটা পরিবর্তন হবে, শুধু সেটাই পাঠানো যায়।
  stock?: number;
  category?: string;
}