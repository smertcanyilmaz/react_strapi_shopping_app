import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../redux/menuReducer";

const Menu = () => {
  const isMenuOpen = useSelector((state) => state.menu.open);
  const dispatch = useDispatch();

  return (
    <div className="relative p-5 md:hidden ">
      {!isMenuOpen && (
        <div
          className="cursor-pointer absolute top-0 right-0"
          onClick={() => dispatch(open())}
        >
          <MenuIcon fontSize="large" />
        </div>
      )}
    </div>
  );
};

export default Menu;
