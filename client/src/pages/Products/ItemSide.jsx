import React from "react";
import List from "../../components/List/List";

const ItemSide = ({ catId, maxPrice, sort, selectedSubCats, page }) => {
  let imageUrl = "";
  if (page === "men") {
    imageUrl =
      "https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&w=600";
  } else if (page === "women") {
    imageUrl =
      "https://images.pexels.com/photos/2704496/pexels-photo-2704496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  }

  return (
    <div className="right space-y-12 flex-1">
      <div className="w-full">
        <img src={imageUrl} alt="" className="h-64 object-cover" />
      </div>
      <List
        catId={catId}
        maxPrice={maxPrice}
        sort={sort}
        subCats={selectedSubCats}
      />
    </div>
  );
};

export default ItemSide;
