import { Routes, Route } from "react-router-dom";

import Header from "components/header";
import Home from "pages/home";
import Shop from "pages/shop";
import Product from "pages/product";

export default function App() {
  return (
    <>
      <Header itemCount={0} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/:id" element={<Product />} />
        </Routes>
      </main>
    </>
  );
}
