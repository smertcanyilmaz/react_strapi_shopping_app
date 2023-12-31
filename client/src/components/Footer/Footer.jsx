import { Link } from "react-router-dom";
import payment_logo from "../../images/payment_logo.png";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <div className=" md:mt-20 md:px-40 py-10 space-y-10  bg-slate-100">
      <div>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-52 ">
          <div className="first flex justify-between flex-1">
            <div className="cat hidden md:block">
              <ul className="flex flex-col gap-4 text-xs  text-gray-500">
                <li className=" text-base text-black ">
                  <Link to="/products/6">Categories</Link>
                </li>
                <li>
                  <Link to="/products/1">Women</Link>
                </li>
                <li>
                  <Link to="/products/2">Men</Link>
                </li>
                <li>
                  <Link to="/products/3">Children</Link>
                </li>
                <li>
                  <Link to="/products/4">Accessoires</Link>
                </li>
                <li>
                  <Link to="/products/5">New Arrivals</Link>
                </li>
              </ul>
            </div>
            <div className="links hidden md:block">
              <ul className="flex flex-col gap-4 text-xs  text-gray-500">
                <li className=" text-base text-black ">
                  <Link to="/products/6">Links</Link>
                </li>
                <li>
                  <Link to="/products/1">FAQ</Link>
                </li>
                <li>
                  <Link to="/products/2">Pages</Link>
                </li>
                <li>
                  <Link to="/products/3">Stores</Link>
                </li>
                <li>
                  <Link to="/products/4">Compare</Link>
                </li>
                <li>
                  <Link to="/products/5">Cookies</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="second w-full md:w-1/2 flex md:gap-14">
            <Contact />
          </div>
        </div>
      </div>
      <div className="box2 flex justify-between items-center mx-5 md:mx-0">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <h1 className=" text-lg font-bold text-blue-400">THE STORE</h1>
          <p className="text-[10px] text-gray-500">
            © Copyright 2023. All rights reserved
          </p>
        </div>
        <img
          src={payment_logo}
          alt="payment_logo"
          className="w-36 md:w-52 h-full"
        />
      </div>
    </div>
  );
};

export default Footer;
