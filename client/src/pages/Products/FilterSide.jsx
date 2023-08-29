import React, { useState } from "react";

const FilterSide = ({
  data,
  maxPrice,
  setMaxPrice,
  sort,
  setSort,
  selectedSubCats,
  setSelectedSubCats,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats);

  return (
    <div className="left h-full space-y-3 sticky top-8">
      <div className="filterItem space-y-2">
        <h2 className="text-xl">Product Categories</h2>
        {data?.map((item) => (
          <div className="inputItem" key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              value={item.id}
              onChange={handleChange}
            />
            <label htmlFor="1">{item.attributes.title}</label>
          </div>
        ))}
      </div>
      <div className="filterItem space-y-2">
        <h2 className="text-xl">Filter by price</h2>
        <div className="inputItem">
          <span>0</span>
          <input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>
      </div>
      <div className="filterItem space-y-2">
        <h2 className="text-xl">Sort by</h2>
        <div className="inputItem">
          <input
            type="radio"
            id="asc"
            value="asc"
            name="price"
            onChange={(e) => setSort("asc")}
          />
          <label htmlFor="asc">Price (Lowest first)</label>
        </div>
        <div className="inputItem">
          <input
            type="radio"
            id="desc"
            value="desc"
            name="price"
            onChange={(e) => setSort("desc")}
          />
          <label htmlFor="desc">Price (Highest first)</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
