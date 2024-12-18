import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Item } from "types";

type ProductsStore = {
  products: null | Item[];
  fetchProducts: () => Promise<void>;
};

const useProductsStore = create(
  devtools<ProductsStore>((set) => ({
    products: null,
    fetchProducts: async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const arr: Item[] = await response.json();
      // filter out electronics category since it's not used and makes
      // rendering easier
      const filteredProducts = arr.filter(
        (item) => item.category !== "electronics"
      );
      set({ products: filteredProducts });
    },
  }))
);

export default useProductsStore;
