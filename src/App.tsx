import { Routes, Route } from "react-router-dom";

import Header from "components/header";
import Home from "pages/home";
import Shop from "pages/shop";
import Product from "pages/product";
import ProductList from "components/product-list";

export default function App() {
  return (
    <>
      <Header itemCount={0} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<ProductList props="all" />} />
            <Route path="all" element={<ProductList props="all" />} />
            <Route path="men" element={<ProductList props="men" />} />
            <Route path="women" element={<ProductList props="women" />} />
            <Route
              path="jewellery"
              element={<ProductList props="jewellery" />}
            />
          </Route>
          <Route path="/:id" element={<Product />} />
        </Routes>
      </main>
    </>
  );
}
