// src/components/Filters/filterUtils.ts
import { Product } from "../../services/ProductServices";

export function filterProducts(
  products: Product[],
  searchTerm: string,
  selectedCategory: string
): Product[] {
  return products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
}
