import { Link } from "react-router-dom";
//import uk_flag from "../../images/uk_flag.svg";

const NavbarFirst = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center gap-1">
          {/* <img src={uk_flag} alt="uk_flag" className="w-6 h-6" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex items-center gap-1">
          <p>USD</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link to="/products/1">Women</Link>
          </li>
          <li>
            <Link to="/products/2">Men</Link>
          </li>
          <li>
            <Link to="/products/3">Children</Link>
          </li>
          <li>
            <Link to="/products/4">Accessoires</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarFirst;
