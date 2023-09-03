import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";

const Layout = () => {
  const isMenuOpen = useSelector((state) => state.menu.open);
  return (
    <>
      {isMenuOpen && (
        <div class="overlay h-full w-full bg-black z-30 fixed "></div>
      )}
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
