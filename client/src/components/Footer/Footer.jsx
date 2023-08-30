import { Link } from "react-router-dom";
import payment_logo from "../../images/payment_logo.png";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <div className="mt-20 px-40 py-10 space-y-10 bg-slate-100">
      <div>
        <div className="flex justify-between gap-52 ">
          <div className="first flex justify-between flex-1">
            <div className="cat">
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
            <div className="links">
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
          <div className="second w-1/2 flex gap-14">
            <Contact />
          </div>
        </div>
      </div>
      <div className="box2 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h1 className=" text-2xl font-bold text-blue-500">Lamastore</h1>
          <p className="text-[10px] text-gray-500">
            © Copyright 2023. All rights reserved
          </p>
        </div>
        <img src={payment_logo} alt="payment_logo" className="w-52 h-full" />
      </div>
    </div>
  );
};

export default Footer;
