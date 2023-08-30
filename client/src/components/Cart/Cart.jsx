import React from "react";
import { makeRequest } from "../../makeRequest";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const url = process.env.REACT_APP_UPLOAD_URL;

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      item.sale
        ? (total += item.quantity * item.price * 0.8)
        : (total += item.quantity * item.price);
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51Nj8vADRdzzh1Z4QYGEKVxQO12ZZFgATugRlwwZdyXIRiG2UpFsLIm09WcaDIWxmhYBZeYhkJLTrV0OT4yCd0EzN00BD6JwrFk"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart absolute top-20 right-5 z-50 bg-white p-5 shadow-lg">
      <h1 className="mb-7 text-gray-500 font-normal text-2xl">
        Product in your cart
      </h1>
      {products?.map((item) => (
        <div className="item flex items-center gap-5 mb-7" key={item.id}>
          <div className="w-full flex items-center gap-5 ">
            <img
              src={url + item.img}
              alt=""
              className="w-20 h-24 object-cover"
            />
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
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total flex justify-between font-medium text-lg mb-5">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button
        className="w-44 py-3 bg-blue-500 text-white  flex justify-center items-center gap-3 cursor-pointer font-medium text-xs mb-3 hover:bg-blue-600 duration-200"
        onClick={handlePayment}
      >
        PROCEED TO CHECKOUT
      </button>
      <span
        className="reset text-red-500 text-xs cursor-pointer hover:text-red-600"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
