import { Link } from "react-router-dom";

const NavbarFirst = () => {
  return (
    <div className="hidden md:flex md:justify-between md:items-center md:gap-5">
      <div>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/products/women/1">Women</Link>
          </li>
          <li>
            <Link to="/products/men/2">Men</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarFirst;
