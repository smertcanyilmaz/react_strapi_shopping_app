import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import CartResponsive from "../../pages/Responsive/CartResponsive";

const NavbarLastInner = ({ handleOpenCart, handleOpenFav, type }) => {
  const cartProducts = useSelector((state) => state.cart.products);
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div
      className={`flex gap-6 md:gap-12 items-center ${
        type === "inner" && "text-white flex-col-reverse items-start w-full"
      }`}
    >
      <div
        className={`text-center space-y-1 cursor-pointer relative  ${
          type === "inner" && "flex w-full gap-8  items-center "
        }`}
      >
        <span
          className={`absolute -top-1 -right-3 bg-indigo-700 text-white text-[12px] font-semibold px-[3px] rounded-md ${
            type === "inner" && "top-1 right-0"
          }`}
        >
          soon
        </span>
        <PersonOutlinedIcon />
        <p>Account</p>
      </div>

      <div
        className={`text-center space-y-1 cursor-pointer relative  ${
          type === "inner" && "flex w-full gap-8 items-center "
        }`}
      >
        <div className=" cursor-pointer" onClick={handleOpenFav}>
          <span
            className={`flex justify-center items-center absolute -top-1.5 -right-[-2px] bg-red-500 text-xs text-white rounded-full px-1.5 py-0.5 ${
              type === "inner" &&
              "top-1 right-0 rounded-md px-[12px] bg-transparent border-2 border-[#CCCCCC]"
            }`}
          >
            {favorites.length}
          </span>
          <FavoriteBorderOutlinedIcon />
        </div>
        <p>Favorites</p>
      </div>

      <div
        className={`text-center space-y-1 cursor-pointer relative  ${
          type === "inner" && "flex w-full gap-8 items-center "
        }`}
      >
        <div className="cursor-pointer" onClick={handleOpenCart}>
          <span
            className={`flex justify-center items-center absolute -top-2 -right-3 bg-blue-600 text-xs text-white rounded-full px-1.5 py-0.5 ${
              type === "inner" &&
              "top-1 right-0 rounded-md px-[12px] py-0.5  bg-transparent border-2 border-[#CCCCCC]"
            }`}
          >
            {cartProducts.length}
          </span>
          <ShoppingCartOutlinedIcon />
        </div>
        {type === "inner" ? <Link to="/cart">Cart</Link> : <p>Cart</p>}
      </div>
    </div>
  );
};

export default NavbarLastInner;
