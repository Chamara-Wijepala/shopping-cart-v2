import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "components/header";
import Home from "pages/home";
import Shop from "pages/shop";
import Product from "pages/product";
import ProductList from "components/product-list";

export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function App() {
  const [products, setProducts] = useState<Item[] | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((arr: Item[]) => {
        // filter out electronics category since it's not used and makes
        // rendering easier
        setProducts(arr.filter((item) => item.category !== "electronics"));
      });
  }, []);

  function filterArrayByProperty(arr: Item[] | null, property: string) {
    const result = arr?.filter((item) => item.category === property);
    return result;
  }

  return (
    <>
      <Header itemCount={0} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<ProductList products={products} />} />
            <Route path="all" element={<ProductList products={products} />} />
            <Route
              path="men"
              element={
                <ProductList
                  products={filterArrayByProperty(products, "men's clothing")}
                />
              }
            />
            <Route
              path="women"
              element={
                <ProductList
                  products={filterArrayByProperty(products, "women's clothing")}
                />
              }
            />
            <Route
              path="jewellery"
              element={
                <ProductList
                  products={filterArrayByProperty(products, "jewelery")}
                />
              }
            />
          </Route>
          <Route path="/:id" element={<Product />} />
        </Routes>
      </main>
    </>
  );
}
