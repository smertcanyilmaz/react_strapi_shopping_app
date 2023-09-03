import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const [showImg, setShowImg] = useState(false);
  const url = process.env.REACT_APP_UPLOAD_URL;
  console.log(item);
  return (
    <Link to={`/product/${item.id}`} className=" flex flex-col gap-2">
      <div
        className=" max-w-3xl flex flex-col gap-3 relative h-[20rem]"
        onMouseEnter={() => setShowImg(true)}
        onMouseLeave={() => setShowImg(false)}
      >
        {item?.attributes.isNew && (
          <div className="absolute left-1.5 top-1.5 bg-white text-xs text-teal-600 p-1 z-10">
            New Season
          </div>
        )}

        {item?.attributes.isSale && (
          <div className="absolute left-1.5 top-1.5 bg-white text-xs text-red-500 font-bold p-1 z-10">
            SALE
          </div>
        )}
        <img
          src={url + item.attributes?.img?.data?.attributes?.url}
          alt=""
          className=" h-full object-cover"
        />
        <img
          src={url + item.attributes?.img2?.data?.attributes?.url}
          alt=""
          className={` h-full object-cover absolute top-0  ${
            !showImg ? "hidden" : ""
          } `}
        />
      </div>
      <p>{item.attributes.title}</p>
      <div className="flex gap-3">
        {item?.attributes.isSale && (
          <span className="line-through text-gray-500 ">
            ${item?.attributes.isSale && item?.attributes.price}
          </span>
        )}

        {item?.attributes.isSale ? (
          <span className="text-red-500 font-semibold">
            ${item?.attributes.price - item?.attributes.price * 0.2}
          </span>
        ) : (
          `$${item?.attributes.price}`
        )}
      </div>
    </Link>
  );
};

export default Card;
