// mi-app/src/services/types.ts
export type Product = {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  description: string;
  category: string;
  brand?: string;
  colors?: string[];
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  prime?: boolean;
  inStock?: boolean;
};

export type Category = {
  id: string;
  name: string;
};

export type Filters = {
  priceRange?: [number, number];
  colors?: string[];
  brands?: string[];
  rating?: number;
  primeOnly?: boolean;
  inStock?: boolean;
};

export type SortBy =
  | "relevance"
  | "price-low"
  | "price-high"
  | "rating"
  | "newest"
  | "name-az"
  | "name-za"
  | "discount"
  | "popularity";

export type Options = {
  filters?: Filters;
  sortBy?: SortBy;
  category?: string;
  searchQuery?: string;
  limit?: number;
  offset?: number;
};
