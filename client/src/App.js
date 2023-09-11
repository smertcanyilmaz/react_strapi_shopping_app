import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Layout from "./pages/Layout/Layout";
import CartResponsive from "./pages/Responsive/CartResponsive";
import FavoritesResponsive from "./pages/Responsive/FavoritesResponsive";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products/women/:id" element={<Women />} />
            <Route path="products/men/:id" element={<Men />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<CartResponsive />} />
            <Route path="favorites" element={<FavoritesResponsive />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
