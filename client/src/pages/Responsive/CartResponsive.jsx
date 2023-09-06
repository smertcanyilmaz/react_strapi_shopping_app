import React from "react";
import CartCard from "../../components/CartCard/CartCard";

const CartResponsive = () => {
  return <CartCard showPayment={true} responsive={true} type="cart" />;
};

export default CartResponsive;
