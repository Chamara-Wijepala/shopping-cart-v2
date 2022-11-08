import { useState } from "react";
import { MdClose } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";

import useLocalStorage from "hooks/useLocalStorage";

import { CartItem } from "types";

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
          <ul
            aria-label="Shopping bag"
            className="cart-item-list no-list-style"
          >
            {cart.map((item: CartItem) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item__image-wrapper bg-primary-100 flex justify-center align-center">
                  <img src={item.image} alt="" className="cart-item__image" />
                </div>
                <div>
                  <h2 className="fw-800">{item.title}</h2>
                  <p>$ {item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="cart-empty flex justify-center align-center">
            <p className="cart-empty__text fs-600">Your bag is empty</p>
            <BiShoppingBag className="cart-empty__icon" />
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <button
          type="button"
          onClick={checkout}
          className="btn btn--dark--inverse fw-800 uppercase"
        >
          Checkout
        </button>
      )}
    </div>
  );
}
