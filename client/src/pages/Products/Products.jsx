import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Products.css";
import FilterSide from "./FilterSide";
import ItemSide from "./ItemSide";

const Products = ({ page }) => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState({ min: 0, max: 1000 });
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId} `
  );

  return (
    <div className="flex mx-5 mt-8 gap-32">
      <FilterSide
        data={data}
        catId={catId}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sort={sort}
        setSort={setSort}
        selectedSubCats={selectedSubCats}
        setSelectedSubCats={setSelectedSubCats}
      />
      <ItemSide
        catId={catId}
        maxPrice={maxPrice}
        sort={sort}
        selectedSubCats={selectedSubCats}
        page={page}
      />
    </div>
  );
};

export default Products;