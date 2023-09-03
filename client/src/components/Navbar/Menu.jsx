import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../redux/menuReducer";
import { closeMenu } from "../../redux/menuReducer";

const Menu = () => {
  const isMenuOpen = useSelector((state) => state.menu.open);
  const dispatch = useDispatch();

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  return (
    <div className="relative md:hidden p-5 ">
      {!isMenuOpen && (
        <div
          className="cursor-pointer absolute top-0 right-0"
          onClick={handleOpenMenu}
        >
          <MenuIcon fontSize="large" />
        </div>
      )}

      {isMenuOpen && (
        <div
          className="cursor-pointer absolute top-0 right-0 z-50"
          onClick={handleCloseMenu}
        >
          <CloseIcon fontSize="large" style={{ color: "white" }} />
        </div>
      )}
    </div>
  );
};

export default Menu;
