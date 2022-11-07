import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

import { Item } from "App";

import "./product.css";

export default function Product({ products }: { products: Item[] | null }) {
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const location = useLocation();
  const path = Number(location.pathname.split("/")[2]);

  const product = products?.find((item) => item.id === path);

  function increment() {
    if (count < 100) setCount(count + 1);
  }

  function decrement() {
    if (count > 1) setCount(count - 1);
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
              <div className="product-section__counter clr-primary-100">
                <button
                  aria-label="decrement"
                  type="button"
                  onClick={decrement}
                  className="btn btn--small btn--dark fs-500"
                >
                  -
                </button>

                <p className="bg-secondary-800 flex justify-center align-center">
                  {count} <span className="sr-only">items</span>
                </p>

                <button
                  aria-label="increment"
                  type="button"
                  onClick={increment}
                  className="btn btn--small btn--dark fs-500"
                >
                  +
                </button>
              </div>

              <button
                type="button"
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
