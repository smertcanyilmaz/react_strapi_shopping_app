import { Link } from "react-router-dom";
import NavbarFirst from "./NavbarFirst";
import NavbarLast from "./NavbarLast";

const Navbar = () => {
  return (
    <div className="max-w-full flex justify-between items-center mx-14 py-5 text-sm">
      <NavbarFirst />
      <div className=" text-3xl">
        <Link to="/">LAMASTORE</Link>
      </div>
      <NavbarLast />
    </div>
  );
};

export default Navbar;
