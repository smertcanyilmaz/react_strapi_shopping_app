import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { removeItem } from "../../redux/cartReducer";
import { removeItemFav } from "../../redux/favoritesReducer";
import { useDispatch } from "react-redux";

const CartCardMain = ({ item, showPayment }) => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_UPLOAD_URL;

  return (
    <div className="item flex items-center gap-5 mb-7" key={item.id}>
      <div className="w-full flex items-center gap-5 ">
        <img src={url + item.img} alt="" className="w-20 h-24 object-cover" />
        <div className="details">
          <h1 className=" text-lg font-medium">{item.title}</h1>
          <p className="text-gray-500 font-medium mb-2 text-sm">
            {item.desc?.substring(0, 100)}
          </p>
          <div className="price text-black">
            {item.sale ? (
              <span>
                {item.quantity} x
                <span className="line-through text-gray-500 mx-1">
                  {item.price}
                </span>
                <span className="text-red-500">${item.price * 0.8}</span>
              </span>
            ) : (
              <span>
                {item.quantity} x ${item.price}
              </span>
            )}
          </div>
        </div>
      </div>
      <DeleteOutlineIcon
        className="delete text-red-500 cursor-pointer"
        onClick={() =>
          showPayment
            ? dispatch(removeItem(item.id))
            : dispatch(removeItemFav(item.id))
        }
      />
    </div>
  );
};

export default CartCardMain;
