import { Routes, Route } from "react-router-dom";

import Home from "pages/home";
import Shop from "pages/shop";
import Product from "pages/product";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
    </div>
  );
}
