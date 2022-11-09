import { useState } from "react";
import { MdClose } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import CartItem from "components/cart-item";

import useLocalStorage from "hooks/useLocalStorage";

import { ICartItem } from "types";

import "./cart.css";

export default function Cart({
  setIsCartOpen,
}: {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [data, , deleteData] = useLocalStorage("cart", []);
  const [cart, setCart] = useState(data);

  function deleteCart() {
    deleteData();
    setCart([]);
  }

  function checkout() {
    deleteCart();
    setIsCartOpen(false);
  }

  const totalPrice = cart
    .reduce((sum: number, { price, qty }: { price: number; qty: number }) => {
      return sum + price * qty;
    }, 0)
    .toFixed(2);

  return (
    <div className="cart flex">
      <div className="flex align-center">
        {cart.length > 0 && (
          <button
            type="button"
            onClick={deleteCart}
            className="btn btn--small btn--dark--inverse"
          >
            Remove all items
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsCartOpen(false)}
          className="cart__close-btn"
        >
          <MdClose aria-hidden className="icon-lg" />
        </button>
      </div>

      <div className="cart__content">
        {cart.length > 0 ? (
          <>
            <ul
              aria-label="Shopping bag"
              className="cart-item-list no-list-style"
            >
              {cart.map((item: ICartItem) => (
                <li key={item.id}>
                  <CartItem item={item} />
                </li>
              ))}
            </ul>

            <p className="fs-500">Total price $ {totalPrice}</p>

            <button
              type="button"
              onClick={checkout}
              className="btn btn--dark--inverse fw-800 uppercase"
            >
              Checkout
            </button>
          </>
        ) : (
          <div className="cart-empty flex justify-center align-center">
            <p className="cart-empty__text fs-600">Your bag is empty</p>
            <BiShoppingBag className="cart-empty__icon" />
          </div>
        )}
      </div>
    </div>
  );
}
