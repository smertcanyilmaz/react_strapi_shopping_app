import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { openFilter } from "../../redux/filterResponsiveReducer";

const FilterOverlay = () => {
  const isOpenFilter = useSelector((state) => state.openFilter.openFilter);
  const dispatch = useDispatch();
  const [anime, setAnime] = useState("");

  useEffect(() => {
    if (isOpenFilter === true) {
      setAnime("open");
    } else {
      setAnime("");
    }
  }, [isOpenFilter]);

  return (
    <>
      {isOpenFilter && (
        <div className="fixed z-30 h-full w-full  ">
          <div
            className={`bg-black h-[60vh] opacity-20 `}
            onClick={() => dispatch(openFilter())}
          ></div>
          <div
            className={`fixed z-50 w-full h-[40vh] bg-[#FFFFFF] p-5 duration-100 rounded-3xl ${
              anime === "open" ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="flex justify-between">
              FilterOverlay (soon)
              <div
                className="cursor-pointer z-50"
                onClick={() => dispatch(openFilter())}
              >
                <CloseIcon fontSize="large" style={{ color: "gray" }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterOverlay;
