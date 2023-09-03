import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Favorites from "../Favorites/Favorites";

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
      <div className="flex gap-6 md:gap-12 items-center ">
        <div className="text-center space-y-1 cursor-pointer relative">
          <span className="absolute -top-1 -right-3 bg-indigo-700 text-white text-[12px] font-semibold px-[3px] rounded-md">
            soon
          </span>
          <PersonOutlinedIcon />
          <p>Account</p>
        </div>
        <div className="text-center space-y-1 cursor-pointer">
          <div className="relative cursor-pointer" onClick={handleOpenFav}>
            <span className=" flex justify-center items-center absolute -top-1.5 -right-[-2px] bg-red-500 text-xs text-white rounded-full px-1.5 py-0.5">
              {favorites.length}
            </span>
            <FavoriteBorderOutlinedIcon />
          </div>
          <p>Favorites</p>
        </div>

        <div className="text-center space-y-1 cursor-pointer">
          <div className="relative cursor-pointer" onClick={handleOpenCart}>
            <span className=" flex justify-center items-center absolute -top-2 -right-3 bg-blue-600 text-xs text-white rounded-full px-1.5 py-0.5">
              {cartProducts.length}
            </span>
            <ShoppingCartOutlinedIcon />
          </div>
          <p>Cart</p>
        </div>
      </div>
      {openCart && <Cart />}
      {openFav && <Favorites />}
    </div>
  );
};

export default NavbarLast;
