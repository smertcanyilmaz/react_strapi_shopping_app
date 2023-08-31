import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const imgUrl =
    process.env.REACT_APP_UPLOAD_URL +
    data?.attributes?.img?.data?.attributes?.url;
  const img2Url =
    process.env.REACT_APP_UPLOAD_URL +
    data?.attributes?.img2?.data?.attributes?.url;

  const [selectedImg, setSelectedImg] = useState(imgUrl);

  useEffect(() => {
    if (!loading && imgUrl) {
      setSelectedImg(imgUrl);
    }
  }, [loading, imgUrl]);

  const clickHandler = (url) => {
    setSelectedImg(url);
  };

  const addItemClickHandler = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        sale: data.attributes.isSale,
        img: data.attributes.img.data.attributes.url,
        quantity,
      })
    );
  };

  return (
    <div className="px-5 py-12 flex gap-12">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left flex flex-1 gap-5">
            <div className="images flex-1 ">
              <img
                src={imgUrl}
                alt=""
                onClick={() => clickHandler(imgUrl)}
                className="w-full h-36 object-cover cursor-pointer mb-2"
              />
              <img
                src={img2Url}
                alt=""
                onClick={() => clickHandler(img2Url)}
                className="w-full h-36 object-cover cursor-pointer mb-2"
              />
            </div>
            <div className="mainImg flex-[5]">
              <img
                src={selectedImg}
                alt=""
                className="w-full max-h-[650px] object-cover"
              />
            </div>
          </div>
          <div className="right flex-1 flex flex-col gap-7">
            <h1>{data?.attributes?.title}</h1>
            {/* <span className="text-lg text-blue-500 font-semibold">
              {data?.attributes?.price}$
            </span> */}
            <div className="flex gap-3">
              {data?.attributes?.isSale && (
                <span className="line-through text-gray-500 ">
                  ${data?.attributes?.isSale && data?.attributes?.price}
                </span>
              )}

              {data?.attributes?.isSale ? (
                <span className="text-red-500 font-semibold">
                  ${data?.attributes?.price - data?.attributes?.price * 0.2}
                </span>
              ) : (
                `$${data?.attributes?.price}`
              )}
            </div>
            <p className="  font-light text-justify">
              {data?.attributes?.desc}
            </p>
            <div className="quantity flex justify-between items-center gap-2 w-36">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
                className="w-12 h-12 flex items-center justify-center cursor-pointer border-none bg-gray-100"
              >
                -
              </button>
              <span className="mx-1">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-12 h-12 flex items-center justify-center cursor-pointer border-none bg-gray-100"
              >
                +
              </button>
            </div>
            <button
              className="add w-52 py-3 bg-blue-500 text-white flex justify-center items-center gap-3 cursor-pointer font-medium text-sm"
              onClick={addItemClickHandler}
            >
              <AddShoppingCartIcon fontSize="small" /> ADD TO CART
            </button>
            <div className="links flex gap-5">
              <button className="item flex item-center gap-2 text-blue-500 text-sm cursor-pointer">
                <FavoriteBorderIcon fontSize="small" />
                ADD TO WISH LIST
              </button>
              <div className="item flex item-center gap-2 text-blue-500 text-sm">
                <BalanceIcon fontSize="small" /> ADD TO COMPARE
              </div>
            </div>
            <div className="info flex flex-col gap-2 text-gray-500 text-xs mt-4">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr className="w-52 border border-solid border-gray-100 " />
            <div className="info flex flex-col gap-2 text-gray-500 text-xs mt-4">
              <span>DESCRIPTİON</span>
              <hr className="w-52 border border-solid border-gray-100" />
              <span>ADDITIONAL INFORMATION</span>
              <hr className="w-52 border border-solid border-gray-100" />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
