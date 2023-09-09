import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Products.css";
import FilterSide from "../../components/ProductsParts/FilterSide";
import ItemSide from "../../components/ProductsParts/ItemSide";

const Products = ({ page }) => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minPrice, setMinPrice] = useState(0);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  return (
    <div className="flex flex-col md:flex-row mx-5  mt-8 gap-12 md:gap-32">
      <FilterSide
        data={data}
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
        setSort={setSort}
        selectedSubCats={selectedSubCats}
        setSelectedSubCats={setSelectedSubCats}
      />
      <ItemSide
        catId={catId}
        maxPrice={maxPrice}
        minPrice={minPrice}
        sort={sort}
        selectedSubCats={selectedSubCats}
        page={page}
      />
    </div>
  );
};

export default Products;
