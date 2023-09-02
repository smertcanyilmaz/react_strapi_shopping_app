import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

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
    <>
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
    </>
  );
};

export default Payment;
