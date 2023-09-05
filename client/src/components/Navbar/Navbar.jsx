import { Link } from "react-router-dom";
import NavbarFirst from "./NavbarFirst";
import NavbarLast from "./NavbarLast";
import Menu from "../MenuResponsive/Menu";

const Navbar = () => {
  return (
    <div className="max-w-full flex justify-between items-center mx-5 md:mx-14 py-5 text-sm">
      <NavbarFirst />
      <div className="text-3xl">
        <Link to="/">THE STORE</Link>
      </div>
      <NavbarLast />
      <Menu />
    </div>
  );
};

export default Navbar;
