import { useState } from "react";
import Cart from "../Cart/Cart";
import Favorites from "../Favorites/Favorites";
import NavbarLastInner from "./NavbarLastInner";

const NavbarLast = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openFav, setOpenFav] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(!openCart);
    setOpenFav(false);
  };

  const handleOpenFav = () => {
    setOpenFav(!openFav);
    setOpenCart(false);
  };

  return (
    <div className="hidden md:flex">
      <NavbarLastInner
        handleOpenCart={handleOpenCart}
        handleOpenFav={handleOpenFav}
      />
      {openCart && <Cart />}
      {openFav && <Favorites />}
    </div>
  );
};

export default NavbarLast;
