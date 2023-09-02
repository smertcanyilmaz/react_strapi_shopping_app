import React from "react";
import "./Categories.css";

const Categories = () => {
  const data = [
    "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/10574817/pexels-photo-10574817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <div class="h-[60vh] flex justify-between items-center gap-3 mx-3">
      <div className=" relative">
        <img src={data[0]} alt="" />
        <button className="btn">THE FOOD</button>
      </div>
      <div className=" relative">
        <img src={data[1]} alt="" />
        <button className="btn">THE MARKET</button>
      </div>
    </div>
  );
};

export default Categories;
