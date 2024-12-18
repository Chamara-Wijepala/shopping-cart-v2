import { useEffect, useState } from "react";
import useCartStore from "stores/cart";
import Counter from "components/counter";
import type { CartItemType } from "types";
import "./cart-item.css";

export default function CartItem({ item }: { item: CartItemType }) {
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);
  const [count, setCount] = useState(item.qty);

  useEffect(() => {
    const newCart: CartItemType[] = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...item, qty: count };
      }
      return cartItem;
    });
    setCart(newCart);
  }, [count]);

  return (
    <div className="cart-item">
      <div className="cart-item__image-wrapper bg-primary-100 flex justify-center align-center">
        <img src={item.image} alt="" className="cart-item__image" />
      </div>

      <div className="cart-item__details">
        <h2 className="fw-800">{item.title}</h2>

        <p>$ {item.price}</p>

        <div className="flex">
          <Counter count={count} setCount={setCount} />
        </div>
      </div>
    </div>
  );
}
