import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useProductsStore from "stores/products";
import Header from "components/header";
import Home from "pages/home";
import Shop from "pages/shop";
import Product from "pages/product";
import ProductList from "components/product-list";
import Footer from "components/footer";
import { ICartItem } from "types";

export default function App() {
  const fetchProducts = useProductsStore((state) => state.fetchProducts);
  const [cart, setCart] = useState<ICartItem[]>([]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<ProductList />} />
            <Route path="all" element={<ProductList />} />
            <Route
              path="men"
              element={<ProductList category={"men's clothing"} />}
            />
            <Route
              path="women"
              element={<ProductList category={"women's clothing"} />}
            />
            <Route
              path="jewellery"
              element={<ProductList category="jewelery" />} // it's spelled 'jewelery' in the api
            />
          </Route>
          <Route path="product/:id" element={<Product setCart={setCart} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
