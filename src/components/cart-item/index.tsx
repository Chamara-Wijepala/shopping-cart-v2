import { useEffect, useState } from "react";
import Counter from "components/counter";

import { ICartItem } from "types";

import "./cart-item.css";

export default function CartItem({
  item,
  setCart,
}: {
  item: ICartItem;
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
}) {
  const [count, setCount] = useState(item.qty);

  // updates item quantity
  useEffect(() => {
    setCart((cartItems) => {
      let newCart: ICartItem[] = [...cartItems];

      newCart = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...item,
            qty: count,
          };
        }
        return cartItem;
      });

      return newCart;
    });
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
