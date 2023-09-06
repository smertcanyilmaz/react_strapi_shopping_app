import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Favorites from "../Favorites/Favorites";
import NavbarLastInner from "./NavbarLastInner";

const NavbarLast = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openFav, setOpenFav] = useState(false);
  const cartProducts = useSelector((state) => state.cart.products);
  const favorites = useSelector((state) => state.favorites.favorites);

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
