import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { open } from "../../redux/menuReducer";
import CloseIcon from "@mui/icons-material/Close";

const MenuNavbar = () => {
  const dispatch = useDispatch();
  return (
    <div className=" space-y-20">
      <div className="flex justify-between items-center text-3xl">
        <Link to="/">THE STORE</Link>
        <div className="cursor-pointer z-50" onClick={() => dispatch(open())}>
          <CloseIcon fontSize="large" className="close-icon" />
        </div>
      </div>
      <ul className="flex flex-col gap-10 text-xl ">
        <li>
          <Link to="/products/women/1" onClick={() => dispatch(open())}>
            Women
          </Link>
        </li>
        <li>
          <Link to="/products/men/2" onClick={() => dispatch(open())}>
            Men
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuNavbar;
