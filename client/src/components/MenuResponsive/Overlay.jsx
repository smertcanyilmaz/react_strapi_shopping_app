import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { open } from "../../redux/menuReducer";
import { Link } from "react-router-dom";
import NavbarLastInner from "../Navbar/NavbarLastInner";
import "./Overlay.css";
import MenuNavbar from "./MenuNavbar";
const Overlay = () => {
  const isMenuOpen = useSelector((state) => state.menu.open);
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute h-full
     w-[75vw] bg-black z-30 px-5 py-6 duration-300  ${
       isMenuOpen ? "translate-x-0" : "-translate-x-full"
     } glass`}
    >
      <div className=" text-white w-full h-full flex flex-col justify-between">
        <MenuNavbar />
        <div className="flex items-start text-xl border-t border-[#CCCCCC] pt-4">
          <NavbarLastInner type="inner" />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
