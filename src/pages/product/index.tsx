import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import useProductsStore from "stores/products";
import useCartStore from "stores/cart";
import Counter from "components/counter";
import { CartItemType } from "types";
import "./product.css";

export default function Product() {
  const products = useProductsStore((state) => state.products);
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const location = useLocation();
  const path = Number(location.pathname.split("/")[2]);

  const product = products?.find((item) => item.id === path);

  function addToCart() {
    if (!product) return;

    let newCart: CartItemType[] = [];

    // if there's a duplicate item, increase it's quantity by count
    if (cart.find((item) => item.id === product.id)) {
      newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qty: item.qty + count };
        }
        return item;
      });
    } else {
      newCart = [...cart];
      newCart.push({
        id: product.id,
        qty: count,
        title: product.title,
        image: product.image,
        price: product.price,
      });
    }

    setCart(newCart);
  }

  return (
    <div className="container fade-in-1">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="
          btn btn--small btn--dark--inverse btn-with-icon fw-800
          uppercase flex align-center justify-center mb-2
        "
      >
        Back
      </button>

      {product ? (
        <section className="product-section bg-primary-100 mb-3">
          <div className="product-section__image-wrapper bg-primary-100 flex justify-center">
            <img
              src={product.image}
              alt=""
              className="product-section__image"
            />
          </div>

          <div className="product-section__details flex">
            <h2 className="product-section__title fs-800 fw-800">
              {product.title}
            </h2>

            <p className="fs-600">$ {product.price}</p>

            <p>
              {product.rating.rate}/5, {product.rating.count} ratings
            </p>

            <p className="product-section__desc">{product.description}</p>

            <div className="product-section__btn-panel">
              <Counter count={count} setCount={setCount} />

              <button
                type="button"
                onClick={addToCart}
                className="btn btn--accent clr-primary-100 fw-800 uppercase"
              >
                Add to cart
              </button>
            </div>
          </div>
        </section>
      ) : (
        <div className="spinner flex">
          <ClimbingBoxLoader />
        </div>
      )}
    </div>
  );
}
