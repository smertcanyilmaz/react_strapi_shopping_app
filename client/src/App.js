import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useSelector } from "react-redux";
import Overlay from "./components/MenuResponsive/Overlay";
import CartResponsive from "./pages/Responsive/CartResponsive";

const Layout = () => {
  const isMenuOpen = useSelector((state) => state.menu.open);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* {isMenuOpen && <Overlay />} */}
      <Overlay />
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
