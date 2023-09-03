import { Link } from "react-router-dom";
import NavbarFirst from "./NavbarFirst";
import NavbarLast from "./NavbarLast";
import Menu from "./Menu";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
