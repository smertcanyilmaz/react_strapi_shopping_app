import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { open } from "../../redux/menuReducer";
import { Link } from "react-router-dom";
import NavbarLastInner from "../Navbar/NavbarLastInner";
import "./Overlay.css";
const Overlay = () => {
  const isMenuOpen = useSelector((state) => state.menu.open);
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute h-[60vh] w-[75vw] bg-black z-30 px-5 py-6 duration-500 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } glass`}
    >
      <div className=" text-white w-full h-full flex flex-col justify-between">
        <div className=" space-y-20">
          <div className="flex justify-between items-center text-3xl">
            <Link to="/">THE STORE</Link>{" "}
            <div
              className="cursor-pointer z-50 "
              onClick={() => dispatch(open())}
            >
              <CloseIcon fontSize="large" className="close-icon" />
            </div>
          </div>
          <ul className="flex flex-col gap-10 text-xl ">
            <li>
              <Link to="/products/women/1">Women</Link>
            </li>
            <li>
              <Link to="/products/men/2">Men</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-start text-xl border-t border-[#CCCCCC] pt-4">
          <NavbarLastInner type="inner" />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
