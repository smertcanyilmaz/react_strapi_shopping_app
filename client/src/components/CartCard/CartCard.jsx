import React, { useState } from "react";
import { useSelector } from "react-redux";
import Payment from "./Payment";
import CartCardMain from "./CartCardMain";

const CartCard = ({ showPayment, type }) => {
  const cartProducts = useSelector((state) => state.cart.products);
  const favorites = useSelector((state) => state.favorites.favorites);
  const [isEmpty, setIsEmpty] = useState(true);

  const products = type === "cart" ? cartProducts : favorites;

  //const empty = products === [] ? setIsEmpty(false) : setIsEmpty(true);

  // const empty = () => {
  //   return products === [] ? setIsEmpty(false) : setIsEmpty(true);
  // };

  // empty();

  return (
    <div className="cart absolute top-20 right-5 z-50 bg-white p-5 shadow-lg">
      <h1 className="mb-7 text-gray-500 font-normal text-2xl">
        {type === "cart" ? "Product in your cart" : "Favorites"}
      </h1>
      {products.length === 0 ? (
        <p className="text-blue-500 font-bold text-md text-center">
          {type === "cart" ? "Cart" : "Favorites"} is empty
        </p>
      ) : (
        products?.map((item) => (
          <CartCardMain item={item} key={item.id} showPayment={showPayment} />
        ))
      )}

      {products.length !== 0 ? showPayment && <Payment /> : ""}
    </div>
  );
};

export default CartCard;
