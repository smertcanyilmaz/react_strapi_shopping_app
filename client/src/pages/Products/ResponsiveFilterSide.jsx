import React from "react";
import "./ResponsiveFilterSide.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const ResponsiveFilterSide = () => {
  return (
    <div className="flex justify-between md:hidden">
      <div className="filter">categories</div>
      <div className="filter">
        <SwapVertIcon /> suggested order
      </div>
      <div className="filter">
        <FilterListIcon /> Filters
      </div>
    </div>
  );
};

export default ResponsiveFilterSide;
