import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { CartItemType } from "types";

type CartStore = {
  cart: CartItemType[];
  setCart: (newCart: CartItemType[]) => void;
};

const useCartStore = create(
  devtools<CartStore>(
    (set) => ({
      cart: [],
      setCart: (newCart: CartItemType[]) => set(() => ({ cart: newCart })),
    }),
    { name: "cart", store: "cart" }
  )
);

export default useCartStore;
