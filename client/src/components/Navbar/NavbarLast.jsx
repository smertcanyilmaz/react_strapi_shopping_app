import { useState } from "react";
//import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Favorites from "../Favorites/Favorites";

const NavbarLast = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="flex">
      <div className="flex gap-12 items-center ">
        <div className="text-center space-y-1 cursor-pointer">
          <PersonOutlinedIcon />
          <p>Account</p>
        </div>
        <div
          className="text-center space-y-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <FavoriteBorderOutlinedIcon />
          <p>Favorites</p>
        </div>

        <div className="text-center space-y-1 cursor-pointer">
          <div
            className="relative cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span className=" flex justify-center items-center absolute -top-2 -right-3 bg-blue-600 text-xs text-white rounded-full px-1.5 py-0.5">
              {products.length}
            </span>
            <ShoppingCartOutlinedIcon />
          </div>
          <p>Cart</p>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default NavbarLast;
