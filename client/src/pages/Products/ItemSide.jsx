import React from "react";
import List from "../../components/List/List";
import menPage from "../../images/menPage.jpg";
import womenPage from "../../images/womenPage.jpg";

const ItemSide = ({
  catId,
  maxPrice,
  sort,
  selectedSubCats,
  page,
  minPrice,
}) => {
  let imageUrl = "";
  if (page === "men") {
    imageUrl = menPage;
  } else if (page === "women") {
    imageUrl = womenPage;
  }

  return (
    <div className="right space-y-12 flex-1 mb-16 md:mb-0">
      <div className="hidden md:block w-full">
        <img src={imageUrl} alt="" className="h-64 object-cover" />
      </div>
      <List
        catId={catId}
        maxPrice={maxPrice}
        sort={sort}
        subCats={selectedSubCats}
        minPrice={minPrice}
      />
    </div>
  );
};

export default ItemSide;
