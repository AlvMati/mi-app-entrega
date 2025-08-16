import { productsDB, categories } from "./db";
import type { Product, SortBy, Options } from "./types";


// Simula retardo en la llamada API
const delay = (ms = 300) => new Promise<void>((res) => setTimeout(res, ms));

export const productService = {
  async getAllProducts(options: Options = {}): Promise<Product[]> {
    await delay(200);
    let products = [...productsDB];

    products = this.applyFiltersAndSort(products, options);

    return products;
  },

  async getProductById(id: number | string): Promise<Product> {
    await delay(100);
    const product = productsDB.find((p) => p.id === Number(id));
    if (!product) throw new Error("Product not found");
    return product;
  },

  async getProductsByCategory(category: string, options: Options = {}): Promise<Product[]> {
    await delay(150);
    let products =
      category === "all"
        ? [...productsDB]
        : productsDB.filter((product) => product.category === category);

    products = this.applyFiltersAndSort(products, options);

    return products;
  },

  async getCategories(): Promise<typeof categories> {
    await delay(100);
    return [...categories];
  },

  async searchProducts(query: string, options: Options = {}): Promise<Product[]> {
    await delay(200);
    let products = !query
      ? [...productsDB]
      : productsDB.filter(
          (product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );

    products = this.applyFiltersAndSort(products, options);

    return products;
  },

  async getFeaturedProducts(): Promise<Product[]> {
    await delay(150);
    return productsDB.filter((product) => product.prime).slice(0, 8);
  },

  async getProductsOnSale(): Promise<Product[]> {
    await delay(150);
    return productsDB.filter((product) => product.discount).slice(0, 10);
  },

  applyFiltersAndSort(products: Product[], options: Options = {}): Product[] {
    const {
      filters = {},
      sortBy = "relevance",
      category = "all",
      searchQuery = "",
    } = options;

    let filtered = [...products];

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (product) =>
          product.price >= filters.priceRange![0] &&
          product.price <= filters.priceRange![1]
      );
    }

    if (filters.colors && filters.colors.length > 0) {
      filtered = filtered.filter(
        (product) =>
          product.colors &&
          product.colors.some((color) => filters.colors!.includes(color))
      );
    }

    if (filters.brands && filters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        filters.brands!.includes(product.brand ?? "")
      );
    }

    if (filters.rating && filters.rating > 0) {
      filtered = filtered.filter((product) => product.rating.rate >= filters.rating!);
    }

    if (filters.primeOnly) {
      filtered = filtered.filter((product) => product.prime);
    }

    if (filters.inStock) {
      filtered = filtered.filter((product) => product.inStock);
    }

    filtered = this.sortProducts(filtered, sortBy);

    return filtered;
  },

  sortProducts(products: Product[], sortBy: SortBy): Product[] {
    const sorted = [...products];

    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "rating":
        return sorted.sort((a, b) => b.rating.rate - a.rating.rate);
      case "newest":
        return sorted.sort((a, b) => b.id - a.id);
      case "name-az":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "name-za":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "discount":
        return sorted.sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0));
      case "popularity":
        return sorted.sort((a, b) => b.rating.count - a.rating.count);
      default:
        return sorted;
    }
  },

  async getFilterOptions(category = "all"): Promise<{
    colors: string[];
    brands: string[];
    priceRange: [number, number];
  }> {
    await delay(50);

    let products =
      category === "all"
        ? [...productsDB]
        : productsDB.filter((product) => product.category === category);

    const colors = new Set<string>();
    const brands = new Set<string>();
    let minPrice = Infinity;
    let maxPrice = 0;

    products.forEach((product) => {
      if (product.colors) {
        product.colors.forEach((color) => colors.add(color));
      }

      if (product.brand) {
        brands.add(product.brand);
      }

      minPrice = Math.min(minPrice, product.price);
      maxPrice = Math.max(maxPrice, product.price);
    });

    return {
      colors: Array.from(colors).sort(),
      brands: Array.from(brands).sort(),
      priceRange: [Math.floor(minPrice), Math.ceil(maxPrice)],
    };
  },

  async getFilteredProducts(options: Options = {}): Promise<{
    products: Product[];
    total: number;
    hasMore: boolean;
  }> {
    await delay(200);
    const {
      category = "all",
      searchQuery = "",
      filters = {},
      sortBy = "relevance",
      limit,
      offset = 0,
    } = options;

    let products = this.applyFiltersAndSort(productsDB, {
      filters,
      sortBy,
      category,
      searchQuery,
    });

    if (limit) {
      products = products.slice(offset, offset + limit);
    }

    return {
      products,
      total: products.length,
      hasMore: limit ? offset + limit < products.length : false,
    };
  },

  getSortOptions(): { value: SortBy; label: string }[] {
    return [
      { value: "relevance", label: "Relevancia" },
      { value: "price-low", label: "Precio: menor a mayor" },
      { value: "price-high", label: "Precio: mayor a menor" },
      { value: "rating", label: "Mejor valorados" },
      { value: "newest", label: "Más recientes" },
      { value: "name-az", label: "Nombre: A-Z" },
      { value: "name-za", label: "Nombre: Z-A" },
      { value: "discount", label: "Mayor descuento" },
      { value: "popularity", label: "Más populares" },
    ];
  },

  
  async createProduct(newProduct: Omit<Product, 'id'>) {
  await delay(200);  // Simula demora API

  // Crear nuevo id simple: max id + 1
  const newId = productsDB.length > 0 ? Math.max(...productsDB.map(p => p.id)) + 1 : 1;

  const productToAdd = { id: newId, ...newProduct };
  productsDB.push(productToAdd);

  return productToAdd;
},
};