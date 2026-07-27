

// lib/queryKeys.ts
export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
};

/* 
Details Explanation 

export const productKeys = {
  all: ["products"] as const,

  lists: () => ["products", "list"] as const,

  list: (filters: Record<string, unknown>) =>
    ["products", "list", filters] as const,

  details: () => ["products", "detail"] as const,

  detail: (id: string) =>
    ["products", "detail", id] as const,
}; */