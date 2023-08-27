import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const data = [
    "https://images.pexels.com/photos/4602025/pexels-photo-4602025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", //1
    "https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", //2
    "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", //3
    "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", //4
    "https://images.pexels.com/photos/7626672/pexels-photo-7626672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", //5
    "https://images.pexels.com/photos/1449844/pexels-photo-1449844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", //6
  ];

  return (
    <div class="h-[60vh] flex gap-3 mx-3">
      <div class="col">
        <div class="row">
          <img src={data[0]} alt="" />
          <button className="btn">
            <Link className="" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div class="row">
          <img src={data[1]} alt="" />
          <button className="btn">
            <Link className="" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <img src={data[2]} alt="" />
          <button className="btn">
            <Link className="" to="/products/1">
              new season
            </Link>
          </button>
        </div>
      </div>
      <div class="col col-l">
        <div class="row">
          <div class="col">
            <div class="row">
              <img src={data[3]} alt="" />
              <button className="btn">
                <Link className="" to="/products/1">
                  men
                </Link>
              </button>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <img src={data[4]} alt="" />
              <button className="btn">
                <Link className="" to="/products/1">
                  accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <img src={data[5]} alt="" />
          <button className="btn">
            <Link className="" to="/products/1">
              shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
