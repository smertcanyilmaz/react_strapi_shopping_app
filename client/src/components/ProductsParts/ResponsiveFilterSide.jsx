import React from "react";
import "./ResponsiveFilterSide.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useDispatch } from "react-redux";
import { openFilter } from "../../redux/filterResponsiveReducer";

const ResponsiveFilterSide = () => {
  const dispatch = useDispatch();

  const openFilterHandler = () => {
    dispatch(openFilter());
  };

  return (
    <div className="flex w-full justify-between md:hidden  sticky left-0 right-0  top-0">
      <div className="filter" onClick={openFilterHandler}>
        Categories
      </div>
      <div className="filter" onClick={openFilterHandler}>
        <SwapVertIcon /> Order
      </div>
      <div className="filter" onClick={openFilterHandler}>
        <FilterListIcon /> Filters
      </div>
    </div>
  );
};

export default ResponsiveFilterSide;
