import { useSelector } from "react-redux";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Overlay from "../../components/MenuResponsive/Overlay";
import FilterOverlay from "../../components/FilterResponsive/FilterOverlay";

const Layout = () => {
  const isMenuOpen = useSelector((state) => state.menu.open);
  const isOpenFilter = useSelector((state) => state.openFilter.openFilter);

  useEffect(() => {
    if (isMenuOpen || isOpenFilter) {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
    }
  }, [isMenuOpen, isOpenFilter]);

  return (
    <>
      <Overlay />
      <FilterOverlay />
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Layout;
