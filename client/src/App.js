import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Layout from "./pages/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useSelector } from "react-redux";
import Overlay from "./components/MenuResponsive/Overlay";
import CartResponsive from "./pages/Responsive/CartResponsive";
import FavoritesResponsive from "./pages/Responsive/FavoritesResponsive";
import FilterOverlay from "./components/FilterResponsive/FilterOverlay";

// const Layout = () => {
//   const isMenuOpen = useSelector((state) => state.menu.open);
//   const isOpenFilter = useSelector((state) => state.openFilter.openFilter);

//   useEffect(() => {
//     if (isMenuOpen || isOpenFilter) {
//       document.body.classList.add("scroll-locked");
//     } else {
//       document.body.classList.remove("scroll-locked");
//     }
//   }, [isMenuOpen, isOpenFilter]);

//   return (
//     <>
//       <Overlay />
//       <FilterOverlay />
//       <div className="app">
//         <Navbar />
//         <Outlet />
//         <Footer />
//       </div>
//     </>
//   );
// };

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
