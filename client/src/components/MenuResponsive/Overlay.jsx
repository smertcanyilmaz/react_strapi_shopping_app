import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { open } from "../../redux/menuReducer";
import { Link } from "react-router-dom";

const Overlay = () => {
  const isMenuOpen = useSelector((state) => state.menu.open);
  const dispatch = useDispatch();



  return (
    <div
      className={`absolute h-full w-[60vw]  bg-black z-30 flex justify-between px-5 py-8 duration-500 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="text-2xl text-white space-y-20">
        <Link to="/">THE STORE</Link>
       
      </div>

      <div className="cursor-pointer z-50" onClick={() => dispatch(open())}>
        <CloseIcon fontSize="large" style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Overlay;
