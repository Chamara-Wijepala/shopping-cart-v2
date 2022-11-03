import { ClimbingBoxLoader } from "react-spinners";

import { Item } from "App";

import "./product-list.css";

export default function ProductList({
  products,
}: {
  products: Item[] | null | undefined;
}) {
  return (
    <div>
      {products ? (
        <div className="product-list">
          {products.map((item) => (
            <div
              key={item.id}
              className="product clr-primary-100 bg-secondary-800 flex"
            >
              <div className="product__image-wrapper bg-primary-100 flex align-center justify-center">
                <img src={item.image} alt="" className="product__image" />
              </div>

              <div className="product__details flex">
                <h3 className="fw-800">{item.title}</h3>

                <p className="product__price clr-secondary-800 bg-secondary-300">
                  $ {item.price}
                </p>

                <button
                  type="button"
                  className="product__add-btn btn btn-small btn--accent--inverse fs-350 fw-800 uppercase"
                >
                  See product page
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="spinner flex">
          <ClimbingBoxLoader />
        </div>
      )}
    </div>
  );
}
