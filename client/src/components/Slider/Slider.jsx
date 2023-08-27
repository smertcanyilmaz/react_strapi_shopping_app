import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1); //currentSlide - 1
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  const data = [
    "https://images.pexels.com/photos/16443474/pexels-photo-16443474/free-photo-of-arzu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    " https://images.pexels.com/photos/14705290/pexels-photo-14705290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    "https://images.pexels.com/photos/15011412/pexels-photo-15011412/free-photo-of-moda-kisi-kadin-model.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <div className="h-[92vh] relative  overflow-x-hidden">
      <div
        className=" w-[300vw] h-full flex transition-all ease duration-1000  "
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        <img src={data[0]} alt="" className="w-screen h-full object-cover" />
        <img src={data[1]} alt="" className="w-screen h-full object-cover" />
        <img src={data[2]} alt="" className="w-screen h-full object-cover" />
      </div>
      <div className="w-screen flex justify-center items-center gap-5 absolute bottom-20">
        <div
          className="w-10 h-10 flex justify-center items-center border border-black text-white cursor-pointer"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>

        <div
          className="w-10 h-10 flex justify-center items-center border border-black text-white cursor-pointer"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;
